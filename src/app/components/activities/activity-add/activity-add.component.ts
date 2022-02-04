import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Activity} from '../../../enums/activity.enum';
import {MyActivity} from '../../../models/activities.model';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-activity-add',
  templateUrl: './activity-add.component.html',
  styleUrls: ['./activity-add.component.scss']
})
export class ActivityAddComponent implements OnInit {
  selectedActivity: FormControl = new FormControl('vtt', [Validators.required]);
  duration: FormControl = new FormControl('', [Validators.required]);
  distance: FormControl = new FormControl('', [Validators.required]);
  averageSpeed: FormControl = new FormControl('', [Validators.required]);
  maxSpeed: FormControl = new FormControl('', [Validators.required]);
  averageFc: FormControl = new FormControl('', [Validators.required]);
  maxFc: FormControl = new FormControl('', [Validators.required]);
  aerobie: FormControl = new FormControl('', [Validators.required]);
  anaerobique: FormControl = new FormControl('', [Validators.required]);
  exerciceLoad: FormControl = new FormControl('', [Validators.required]);
  averagePower: FormControl = new FormControl('', [Validators.required]);
  maxPower: FormControl = new FormControl('', [Validators.required]);
  ftp: FormControl = new FormControl('', [Validators.required]);
  energy: FormControl = new FormControl('', [Validators.required]);
  averageCadence: FormControl = new FormControl('', [Validators.required]);
  maxCadence: FormControl = new FormControl('', [Validators.required]);
  matcher: MyErrorStateMatcher = new MyErrorStateMatcher();
  addActivityFormGroup: FormGroup;
  activitiesList: MyActivity[] = [{key: 'VTT', name: Activity.VTT}, {key: 'VELO_INSIDE', name: Activity.VELO_INSIDE}];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
