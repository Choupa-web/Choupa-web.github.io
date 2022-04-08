import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AngularFirestore, DocumentReference} from '@angular/fire/compat/firestore';
import {ActivitiesType, FirebaseCollections} from '../enums/activity.enum';
import {Activity} from '../models/activities.model';
import {Moment} from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private http: HttpClient, private store: AngularFirestore) {
  }

  getAllActivities(): Observable<any> {
    return this.store.collection(FirebaseCollections.ACTIVITY).snapshotChanges();
  }

  getActivity(idActivity: string): Observable<any> {
   // return this.store.collection(FirebaseCollections.ACTIVITY, ref => ref.where('id', '==', idActivity)).snapshotChanges();
    return this.store.collection(FirebaseCollections.ACTIVITY).doc(idActivity).get({ source: 'server'});
  }

  addActivity(activity: Activity): Promise<DocumentReference<unknown>> {
    return this.store.collection(FirebaseCollections.ACTIVITY).add(activity);
  }

  deleteActivity(id: string): Promise<void> {
    return this.store.collection(FirebaseCollections.ACTIVITY).doc(id).delete();
  }

  updateActivity(id: string, updatedActivity: Activity): Promise<void> {
    return this.store.collection(FirebaseCollections.ACTIVITY).doc(id).set(updatedActivity);

  }

  convertFormGroupToActivity(formGroupInfo: any, email: string): Activity {
    let payload: Activity;
    const convertedActivityDate = this.convertActivityDate(formGroupInfo.activityDate);

    switch (formGroupInfo.selectedActivity) {
      case ActivitiesType.VELO_INSIDE:
        payload = {
          userEmail: email,
          activityDate: convertedActivityDate,
          activityName: formGroupInfo.selectedActivity,
          duration: formGroupInfo.duration,
          distance: Number(formGroupInfo.distance),
          maxSpeed: Number(formGroupInfo.maxSpeed),
          averageSpeed: Number(formGroupInfo.averageSpeed),
          averageFc: Number(formGroupInfo.averageFc),
          maxFc: Number(formGroupInfo.maxFc),
          aerobie: Number(formGroupInfo.aerobie),
          anaerobique: Number(formGroupInfo.anaerobique),
          exerciceLoad: Number(formGroupInfo.exerciceLoad)
          /*hometrainerData: {
            averagePower: Number(this.averagePower.value),
            maxPower: Number(this.maxPower.value),
            averageCadence: Number(this.averageCadence.value),
            maxCadence: Number(this.maxCadence.value),
            maxAveragePower: Number(this.maxAveragePower.value)
          }*/
        };
        break;
      case ActivitiesType.VTT:
        payload = {
          userEmail: email,
          activityDate: convertedActivityDate,
          activityName: formGroupInfo.selectedActivity,
          duration: formGroupInfo.duration,
          distance: Number(formGroupInfo.distance),
          maxSpeed: Number(formGroupInfo.maxSpeed),
          averageSpeed: Number(formGroupInfo.averageSpeed),
          averageFc: Number(formGroupInfo.averageFc),
          maxFc: Number(formGroupInfo.maxFc),
          aerobie: Number(formGroupInfo.aerobie),
          anaerobique: Number(formGroupInfo.anaerobique),
          exerciceLoad: Number(formGroupInfo.exerciceLoad)
        /*  vttData: {
            constance: Number(this.constance.value),
            difficulty: Number(this.difficulty.value),
          }*/
        };
        break;
      case ActivitiesType.RAMEUR:
        payload = {
          userEmail: email,
          activityDate: convertedActivityDate,
          activityName: formGroupInfo.selectedActivity,
          duration: formGroupInfo.duration,
          distance: Number(formGroupInfo.distance),
          maxSpeed: Number(formGroupInfo.maxSpeed),
          averageSpeed: Number(formGroupInfo.averageSpeed),
          averageFc: Number(formGroupInfo.averageFc),
          maxFc: Number(formGroupInfo.maxFc),
          aerobie: Number(formGroupInfo.aerobie),
          anaerobique: Number(formGroupInfo.anaerobique),
          exerciceLoad: Number(formGroupInfo.exerciceLoad)
         /* rowerData: {
            averageStrokesfrequency: Number(this.averageStrokesfrequency.value),
            maxStrokesFrequency: Number(this.maxStrokesFrequency.value),
            averagePace: Number(this.averagePace.value),
            strokes: Number(this.strokes.value)
          }*/
        };
        break;
    }
    return payload;
  }

  convertActivityDate = (dateToBeConverted: Moment): string => {
    return dateToBeConverted.format('DD/MM/YYYY');
  }
}
