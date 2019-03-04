import { Component, OnInit } from '@angular/core';
import {isUndefined} from 'util';
import {UserPublicService} from '../../../Services/user-public.service';
import {UserService} from '../../../Services/user.service';

@Component({
  selector: 'app-sidebar-top-profile',
  templateUrl: './sidebar-top-profile.component.html',
  styleUrls: ['./sidebar-top-profile.component.css']
})
export class SidebarTopProfileComponent implements OnInit {
  user = [];
  userFollowingData = [];
  firstName: string;
  lastName: string;
  username: string;
  following = false;
  userLoggedIn: string;
  userLoggedInID;
  constructor(private ups: UserPublicService, private us: UserService) {
  }

  ngOnInit() {
    if (!this.us.uData['follow_data']) {
      console.log('Fetching again');
      this.us.getUser('admin'); // THIS WON'T BE THERE AFTER INTERNAL ROUTING FLOW IS ADDED.
    }
    this.us.userData.subscribe((data) => {
      this.userLoggedIn = data['my_data']['username'];
      this.userLoggedInID = data['my_data']['id'];
    });
    if (!isUndefined(this.us.uData['my_data']) && !this.userLoggedIn) {
      this.userLoggedIn = this.us.uData['my_data']['username'];
      this.userLoggedInID = this.us.uData['my_data']['id'];
    }
    this.ups.userPublicData.subscribe(
      (data: {}) => {
        this.firstName = data['first_name'];
        this.lastName = data['last_name'];
        this.username = data['username'];
        this.us.userData.subscribe((data2: any) => {
          this.userFollowingData = data2['follow_data'];
          if (this.userFollowingData) {
            let i;
            for (i = 0; i < this.userFollowingData.length; i++) {
              if (this.userFollowingData[i]['following']['username'] === this.username) {
                this.following = true;
                break;
              }
            }
          }
        });
        if (!isUndefined(this.us.uData['follow_data'])) {
          this.userFollowingData = this.us.uData['follow_data'];
          if (this.userFollowingData) {
            let i;
            for (i = 0; i < this.userFollowingData.length; i++) {
              if (this.userFollowingData[i]['following']['username'] === this.username) {
                this.following = true;
                break;
              }
            }
          }
        }
      }
    );
    if (!isUndefined(this.ups.uPublicData['first_name'])) {
      this.user = this.ups.uPublicData;
      this.firstName = this.user['first_name'];
      this.lastName = this.user['last_name'];
      this.username = this.user['username'];
      this.us.userData.subscribe((data: any) => {
        this.userFollowingData = data['follow_data'];
        if (this.userFollowingData) {
          let i;
          for (i = 0; i < this.userFollowingData.length; i++) {
            if (this.userFollowingData[i]['following']['username'] === this.username) {
              this.following = true;
              break;
            }
          }
        }
      });
      if (!isUndefined(this.us.uData['follow_data'])) {
        this.userFollowingData = this.us.uData['follow_data'];
        if (this.userFollowingData) {
          let i;
          for (i = 0; i < this.userFollowingData.length; i++) {
            if (this.userFollowingData[i]['following']['username'] === this.username) {
              this.following = true;
              break;
            }
          }
        }
      }
    }
  }
  followButtonClicked() {
    this.following = !this.following;
    if (this.following === true) {
      let message;
      message = '{"follower":' + this.userLoggedInID + ',"following":3' + ',"state":0' + '}';
      this.us.addUserFollowingUser(JSON.parse(message));
    }
  }
}
