import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';

export class ResponsiveUi {
  breakpointObserver: BreakpointObserver;

  constructor(bpo: BreakpointObserver) {
    this.breakpointObserver = bpo;
  }

  getScreensize(): Observable<any> {
   return this.breakpointObserver.observe([
     Breakpoints.XSmall,
     Breakpoints.Small,
     Breakpoints.Medium,
     Breakpoints.Large,
     Breakpoints.XLarge,
   ]);
  }
}
