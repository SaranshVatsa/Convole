import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../Services/user.service';
import {isUndefined} from 'util';

@Component({
  selector: 'app-sidebar-communities',
  templateUrl: './sidebar-communities.component.html',
  styleUrls: ['./sidebar-communities.component.css']
})
export class SidebarCommunitiesComponent implements OnInit {
  communityJoiningData = [];
  dataReceived = false;
  constructor(private us: UserService) { }

  ngOnInit() {
    if (!isUndefined(this.us.uData['community_data'])) {
      this.communityJoiningData = this.us.uData['community_data'];
      this.dataReceived = true;
    } else {
      this.us.userData.subscribe((data: any) => {
        this.communityJoiningData = data['community_data'];
        this.dataReceived = true;
      });
    }
  }

}
