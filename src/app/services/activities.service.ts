import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AngularFirestore, DocumentReference, QuerySnapshot} from '@angular/fire/compat/firestore';
import {FirebaseCollections} from '../enums/activity.enum';
import {getDocs, query, where} from '@angular/fire/firestore';
import {Activity, SportFieldBase, SportFieldDatePicker, SportFieldTextbox} from '../models/activities.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private http: HttpClient, private store: AngularFirestore) { }

  toFormGroup = (sportFields: SportFieldBase<string>[]): FormGroup => {
    const group: any = {};

    sportFields.forEach(sportField => {
      group[sportField.key] = sportField.required ? new FormControl(sportField.value || '', Validators.required)
        : new FormControl(sportField.value || '');
    });
    return new FormGroup(group);
  }

  getSportFields = (): SportFieldBase<any>[] => {
    const sportFields: SportFieldBase<any>[] = [
      new SportFieldTextbox(
        { key: 'duration', label: 'Durée de l\'activité', order: 2, required: true, type: 'time' }),
      new SportFieldDatePicker({ key: 'activityDate', label: 'Date de l\'activité', order: 1, required: true }),
      new SportFieldTextbox({ key: 'distance', label: 'Distance', order: 3, required: true, unity: 'km' }),
      new SportFieldTextbox({ key: 'averageSpeed', label: 'Vitesse moy', order: 4, required: true, unity: 'km/h' }),
      new SportFieldTextbox({ key: 'maxSpeed', label: 'Vitesse max', order: 5, required: true, unity: 'km/h' }),
      new SportFieldTextbox({ key: 'averageFc', label: 'FC moy', order: 6, required: true, unity: 'bpm' }),
      new SportFieldTextbox({ key: 'maxFc', label: 'FC max', order: 7, required: true, unity: 'bpm' }),
      new SportFieldTextbox({ key: 'aerobie', label: 'Aérobie', order: 8, required: true }),
      new SportFieldTextbox({ key: 'anaerobique', label: 'Anaérobique', order: 9, required: true }),
      new SportFieldTextbox({ key: 'exerciceLoad', label: 'Exercice Load', order: 10, required: true }),
    ];
    console.log('sport fields: ', sportFields);
    return sportFields.sort((a, b) => a.order - b.order);
  }

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
