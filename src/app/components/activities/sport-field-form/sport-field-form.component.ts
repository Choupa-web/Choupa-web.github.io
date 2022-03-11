import {Component, Input, OnInit} from '@angular/core';
import {SportFieldBase} from '../../../models/activities.model';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sport-field-form',
  templateUrl: './sport-field-form.component.html',
  styleUrls: ['./sport-field-form.component.scss']
})
export class SportFieldFormComponent implements OnInit{

  @Input() question: SportFieldBase<string>;
  @Input() form: FormGroup;

  ngOnInit(): void {
    console.log('question: ', this.question);
  }

  get isValid(): boolean {
    // return this.form.controls[this.question.key].valid;
    return true;
  }

}
