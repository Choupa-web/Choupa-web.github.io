import { Component, Inject } from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import {AlertType} from '../../../models/alerts.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  isSuccess: boolean;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: { message: string; alertType: string}) {
     this.isSuccess = data.alertType === AlertType.SUCCESS;
  }

}
