import { Injectable } from '@angular/core';
import {Activity} from '../models/activities.model';
import {AverageSpeedProgress, CountByActivity} from '../models/dashboard.model';
import {formatDate} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ChartsDataComputationService {

  /**
   * Format list of all activites to be ready for pie chart
   * @param data - array of all user activities
   */
  getCountByActivity = (data: Activity[]): CountByActivity[] => {
    const distinctActivities: string[] = [...new Set(data.map(item => item.activityName))];
    const arrayResults: CountByActivity[] = [];
    distinctActivities.forEach((name) => {
      const mySum = data.reduce((acc, cur) => cur.activityName === name ? ++acc : acc, 0);
      arrayResults.push({ activityName: name, count: mySum});
    });
    return arrayResults;
  }

  /**
   * Format list of all activites to be ready for linechart
   * @param data - - array of all user activities
   */
  getAverageSpeedProgress = (data: Activity[]): AverageSpeedProgress[] => {
    const distinctActivities: string[] = [...new Set(data.map(item => item.activityName))];
    const arrayResults: AverageSpeedProgress[] = data.map(item => {
      const activityMonthName = formatDate(item.activityDate, 'MMM', 'fr');
      return {
        activityName: item.activityName,
        averageSpeed: Number(item.averageSpeed),
        monthName: activityMonthName
      };
    });
    const distinctMonths: string[] = [...new Set(arrayResults.map(item => item.monthName))];
    const averageSpeedDatas: AverageSpeedProgress[] = [];
    distinctActivities.forEach(a => {
      distinctMonths.forEach(m => {
        const filteredItems = arrayResults.filter(element => element.monthName === m && element.activityName === a);
        const filteredLength = filteredItems.length;
        const mySum = arrayResults.reduce((acc, cur) => cur.monthName === m && cur.activityName === a ? acc += cur.averageSpeed : acc, 0);
        averageSpeedDatas.push({
          activityName: a,
          averageSpeed: filteredLength > 0 ? mySum / filteredLength : 0,
          monthName: m
        });
      });
    });
    return averageSpeedDatas;
  }


}
