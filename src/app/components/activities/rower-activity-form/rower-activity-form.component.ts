import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-rower-activity-form',
  templateUrl: './rower-activity-form.component.html',
  styleUrls: ['./rower-activity-form.component.scss']
})
export class RowerActivityFormComponent implements OnInit {
  @Input() formGroupName: string;
  rowerActivityForm: FormGroup;

  constructor(private activityForm: FormGroupDirective) { }

  ngOnInit(): void {
    this.rowerActivityForm = this.activityForm.control.get(this.formGroupName) as FormGroup;
  }

}
