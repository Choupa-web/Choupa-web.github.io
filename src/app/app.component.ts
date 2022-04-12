import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {GeneralService} from './services/general.service';
import {Subject} from 'rxjs';
import {ResponsiveUi} from './models/responsive.model';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {takeUntil} from 'rxjs/operators';
import {ScreenSize} from './enums/responsive.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'garminPerformances2';
  menuOpened: boolean;
  loading: boolean;
  screenDefinition: ResponsiveUi;
  destroyed = new Subject<void>();

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);
  screenIsBig: boolean;
  screenIsSmall: boolean;

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private generalService: GeneralService, private breakpointObserver: BreakpointObserver) {
    this.menuOpened = false;
    this.loading = false;
  }

  ngOnInit(): void {
    this.generalService.activityLoadingStatuschange.subscribe({
      next: (loadingStatus) => {
        this.loading = loadingStatus;
      }
    });
    this.screenDefinition = new ResponsiveUi(this.breakpointObserver);
    this.screenDefinition.getScreensize().pipe(takeUntil(this.destroyed)).subscribe(
      result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            const currentScreenSize =
              this.displayNameMap.get(query) ?? 'Unknown';
            if (
              currentScreenSize === ScreenSize.XLARGE ||
              currentScreenSize === ScreenSize.LARGE ||
              currentScreenSize === ScreenSize.MEDIUM
            ) {
              this.screenIsBig = true;
            } else if (
              currentScreenSize === ScreenSize.SMALL ||
              currentScreenSize === ScreenSize.XSMALL) {
              this.screenIsBig = false;
            }
            this.screenIsSmall = !this.screenIsBig;
          }
        }
      });
  }

  ngAfterViewInit(): void {
    this.sidenav.toggle(false);
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
  openCloseMenu = (): void => {
    this.menuOpened = !this.menuOpened;
    this.sidenav.toggle(this.menuOpened);
  }
}
