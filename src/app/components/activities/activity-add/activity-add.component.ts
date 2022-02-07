import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Activity, VELO_INSIDE, VTT} from '../../../enums/activity.enum';
import {HometrainerActivityDatas, MyActivity} from '../../../models/activities.model';
import {AuthService} from '@auth0/auth0-angular';
import {numberWithNoDecimals, twoDecimalsRegex} from '../../../utils/Regex.utils';
import {ActivitiesService} from '../../../services/activities.service';

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
export class ActivityAddComponent implements OnInit, AfterViewInit {
  selectedActivity: FormControl = new FormControl('VELO_INSIDE', [Validators.required]);
  activityDate: FormControl = new FormControl('', [Validators.required]);
  duration: FormControl = new FormControl('', [Validators.required, Validators.pattern(numberWithNoDecimals)]);
  distance: FormControl = new FormControl('', [Validators.required, Validators.pattern(twoDecimalsRegex)]);
  averageSpeed: FormControl = new FormControl('', [Validators.required, Validators.pattern(twoDecimalsRegex)]);
  maxSpeed: FormControl = new FormControl('', [Validators.required, Validators.pattern(twoDecimalsRegex)]);
  averageFc: FormControl = new FormControl('', [Validators.required, Validators.pattern(numberWithNoDecimals)]);
  maxFc: FormControl = new FormControl('', [Validators.required, Validators.pattern(numberWithNoDecimals)]);
  aerobie: FormControl = new FormControl('', [Validators.required, Validators.pattern(twoDecimalsRegex)]);
  anaerobique: FormControl = new FormControl('', [Validators.required, Validators.pattern(twoDecimalsRegex)]);
  exerciceLoad: FormControl = new FormControl('', [Validators.required, Validators.pattern(numberWithNoDecimals)]);
  averagePower: FormControl = new FormControl('', [Validators.pattern(numberWithNoDecimals)] );
  maxPower: FormControl = new FormControl('', [Validators.pattern(numberWithNoDecimals)]);
  ftp: FormControl = new FormControl('', [Validators.pattern(numberWithNoDecimals)]);
  energy: FormControl = new FormControl('', [Validators.pattern(numberWithNoDecimals)]);
  averageCadence: FormControl = new FormControl('', [Validators.pattern(numberWithNoDecimals)]);
  maxCadence: FormControl = new FormControl('', [Validators.pattern(numberWithNoDecimals)]);
  matcher: MyErrorStateMatcher = new MyErrorStateMatcher();
  addActivityFormGroup: FormGroup;
  activitiesList: MyActivity[] = [{key: 'VTT', name: Activity.VTT}, {key: 'VELO_INSIDE', name: Activity.VELO_INSIDE}];

  HOME_TRAINER: string = VELO_INSIDE;
  VTT_ACT: string = VTT;
  userEmail: string;

  constructor(private fb: FormBuilder, public auth: AuthService, private as: ActivitiesService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe( (userInfo) => {
      if (userInfo) {
        this.userEmail = userInfo.email;
      }
    });
    this.addActivityFormGroup = this.fb.group([
      this.activityDate,
      this.duration,
      this.distance,
      this.averageSpeed,
      this.maxSpeed,
      this.averageFc,
      this.maxFc,
      this.aerobie,
      this.anaerobique,
      this.exerciceLoad,
      this.selectedActivity,
      this.averagePower,
      this.maxPower,
      this.ftp,
      this.energy,
      this.averageCadence,
      this.maxCadence
    ]);
  }

  ngAfterViewInit(): void {
    this.selectedActivity.valueChanges.subscribe({
      next: (value) => {
        console.log('selectedActivity: ', value);
      }
    });
  }

  /**
   * Save new activity
   */
  addNewActivity = (activityName: string): void => {
    // todo: construire la variable qui va contenir les infos a enregistrer
    let payload: HometrainerActivityDatas;
    if (activityName === this.HOME_TRAINER) {
      payload = {
        activityDate: this.activityDate.value,
        aerobie: this.aerobie.value,
        anaerobique: this.anaerobique.value,
        averageCadence: this.averageCadence.value,
        averageFc: this.averageFc.value,
        averagePower: this.averagePower.value,
        averageSpeed: this.averageSpeed.value,
        distance: this.distance.value,
        duration: this.duration.value,
        energy: this.energy.value,
        exerciceLoad: this.exerciceLoad.value,
        ftp: this.ftp.value,
        maxCadence: this.maxCadence.value,
        maxFc: this.maxFc.value,
        maxPower: this.maxPower.value,
        maxSpeed: this.maxSpeed.value
      };
      console.log('payload: ', payload);
    }
    this.as.addHomeTrainerActivity(payload, this.userEmail).subscribe({
      next: (newActivity) => {
        console.log('newactivity: ', newActivity);
      }
    });
  }

}
