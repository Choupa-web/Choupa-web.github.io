import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Activity, MyActivity} from '../../../models/activities.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {numberWithNoDecimals, threeDecimalsRegex, twoDecimalsRegex} from '../../../utils/Regex.utils';
import {ActivitiesNameLabel, ActivitiesType, ActivityFieldsMax, ActivityUnities} from '../../../enums/activity.enum';
import {ButtonAction} from '../../../enums/buttons.enum';
import {ActivitiesService} from '../../../services/activities.service';
import {ActivatedRoute, Router} from '@angular/router';
import {map, switchMap, take} from 'rxjs/operators';
import {NotificationService} from '../../../services/notification.service';

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.scss'],
})
export class ActivityEditComponent implements OnInit {
  editFormGroup: FormGroup;
  hometrainerFormGroup: FormGroup;
  vttActivityFormGroup: FormGroup;
  rowerActivityFormGroup: FormGroup;
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

  DISTANCE: string = ActivityUnities.DISTANCE;
  SPEED: string = ActivityUnities.SPEED;
  FC: string = ActivityUnities.FC;

  HOME_TRAINER: string = ActivitiesType.VELO_INSIDE;
  VTT: string = ActivitiesType.VTT;
  ROWER: string = ActivitiesType.RAMEUR;

  activitiesList: MyActivity[] = [
    { key: ActivitiesType.VTT, name: ActivitiesNameLabel.VTT },
    { key: ActivitiesType.VELO_INSIDE, name: ActivitiesNameLabel.VELO_INSIDE },
    { key: ActivitiesType.RAMEUR, name: ActivitiesNameLabel.RAMEUR }
  ];

  activityToEdit: Activity;

  constructor(
    private fb: FormBuilder,
    private activitiesService: ActivitiesService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        take(1),
        // retrieve the recommendation from WS if it exists, otherwise a new recommendation instance
        switchMap(params => this.activitiesService.getActivity(params.get('id')))
      )
      .subscribe({
        next: activityFromWS => {
          this.activityToEdit = Object.assign({id: activityFromWS.id}, activityFromWS.data());
          this.initFormGroup();
        }
      });
  }

  initFormGroup = (): void => {
    this.selectedActivity = new FormControl(this.activityToEdit.activityName, [
      Validators.required,
    ]);
    this.activityDate = new FormControl(this.activityToEdit.activityDate, [
      Validators.required,
    ]);
    this.duration = new FormControl(this.activityToEdit.duration, [Validators.required]);
    this.distance = new FormControl(this.activityToEdit.distance, [
      Validators.required,
      Validators.pattern(threeDecimalsRegex),
      Validators.max(ActivityFieldsMax.DISTANCE),
    ]);
    this.averageSpeed = new FormControl(this.activityToEdit.averageSpeed, [
      Validators.required,
      Validators.pattern(twoDecimalsRegex),
      Validators.max(ActivityFieldsMax.AVERAGE_SPEED),
    ]);
    this.maxSpeed = new FormControl(this.activityToEdit.maxSpeed, [
      Validators.required,
      Validators.pattern(twoDecimalsRegex),
      Validators.max(ActivityFieldsMax.MAX_SPEED),
    ]);
    this.averageFc = new FormControl(this.activityToEdit.averageFc, [
      Validators.required,
      Validators.pattern(numberWithNoDecimals),
      Validators.max(ActivityFieldsMax.AVERAGE_FC),
    ]);
    this.maxFc = new FormControl(this.activityToEdit.maxFc, [
      Validators.required,
      Validators.pattern(numberWithNoDecimals),
      Validators.max(ActivityFieldsMax.MAX_FC),
    ]);
    this.aerobie = new FormControl(this.activityToEdit.aerobie, [
      Validators.required,
      Validators.pattern(twoDecimalsRegex),
      Validators.max(ActivityFieldsMax.AEROBIE),
    ]);
    this.anaerobique = new FormControl(this.activityToEdit.anaerobique, [
      Validators.required,
      Validators.pattern(twoDecimalsRegex),
      Validators.max(ActivityFieldsMax.ANAEROBIQUE),
    ]);
    this.exerciceLoad = new FormControl(this.activityToEdit.exerciceLoad, [
      Validators.required,
      Validators.pattern(numberWithNoDecimals),
    ]);

    switch (this.activityToEdit.activityName) {
      case ActivitiesType.VTT:
        this.vttActivityFormGroup = this.fb.group({
          constance: new FormControl('', [Validators.required]),
          difficulty: new FormControl('', [Validators.required]),
        });
        this.vttActivityFormGroup.patchValue(this.activityToEdit.vttData);
        break;
      case ActivitiesType.RAMEUR:
        break;
      case ActivitiesType.VELO_INSIDE:
        break;
      default:
        break;
    }
    this.editFormGroup = this.fb.group({
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
    });
  }

  updateActivity(): void {
  }

  cancel(): void {
    this.router.navigateByUrl('activities');
  }
}
