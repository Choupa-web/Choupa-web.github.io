import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormGroupDirective} from '@angular/forms';
import {ActivityUnits} from '../../../enums/activity.enum';

@Component({
  selector: 'app-hometrainer-activity-form',
  templateUrl: './hometrainer-activity-form.component.html',
  styleUrls: ['./hometrainer-activity-form.component.scss']
})
export class HometrainerActivityFormComponent implements OnInit {
  @Input() formGroupName: string;
  hometrainerActivityForm: FormGroup;

  CADENCE: string = ActivityUnits.CADENCE;
  POWER: string = ActivityUnits.POWER;

  constructor(private activityForm: FormGroupDirective) { }

  ngOnInit(): void {
    this.hometrainerActivityForm = this.activityForm.control.get(this.formGroupName) as FormGroup;
  }

}
