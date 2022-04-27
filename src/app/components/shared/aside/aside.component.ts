import { Component, OnInit } from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  userEmail: string;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe((userInfo) => {
      if (userInfo) {
        this.userEmail = userInfo.email;
      }
    });
  }

}
