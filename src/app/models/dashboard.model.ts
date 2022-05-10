import {ChartConfiguration, ChartData, ChartDataset, ChartOptions, ChartType, Color} from 'chart.js';
import {ActivitiesChartType} from '../enums/charts.enums';

export class ActivitiesChart {
  activitiesChartOptions: ChartOptions;
  activitiesChartLabels: string[];
  activitiesChartDatas: ChartDataset[];

  constructor(labels: string[], datas: ChartDataset[]) {
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
  }
}

export class ActivitiesPieChart extends ActivitiesChart {
  activitiesChartType: ChartType = ActivitiesChartType.PIE;
  chartColorsOptions: ChartDataset
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
