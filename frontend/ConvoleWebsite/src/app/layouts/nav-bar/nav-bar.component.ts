import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SharedService} from '../../shared.service';
import {UserService} from '../../Services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currRoute = '/';
  routeName: string;
  @Input() notificationsPopupStatus: boolean;
  @Input() searchPopupStatus = false;
  userNameLoggedIn = '';
  constructor(private router: Router, private ss: SharedService, private route: ActivatedRoute, private us: UserService) {
  }

  ngOnInit() {
    this.us.userData.subscribe((data) => {
      this.userNameLoggedIn = data['my_data']['username'];
    });
    this.routeName = this.route.snapshot.params['routeName'];
    this.route.params.subscribe((params: Params) => {
      this.routeName = params['routeName'];
    });
    this.currRoute = this.router.url;
    this.ss.closePopups.subscribe((data: any) => {
      this.notificationsPopupStatus = data;
      this.searchPopupStatus = data;
    });
  }
  notificationsPopupOpen() {
    if (this.notificationsPopupStatus === false) {
      this.notificationsPopupStatus = true;
    }else {
      this.notificationsPopupStatus = false;
    }
  }
  toggleSearchPopup() {
    if (this.searchPopupStatus === false) {
      this.searchPopupStatus = true;
    }else {
      this.searchPopupStatus = false;
    }
  }
  closePopups(event) {
    if (event.target.id !== 'searchbar_navbar_input') {
      this.searchPopupStatus = false;
    }
    if (event.target.id !== 'notificationIcon') {
      this.notificationsPopupStatus = false;
    }
  }
  openLogin() {
    this.ss.popupStatus.emit('login');
  }
}
