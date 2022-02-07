import { Component, OnInit} from '@angular/core';
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
export class ActivityAddComponent implements OnInit {
  selectedActivity: FormControl;
  activityDate: FormControl;
  duration: FormControl;
  distance: FormControl;
  averageSpeed: FormControl;
  maxSpeed: FormControl ;
  averageFc: FormControl;
  maxFc: FormControl;
  aerobie: FormControl;
  anaerobique: FormControl;
  exerciceLoad: FormControl;
  averagePower: FormControl;
  maxPower: FormControl;
  ftp: FormControl;
  energy: FormControl;
  averageCadence: FormControl;
  maxCadence: FormControl;
  matcher: MyErrorStateMatcher = new MyErrorStateMatcher();
  addActivityFormGroup: FormGroup;
  activitiesList: MyActivity[] = [{key: 'VTT', name: Activity.VTT}, {key: 'VELO_INSIDE', name: Activity.VELO_INSIDE}];

  HOME_TRAINER: string = VELO_INSIDE;
  VTT_ACT: string = VTT;
  userEmail: string;

  constructor(private fb: FormBuilder, public auth: AuthService, private activityService: ActivitiesService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe( (userInfo) => {
      if (userInfo) {
        this.userEmail = userInfo.email;
      }
    });
    this.selectedActivity = new FormControl('VELO_INSIDE', [Validators.required]);
    this.activityDate = new FormControl('', [Validators.required]);
    this.duration = new FormControl('', [Validators.required, Validators.pattern(numberWithNoDecimals)]);
    this.distance = new FormControl('', [Validators.required, Validators.pattern(twoDecimalsRegex)]);
    this.averageSpeed = new FormControl('', [Validators.required, Validators.pattern(twoDecimalsRegex)]);
    this.maxSpeed = new FormControl('', [Validators.required, Validators.pattern(twoDecimalsRegex)]);
    this.averageFc = new FormControl('', [Validators.required, Validators.pattern(numberWithNoDecimals)]);
    this.maxFc = new FormControl('', [Validators.required, Validators.pattern(numberWithNoDecimals)]);
    this.aerobie = new FormControl('', [Validators.required, Validators.pattern(twoDecimalsRegex)]);
    this.anaerobique = new FormControl('', [Validators.required, Validators.pattern(twoDecimalsRegex)]);
    this.exerciceLoad = new FormControl('', [Validators.required, Validators.pattern(numberWithNoDecimals)]);
    this.averagePower = new FormControl('', [Validators.pattern(numberWithNoDecimals)] );
    this.maxPower = new FormControl('', [Validators.pattern(numberWithNoDecimals)]);
    this.ftp = new FormControl('', [Validators.pattern(numberWithNoDecimals)]);
    this.energy = new FormControl('', [Validators.pattern(numberWithNoDecimals)]);
    this.averageCadence = new FormControl('', [Validators.pattern(numberWithNoDecimals)]);
    this.maxCadence = new FormControl('', [Validators.pattern(numberWithNoDecimals)]);
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
    this.activityService.addHomeTrainerActivity(payload, this.userEmail).subscribe({
      next: (newActivity) => {
        console.log('newactivity: ', newActivity);
      }
    });
  }

}
