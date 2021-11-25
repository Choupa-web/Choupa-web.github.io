import { Component, OnInit } from '@angular/core';
import { faUser, faHome, faUserCog, faCogs, faServer, faUpload, faChartPie, faTable, faUserFriends } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  faUser = faUserCog;
  faHome = faHome;
  faImport = faCogs;
  faDataField = faServer;
  faImportActivity = faUpload;
  faDashboard = faChartPie;
  faActivityView = faTable;
  faAdminUsers = faUserFriends;

  constructor() { }

  ngOnInit(): void {
  }

}
