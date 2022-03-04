import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-vtt-activity-form',
  templateUrl: './vtt-activity-form.component.html',
  styleUrls: ['./vtt-activity-form.component.scss']
})
export class VttActivityFormComponent implements OnInit {
  @Input() formGroupName: string;
  vttActivityForm: FormGroup;

  constructor(private activityForm: FormGroupDirective) { }

  ngOnInit(): void {
    this.vttActivityForm = this.activityForm.control.get(this.formGroupName) as FormGroup;
  }

}
