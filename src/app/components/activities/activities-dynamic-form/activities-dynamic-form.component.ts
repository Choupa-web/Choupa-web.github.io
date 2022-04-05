import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivityFormControl} from '../../../models/activities.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormsService} from '../../../services/forms.service';
import {ControlType} from '../../../enums/forms.enum';

@Component({
  selector: 'app-activities-dynamic-form',
  templateUrl: './activities-dynamic-form.component.html',
  styleUrls: ['./activities-dynamic-form.component.scss']
})
export class ActivitiesDynamicFormComponent implements OnInit {
  @Input() controlsList: ActivityFormControl<any>[];
  @Output() submitForm: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  globalForm: FormGroup;
  activityIcon: ActivityFormControl<any>;

  GRAPHICAL = ControlType.GRAPHICAL;

  constructor(private formsService: FormsService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.activityIcon = this.controlsList.filter(element => element.controlType === ControlType.GRAPHICAL)[0];
    console.log('activity graphic: ', this.activityIcon);
    this.globalForm = this.formsService.toFormGroup(this.controlsList);
  }

  saveForm = (): void => {
    this.submitForm.emit(this.globalForm);
  }
}
