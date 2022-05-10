import { Injectable } from '@angular/core';
import {Activity} from '../models/activities.model';
import {CountByActivity} from '../models/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class ChartsDataComputationService {

  constructor() { }

  getCountByActivity = (data: Activity[]): CountByActivity[] => {
    const distinctActivities: string[] = [...new Set(data.map(item => item.activityName))];
    const arrayResults: CountByActivity[] = [];
    distinctActivities.forEach((name) => {
      const mySum = data.reduce((acc, cur) => cur.activityName === name ? ++acc : acc, 0);
      arrayResults.push({ activityName: name, count: mySum});
    });
    return arrayResults;
  }
}
