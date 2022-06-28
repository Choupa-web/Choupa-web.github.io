import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {ScreenSize} from '../enums/responsive.enum';

export class ResponsiveUi {
  breakpointObserver: BreakpointObserver;

  constructor(bpo: BreakpointObserver) {
    this.breakpointObserver = bpo;
  }

  /**
   * Return the screen size as Breakpoints
   */
  getScreensize = (): Observable<any> => {
    return this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]);
  }

  /**
   * Define if screen is big or small
   * @param currentScreenSize - size of the screen
   */
  isScreenIsBig = (currentScreenSize: string): boolean => {
    return currentScreenSize === ScreenSize.XLARGE || currentScreenSize === ScreenSize.LARGE || currentScreenSize === ScreenSize.MEDIUM;
  }
}
