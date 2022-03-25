import {ActivitiesNameLabel} from '../enums/activity.enum';
import {ButtonAction} from '../enums/buttons.enum';

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
  hometrainerData?: {
    averagePower: number;
    maxPower: number;
    averageCadence: number;
    maxCadence: number;
    maxAveragePower: number;
  };
  vttData?: {
    constance: number;
    difficulty: number;
  };
  rowerData?: {
    averageStrokesfrequency: number;
    maxStrokesFrequency: number;
    averagePace: number;
    strokes: number;
  };
}

export class MyActivity {
  key: string;
  name: ActivitiesNameLabel;
}

export interface UnityType {
  label: string;
  unity: string;
}

export interface ModalFeedback {
  action: ButtonAction;
  data: Activity;
}
