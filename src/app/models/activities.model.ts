import {ActivitiesNameLabel, ActivitiesType} from '../enums/activity.enum';

export interface BaseActivityDatas {
  id?: string;
  userEmail: string;
  activityDate: string;
  activityName: string;
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

export interface HometrainerActivityDatas {
  id?: string;
  userEmail: string;
  idActivity: string;
  averagePower: number;
  maxPower: number;
  averageCadence: number;
  maxCadence: number;
  maxAveragePower: number;
}



export interface Activity {
  id?: string;
  userEmail: string;
  activityDate: string;
  activityName: string;
  duration: number;
  distance: number;
  maxSpeed?: number;
  averageSpeed: number;
  averageFc: number;
  maxFc: number;
  aerobie: number;
  anaerobique: number;
  exerciceLoad: number;
  averagePower?: number;
  maxPower?: number;
  averageCadence?: number;
  maxCadence?: number;
  maxAveragePower?: number;
}

export class MyActivity {
  key: string;
  name: ActivitiesNameLabel;
}
