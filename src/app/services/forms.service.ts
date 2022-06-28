import { Injectable } from '@angular/core';
import {Activity, ActivityFormControl} from '../models/activities.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ControlType} from '../enums/forms.enum';
import {ActivitiesNameLabel, ActivityFieldsMax, ActivityFieldsMin, ActivityUnits} from '../enums/activity.enum';
import {numberWithNoDecimals, threeDecimalsRegex, twoDecimalsRegex} from '../utils/Regex.utils';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  controlsList: ActivityFormControl<any>[];

  /**
   * Return a form group from a list of ActivityFormControl
   * @param controlsList - list of controls
   */
  toFormGroup = (controlsList: ActivityFormControl<any>[]): FormGroup => {
    const group: any = {};

    controlsList.forEach((question) => {
      const controlValidators: any[] = [];
      if (question.validationPattern) {
        controlValidators.push(Validators.pattern(question.validationPattern));
      }
      if (question.required) {
        controlValidators.push(Validators.required);
      }
      if (question.max) {
        controlValidators.push(Validators.max(question.max));
      }
      if (question.min) {
        controlValidators.push(Validators.min(question.min));
      }
      group[question.controlName] = new FormControl(
        question.value || '',
        controlValidators
      );
    });
    return new FormGroup(group);
  }

  getControlsList = (
    activityName: string,
    activityInfo?: Activity
  ): ActivityFormControl<any>[] => {
    this.controlsList = [
      {
        controlName: 'activityDate',
        required: true,
        label: 'Date de l\'activité',
        controlType: ControlType.TEXTBOXDATE,
        order: 1,
        value: activityInfo?.activityDate
          ? new Date(activityInfo?.activityDate)
          : new Date(),
        disabled: false,
      },
      {
        controlName: 'duration',
        required: true,
        label: 'Durée de l\'activité',
        controlType: ControlType.TEXTBOXTIME,
        order: 2,
        value: activityInfo?.duration ?? '',
        disabled: false,
      },
      {
        controlName: 'averageSpeed',
        required: true,
        validationPattern: twoDecimalsRegex,
        max: ActivityFieldsMax.AVERAGE_SPEED,
        label: 'Vitesse moyenne',
        controlType: ControlType.TEXTBOX_DECIMAL,
        order: 4,
        value: activityInfo?.averageSpeed ?? '',
        disabled: false,
        controlUnit: ActivityUnits.SPEED,
      },
      {
        controlName: 'maxSpeed',
        required: true,
        validationPattern: twoDecimalsRegex,
        max: ActivityFieldsMax.MAX_SPEED,
        label: 'Vitesse maximum',
        controlType: ControlType.TEXTBOX_DECIMAL,
        order: 5,
        value: activityInfo?.maxSpeed ?? '',
        disabled: false,
        controlUnit: ActivityUnits.SPEED,
      },
      {
        controlName: 'distance',
        required: true,
        validationPattern: threeDecimalsRegex,
        max: ActivityFieldsMax.DISTANCE,
        label: 'Distance',
        controlType: ControlType.TEXTBOX_DECIMAL,
        order: 3,
        value: activityInfo?.distance ?? '',
        disabled: false,
        controlUnit: ActivityUnits.DISTANCE,
      },
      {
        controlName: 'averageFc',
        required: true,
        validationPattern: numberWithNoDecimals,
        max: ActivityFieldsMax.AVERAGE_FC,
        label: 'Fréquence moyenne',
        controlType: ControlType.TEXTBOX_NODECIMAL,
        order: 6,
        value: activityInfo?.averageFc ?? '',
        disabled: false,
        controlUnit: ActivityUnits.FC,
      },
      {
        controlName: 'exerciceLoad',
        required: true,
        validationPattern: numberWithNoDecimals,
        label: 'Exercice load',
        controlType: ControlType.TEXTBOX_NODECIMAL,
        order: 10,
        value: activityInfo?.exerciceLoad ?? '',
        disabled: false,
      },
      {
        controlName: 'maxFc',
        required: true,
        validationPattern: numberWithNoDecimals,
        max: ActivityFieldsMax.MAX_FC,
        label: 'Fréquence maximum',
        controlType: ControlType.TEXTBOX_NODECIMAL,
        order: 7,
        value: activityInfo?.maxFc ?? '',
        disabled: false,
        controlUnit: ActivityUnits.FC,
      },
      {
        controlName: 'aerobie',
        required: true,
        validationPattern: twoDecimalsRegex,
        max: ActivityFieldsMax.AEROBIE,
        min: ActivityFieldsMin.AEROBIE,
        label: 'Aérobie',
        controlType: ControlType.TEXTBOX_DECIMAL,
        order: 8,
        value: activityInfo?.aerobie ?? '',
        disabled: false,
      },
      {
        controlName: 'anaerobique',
        required: true,
        validationPattern: twoDecimalsRegex,
        max: ActivityFieldsMax.ANAEROBIQUE,
        min: ActivityFieldsMin.ANAEROBIQUE,
        label: 'Anaérobique',
        controlType: ControlType.TEXTBOX_DECIMAL,
        order: 9,
        value: activityInfo?.anaerobique ?? '',
        disabled: false,
      },
    ];
    this.addLastContolsFromActvitiyName(activityName, activityInfo);
    this.controlsList.push({
      controlName: 'activityName',
      required: true,
      label: 'Activité',
      controlType: ControlType.GRAPHICAL,
      order: 0,
      value: activityName,
      disabled: true,
    });
    this.controlsList.sort((a, b) => a.order - b.order);
    return this.controlsList;
  }

  addVttControls = (activity?: Activity): void => {
    this.controlsList.push({
      controlName: 'constance',
      validationPattern: twoDecimalsRegex,
      max: ActivityFieldsMax.CONSTANCE,
      min: ActivityFieldsMin.CONSTANCE,
      required: true,
      label: 'Constance',
      controlType: ControlType.TEXTBOX_DECIMAL,
      order: 11,
      value: activity?.constance ?? '',
      disabled: false,
    });
    this.controlsList.push({
      controlName: 'difficulty',
      required: true,
      validationPattern: twoDecimalsRegex,
      max: ActivityFieldsMax.DIFFICULTY,
      min: ActivityFieldsMin.DIFFICULTY,
      label: 'Difficulté',
      controlType: ControlType.TEXTBOX_DECIMAL,
      order: 12,
      value: activity?.difficulty ?? '',
      disabled: false,
    });
  }

  addVttaeControls = (activity?: Activity): void => {
    this.controlsList.push({
      controlName: 'constance',
      validationPattern: twoDecimalsRegex,
      max: ActivityFieldsMax.CONSTANCE,
      min: ActivityFieldsMin.CONSTANCE,
      required: true,
      label: 'Constance',
      controlType: ControlType.TEXTBOX_DECIMAL,
      order: 11,
      value: activity?.constance ?? '',
      disabled: false,
    });
    this.controlsList.push({
      controlName: 'difficulty',
      required: true,
      validationPattern: twoDecimalsRegex,
      max: ActivityFieldsMax.DIFFICULTY,
      min: ActivityFieldsMin.DIFFICULTY,
      label: 'Difficulté',
      controlType: ControlType.TEXTBOX_DECIMAL,
      order: 12,
      value: activity?.difficulty ?? '',
      disabled: false,
    });
    this.controlsList.push({
      controlName: 'averageCadence',
      required: true,
      validationPattern: numberWithNoDecimals,
      min: ActivityFieldsMin.CADENCE,
      label: 'Cadence moyenne',
      controlType: ControlType.TEXTBOX_NODECIMAL,
      order: 13,
      value: activity?.averageCadence ?? '',
      disabled: false,
      controlUnit: ActivityUnits.CADENCE,
    });
    this.controlsList.push({
      controlName: 'maxCadence',
      required: true,
      validationPattern: numberWithNoDecimals,
      min: ActivityFieldsMin.CADENCE,
      label: 'Cadence maximum',
      controlType: ControlType.TEXTBOX_NODECIMAL,
      order: 14,
      value: activity?.maxCadence ?? '',
      disabled: false,
      controlUnit: ActivityUnits.CADENCE,
    });
  }

  addHometrainercontrols = (activity?: Activity): void => {
    this.controlsList.push({
      controlName: 'averagePower',
      required: true,
      validationPattern: numberWithNoDecimals,
      min: ActivityFieldsMin.POWER,
      label: 'Puissance moyenne',
      controlType: ControlType.TEXTBOX_NODECIMAL,
      order: 11,
      value: activity?.averagePower ?? '',
      disabled: false,
      controlUnit: ActivityUnits.POWER,
    });
    this.controlsList.push({
      controlName: 'maxPower',
      required: true,
      validationPattern: numberWithNoDecimals,
      min: ActivityFieldsMin.POWER,
      label: 'Puissance maximum',
      controlType: ControlType.TEXTBOX_NODECIMAL,
      order: 12,
      value: activity?.maxPower ?? '',
      disabled: false,
      controlUnit: ActivityUnits.POWER,
    });
    this.controlsList.push({
      controlName: 'averageCadence',
      required: true,
      validationPattern: numberWithNoDecimals,
      min: ActivityFieldsMin.CADENCE,
      label: 'Cadence moyenne',
      controlType: ControlType.TEXTBOX_NODECIMAL,
      order: 13,
      value: activity?.averageCadence ?? '',
      disabled: false,
      controlUnit: ActivityUnits.CADENCE,
    });
    this.controlsList.push({
      controlName: 'maxCadence',
      required: true,
      validationPattern: numberWithNoDecimals,
      min: ActivityFieldsMin.CADENCE,
      label: 'Cadence maximum',
      controlType: ControlType.TEXTBOX_NODECIMAL,
      order: 14,
      value: activity?.maxCadence ?? '',
      disabled: false,
      controlUnit: ActivityUnits.CADENCE,
    });
    this.controlsList.push({
      controlName: 'maxAveragePower',
      required: true,
      validationPattern: numberWithNoDecimals,
      min: ActivityFieldsMin.POWER,
      label: 'Puissance moyenne maximum',
      controlType: ControlType.TEXTBOX_NODECIMAL,
      order: 15,
      value: activity?.maxAveragePower ?? '',
      disabled: false,
      controlUnit: ActivityUnits.POWER,
    });
  }

  addRameurControls = (activity?: Activity): void => {
    this.controlsList.push({
      controlName: 'averageStrokesfrequency',
      required: true,
      validationPattern: numberWithNoDecimals,
      label: 'Fréquence moyenne de coups',
      controlType: ControlType.TEXTBOX_NODECIMAL,
      order: 11,
      value: activity?.averageStrokesfrequency ?? '',
      disabled: false,
      controlUnit: ActivityUnits.FREQUENCE_COUPS,
    });
    this.controlsList.push({
      controlName: 'maxStrokesFrequency',
      required: true,
      validationPattern: numberWithNoDecimals,
      label: 'Fréquence max de coups',
      controlType: ControlType.TEXTBOX_NODECIMAL,
      order: 12,
      value: activity?.maxStrokesFrequency ?? '',
      disabled: false,
      controlUnit: ActivityUnits.FREQUENCE_COUPS,
    });
    this.controlsList.push({
      controlName: 'averagePace',
      required: true,
      validationPattern: twoDecimalsRegex,
      label: 'Allure moyenne',
      controlType: ControlType.TEXTBOX_DECIMAL,
      order: 13,
      value: activity?.averagePace ?? '',
      disabled: false,
      controlUnit: ActivityUnits.ALLURE,
    });
    this.controlsList.push({
      controlName: 'strokes',
      required: true,
      validationPattern: numberWithNoDecimals,
      label: 'Nombre de coups ',
      controlType: ControlType.TEXTBOX_NODECIMAL,
      order: 14,
      value: activity?.strokes ?? '',
      disabled: false,
      controlUnit: ActivityUnits.STROKES,
    });
  }

  addLastContolsFromActvitiyName = (activityName: string, activityInfo?: Activity): void => {
    switch (activityName) {
      case ActivitiesNameLabel.VTT:
        this.addVttControls(activityInfo);
        break;
      case ActivitiesNameLabel.ROWER:
        this.addRameurControls(activityInfo);
        break;
      case ActivitiesNameLabel.VELO_INSIDE:
        this.addHometrainercontrols(activityInfo);
        break;
      case ActivitiesNameLabel.VTTAE:
        this.addVttaeControls(activityInfo);
        break;
      default:
        break;
    }
}
}
