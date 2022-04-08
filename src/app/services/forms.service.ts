import { Injectable } from '@angular/core';
import {Activity, ActivityFormControl} from '../models/activities.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ControlType} from '../enums/forms.enum';
import {ActivitiesNameLabel, ActivityUnits} from '../enums/activity.enum';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  controlsList: ActivityFormControl<any>[];

  /**
   * Return a form group from a list of ActivityFormControl
   * @param controlsList - list of controls
   */
  toFormGroup = (controlsList: ActivityFormControl<any>[]): FormGroup => {
    const group: any = {};

    controlsList.forEach(question => {
      group[question.controlName] = question.required
        ? new FormControl(question.value || '', [Validators.required])
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

  getControlsList = (activityName: string, activityInfo?: Activity): ActivityFormControl<any>[] => {
    this.controlsList = [
      {
        controlName: 'activityDate',
        required: true,
        label: 'Date de l\'activité',
        controlType: ControlType.TEXTBOXDATE,
        order: 1,
        value: activityInfo?.activityDate ? new Date(activityInfo?.activityDate) : new Date(),
        disabled: false
      },
      {
        controlName: 'duration',
        required: true,
        label: 'Durée de l\'activité',
        controlType: ControlType.TEXTBOXTIME,
        order: 2,
        value: activityInfo?.duration ?? '',
        disabled: false
      },
      {
        controlName: 'averageSpeed',
        required: true,
        label: 'Vitesse moyenne',
        controlType: ControlType.TEXTBOX_DECIMAL,
        order: 4,
        value: activityInfo?.averageSpeed ?? '',
        disabled: false,
        controlUnit: ActivityUnits.SPEED
      },
      {
        controlName: 'maxSpeed',
        required: true,
        label: 'Vitesse maximum',
        controlType: ControlType.TEXTBOX_DECIMAL,
        order: 5,
        value: activityInfo?.maxSpeed ?? '',
        disabled: false,
        controlUnit: ActivityUnits.SPEED
      },
      {
        controlName: 'distance',
        required: true,
        label: 'Distance',
        controlType: ControlType.TEXTBOX_DECIMAL,
        order: 3,
        value: activityInfo?.distance ?? '',
        disabled: false,
        controlUnit: ActivityUnits.DISTANCE
      },
      {
        controlName: 'averageFc',
        required: true,
        label: 'Fréquence moyenne',
        controlType: ControlType.TEXTBOX_NODECIMAL,
        order: 6,
        value: activityInfo?.averageFc ?? '',
        disabled: false,
        controlUnit: ActivityUnits.FC
      },
      {
        controlName: 'exerciceLoad',
        required: true,
        label: 'Exercice load',
        controlType: ControlType.TEXTBOX_NODECIMAL,
        order: 10,
        value: activityInfo?.exerciceLoad ?? '',
        disabled: false
      },
      {
        controlName: 'maxFc',
        required: true,
        label: 'Fréquence maximum',
        controlType: ControlType.TEXTBOX_NODECIMAL,
        order: 7,
        value: activityInfo?.maxFc ?? '',
        disabled: false,
        controlUnit: ActivityUnits.FC
      },
      {
        controlName: 'aerobie',
        required: true,
        label: 'Aérobie',
        controlType: ControlType.TEXTBOX_DECIMAL,
        order: 8,
        value: activityInfo?.aerobie ?? '',
        disabled: false
      },
      {
        controlName: 'anaerobique',
        required: true,
        label: 'Anaérobique',
        controlType: ControlType.TEXTBOX_DECIMAL,
        order: 9,
        value: activityInfo?.anaerobique ?? '',
        disabled: false
      }
    ];
    switch (activityName) {
      case ActivitiesNameLabel.VTT:
        this.addVttControls(activityInfo);
        break;
      case ActivitiesNameLabel.RAMEUR:
        this.addRameurControls(activityInfo);
        break;
      case ActivitiesNameLabel.VELO_INSIDE:
        this.addHometrainercontrols(activityInfo);
        break;
      default: break;
    }
    this.controlsList.push({
      controlName: 'activityName',
      required: true,
      label: 'Activité',
      controlType: ControlType.GRAPHICAL,
      order: 0,
      value: activityName,
      disabled: true
    });
    this.controlsList.sort((a, b) => a.order < b.order ? -1 : a.order > b.order ? 1 : 0);
    return this.controlsList;
  }

  addVttControls = (activity?: Activity): void => {
    this.controlsList.push({
      controlName: 'constance',
      required: true,
      label: 'Constance',
      controlType: ControlType.TEXTBOX_NODECIMAL,
      order: 11,
      value: activity?.constance ?? '',
      disabled: false
    });
    this.controlsList.push({
      controlName: 'difficulty',
      required: true,
      label: 'Difficulté',
      controlType: ControlType.TEXTBOX_NODECIMAL,
      order: 12,
      value: activity?.difficulty ?? '',
      disabled: false
    });
  }

  addHometrainercontrols = (activity?: Activity): void => {
    this.controlsList.push({
      controlName: 'averagePower',
      required: true,
      label: 'Puissance moyenne',
      controlType: ControlType.TEXTBOX_NODECIMAL,
      order: 11,
      value: activity?.averagePower ?? '',
      disabled: false,
      controlUnit: ActivityUnits.POWER
    });
    this.controlsList.push({
      controlName: 'maxPower',
      required: true,
      label: 'Puissance maximum',
      controlType: ControlType.TEXTBOX_NODECIMAL,
      order: 12,
      value: activity?.maxPower ?? '',
      disabled: false,
      controlUnit: ActivityUnits.POWER
    });
    this.controlsList.push({
      controlName: 'averageCadence',
      required: true,
      label: 'Cadence moyenne',
      controlType: ControlType.TEXTBOX_NODECIMAL,
      order: 13,
      value: activity?.averageCadence ?? '',
      disabled: false,
      controlUnit: ActivityUnits.CADENCE
    });
    this.controlsList.push({
      controlName: 'maxCadence',
      required: true,
      label: 'Cadence maximum',
      controlType: ControlType.TEXTBOX_NODECIMAL,
      order: 14,
      value: activity?.maxCadence ?? '',
      disabled: false,
      controlUnit: ActivityUnits.CADENCE
    });
    this.controlsList.push({
      controlName: 'maxAveragePower',
      required: true,
      label: 'Puissance moyenne maximum',
      controlType: ControlType.TEXTBOX_NODECIMAL,
      order: 15,
      value: activity?.maxAveragePower ?? '',
      disabled: false,
      controlUnit: ActivityUnits.POWER
    });
  }

  addRameurControls = (activity?: Activity): void => {
    this.controlsList.push({
      controlName: 'averageStrokesfrequency',
      required: true,
      label: 'Fréquence moyenne de coups',
      controlType: ControlType.TEXTBOX_NODECIMAL,
      order: 11,
      value: activity?.averageStrokesfrequency ?? '',
      disabled: false,
      controlUnit: ActivityUnits.FREQUENCE_COUPS
    });
    this.controlsList.push({
      controlName: 'maxStrokesFrequency',
      required: true,
      label: 'Fréquence max de coups',
      controlType: ControlType.TEXTBOX_NODECIMAL,
      order: 12,
      value: activity?.maxStrokesFrequency ?? '',
      disabled: false,
      controlUnit: ActivityUnits.FREQUENCE_COUPS
    });
    this.controlsList.push({
      controlName: 'averagePace',
      required: true,
      label: 'Allure moyenne',
      controlType: ControlType.TEXTBOX_DECIMAL,
      order: 13,
      value: activity?.averagePace ?? '',
      disabled: false,
      controlUnit: ActivityUnits.ALLURE
    });
    this.controlsList.push({
      controlName: 'strokes',
      required: true,
      label: 'Nombre de coups ',
      controlType: ControlType.TEXTBOX_NODECIMAL,
      order: 14,
      value: activity?.strokes ?? '',
      disabled: false,
      controlUnit: ActivityUnits.FREQUENCE_COUPS
    });
  }
}
