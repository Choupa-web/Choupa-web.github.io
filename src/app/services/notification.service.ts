import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AlertComponent} from '../components/shared/alert/alert.component';
import {AlertType} from '../models/alerts.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  success = (textToDisplay: string): void => {
    this.snackBar.openFromComponent(AlertComponent, {data: {message: textToDisplay, alertType: AlertType.SUCCESS}});
  }

  failure = (textToDisplay: string): void => {
    this.snackBar.openFromComponent(AlertComponent, {data: {message: textToDisplay, alertType: AlertType.FAILURE}, duration: 6000});
  }
}
