import {ActivitiesNameLabel, ActivityUnits} from '../enums/activity.enum';
import {ControlType} from '../enums/forms.enum';

export interface Activity {
  date?: string;
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
  constance?: number;
  difficulty?: number;
  averageStrokesfrequency?: number;
  maxStrokesFrequency?: number;
  averagePace?: number;
  strokes?: number;
}

export class ActivityFormControl<T> {
  controlName: string;
  label: string;
  order: number;
  required?: boolean;
  validationPattern?: RegExp;
  min?: number;
  max?: number;
  controlType: ControlType;
  activityIcon?: string;
  value: T | undefined;
  controlUnit?: ActivityUnits;
  disabled?: boolean;

  constructor(options: {
    value?: T;
    controlName: string;
    order: number;
    required?: boolean;
    validationPattern?: RegExp;
    controltype: ControlType;
    activityIcon?: string;
    label: string;
    controlUnit?: ActivityUnits;
    disabled: boolean;
  }) {
    this.value = options.value;
    this.controlName = options.controlName;
    this.order = options.order;
    this.required = options.required;
    this.validationPattern = options.validationPattern;
    this.controlType = options.controltype;
    this.activityIcon = options.activityIcon;
    this.label = options.label;
    this.controlUnit = options.controlUnit;
    this.disabled = options.disabled;
  }
}

export interface BestAverageSpeed {
  activityName: string;
  averageSpeed: number;
}

export interface ActivityColor {
  activity: ActivitiesNameLabel;
  color: string;
}
