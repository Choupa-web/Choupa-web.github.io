import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher, DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { ActivityList, VELO_INSIDE, VTT} from '../../../enums/activity.enum';
import { HometrainerActivityDatas, MyActivity} from '../../../models/activities.model';
import { AuthService} from '@auth0/auth0-angular';
import { numberWithNoDecimals, twoDecimalsRegex} from '../../../utils/Regex.utils';
import { ActivitiesService} from '../../../services/activities.service';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import 'moment/locale/fr';
import {GeneralService} from '../../../services/general.service';

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
  styleUrls: ['./activity-add.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class ActivityAddComponent implements OnInit {
  selectedActivity: FormControl;
  activityDate: FormControl;
  duration: FormControl;
  distance: FormControl;
  averageSpeed: FormControl;
  maxSpeed: FormControl;
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
  activitiesList: MyActivity[] = [
    { key: 'VTT', name: ActivityList.VTT },
    { key: 'VELO_INSIDE', name: ActivityList.VELO_INSIDE },
  ];

  HOME_TRAINER: string = VELO_INSIDE;
  VTT_ACT: string = VTT;
  userEmail: string;

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private activityService: ActivitiesService,
    private adapter: DateAdapter<any>,
    private generalService: GeneralService
  ) {}

  ngOnInit(): void {
    this.adapter.setLocale('fr');
    this.auth.user$.subscribe((userInfo) => {
      if (userInfo) {
        this.userEmail = userInfo.email;
      }
    });

    this.initFormGroup();

    this.selectedActivity.valueChanges.subscribe({
      next: (value) => {
        console.log('selectedActivity: ', value);
      },
    });
  }

  /**
   * Initialize the activity form group
   */
  initFormGroup = (): void => {
    this.selectedActivity = new FormControl('VELO_INSIDE', [
      Validators.required,
    ]);
    this.activityDate = new FormControl('', [Validators.required]);
    this.duration = new FormControl('', [
      Validators.required,
      Validators.pattern(numberWithNoDecimals),
      Validators.max(180)
    ]);
    this.distance = new FormControl('', [
      Validators.required,
      Validators.pattern(twoDecimalsRegex),
      Validators.max(30)
    ]);
    this.averageSpeed = new FormControl('', [
      Validators.required,
      Validators.pattern(twoDecimalsRegex),
      Validators.max(40)
    ]);
    this.maxSpeed = new FormControl('', [
      Validators.required,
      Validators.pattern(twoDecimalsRegex),
      Validators.max(50)
    ]);
    this.averageFc = new FormControl('', [
      Validators.required,
      Validators.pattern(numberWithNoDecimals),
      Validators.max(150),
      Validators.min(100)
    ]);
    this.maxFc = new FormControl('', [
      Validators.required,
      Validators.pattern(numberWithNoDecimals),
      Validators.min(130),
      Validators.max(200)
    ]);
    this.aerobie = new FormControl('', [
      Validators.required,
      Validators.pattern(twoDecimalsRegex),
      Validators.max(5)
    ]);
    this.anaerobique = new FormControl('', [
      Validators.required,
      Validators.pattern(twoDecimalsRegex),
      Validators.max(5)
    ]);
    this.exerciceLoad = new FormControl('', [
      Validators.required,
      Validators.pattern(numberWithNoDecimals),
    ]);
    this.averagePower = new FormControl('', [
      Validators.pattern(numberWithNoDecimals),
    ]);
    this.maxPower = new FormControl('', [
      Validators.pattern(numberWithNoDecimals),
    ]);
    this.ftp = new FormControl('', [Validators.pattern(numberWithNoDecimals)]);
    this.energy = new FormControl('', [
      Validators.pattern(numberWithNoDecimals),
    ]);
    this.averageCadence = new FormControl('', [
      Validators.pattern(numberWithNoDecimals),
    ]);
    this.maxCadence = new FormControl('', [
      Validators.pattern(numberWithNoDecimals),
    ]);
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
      this.maxCadence,
    ]);
  }

  /**
   * Save new activity
   * @param activityName - name of the activity
   */
  addNewActivity = (activityName: string): void => {
    const isActivityValid = this.checkActivityValidity();
    if (isActivityValid) {
      let payload: HometrainerActivityDatas;
      if (activityName === this.HOME_TRAINER) {
        payload = {
          activityDate: this.activityDate.value.format('DD/MM/yyyy'),
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
          maxSpeed: this.maxSpeed.value,
        };
        console.log('payload: ', payload);
      }
      this.generalService.sendLoadingActivityChangeInformation(true);
      this.activityService
        .addHomeTrainerActivity(payload, this.userEmail)
        .subscribe({
          next: (newActivity) => {
            console.log('newactivity: ', newActivity);
            this.generalService.sendLoadingActivityChangeInformation(false);
          },
        });
    }
  }

  checkActivityValidity = (): boolean => {
    const speedCheck = Number(this.averageSpeed.value) < Number(this.maxSpeed.value);
    const freqCheck = Number(this.averageFc.value) < Number(this.maxFc.value);
    const cadenceCheck = Number(this.averageCadence.value) < Number(this.maxCadence.value);
    const powerCheck = Number(this.averagePower.value) < Number(this.maxPower.value);
    return (speedCheck && freqCheck && cadenceCheck && powerCheck);
  }
}
