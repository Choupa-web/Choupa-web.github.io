import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ActivitiesPieChart, CountByActivity} from '../../../models/dashboard.model';


@Component({
  selector: 'app-activities-count-by-activity-name',
  templateUrl: './activities-count-by-activity-name.component.html',
  styleUrls: ['./activities-count-by-activity-name.component.scss']
})
export class ActivitiesCountByActivityNameComponent implements OnChanges {
  @Input() activitiesData: CountByActivity[];
  chart1: ActivitiesPieChart;
  labels: string[];

  ngOnChanges(_CHANGES: SimpleChanges): void {
    this.labels = this.activitiesData?.map((item) => item.activityName);
    const chartData = this.activitiesData?.map((item) => item.count);
    this.chart1 = new ActivitiesPieChart(this.labels, chartData);
  }

}
