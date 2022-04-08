import { Injectable } from '@angular/core';
import {ActivityFormControl} from '../models/activities.model';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  /**
   * Return a form group from a list of ActivityFormControl
   * @param controlsList - list of controls
   */
  toFormGroup = (controlsList: ActivityFormControl<any>[]): FormGroup => {
    const group: any = {};

    controlsList.forEach(question => {
      group[question.controlName] = question.required
        ? new FormControl(question.value || '', [Validators.required])
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
