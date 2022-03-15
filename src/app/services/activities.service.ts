import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AngularFirestore, DocumentReference} from '@angular/fire/compat/firestore';
import {ActivitiesType, FirebaseCollections} from '../enums/activity.enum';
import {Activity} from '../models/activities.model';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private http: HttpClient, private store: AngularFirestore) { }

  getAllActivities(): Observable<any> {
    return this.store.collection(FirebaseCollections.ACTIVITY).snapshotChanges();
  }

  addActivity(activity: Activity): Promise<DocumentReference<unknown>> {
    return this.store.collection(FirebaseCollections.ACTIVITY).add(activity);
  }

  deleteActivity(id: string): Promise<void> {
    return this.store.collection(FirebaseCollections.ACTIVITY).doc(id).delete();
  }

}
