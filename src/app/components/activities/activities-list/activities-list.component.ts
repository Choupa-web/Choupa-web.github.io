import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivitiesService} from '../../../services/activities.service';
import {GeneralService} from '../../../services/general.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {AuthService} from '@auth0/auth0-angular';
import {NotificationService} from '../../../services/notification.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ActivityEditComponent} from '../activity-edit/activity-edit.component';
import {Activity} from '../../../models/activities.model';
import {ButtonAction} from '../../../enums/buttons.enum';
import {Router} from '@angular/router';
import {ActivityUnits} from '../../../enums/activity.enum';
import {Router} from '@angular/router';


@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss'],
})
export class ActivitiesListComponent implements OnInit {
  userEmail: string;
  dataSource: MatTableDataSource<Activity> = new MatTableDataSource<Activity>();

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

  DISTANCE: string = ActivityUnits.DISTANCE;

  constructor(
    private activitiesService: ActivitiesService,
    private generalService: GeneralService,
    public auth: AuthService,
    private notificationService: NotificationService,
    public dialog: MatDialog,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.generalService.sendLoadingActivityChangeInformation(true);
    this.auth.user$.subscribe((userInfo) => {
      if (userInfo) {
        this.userEmail = userInfo.email;
        this.activitiesService.getAllActivities().subscribe({
          next: (response) => {
            this.dataSource.data = response.map(item => Object.assign({id: item.payload.doc.id}, item.payload.doc.data()));
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            this.generalService.sendLoadingActivityChangeInformation(false);
          }
        });
      }
    });
  }


  /**
   * Suppression d'une activité
   * @param id - id de l'activité à supprimer
   */
  deleteActivity = (id: string): void => {
    this.generalService.sendLoadingActivityChangeInformation(true);
    this.activitiesService.deleteActivity(id).then(() =>
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
    const url = '/activity/edit/' + activityToEdit[0].id;
    this.route.navigateByUrl(url);
  }

  saveActivity = (activityToBeSaved: Activity): void => {

  }
}
