import {Component, OnInit} from '@angular/core';
import {Activity, ActivityFormControl} from '../../../models/activities.model';
import {ActivitiesService} from '../../../services/activities.service';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap, take} from 'rxjs/operators';
import {NotificationService} from '../../../services/notification.service';
import {FormActions} from '../../../enums/forms.enum';
import {FormsService} from '../../../services/forms.service';
import {GeneralService} from '../../../services/general.service';

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.scss'],
})
export class ActivityEditComponent implements OnInit {
  EDIT = FormActions.EDIT;
  activityToEdit: Activity;
  controlsList: ActivityFormControl<any>[] = [];

  constructor(
    private activitiesService: ActivitiesService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private router: Router,
    private formsService: FormsService,
    private generalService: GeneralService
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
          this.controlsList = this.formsService.getControlsList(this.activityToEdit.activityName, this.activityToEdit);
        }
      });
  }

  updateActivity = ($event): void => {
    switch ($event.action) {
      case FormActions.CANCEL:
        this.router.navigateByUrl('activities');
        break;
      case FormActions.EDIT:
        const activityDate = $event.activityForm.get('activityDate').value;
        const payload: Activity = $event.activityForm.getRawValue();
        payload.activityDate = activityDate.toISOString();
        payload.userEmail = this.activityToEdit.userEmail;
        this.generalService.sendLoadingActivityChangeInformation(true);
        this.activitiesService.updateActivity(this.activityToEdit.id, payload).then(
          () => {
            this.generalService.sendLoadingActivityChangeInformation(false);
            this.notificationService.success('Activité `${this.activityToEdit.id}` mise à jour');
            this.router.navigateByUrl('/activities');
          }
        ).catch((err) => {
          this.notificationService.failure(err);
          this.generalService.sendLoadingActivityChangeInformation(false);
        });
        break;
      default:
        this.notificationService.failure('L\'action transmise n\'est pas valide');
        break;
    }
  }
}
