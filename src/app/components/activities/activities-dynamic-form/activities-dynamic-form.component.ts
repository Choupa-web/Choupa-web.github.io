import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ActivityFormControl} from '../../../models/activities.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormsService} from '../../../services/forms.service';
import {ControlType, FormActions} from '../../../enums/forms.enum';

interface PageAction {
  action: string;
  activityForm?: FormGroup;
}
@Component({
  selector: 'app-activities-dynamic-form',
  templateUrl: './activities-dynamic-form.component.html',
  styleUrls: ['./activities-dynamic-form.component.scss']
})
export class ActivitiesDynamicFormComponent implements OnInit, OnChanges {
  @Input() controlsList: ActivityFormControl<any>[];
  @Input() formAction: FormActions;
  @Output() submitForm: EventEmitter<PageAction> = new EventEmitter<PageAction>();
  globalForm: FormGroup;
  controlWithIcon: ActivityFormControl<any>;
  title: string;

  GRAPHICAL = ControlType.GRAPHICAL;
  ADD = FormActions.ADD;
  EDIT = FormActions.EDIT;

  constructor(private formsService: FormsService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.controlWithIcon = this.controlsList.filter(element => element.controlType === ControlType.GRAPHICAL)[0];
    console.log("controlWithIcon: ", this.controlWithIcon);
    this.title = this.formAction === FormActions.ADD ? 'Entrez les informations de votre nouvelle activité' : 'Modification de l\'activité';
    this.globalForm = this.formsService.toFormGroup(this.controlsList);
  }

  ngOnChanges(_changes: SimpleChanges): void {
    this.globalForm = this.formsService.toFormGroup(this.controlsList);
    this.controlWithIcon = this.controlsList.filter(element => element.controlType === ControlType.GRAPHICAL)[0];
  }

  saveForm = (): void => {
    this.submitForm.emit( { action: FormActions.ADD, activityForm: this.globalForm});
  }

  updateForm = (): void => {
    this.submitForm.emit( { action: FormActions.EDIT, activityForm: this.globalForm});
  }

  cancelForm = (): void => {
    this.submitForm.emit({ action: FormActions.CANCEL});
  }
}
