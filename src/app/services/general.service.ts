import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  public loadingActivityDetected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  activityLoadingStatuschange = this.loadingActivityDetected.asObservable();

  constructor() { }

  /**
   * Send the change loading status information
   * @param status - is loading or is not loading
   */
  sendLoadingActivityChangeInformation = (status: boolean): void => {
    console.log('loading status: ', status);
    this.loadingActivityDetected.next(status);
  };
}
