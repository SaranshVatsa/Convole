import { Component, OnInit } from '@angular/core';
import {UserPublicService} from '../../../../Services/user-public.service';
import {isUndefined} from 'util';

@Component({
  selector: 'app-body-right-about',
  templateUrl: './body-right-about.component.html',
  styleUrls: ['./body-right-about.component.css']
})
export class BodyRightAboutComponent implements OnInit {
  user = [];
  userFirstName: string;
  userLastName: string;
  userAbout: string;
  constructor(private ups: UserPublicService) { }

  ngOnInit() {
    if (!isUndefined(this.ups.uPublicData['first_name'])) {
      this.user = this.ups.uPublicData;
      this.userFirstName = this.user['first_name'];
      this.userLastName = this.user['last_name'];
      this.userAbout = this.user['about'];
    }
    this.ups.userPublicData.subscribe(
      (data: {}) => {
        this.userFirstName = data['first_name'];
        this.userLastName = data['last_name'];
        this.userAbout = data['about'];
      }
    );
  }

}
