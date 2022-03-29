import {Component, Input, OnInit} from '@angular/core';
import {ActivityFormControl} from '../../../models/activities.model';
import {FormArray, FormGroup} from '@angular/forms';
import {ActivityFormScope} from '../../../enums/activity.enum';
import {GeneralService} from '../../../services/general.service';

@Component({
  selector: 'app-activities-dynamic-form',
  templateUrl: './activities-dynamic-form.component.html',
  styleUrls: ['./activities-dynamic-form.component.scss']
})
export class ActivitiesDynamicFormComponent implements OnInit {
  @Input() controlsList: ActivityFormControl<any>[];
  globalForm: FormGroup;
  commonForm: FormGroup;
  specificForm: FormGroup;

  constructor(private gs: GeneralService) { }

  ngOnInit(): void {
    const commonControlsList = this.controlsList.filter(element => element.scope === ActivityFormScope.COMMON);
    const specificControlsList = this.controlsList.filter(element => element.scope === ActivityFormScope.SPECIFIC);
    this.globalForm = this.gs.toFormGroup(commonControlsList);
    this.specificForm = this.gs.toFormGroup(specificControlsList);

    this.globalForm.addControl('datas', this.specificForm);
  }

}
