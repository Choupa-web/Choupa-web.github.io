import {AfterViewInit, Component, OnInit, ViewChild, Inject} from '@angular/core';
import {ActivitiesLabel, ActivitiesType} from '../../../enums/activity.enum';
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
export class ActivitiesListComponent implements OnInit, AfterViewInit {
  userEmail: string;
  myActivities: Activity[] = [];
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
        this.myActivities = [
          {
            id: 1,
            userMail: this.userEmail,
            activityName: ActivitiesType.VELO_INSIDE,
            activityDate: '07/02/2022',
            aerobie: 3.4,
            anaerobique: 1.0,
            averageCadence: 60,
            averageFc: 130,
            averagePower: 100,
            averageSpeed: 15,
            distance: 5,
            duration: 30,
            energy: 50,
            exerciceLoad: 20,
            ftp: 117,
            maxCadence: 90,
            maxFc: 149,
            maxPower: 210,
            maxSpeed: 31,
          },
          {
            id: 2,
            userMail: this.userEmail,
            activityName: ActivitiesType.VTT,
            activityDate: '04/02/2022',
            aerobie: 3.4,
            anaerobique: 1.0,
            averageCadence: null,
            averageFc: 130,
            averagePower: null,
            averageSpeed: 15,
            distance: 5,
            duration: 30,
            energy: 50,
            exerciceLoad: 20,
            ftp: null,
            maxCadence: null,
            maxFc: 149,
            maxPower: null,
            maxSpeed: 20,
          },
          {
            id: 3,
            userMail: this.userEmail,
            activityName: ActivitiesType.VELO_INSIDE,
            activityDate: '07/02/2022',
            aerobie: 3.4,
            anaerobique: 1.0,
            averageCadence: 60,
            averageFc: 130,
            averagePower: 100,
            averageSpeed: 15,
            distance: 5,
            duration: 30,
            energy: 50,
            exerciceLoad: 20,
            ftp: 117,
            maxCadence: 90,
            maxFc: 149,
            maxPower: 210,
            maxSpeed: 31,
          },
          {
            id: 4,
            userMail: this.userEmail,
            activityName: ActivitiesType.VTT,
            activityDate: '04/02/2022',
            aerobie: 3.4,
            anaerobique: 1.0,
            averageCadence: null,
            averageFc: 130,
            averagePower: null,
            averageSpeed: 15,
            distance: 5,
            duration: 30,
            energy: 50,
            exerciceLoad: 20,
            ftp: null,
            maxCadence: null,
            maxFc: 149,
            maxPower: null,
            maxSpeed: 20,
          },
          {
            id: 5,
            userMail: this.userEmail,
            activityName: ActivitiesType.VELO_INSIDE,
            activityDate: '07/02/2022',
            aerobie: 3.4,
            anaerobique: 1.0,
            averageCadence: 60,
            averageFc: 130,
            averagePower: 100,
            averageSpeed: 15,
            distance: 5,
            duration: 30,
            energy: 50,
            exerciceLoad: 20,
            ftp: 117,
            maxCadence: 90,
            maxFc: 149,
            maxPower: 210,
            maxSpeed: 31,
          },
          {
            id: 6,
            userMail: this.userEmail,
            activityName: ActivitiesType.VTT,
            activityDate: '04/02/2022',
            aerobie: 3.4,
            anaerobique: 1.0,
            averageCadence: null,
            averageFc: 130,
            averagePower: null,
            averageSpeed: 15,
            distance: 5,
            duration: 30,
            energy: 50,
            exerciceLoad: 20,
            ftp: null,
            maxCadence: null,
            maxFc: 149,
            maxPower: null,
            maxSpeed: 20,
          },
          {
            id: 7,
            userMail: this.userEmail,
            activityName: ActivitiesType.VELO_INSIDE,
            activityDate: '07/03/2021',
            aerobie: 3.4,
            anaerobique: 1.0,
            averageCadence: 60,
            averageFc: 130,
            averagePower: 100,
            averageSpeed: 15,
            distance: 5,
            duration: 30,
            energy: 50,
            exerciceLoad: 20,
            ftp: 117,
            maxCadence: 90,
            maxFc: 149,
            maxPower: 210,
            maxSpeed: 31,
          },
          {
            id: 8,
            userMail: this.userEmail,
            activityName: ActivitiesType.VTT,
            activityDate: '09/02/2022',
            aerobie: 3.4,
            anaerobique: 1.0,
            averageCadence: null,
            averageFc: 130,
            averagePower: null,
            averageSpeed: 15,
            distance: 5,
            duration: 30,
            energy: 50,
            exerciceLoad: 20,
            ftp: null,
            maxCadence: null,
            maxFc: 149,
            maxPower: null,
            maxSpeed: 20,
          },
          {
            id: 9,
            userMail: this.userEmail,
            activityName: ActivitiesType.VELO_INSIDE,
            activityDate: '07/02/2022',
            aerobie: 3.4,
            anaerobique: 1.0,
            averageCadence: 60,
            averageFc: 130,
            averagePower: 100,
            averageSpeed: 15,
            distance: 5,
            duration: 30,
            energy: 50,
            exerciceLoad: 20,
            ftp: 117,
            maxCadence: 90,
            maxFc: 149,
            maxPower: 210,
            maxSpeed: 31,
          },
          {
            id: 10,
            userMail: this.userEmail,
            activityName: ActivitiesType.VTT,
            activityDate: '04/03/2021',
            aerobie: 3.4,
            anaerobique: 1.0,
            averageCadence: null,
            averageFc: 130,
            averagePower: null,
            averageSpeed: 15,
            distance: 5,
            duration: 30,
            energy: 50,
            exerciceLoad: 20,
            ftp: null,
            maxCadence: null,
            maxFc: 149,
            maxPower: null,
            maxSpeed: 20,
          },
        ];
        this.dataSource = new MatTableDataSource<Activity>(this.myActivities);
        this.generalService.sendLoadingActivityChangeInformation(false);
      }
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * Suppression d'une activité
   * @param id - id de l'activité à supprimer
   */
  deleteActivity = (id: number): void => {
    this.generalService.sendLoadingActivityChangeInformation(true);
    this.activitiesService.deleteActivity(id).subscribe({
      next: (result) => {
        if (result) {
          this.generalService.sendLoadingActivityChangeInformation(false);
          this.notificationService.success(
            `L\'activité ${id} a été effacée avec succes !`
          );
        }
      },
    });
  }

  /**
   * Modification d'une activité
   * @param id - id de l'activité à modifier
   */
  editActivity = (id: number): void => {
    const activityToEdit = this.dataSource.data.filter(element => element.id === id);
    this.dialog.open(ActivityEditComponent, {
      data: activityToEdit[0]
    });
  }
}
