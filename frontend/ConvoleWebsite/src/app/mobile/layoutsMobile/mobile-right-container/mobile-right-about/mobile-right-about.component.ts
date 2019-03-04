import { Component, OnInit } from '@angular/core';
import {UserPublicService} from '../../../../Services/user-public.service';
import {isUndefined} from 'util';

@Component({
  selector: 'app-mobile-right-about',
  templateUrl: './mobile-right-about.component.html',
  styleUrls: ['./mobile-right-about.component.css']
})
export class MobileRightAboutComponent implements OnInit {
  user = [];
  userFirstName: string;
  userLastName: string;
  userAbout: string;
  constructor(private ups: UserPublicService) { }

  ngOnInit() {
    console.log(this.ups.uPublicData['first_name']);
    if (!isUndefined(this.ups.uPublicData['first_name'])) {
      this.user = this.ups.uPublicData;
      this.userFirstName = this.user['first_name'];
      this.userLastName = this.user['last_name'];
      this.userAbout = this.user['about'];
    }else {
      this.ups.userPublicData.subscribe(
        (data: {}) => {
          this.userFirstName = data['first_name'];
          this.userLastName = data['last_name'];
          this.userAbout = data['about'];
        }
      );
    }
  }

}
