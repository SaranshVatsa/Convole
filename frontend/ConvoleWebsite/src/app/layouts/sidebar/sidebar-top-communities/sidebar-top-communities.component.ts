import {Component, OnInit} from '@angular/core';
import {CommunityService} from '../../../Services/community.service';
import {isUndefined} from 'util';
import {UserService} from '../../../Services/user.service';

@Component({
  selector: 'app-sidebar-top-communities',
  templateUrl: './sidebar-top-communities.component.html',
  styleUrls: ['./sidebar-top-communities.component.css']
})
export class SidebarTopCommunitiesComponent implements OnInit {
  community = [];
  communityName: string;
  communityMemberCount: number;
  communityDate: any;
  currDate: any;
  createdPast: string;
  joined = false;
  communityJoiningData = [];
  constructor(private cs: CommunityService, private us: UserService) {
    this.currDate = new Date();
  }

  ngOnInit() {
    if (!this.us.uData['community_data']) {
      this.us.getUser('admin'); // THIS WON'T BE THERE AFTER INTERNAL ROUTING FLOW IS ADDED.
    }
    if (!isUndefined(this.cs.commData['community'])) {
      this.community = this.cs.commData['community'];
      this.communityName = this.community['name'];
      this.communityMemberCount = this.community['memberCount'];
      this.communityDate = this.community['timeOfCreation'];
      if ((this.currDate.getFullYear() - this.communityDate.slice(0, 4)) > 0) {
        this.createdPast = (this.currDate.getFullYear() - this.communityDate.slice(0, 4)).toString();
        this.createdPast += ' Years';
      }else if ((this.currDate.getMonth() - this.communityDate.slice(5, 7) + 1) > 0) {
        this.createdPast = (this.currDate.getMonth() - this.communityDate.slice(5, 7) + 1 ).toString();
        this.createdPast += ' Months';
      }else if ((this.currDate.getDate() - this.communityDate.slice(8, 10)) >= 0) {
        this.createdPast = (this.currDate.getDate() - this.communityDate.slice(8, 10)).toString();
        this.createdPast += ' Days';
      }
      this.us.userData.subscribe((data2: any) => {
        this.communityJoiningData = data2['community_data'];
        if (this.communityJoiningData) {
          let i;
          for (i = 0; i < this.communityJoiningData.length; i++) {
            if (this.communityJoiningData[i]['community']['name'] === this.communityName) {
              this.joined = true;
              break;
            }
          }
        }
      });
      if (!isUndefined(this.us.uData['community_data'])) {
        this.communityJoiningData = this.us.uData['community_data'];
        if (this.communityJoiningData) {
          let i;
          for (i = 0; i < this.communityJoiningData.length; i++) {
            if (this.communityJoiningData[i]['community']['name'] === this.communityName) {
              this.joined = true;
              break;
            }
          }
        }
      }
    }
    this.cs.communityData.subscribe(
      (data: {}) => {
        this.community = data['community'];
        this.communityName = this.community['name'];
        this.communityMemberCount = this.community['memberCount'];
        this.communityDate = this.community['timeOfCreation'];
        if ((this.currDate.getFullYear() - this.communityDate.slice(0, 4)) > 0) {
          this.createdPast = (this.currDate.getFullYear() - this.communityDate.slice(0, 4)).toString();
          this.createdPast += ' Years';
        } else if ((this.currDate.getMonth() - this.communityDate.slice(5, 7) + 1) > 0) {
          this.createdPast = (this.currDate.getMonth() - this.communityDate.slice(5, 7) + 1 ).toString();
          this.createdPast += ' Months';
        } else if ((this.currDate.getDate() - this.communityDate.slice(8, 10)) >= 0) {
          this.createdPast = (this.currDate.getDate() - this.communityDate.slice(8, 10)).toString();
          this.createdPast += ' Days';
        }
        this.us.userData.subscribe((data2: any) => {
          this.communityJoiningData = data2['community_data'];
          if (this.communityJoiningData) {
            let i;
            for (i = 0; i < this.communityJoiningData.length; i++) {
              if (this.communityJoiningData[i]['community']['name'] === this.communityName) {
                this.joined = true;
                break;
              }
            }
          }
        });
        if (!isUndefined(this.us.uData['community_data'])) {
          this.communityJoiningData = this.us.uData['community_data'];
          if (this.communityJoiningData) {
            let i;
            for (i = 0; i < this.communityJoiningData.length; i++) {
              if (this.communityJoiningData[i]['community']['name'] === this.communityName) {
                this.joined = true;
                break;
              }
            }
          }
        }
      }
    );
  }
  joinButtonClicked() {
    this.joined = !this.joined;
    if (this.joined === false) {
      this.us.userLeavesCommunity(this.community['id']);
    } else {
      this.us.addUserJoinsCommunity(this.community['id']);
    }
  }
}
