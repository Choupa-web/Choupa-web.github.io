import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-hometrainer-activity-form',
  templateUrl: './hometrainer-activity-form.component.html',
  styleUrls: ['./hometrainer-activity-form.component.scss']
})
export class HometrainerActivityFormComponent implements OnInit {
  @Input() activityFormGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
    console.log('formgroup: ', this.activityFormGroup)
  }

}
