import {ChartConfiguration, ChartOptions, ChartType} from 'chart.js';
import {ActivitiesChartType} from '../enums/charts.enums';
import {ActivityColor} from './activities.model';
import {ActivitiesNameLabel} from '../enums/activity.enum';

export class ActivitiesChart {
  activitiesChartOptions: ChartOptions;
  activitiesChartLabels: string[];
  activitiesChartDatas: any[];
  activitiesChartDataset: ChartConfiguration['data'];
  titleChartConfig: {};
  chartColors: ActivityColor[] = [
    {
      activity: ActivitiesNameLabel.VTT,
      color: '#004c6d'
    },
    {
      activity: ActivitiesNameLabel.VELO_INSIDE,
      color: '#a8b6c3'
    },
    {
      activity: ActivitiesNameLabel.ROWER,
      color: '#fecab8'
    },
    {
      activity: ActivitiesNameLabel.EVTT,
      color: '#ffa281'
    }
  ];
}

export class ActivitiesPieChart extends ActivitiesChart {
  activitiesChartType: ChartType = ActivitiesChartType.PIE;

  constructor(labels: string[], datas: any[], title?: string) {
    super();
    this.activitiesChartLabels = labels;
    this.activitiesChartDatas = datas;
    this.titleChartConfig = {
      display: true,
      position: 'top',
      text: title ? title : '',
      color: '#004c6d'};
    this.activitiesChartOptions = {
      responsive: true,
      plugins: {
        title: this.titleChartConfig,
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

  constructor(labels: string[], datas: LineChartDataConfig[], title?: string) {
    super();
    this.activitiesChartLabels = labels;
    this.activitiesChartDatas = datas;
    this.titleChartConfig = {
      display: true,
      position: 'top',
      text: title ? title : '',
      color: '#004c6d'
  };
    this.activitiesChartOptions = {
      elements: {
        line: {
          tension: 0.5
        }
      },
      scales: {
        // We use this empty structure as a placeholder for dynamic theming.
        x: {},
        'y-axis-0':
          {
            position: 'left',
          }
      },
      responsive: true,
      plugins: {
        title: this.titleChartConfig,
        legend: {
          display: true,
          position: 'right'
        }
      }
    };
    const constructedDatasets: any[] = [];
    this.activitiesChartDatas.forEach(dataset => {
      const lineColor = this.chartColors.filter(color => color.activity === dataset.label);
      constructedDatasets.push({
        label: dataset.label,
        data: dataset.data,
        borderColor: lineColor[0].color,
        backgroundColor: lineColor[0].color
      });
    });
    this.activitiesChartDataset = {
      labels: this.activitiesChartLabels,
      datasets: constructedDatasets
    };
  }
}

export interface CountByActivity {
  activityName: string;
  count: number;
}

export interface AverageSpeedProgress {
  monthName: string;
  averageSpeed: number;
  activityName: string;
}

export interface LineChartDataConfig {
  label: string;
  data: number[];
}
