import {Component, Input, OnInit} from '@angular/core';
import {UserPublicService} from '../../../Services/user-public.service';
import {isUndefined} from 'util';
import {UserService} from '../../../Services/user.service';

@Component({
  selector: 'app-body-top-profile',
  templateUrl: './body-top-profile.component.html',
  styleUrls: ['./body-top-profile.component.css']
})
export class BodyTopProfileComponent implements OnInit {
  @Input() selectedButton: string;
  userLoggedIn = '';
  userProfile = '';
  constructor(private ups: UserPublicService, private us: UserService) {
  }

  ngOnInit() {
    this.us.userData.subscribe((data) => {
      this.userLoggedIn = data['my_data']['username'];
    });
    if (!isUndefined(this.us.uData['my_data']) && !this.userLoggedIn) {
      this.userLoggedIn = this.us.uData['my_data']['username'];
    }
    this.ups.userPublicData.subscribe(
      (data: {}) => {
        if (data['like_privacy'] === false) {
          this.selectedButton = 'everyone';
        } else {
          this.selectedButton = 'only_me';
        }
        this.userProfile = data['username'];
      }
    );
    if (!isUndefined(this.ups.uPublicData['like_privacy']) && !this.userProfile) {
      if (this.ups.uPublicData['like_privacy'] === false) {
        this.selectedButton = 'everyone';
      } else {
        this.selectedButton = 'only_me';
      }
      this.userProfile = this.ups.uPublicData['username'];
    }
  }
  public toggleSelect(event) {
    if (event.target.id === 'onlyme_button') {
      this.selectedButton = 'onlyme';
    } else {
      this.selectedButton = 'everyone';
    }
  }
}
