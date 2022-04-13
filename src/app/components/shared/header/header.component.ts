import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {ResponsiveUi} from '../../../models/responsive.model';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() menuOpened: boolean;
  @Output() openCloseMenu: EventEmitter<boolean> = new EventEmitter<boolean>();
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

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.screenDefinition = new ResponsiveUi(this.breakpointObserver);
    this.screenDefinition.getScreensize().pipe(takeUntil(this.destroyed)).subscribe(
      result => {
        console.log('screen result: ', result);
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            const currentScreenSize =
              this.displayNameMap.get(query) ?? 'Unknown';
            this.screenIsBig = this.screenDefinition.isScreenIsBig(currentScreenSize);
          }
        }
    });
  }

  openMenu = (): void => {
    this.openCloseMenu.emit(!this.menuOpened);
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
