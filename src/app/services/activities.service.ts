import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AngularFirestore, DocumentReference} from '@angular/fire/compat/firestore';
import {BaseActivityDatas, HometrainerActivityDatas} from '../models/activities.model';
import {FirebaseCollections} from '../enums/activity.enum';



@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private http: HttpClient, private store: AngularFirestore) { }


 addBaseActivity(activity: BaseActivityDatas): Promise<DocumentReference<unknown>> {
    return this.store.collection(FirebaseCollections.BASE_ACTIVITY).add(activity);
  }

  addHomeTrainerActivity(activity: HometrainerActivityDatas): Promise<DocumentReference<unknown>> {
    return this.store.collection(FirebaseCollections.HOMETRAINER_ACTIVITY).add(activity);
  }
  getAllActivities(): Observable<any> {
    return this.store.collection('activities').snapshotChanges();
  }

  deleteActivity(id: number): Observable<boolean> {
    return of(true);
  }

 /* editActivity(activityToUpdate: HometrainerActivityDatas): Observable<HometrainerActivityDatas> {
    return of(
      {
        id: '5',
        averagePower: 107,
        maxPower: 210,
        ftp: 117,
        energy: 50,
        averageCadence: 80,
        maxCadence: 110
      }
    );
  }*/
}
