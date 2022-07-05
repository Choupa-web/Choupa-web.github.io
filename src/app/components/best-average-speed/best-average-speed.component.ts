import { Component, OnInit } from '@angular/core';
import {Activity, BestAverageSpeed} from '../../models/activities.model';
import { ActivityUnits } from '../../enums/activity.enum';
import { ActivitiesService } from '../../services/activities.service';
import { switchMap, tap } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { getMaximumValue } from '../../utils/Datas.utils';

@Component({
  selector: 'app-best-average-speed',
  templateUrl: './best-average-speed.component.html',
  styleUrls: ['./best-average-speed.component.scss']
})
export class BestAverageSpeedComponent implements OnInit {
  bestAverageSpeed: BestAverageSpeed[] = [];
  unit: string = ActivityUnits.SPEED;

  user: string;
  distinctActivtyName: string[];

  constructor(private activitiesService: ActivitiesService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user$
      .pipe(
        tap( userInfo => this.user = userInfo.email),
        switchMap( userInfo => this.activitiesService.getAllActivities(userInfo.email) )
    )
      .subscribe({
        next: activitiesList => {
          const extractedActivities = this.extractActivitiesDatas(activitiesList);
          this.distinctActivtyName = [...new Set(extractedActivities.map(item => item.activityName))] as string[];
          const cleanedActivitiesList = extractedActivities.map(value => {return { activityName: value.activityName, averageSpeed: Number(value.averageSpeed)} });
          this.distinctActivtyName.forEach(activity => {
            const maxAveragespeed = getMaximumValue(cleanedActivitiesList.filter(item => item.activityName === activity).map(item => item.averageSpeed));
            this.bestAverageSpeed.push({
              activityName: activity,
              averageSpeed: maxAveragespeed
            });
          }
          );
        }
    });
  }

  /**
   * Transform result of firebase query into an array of numbers
   * @param firebaseSource - result of firebase query
   */
  extractActivitiesDatas(firebaseSource: any): Activity[] {
    return firebaseSource.map(item => Object.assign({id: item.payload.doc.id}, item.payload.doc.data()));
  }

}
