import {Activity} from '../enums/activity.enum';

export interface BaseActivityDatas {
  duration: number;
  distance: number;
  maxSpeed?: number;
  averageSpeed: number;
  averageFc: number;
  maxFc: number;
  aerobie: number;
  anaerobique: number;
  exerciceLoad: number;
}

export interface HometrainerActivityDatas extends BaseActivityDatas {
  averagePower: number;
  maxPower: number;
  ftp: number;
  energy: number;
  averageCadence: number;
  maxCadence: number;
}

export class MyActivity {
  key: string;
  name: Activity;
}
