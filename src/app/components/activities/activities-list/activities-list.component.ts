import { Component, OnInit, ViewChild, Inject} from '@angular/core';
import {ActivitiesService} from '../../../services/activities.service';
import {GeneralService} from '../../../services/general.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {Activity, HometrainerActivityDatas} from '../../../models/activities.model';
import {AuthService} from '@auth0/auth0-angular';
import {NotificationService} from '../../../services/notification.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ActivityEditComponent} from '../activity-edit/activity-edit.component';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss'],
})
export class ActivitiesListComponent implements OnInit {
  userEmail: string;
  dataSource: MatTableDataSource<Activity>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = [
    'actions',
    'activityName',
    'activityDate',
    'duration',
    'distance',
    'aerobie',
    'anaerobique',
  ];
  constructor(
    private activitiesService: ActivitiesService,
    private generalService: GeneralService,
    public auth: AuthService,
    private notificationService: NotificationService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.generalService.sendLoadingActivityChangeInformation(true);
    this.auth.user$.subscribe((userInfo) => {
      if (userInfo) {
        this.userEmail = userInfo.email;
        this.activitiesService.getAllActivities().subscribe({
          next: (response) => {
            this.dataSource = response.map(item => Object.assign({id: item.payload.doc.id}, item.payload.doc.data()));
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            console.log('myActivities: ', this.dataSource);
            this.generalService.sendLoadingActivityChangeInformation(false);
          }
        });
      }
    });
    this.activitiesService.getActivity('BpxQrc1wda1vVyLP561z').subscribe({
      next: (response) => {
        console.log('reponse: ', response);
      }
    })
  }


  /**
   * Suppression d'une activité
   * @param id - id de l'activité à supprimer
   */
  deleteActivity = (id: string): void => {
    this.generalService.sendLoadingActivityChangeInformation(true);
    this.activitiesService.deleteBaseActivity(id).then(() =>
      {
        this.generalService.sendLoadingActivityChangeInformation(false);
        this.notificationService.success(
          `L\'activité ${id} a été effacée avec succes !`
        );
      }).catch((err) => {
        this.generalService.sendLoadingActivityChangeInformation(false);
        this.notificationService.failure(err);
    });
  }

  /**
   * Modification d'une activité
   * @param id - id de l'activité à modifier
   */
  editActivity = (id: string): void => {
    const activityToEdit = this.dataSource.data.filter(element => element.id === id);
    this.dialog.open(ActivityEditComponent, {
      data: activityToEdit[0]
    });
  }
}
