import {ActivitiesLabel, ActivitiesType} from '../enums/activity.enum';

export class BaseActivityDatas {
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

export class HometrainerActivityDatas extends BaseActivityDatas {
  averagePower?: number;
  maxPower?: number;
  ftp?: number;
  energy?: number;
  averageCadence?: number;
  maxCadence?: number;

  constructor(datas: Activity) {
    super();
    this.averagePower = datas.averagePower;
    this.maxPower = datas.maxPower;
    this.userEmail = datas.userMail;
    this.activityName = ActivitiesType.VELO_INSIDE;
    this.activityDate = datas.activityDate;
    this.duration = datas.duration;
    this.distance = datas.distance;
    this.maxSpeed = datas.maxSpeed;
  }
}



export interface Activity {
  id?: number;
  userMail: string;
  activityName: string;
  activityDate: string;
  aerobie: number;
  anaerobique: number;
  averageCadence?: number;
  averageFc: number;
  averagePower?: number;
  averageSpeed: number;
  distance: number;
  duration: number;
  energy: number;
  exerciceLoad: number;
  ftp?: number;
  maxCadence?: number;
  maxFc: number;
  maxPower?: number;
  maxSpeed: number;
}

export class MyActivity {
  key: string;
  name: ActivitiesLabel;
}
