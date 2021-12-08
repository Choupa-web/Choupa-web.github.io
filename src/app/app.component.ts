import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'garminPerformances2';
  menuOpened: boolean;

  @ViewChild('sidenav') sidenav: MatSidenav;

  ngOnInit(): void {
    this.menuOpened = false;
  }

  ngAfterViewInit(): void {
    this.sidenav.toggle(false);
  }

  openCloseMenu = ($event): void => {
    this.menuOpened = !this.menuOpened;
    this.sidenav.toggle(this.menuOpened);
  }
}
