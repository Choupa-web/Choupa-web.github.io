import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher, DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { ActivitiesType, ActivitiesNameLabel} from '../../../enums/activity.enum';
import {BaseActivityDatas, HometrainerActivityDatas, MyActivity} from '../../../models/activities.model';
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
import {Moment} from 'moment';
import {NotificationService} from '../../../services/notification.service';

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
  maxAveragePower: FormControl;
  averageCadence: FormControl;
  maxCadence: FormControl;
  matcher: MyErrorStateMatcher = new MyErrorStateMatcher();
  addActivityFormGroup: FormGroup;
  activitiesList: MyActivity[] = [
    { key: ActivitiesType.VTT, name: ActivitiesNameLabel.VTT },
    { key: ActivitiesType.VELO_INSIDE, name: ActivitiesNameLabel.VELO_INSIDE },
  ];

  HOME_TRAINER: string = ActivitiesType.VELO_INSIDE;
  VTT: string = ActivitiesType.VTT;
  userEmail: string;
  hometrainerPayload: HometrainerActivityDatas;

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private activityService: ActivitiesService,
    private adapter: DateAdapter<any>,
    private generalService: GeneralService,
    private notificationService: NotificationService
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
      Validators.required,
      Validators.pattern(numberWithNoDecimals),
    ]);
    this.maxPower = new FormControl('', [
      Validators.required,
      Validators.pattern(numberWithNoDecimals),
    ]);
    this.maxAveragePower = new FormControl('', [
      Validators.required,
      Validators.pattern(numberWithNoDecimals),
    ]);
    this.averageCadence = new FormControl('', [
      Validators.required,
      Validators.pattern(numberWithNoDecimals),
    ]);
    this.maxCadence = new FormControl('', [
      Validators.required,
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
      this.maxAveragePower,
      this.averageCadence,
      this.maxCadence,
    ]);
  }

  /**
   * Save new activity
   */
  addNewActivity = (): void => {
    const isActivityValid = this.checkActivityValidity();
    const baseActivityDate = this.convertActivityDate(this.activityDate.value);
    if (isActivityValid) {
      const basePayload: BaseActivityDatas = {
        activityDate: baseActivityDate,
        activityName: this.selectedActivity.value,
        aerobie: this.aerobie.value,
        anaerobique: this.anaerobique.value,
        averageFc: this.averageFc.value,
        averageSpeed: this.averageSpeed.value,
        distance: this.distance.value,
        duration: this.duration.value,
        exerciceLoad: this.exerciceLoad.value,
        maxFc: this.maxFc.value,
        userEmail: this.userEmail
      };
      this.generalService.sendLoadingActivityChangeInformation(true);
      this.activityService.addBaseActivity(basePayload).then(
        (value) => {
          console.log('value: ', value.id);
          if (value.id) {
            switch (this.selectedActivity.value){
              case ActivitiesType.VELO_INSIDE:
                this.hometrainerPayload =  {
                  userEmail: this.userEmail,
                  averageCadence: this.averageCadence.value,
                  averagePower: this.averagePower.value,
                  maxAveragePower: this.maxAveragePower.value,
                  idActivity: value.id,
                  maxCadence: this.maxCadence.value,
                  maxPower: this.maxPower.value
                };
                this.activityService.addHomeTrainerActivity(this.hometrainerPayload).then(
                  (response) => {
                    if (response.id) {
                      this.generalService.sendLoadingActivityChangeInformation(false);
                      this.notificationService.success('Activité ajoutée avec succès');
                      this.addActivityFormGroup.reset();
                      this.addActivityFormGroup.clearValidators();
                    }
                  }
                );
                break;
              case ActivitiesType.VTT: break;
              case ActivitiesType.RAMEUR: break;
              default: break;
            }
          }
        }
      );
    }
  }

  checkActivityValidity = (): boolean => {
    const speedCheck = Number(this.averageSpeed.value) < Number(this.maxSpeed.value);
    const freqCheck = Number(this.averageFc.value) < Number(this.maxFc.value);
    const cadenceCheck = Number(this.averageCadence.value) < Number(this.maxCadence.value);
    const powerCheck = Number(this.averagePower.value) < Number(this.maxPower.value);
    return (speedCheck && freqCheck);
  }

  convertActivityDate = (dateToBeConverted: Moment): string => {
    return dateToBeConverted.format('DD/MM/YYYY');
  }
}
