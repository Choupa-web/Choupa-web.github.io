import {ActivitiesNameLabel, ActivityFormScope} from '../enums/activity.enum';
import {ControlType} from '../enums/forms.enum';

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

export class ActivityFormControl<T> {
  controlName: string;
  label: string;
  order: number;
  required?: boolean;
  validationPattern?: string;
  controlType: ControlType;
  value: T | undefined;
  scope: ActivityFormScope;

  constructor(options: {
    value?: T;
    controlName: string;
    order: number;
    required: boolean;
    validationPattern: string;
    controltype: ControlType;
    label: string;
    scope: ActivityFormScope;
  }) {
    this.value = options.value;
    this.controlName = options.controlName;
    this.order = options.order;
    this.required = options.required;
    this.validationPattern = options.validationPattern;
    this.controlType = options.controltype;
    this.label = options.label;
    this.scope = options.scope;
  }
}
