import {AfterContentInit, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {GeneralService} from './services/general.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'garminPerformances2';
  menuOpened: boolean;
  loading: boolean;

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private generalService: GeneralService) {
    this.menuOpened = false;
    this.loading = false;
  }

  ngOnInit(): void {
    this.generalService.activityLoadingStatuschange.subscribe({
      next: (loadingStatus) => {
        this.loading = loadingStatus;
      }
    });
  }

  ngAfterViewInit(): void {
    this.sidenav.toggle(false);
  }

  openCloseMenu = (): void => {
    this.menuOpened = !this.menuOpened;
    this.sidenav.toggle(this.menuOpened);
  }
}
