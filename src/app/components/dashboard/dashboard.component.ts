import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private notification: NotificationService) { }

  ngOnInit(): void {
    console.log('init');
  }
}
