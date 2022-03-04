import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormGroup, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-hometrainer-activity-form',
  templateUrl: './hometrainer-activity-form.component.html',
  styleUrls: ['./hometrainer-activity-form.component.scss']
})
export class HometrainerActivityFormComponent implements OnInit {
  @Input() formGroupName: string;
  hometrainerActivityForm: FormGroup;

  constructor(private activityForm: FormGroupDirective) { }

  ngOnInit(): void {
    this.hometrainerActivityForm = this.activityForm.control.get(this.formGroupName) as FormGroup;
  }

}
