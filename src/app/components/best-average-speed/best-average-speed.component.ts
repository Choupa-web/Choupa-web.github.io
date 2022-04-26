import { Component, OnInit } from '@angular/core';
import { BestAverageSpeed} from '../../models/activities.model';
import {ActivitiesNameLabel, ActivityUnits} from '../../enums/activity.enum';
import {ActivitiesService} from '../../services/activities.service';
import {combineLatest, Observable} from 'rxjs';

@Component({
  selector: 'app-best-average-speed',
  templateUrl: './best-average-speed.component.html',
  styleUrls: ['./best-average-speed.component.scss']
})
export class BestAverageSpeedComponent implements OnInit {
  bestAverageSpeed: BestAverageSpeed = { vtt: undefined, rower: undefined, ht: undefined, walk: undefined};
  unit: string = ActivityUnits.SPEED;
  allActvities: [{ activityName: string, averageSpeed: number }];
  vttAverageSpeedDatas: number[] = [];
  htAverageSpeedDatas: number[] = [];
  rowerAverageSpeedDatas: number[] = [];
  walkAverageSpeedDatas: number[] = [];

  vtt$: Observable<string[]> = this.activitiesService.getAverageSpeed(ActivitiesNameLabel.VTT);
  ht$: Observable<string[]> = this.activitiesService.getAverageSpeed(ActivitiesNameLabel.VELO_INSIDE);
  rower$: Observable<string[]> = this.activitiesService.getAverageSpeed(ActivitiesNameLabel.ROWER);
  walk$: Observable<string[]> = this.activitiesService.getAverageSpeed(ActivitiesNameLabel.WALK);

  constructor(private activitiesService: ActivitiesService) { }

  ngOnInit(): void {
   combineLatest([
     this.activitiesService.getAverageSpeed(ActivitiesNameLabel.VTT),
     this.activitiesService.getAverageSpeed(ActivitiesNameLabel.ROWER),
     this.activitiesService.getAverageSpeed(ActivitiesNameLabel.VELO_INSIDE),
     this.activitiesService.getAverageSpeed(ActivitiesNameLabel.WALK)
   ]).subscribe({
       next: ([vtt, rower, ht, walk]) => {
         this.vttAverageSpeedDatas = this.getActivityAverageSpeedTransformedDatas(vtt);
         this.rowerAverageSpeedDatas = this.getActivityAverageSpeedTransformedDatas(rower);
         this.htAverageSpeedDatas = this.getActivityAverageSpeedTransformedDatas(ht);
         this.walkAverageSpeedDatas = this.getActivityAverageSpeedTransformedDatas(walk);
         this.bestAverageSpeed.vtt =
           this.vttAverageSpeedDatas.length > 0
             ? this.getMaximumValue(this.vttAverageSpeedDatas)
             : 0;
         this.bestAverageSpeed.ht =
           this.htAverageSpeedDatas.length > 0
             ? this.getMaximumValue(this.htAverageSpeedDatas)
             : 0;
         this.bestAverageSpeed.rower =
           this.rowerAverageSpeedDatas.length > 0
             ? this.getMaximumValue(this.rowerAverageSpeedDatas)
             : 0;
         this.bestAverageSpeed.walk =
           this.walkAverageSpeedDatas.length > 0
             ? this.getMaximumValue(this.walkAverageSpeedDatas)
             : 0;
       }
     });
  }

  /**
   * Transform result of firebase query into an array of numbers
   * @param source - result of firebase query
   */
  getActivityAverageSpeedTransformedDatas(source: any): number[] {
    const transformedData = source.map(item => Object.assign({id: item.payload.doc.id}, item.payload.doc.data()));
    return transformedData.map(value => Number(value.averageSpeed));
  }

  /**
   * get maximum value of numbers array
   * @param values - array of numbers
   */
  getMaximumValue(values: number[]): number {
  return values.reduce((a, b) => (a > b ? a : b));
  }
}
