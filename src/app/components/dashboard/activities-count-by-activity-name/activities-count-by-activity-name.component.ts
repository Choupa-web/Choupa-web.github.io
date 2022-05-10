import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChartDataset} from 'chart.js';
import {ActivitiesPieChart, CountByActivity} from '../../../models/dashboard.model';


@Component({
  selector: 'app-activities-count-by-activity-name',
  templateUrl: './activities-count-by-activity-name.component.html',
  styleUrls: ['./activities-count-by-activity-name.component.scss']
})
export class ActivitiesCountByActivityNameComponent implements OnInit, OnChanges {

  @Input() activitiesData: CountByActivity[];

  chart1: ActivitiesPieChart;
  public labels: string[];
  public chartData: ChartDataset[];

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.labels = this.activitiesData?.map((item) => item.activityName);
    const dataCount = this.activitiesData?.map((item) => item.count);
    this.chartData = [{data: dataCount }];
    this.chart1 = new ActivitiesPieChart(this.labels, this.chartData);
    console.log('charts1: ', this.chart1);
  }

}
