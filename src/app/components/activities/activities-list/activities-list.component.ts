import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivitiesService} from '../../../services/activities.service';
import {GeneralService} from '../../../services/general.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {AuthService} from '@auth0/auth0-angular';
import {NotificationService} from '../../../services/notification.service';
import {Activity} from '../../../models/activities.model';
import {Router} from '@angular/router';
import {ActivityUnits} from '../../../enums/activity.enum';
import {DatePipe} from '@angular/common';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {ResponsiveUi} from '../../../models/responsive.model';
import {mergeMap, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {firestoreDatasTransformation} from '../../../utils/Datas.utils';


@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss'],
})
export class ActivitiesListComponent implements OnInit, OnDestroy {
  userEmail: string;
  dataSource: MatTableDataSource<Activity> = new MatTableDataSource<Activity>();
  destroyed = new Subject<void>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumnsBigScreen: string[] = [
    'action1',
    'activityName',
    'activityDate',
    'duration',
    'distance',
    'aerobie',
    'anaerobique',
    'averageFc',
    'maxFc',
    'action2',
  ];
  displayedColumnsSmallScreen: string[] = [
    'action1',
    'activityName',
    'activityDate',
    'distance',
    'aerobie',
    'averageFc',
    'action2',
  ];

  DISTANCE: string = ActivityUnits.DISTANCE;

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);
  screenIsBig: boolean;
  screenDefinition: ResponsiveUi;

  constructor(
    private activitiesService: ActivitiesService,
    private generalService: GeneralService,
    public auth: AuthService,
    private notificationService: NotificationService,
    private route: Router,
    private datePipe: DatePipe,
    private breakpointObserver: BreakpointObserver
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
        const datas = firestoreDatasTransformation(response);
        this.dataSource.data = datas.map((obj) => ({
          ...obj,
          date: new Date(obj.activityDate),
        }));
        this.dataSource.data.forEach(
          (element) =>
            (element.activityDate = this.datePipe.transform(
              element.activityDate,
              'dd-MM-yyyy'
            ))
        );
        this.dataSource.data = this.dataSource.data.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.generalService.sendLoadingActivityChangeInformation(false);
      });
    this.screenDefinition = new ResponsiveUi(this.breakpointObserver);
    this.screenDefinition.getScreensize().pipe(takeUntil(this.destroyed)).subscribe(
      result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            const currentScreenSize =
              this.displayNameMap.get(query) ?? 'Unknown';
            this.screenIsBig = this.screenDefinition.isScreenIsBig(currentScreenSize);
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
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
}
