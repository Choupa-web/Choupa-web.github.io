import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AngularFirestore, DocumentReference, QuerySnapshot} from '@angular/fire/compat/firestore';
import {BaseActivityDatas, HometrainerActivityDatas} from '../models/activities.model';
import {FirebaseCollections} from '../enums/activity.enum';
import {getDocs, query, where} from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private http: HttpClient, private store: AngularFirestore) { }

  getAllActivities(): Observable<any> {
    return this.store.collection(FirebaseCollections.BASE_ACTIVITY).snapshotChanges();
  }

  addBaseActivity(activity: BaseActivityDatas): Promise<DocumentReference<unknown>> {
    return this.store.collection(FirebaseCollections.BASE_ACTIVITY).add(activity);
  }

  addHomeTrainerActivity(activity: HometrainerActivityDatas): Promise<DocumentReference<unknown>> {
    return this.store.collection(FirebaseCollections.HOMETRAINER_ACTIVITY).add(activity);
  }

  deleteBaseActivity(id: string): Promise<void> {
    return this.store.collection(FirebaseCollections.BASE_ACTIVITY).doc(id).delete();
  }

  deleteHometrainerActivity(id: string): Observable<boolean> {
    return of(true);
  }

  getActivity(id: string): Promise<QuerySnapshot<unknown>> {
    const homeTrainerRef = this.store.collection(FirebaseCollections.HOMETRAINER_ACTIVITY).ref;
    const q = query(homeTrainerRef, where('idActivity', '==', true));
    return getDocs(q);
  }

}
