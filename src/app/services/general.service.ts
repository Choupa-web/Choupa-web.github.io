import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ActivityFormControl} from '../models/activities.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivityFormScope} from '../enums/activity.enum';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  public loadingActivityDetected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  activityLoadingStatuschange = this.loadingActivityDetected.asObservable();

  /**
   * Send the change loading status information
   * @param status - is loading or is not loading
   */
  sendLoadingActivityChangeInformation = (status: boolean): void => {
    this.loadingActivityDetected.next(status);
  }
}
