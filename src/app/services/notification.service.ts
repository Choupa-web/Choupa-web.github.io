import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {AlertComponent} from '../components/shared/alert/alert.component';
import {AlertType} from '../models/alerts.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  alertConfig: MatSnackBarConfig = {
    data: {},
    duration: 6000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
  };

  constructor(private snackBar: MatSnackBar) { }

  success = (textToDisplay: string): void => {
    this.alertConfig.data = {message: textToDisplay, alertType: AlertType.SUCCESS};
    this.snackBar.openFromComponent(AlertComponent, this.alertConfig);
  }

  failure = (textToDisplay: string): void => {
    this.alertConfig.data = {message: textToDisplay, alertType: AlertType.FAILURE};
    this.snackBar.openFromComponent(AlertComponent, this.alertConfig);
  }
}
