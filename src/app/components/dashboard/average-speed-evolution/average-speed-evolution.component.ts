import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ActivitiesLineChart, AverageSpeedProgress, LineChartDataConfig} from '../../../models/dashboard.model';
import {ActivitiesNameLabel} from '../../../enums/activity.enum';

@Component({
  selector: 'app-average-speed-evolution',
  templateUrl: './average-speed-evolution.component.html',
  styleUrls: ['./average-speed-evolution.component.scss']
})
export class AverageSpeedEvolutionComponent implements OnChanges {
  @Input() activitiesData: AverageSpeedProgress[];
  chart1: ActivitiesLineChart;
  labels: string[];
  chartDatas: LineChartDataConfig[] = [];

  ngOnChanges(_CHANGES: SimpleChanges): void {
    const distinctActivity: string[] = [...new Set(this.activitiesData?.map(item => item.activityName))];
    distinctActivity.forEach(a => {
      const averageSpeedValues = this.activitiesData.filter(d => d.activityName === a).map(item => {
        if (item.activityName === a) {
          return item.averageSpeed;
        }
      });
      this.chartDatas.push({
        label: a,
        data: averageSpeedValues
      });
    });
    this.labels = [...new Set(this.activitiesData?.map(item => item.monthName))];
    this.chart1 = new ActivitiesLineChart(this.labels, this.chartDatas, ActivitiesNameLabel.VTT);
  }


}
