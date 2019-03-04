import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../Services/user.service';
import {isUndefined} from 'util';

@Component({
  selector: 'app-sidebar-following',
  templateUrl: './sidebar-following.component.html',
  styleUrls: ['./sidebar-following.component.css']
})
export class SidebarFollowingComponent implements OnInit {
  userFollowingData = [];
  dataReceived = false;
  constructor(private us: UserService) { }

  ngOnInit() {
    if (!isUndefined(this.us.uData['follow_data'])) {
      this.userFollowingData = this.us.uData['follow_data'];
      this.dataReceived = true;
    }
    this.us.userData.subscribe((data: any) => {
      this.userFollowingData = data['follow_data'];
      this.dataReceived = true;
    });
  }
}
