import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-activity-common-form',
  templateUrl: './activity-common-form.component.html',
  styleUrls: ['./activity-common-form.component.scss']
})
export class ActivityCommonFormComponent implements OnInit {

  @Input() activityCommonFormGroup: FormGroup;


  constructor() { }

  ngOnInit(): void {
  }

}
