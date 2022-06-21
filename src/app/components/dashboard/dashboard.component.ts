import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../../services/notification.service';
import {mergeMap} from 'rxjs/operators';
import {firestoreDatasTransformation} from '../../utils/Datas.utils';
import {GeneralService} from '../../services/general.service';
import {AuthService} from '@auth0/auth0-angular';
import {ActivitiesService} from '../../services/activities.service';
import {Activity} from '../../models/activities.model';
import {ChartsDataComputationService} from '../../services/charts-data-computation.service';
import {AverageSpeedProgress, CountByActivity} from '../../models/dashboard.model';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  allActivitiesUserList: Activity[];
  allActivitiesCount: CountByActivity[];
  allActivitiesAverageSpeedProgress: AverageSpeedProgress[];
  constructor(
    private notification: NotificationService,
    private generalService: GeneralService,
    private auth: AuthService,
    private activitiesService: ActivitiesService,
    private chartComputationService: ChartsDataComputationService
  ) {}

  ngOnInit(): void {
    this.generalService.sendLoadingActivityChangeInformation(true);
    this.auth.user$
      .pipe(
        mergeMap((userInfo) => {
          return this.activitiesService.getAllActivities(userInfo.email);
        })
      )
      .subscribe((response) => {
        this.allActivitiesUserList = firestoreDatasTransformation(response);
        this.allActivitiesCount = this.chartComputationService.getCountByActivity(this.allActivitiesUserList);
        const sortedActivities = this.allActivitiesUserList.sort(
          (a, b) => Number(formatDate(a.activityDate, 'M', 'fr')) - Number(formatDate(b.activityDate, 'M', 'fr'))
        );
        this.allActivitiesAverageSpeedProgress = this.chartComputationService.getAverageSpeedProgress(sortedActivities);
        this.generalService.sendLoadingActivityChangeInformation(false);
      });
  }
}
