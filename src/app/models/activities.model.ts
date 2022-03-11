import {ActivitiesNameLabel} from '../enums/activity.enum';

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

export class SportFieldBase<T> {
  value: T | undefined;
  key: string;
  ctrlName: string;
  label: string;
  required: boolean;
  order: number;
  ctrlType: string;
  type: string;
  unity: string;
  pattern: string;
  options: {key: string, value: string}[];

  constructor(options: {
    value?: T;
    key?: string;
    ctrlName?: string;
    label?: string;
    required?: boolean;
    order?: number;
    controlType?: string;
    type?: string;
    unity?: string;
    pattern?: string;
    options?: {key: string, value: string}[];
  } = {}) {
    this.value = options.value;
    this.key = options.key;
    this.ctrlName = options.ctrlName || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.ctrlType = options.controlType || '';
    this.type = options.type || '';
    this.unity = options.unity || '';
    this.pattern = options.pattern || '';
    this.options = options.options || [];
  }
}

export class SportFieldDropdown extends SportFieldBase<string> {
  override ctrlType = 'dropdown';
}

export class SportFieldTextbox extends SportFieldBase<string> {
  override ctrlType = 'textbox';
}

export class SportFieldDatePicker extends SportFieldBase<string> {
  override ctrlType = 'datepicker';
}
