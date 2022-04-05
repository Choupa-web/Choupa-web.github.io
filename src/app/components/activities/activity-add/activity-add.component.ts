import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {ActivitiesNameLabel, ActivitiesType, ActivityFormScope, ActivityUnits} from '../../../enums/activity.enum';
import {AuthService} from '@auth0/auth0-angular';
import {ActivitiesService} from '../../../services/activities.service';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import 'moment/locale/fr';
import {Activity, ActivityFormControl, MyActivity} from '../../../models/activities.model';
import {ControlType} from '../../../enums/forms.enum';
import {GeneralService} from '../../../services/general.service';
import {NotificationService} from '../../../services/notification.service';
import {Router} from '@angular/router';
import {Moment} from 'moment/moment';


/** Error when invalid control is dirty, touched, or submitted. */
/*export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}*/

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
  /*selectedActivity: FormControl;
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
  constance: FormControl;
  difficulty: FormControl;
  averageStrokesfrequency: FormControl;
  maxStrokesFrequency: FormControl;
  averagePace: FormControl;
  strokes: FormControl;*/
  controlsList: ActivityFormControl<any>[] = [
    {
      controlName: 'activityDate',
      required: true,
      label: 'Date de l\'activité',
      controlType: ControlType.TEXTBOXDATE,
      order: 1,
      scope: ActivityFormScope.COMMON,
      value: '',
      disabled: false
    },
    {
      controlName: 'duration',
      required: true,
      label: 'Durée de l\'activité',
      controlType: ControlType.TEXTBOXTIME,
      order: 2,
      scope: ActivityFormScope.COMMON,
      value: '',
      disabled: false
    },
    {
      controlName: 'averageSpeed',
      required: true,
      label: 'Vitesse moyenne',
      controlType: ControlType.TEXTBOX_DECIMAL,
      order: 4,
      scope: ActivityFormScope.COMMON,
      value: '',
      disabled: false
    },
    {
      controlName: 'maxSpeed',
      required: true,
      label: 'Vitesse maximum',
      controlType: ControlType.TEXTBOX_DECIMAL,
      order: 5,
      scope: ActivityFormScope.COMMON,
      value: '',
      disabled: false
    },
    {
      controlName: 'distance',
      required: true,
      label: 'Distance',
      controlType: ControlType.TEXTBOX_DECIMAL,
      order: 3,
      scope: ActivityFormScope.COMMON,
      value: '',
      disabled: false
    },
    {
      controlName: 'averageFc',
      required: true,
      label: 'Fréquence moyenne',
      controlType: ControlType.TEXTBOX_NODECIMAL,
      order: 6,
      scope: ActivityFormScope.COMMON,
      value: '',
      disabled: false
    },
    {
      controlName: 'exerciceLoad',
      required: true,
      label: 'Exercice load',
      controlType: ControlType.TEXTBOX_NODECIMAL,
      order: 10,
      scope: ActivityFormScope.COMMON,
      value: '',
      disabled: false
    },
    {
      controlName: 'maxFc',
      required: true,
      label: 'Fréquence maximum',
      controlType: ControlType.TEXTBOX_NODECIMAL,
      order: 7,
      scope: ActivityFormScope.COMMON,
      value: '',
      disabled: false
    },
    {
      controlName: 'aerobie',
      required: true,
      label: 'Aérobie',
      controlType: ControlType.TEXTBOX_DECIMAL,
      order: 8,
      scope: ActivityFormScope.COMMON,
      value: '',
      disabled: false
    },
    {
      controlName: 'anaerobique',
      required: true,
      label: 'Anaérobique',
      controlType: ControlType.TEXTBOX_DECIMAL,
      order: 9,
      scope: ActivityFormScope.COMMON,
      value: '',
      disabled: false
    },
    {
      controlName: 'activityName',
      required: true,
      label: 'Activité',
      controlType: ControlType.GRAPHICAL,
      order: 0,
      scope: ActivityFormScope.COMMON,
      value: ActivitiesNameLabel.VTT,
      disabled: true
    },
    {
      controlName: 'constance',
      required: true,
      label: 'Constance',
      controlType: ControlType.TEXTBOX_NODECIMAL,
      order: 11,
      scope: ActivityFormScope.SPECIFIC,
      value: '',
      disabled: false
    },
    {
      controlName: 'difficulty',
      required: true,
      label: 'Difficulté',
      controlType: ControlType.TEXTBOX_NODECIMAL,
      order: 12,
      scope: ActivityFormScope.SPECIFIC,
      value: '',
      disabled: false
    },
  ];

  // matcher: MyErrorStateMatcher = new MyErrorStateMatcher();
  /*addActivityFormGroup: FormGroup;
  hometrainerFormGroup: FormGroup;
  vttActivityFormGroup: FormGroup;
  rowerActivityFormGroup: FormGroup;*/
  activitiesList: MyActivity[] = [
    { key: ActivitiesType.VTT, name: ActivitiesNameLabel.VTT },
    { key: ActivitiesType.VELO_INSIDE, name: ActivitiesNameLabel.VELO_INSIDE },
    { key: ActivitiesType.RAMEUR, name: ActivitiesNameLabel.RAMEUR }
  ];

  // HOME_TRAINER: string = ActivitiesType.VELO_INSIDE;
  VTT: string = ActivitiesType.VTT;
  ROWER: string = ActivitiesType.RAMEUR;
  DISTANCE: string = ActivityUnits.DISTANCE;
  SPEED: string = ActivityUnits.SPEED;
  FC: string = ActivityUnits.FC;

  userEmail: string;

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private activityService: ActivitiesService,
    private adapter: DateAdapter<any>,
    private generalService: GeneralService,
    private notificationService: NotificationService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.adapter.setLocale('fr');
    this.auth.user$.subscribe((userInfo) => {
      if (userInfo) {
        this.userEmail = userInfo.email;
      }
    });
    this.controlsList.sort((a, b) => a.order < b.order ? -1 : a.order > b.order ? 1 : 0);
    // this.initFormGroup();
  }

  /**
   * Save new activity
   * @param $event - activity formgroup
   */
  saveActivity = ($event): void => {
    const activityDate = $event.get('activityDate').value;
    const payload: Activity = $event.getRawValue();
    payload.activityDate = activityDate.format('DD/MM/YYYY');
    this.generalService.sendLoadingActivityChangeInformation(true);
    this.activityService.addActivity(payload).then(
      (newActivity) => {
        if (newActivity.id) {
          this.generalService.sendLoadingActivityChangeInformation(false);
          this.notificationService.success('Nouvelle activité ajoutée');
          this.route.navigateByUrl('/activities');
        }
      }
    ).catch((err) => {
      this.notificationService.failure(err);
      this.generalService.sendLoadingActivityChangeInformation(false);
    });
  }

  convertActivityDate = (dateToBeConverted: Moment): string => {
    return dateToBeConverted.format('DD/MM/YYYY');
  }
  /**
   * Initialize the activity form group
   */
  /*initFormGroup = (): void => {
    this.selectedActivity = new FormControl('', [
      Validators.required,
    ]);
    this.activityDate = new FormControl('', [Validators.required]);
    this.duration = new FormControl('', [
      Validators.required
    ]);
    this.distance = new FormControl('', [
      Validators.required,
      Validators.pattern(threeDecimalsRegex),
      Validators.max(ActivityFieldsMax.DISTANCE)
    ]);
    this.averageSpeed = new FormControl('', [
      Validators.required,
      Validators.pattern(twoDecimalsRegex),
      Validators.max(ActivityFieldsMax.AVERAGE_SPEED)
    ]);
    this.maxSpeed = new FormControl('', [
      Validators.required,
      Validators.pattern(twoDecimalsRegex),
      Validators.max(ActivityFieldsMax.MAX_SPEED)
    ]);
    this.averageFc = new FormControl( '', [
      Validators.required,
      Validators.pattern(numberWithNoDecimals),
      Validators.max(ActivityFieldsMax.AVERAGE_FC)
    ]);
    this.maxFc = new FormControl( '', [
      Validators.required,
      Validators.pattern(numberWithNoDecimals),
      Validators.max(ActivityFieldsMax.MAX_FC)
    ]);
    this.aerobie = new FormControl( '', [
      Validators.required,
      Validators.pattern(twoDecimalsRegex),
      Validators.max(ActivityFieldsMax.AEROBIE)
    ]);
    this.anaerobique = new FormControl('', [
      Validators.required,
      Validators.pattern(twoDecimalsRegex),
      Validators.max(ActivityFieldsMax.ANAEROBIQUE)
    ]);
    this.exerciceLoad = new FormControl( '', [
      Validators.required,
      Validators.pattern(numberWithNoDecimals),
    ]);
    this.averagePower = new FormControl( '', [
      Validators.required,
      Validators.pattern(numberWithNoDecimals),
    ]);
    this.maxPower = new FormControl( '', [
      Validators.required,
      Validators.pattern(numberWithNoDecimals),
    ]);
    this.maxAveragePower = new FormControl('', [
      Validators.required,
      Validators.pattern(numberWithNoDecimals),
    ]);
    this.averageCadence = new FormControl( '', [
      Validators.required,
      Validators.pattern(numberWithNoDecimals),
    ]);
    this.maxCadence = new FormControl( '', [
      Validators.required,
      Validators.pattern(numberWithNoDecimals),
    ]);
    this.constance = new FormControl('', [Validators.required, Validators.pattern(twoDecimalsRegex)]);
    this.difficulty = new FormControl('', [Validators.required, Validators.pattern(twoDecimalsRegex)]);
    this.averageStrokesfrequency = new FormControl('', [Validators.required, Validators.pattern(numberWithNoDecimals)]);
    this.maxStrokesFrequency = new FormControl('', [Validators.required, Validators.pattern(numberWithNoDecimals)]);
    this.averagePace = new FormControl('', [Validators.required, Validators.pattern(twoDecimalsRegex)]);
    this.strokes = new FormControl('', [Validators.required, Validators.pattern(numberWithNoDecimals)]);
    this.hometrainerFormGroup = this.fb.group({
      averagePower: this.averagePower,
      maxPower: this.maxPower,
      maxAveragePower: this.maxAveragePower,
      averageCadence: this.averageCadence,
      maxCadence: this.maxCadence
    });
    this.vttActivityFormGroup = this.fb.group({
      constance: this.constance,
      difficulty: this.difficulty
    });
    this.rowerActivityFormGroup = this.fb.group({
      averageStrokesfrequency: this.averageStrokesfrequency,
      maxStrokesFrequency: this.maxStrokesFrequency,
      averagePace: this.averagePace,
      strokes: this.strokes
    });
    this.addActivityFormGroup = this.fb.group({
      activityDate: this.activityDate,
      duration: this.duration,
      distance: this.distance,
      averageSpeed: this.averageSpeed,
      maxSpeed: this.maxSpeed,
      averageFc: this.averageFc,
      maxFc: this.maxFc,
      aerobie: this.aerobie,
      anaerobique: this.anaerobique,
      exerciceLoad: this.exerciceLoad,
      selectedActivity: this.selectedActivity,
      hometrainerForm: this.hometrainerFormGroup,
      vttForm: this.vttActivityFormGroup,
      rowerForm: this.rowerActivityFormGroup
    });

    this.selectedActivity.valueChanges.subscribe({
      next: value => {
        switch (value) {
          case ActivitiesType.RAMEUR:
            this.removeVttValidators();
            this.removeHometrainerValidators();
            break;
          case ActivitiesType.VELO_INSIDE:
            this.removeRowerValidators();
            this.removeVttValidators();
            break;
          case ActivitiesType.VTT:
            this.removeRowerValidators();
            this.removeHometrainerValidators();
            break;
          default: break;
        }
      }
    });
  }*/

  /**
   * Save new activity
   */
  /*addNewActivity = (): void => {
    let Payload: Activity;
    const isActivityValid = this.checkActivityValidity();
    const convertedActivityDate = this.convertActivityDate(this.activityDate.value);
    console.log('form activity: ', this.addActivityFormGroup.getRawValue());
    if (isActivityValid) {
      switch (this.selectedActivity.value) {
        case ActivitiesType.VELO_INSIDE:
          Payload = {
            userEmail : this.userEmail,
            activityDate : convertedActivityDate,
            activityName : this.selectedActivity.value,
            duration : this.duration.value,
            distance : Number(this.distance.value),
            maxSpeed : Number(this.maxSpeed.value),
            averageSpeed : Number(this.averageSpeed.value),
            averageFc : Number(this.averageFc.value),
            maxFc : Number(this.maxFc.value),
            aerobie : Number(this.aerobie.value),
            anaerobique : Number(this.anaerobique.value),
            exerciceLoad : Number(this.exerciceLoad.value),
            hometrainerData : {
              averagePower : Number(this.averagePower.value),
              maxPower : Number(this.maxPower.value),
              averageCadence : Number(this.averageCadence.value),
              maxCadence : Number(this.maxCadence.value),
              maxAveragePower: Number(this.maxAveragePower.value)
            }
          };
          break;
        case ActivitiesType.VTT:
          Payload = {
            userEmail : this.userEmail,
            activityDate : convertedActivityDate,
            activityName : this.selectedActivity.value,
            duration : this.duration.value,
            distance : Number(this.distance.value),
            maxSpeed : Number(this.maxSpeed.value),
            averageSpeed : Number(this.averageSpeed.value),
            averageFc : Number(this.averageFc.value),
            maxFc : Number(this.maxFc.value),
            aerobie : Number(this.aerobie.value),
            anaerobique : Number(this.anaerobique.value),
            exerciceLoad : Number(this.exerciceLoad.value),
            vttData : {
              constance : Number(this.constance.value),
              difficulty : Number(this.difficulty.value),
            }
          };
          break;
        case ActivitiesType.RAMEUR:
          Payload = {
            userEmail : this.userEmail,
            activityDate : convertedActivityDate,
            activityName : this.selectedActivity.value,
            duration : this.duration.value,
            distance : Number(this.distance.value),
            maxSpeed : Number(this.maxSpeed.value),
            averageSpeed : Number(this.averageSpeed.value),
            averageFc : Number(this.averageFc.value),
            maxFc : Number(this.maxFc.value),
            aerobie : Number(this.aerobie.value),
            anaerobique : Number(this.anaerobique.value),
            exerciceLoad : Number(this.exerciceLoad.value),
            rowerData : {
              averageStrokesfrequency: Number(this.averageStrokesfrequency.value),
              maxStrokesFrequency: Number(this.maxStrokesFrequency.value),
              averagePace: Number(this.averagePace.value),
              strokes: Number(this.strokes.value)
            }
          };
          break;
      }
      this.generalService.sendLoadingActivityChangeInformation(true);
      this.activityService.addActivity(Payload).then(
        (newActivity) => {
          if (newActivity.id) {
            this.generalService.sendLoadingActivityChangeInformation(false);
            this.notificationService.success('Nouvelle activité ajoutée');
            this.route.navigateByUrl('/activities');
          }
        }
      );
    }
    else {
      this.generalService.sendLoadingActivityChangeInformation(false);
      this.notificationService.failure('Impossible de sauvegarder');
    }
  }*/
}
