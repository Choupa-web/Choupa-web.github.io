import {ChartConfiguration, ChartOptions, ChartType} from 'chart.js';
import {ActivitiesChartType} from '../enums/charts.enums';

export class ActivitiesChart {
  activitiesChartOptions: ChartOptions;
  activitiesChartLabels: string[];
  activitiesChartDatas: any[];
  activitiesChartDataset: ChartConfiguration['data'];
}

export class ActivitiesPieChart extends ActivitiesChart {
  activitiesChartType: ChartType = ActivitiesChartType.PIE;

  constructor(labels: string[], datas: any[]) {
    super();
    this.activitiesChartLabels = labels;
    this.activitiesChartDatas = datas;
    this.activitiesChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'right'
        }
      }
    };
    this.activitiesChartDataset = {
      labels: this.activitiesChartLabels,
      datasets: [ {
        data: this.activitiesChartDatas,
        backgroundColor: ['#a8b6c3', '#fecab8', '#f1f1f1'],
        hoverBackgroundColor: ['#004c6d', '#ff784c', '#607f97'],
        hoverBorderColor: ['#004c6d', '#ff784c', '#607f97']
      } ]
    };
  }
}

export class ActivitiesBarChart extends ActivitiesChart {
  activitiesChartType: ChartType = ActivitiesChartType.BAR;
}

export class ActivitiesLineChart extends ActivitiesChart {
  activitiesChartType: ChartType = ActivitiesChartType.LINE;
}

export interface CountByActivity {
  activityName: string;
  count: number;
}
