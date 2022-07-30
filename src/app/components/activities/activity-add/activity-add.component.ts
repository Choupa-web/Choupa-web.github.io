import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {AuthService} from '@auth0/auth0-angular';
import {ActivitiesService} from '../../../services/activities.service';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import 'moment/locale/fr';
import {Activity, ActivityFormControl} from '../../../models/activities.model';
import {FormActions} from '../../../enums/forms.enum';
import {GeneralService} from '../../../services/general.service';
import {NotificationService} from '../../../services/notification.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsService} from '../../../services/forms.service';

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
  controlsList: ActivityFormControl<any>[];
  ADD = FormActions.ADD;
  userEmail: string;

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private activityService: ActivitiesService,
    private adapter: DateAdapter<any>,
    private generalService: GeneralService,
    private notificationService: NotificationService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private formsService: FormsService
  ) {}

  ngOnInit(): void {
    this.adapter.setLocale('fr');
    this.auth.user$.subscribe((userInfo) => {
      if (userInfo) {
        this.userEmail = userInfo.email;
      }
    });

    this.activatedRoute.params.subscribe(activity => {
      this.controlsList = this.formsService.getControlsList(activity.name);
      console.log("controlsList: ", this.controlsList);
    });

  }

  /**
   * Save new activity
   * @param $event - activity formgroup
   */
  addNewActivity = ($event): void => {
    if ($event.action !== FormActions.CANCEL) {
      const activityDate = $event.activityForm.get('activityDate').value;
      const payload: Activity = $event.activityForm.getRawValue();
      payload.activityDate = activityDate.toISOString();
      payload.userEmail = this.userEmail;
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
    else {
      this.route.navigateByUrl('activities');
    }
  }
}
