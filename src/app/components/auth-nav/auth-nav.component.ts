import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-nav',
  templateUrl: './auth-nav.component.html',
  styleUrls: ['./auth-nav.component.scss']
})
export class AuthNavComponent implements OnInit {

  public userName: string;
  constructor(public auth: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.auth.user$.subscribe( (userInfo) => {
      if (userInfo) {
        this.userName = userInfo.given_name;
      }
    });
  }
  addNewActivity(): void {
    this.route.navigateByUrl('/activity/add');
  }


}
