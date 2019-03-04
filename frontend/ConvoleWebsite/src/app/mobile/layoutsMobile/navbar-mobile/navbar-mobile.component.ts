import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SharedService} from '../../../shared.service';
import {UserService} from '../../../Services/user.service';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.css']
})
export class NavbarMobileComponent implements OnInit {
  currRoute = '/';
  routeName: string;
  userNameLoggedIn = '';
  constructor(private router: Router, private ss: SharedService, private route: ActivatedRoute, private us: UserService) { }

  ngOnInit() {
    this.us.userData.subscribe((data) => {
      this.userNameLoggedIn = data['my_data']['username'];
    });
    if (!this.userNameLoggedIn && this.us.uData['my_data']) {
      this.userNameLoggedIn = this.us.uData['my_data']['username'];
    }
    this.currRoute = this.router.url;
    this.routeName = this.route.snapshot.params['routeName'];
    this.route.params.subscribe((params: Params) => {
      this.routeName = params['routeName'];
    });
  }
  loginOpen() {
    this.ss.mobilePageStatus.emit('loginOpen');
  }
}
