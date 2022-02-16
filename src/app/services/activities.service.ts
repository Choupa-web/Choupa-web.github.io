import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Activity, HometrainerActivityDatas} from '../models/activities.model';
import {HttpClient} from '@angular/common/http';
import {ActivitiesLabel} from '../enums/activity.enum';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private http: HttpClient) { }

  addHomeTrainerActivity(activity: HometrainerActivityDatas, userEmail: string): Observable<HometrainerActivityDatas> {
  return of({
    id: 9,
    userEmail,
    activityDate: '2/8/2022',
    activityName: ActivitiesLabel.VELO_INSIDE,
    duration: 120,
    distance: 5,
    maxSpeed: 22.4,
    averageSpeed: 12,
    averageFc: 130,
    maxFc: 149,
    aerobie: 3.4 ,
    anaerobique: 1,
    exerciceLoad: 50,
    averagePower: 107,
    maxPower: 210,
    ftp: 117,
    energy: 50,
    averageCadence: 80,
    maxCadence: 110
  });
  }

  deleteActivity(id: number): Observable<boolean> {
    return of(true);
  }

  editActivity(activityToUpdate: HometrainerActivityDatas): Observable<Activity> {
    return of(
      {
        id: 5,
        userMail: activityToUpdate.userEmail,
        activityDate: '2/8/2022',
        activityName: ActivitiesLabel.VELO_INSIDE,
        duration: 120,
        distance: 5,
        maxSpeed: 22.4,
        averageSpeed: 12,
        averageFc: 130,
        maxFc: 149,
        aerobie: 3.4 ,
        anaerobique: 1,
        exerciceLoad: 50,
        averagePower: 107,
        maxPower: 210,
        ftp: 117,
        energy: 50,
        averageCadence: 80,
        maxCadence: 110
      }
    );
  }
}
