import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Activity, ActivityList} from '../../../enums/activity.enum';
import {ActivitiesService} from '../../../services/activities.service';
import {GeneralService} from '../../../services/general.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss'],
})
export class ActivitiesListComponent implements OnInit, AfterViewInit {
  myActivities: Activity[] = [
    {
      activityName: ActivityList.VELO_INSIDE,
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
      activityName: ActivityList.VTT,
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
      maxSpeed: 20
    },
    {
      activityName: ActivityList.VELO_INSIDE,
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
      activityName: ActivityList.VTT,
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
      maxSpeed: 20
    },
    {
      activityName: ActivityList.VELO_INSIDE,
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
      activityName: ActivityList.VTT,
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
      maxSpeed: 20
    },
    {
      activityName: ActivityList.VELO_INSIDE,
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
      activityName: ActivityList.VTT,
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
      maxSpeed: 20
    },
    {
      activityName: ActivityList.VELO_INSIDE,
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
      activityName: ActivityList.VTT,
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
      maxSpeed: 20
    }
  ];
  dataSource = new MatTableDataSource<Activity>(this.myActivities);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['activityName', 'activityDate', 'duration', 'distance', 'aerobie', 'anaerobique'];
  constructor(private activitiesService: ActivitiesService, private generalService: GeneralService) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
