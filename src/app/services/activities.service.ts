import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AngularFirestore, DocumentReference} from '@angular/fire/compat/firestore';
import {FirebaseCollections} from '../enums/activity.enum';
import {Activity} from '../models/activities.model';

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
  getAverageSpeed(activity: string): Observable<any> {
    return this.store.collection(FirebaseCollections.ACTIVITY, ref => ref.where('activityName', '==', activity)).snapshotChanges();
  }
}
