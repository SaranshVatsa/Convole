import { Component, OnInit, Input } from '@angular/core';
import {CommunityService} from '../../../Services/community.service';
import {UserService} from '../../../Services/user.service';

@Component({
  selector: 'app-body-object-unit',
  templateUrl: './body-object-unit.component.html',
  styleUrls: ['./body-object-unit.component.css', '../body-link-unit/body-link-unit.component.css']
})
export class BodyObjectUnitComponent implements OnInit {
  @Input() box_shadow = true;
  @Input() post = [];
  @Input() render;
  postId;
  postUser;
  postTitle;
  postDescription;
  @Input() communityName: string;
  @Input() communityId: number;
  columnName: String;
  columnUrl: string;
  @Input() userAndPostData = [];
  userId: number;
  reviewed: boolean;
  share: boolean;
  report: boolean;
  shareTooltipStatus = false;
  linkToPost: string;
  averageReviews;
  totalReviews;
  postShareCount: number;
  postReportCount: number;
  constructor(private cs: CommunityService, private us: UserService) { }

  ngOnInit() {
    this.columnName = this.cs.getColumnName(this.post['column']);
    this.columnUrl = this.cs.getColumnName(this.post['column']);
    if (this.us.uData['my_data']) {
      this.userId = this.us.uData['my_data']['id'];
    }
    if (!this.communityName) {
      if (this.us.uData['community_data']) {
        let i;
        for (i = 0; i < this.us.uData['community_data'].length; i++) {
          if (this.post['community'] === this.us.uData['community_data'][i]['community']['id']) {
            this.communityName = this.us.uData['community_data'][i]['community']['url'];
            break;
          }
        }
      } else {
        this.us.userData.subscribe((data) => {
          this.userId = data['my_data']['id'];
          let j;
          if (data['community_data']) {
            for (j = 0; j < data['community_data'].length; j++) {
              if (this.post['community'] === data['community_data'][j]['community']['id']) {
                this.communityName = data['community_data'][j]['community']['url'];
                break;
              }
            }
          }
        });
      }
    }
    this.postUser = this.post['user']['username'];
    this.postId = this.post['id'];
    this.postTitle = this.post['title'];
    this.postDescription = this.post['description'];
    this.postShareCount = this.post['share_count'];
    this.postReportCount = this.post['report_count'];
    let i;
    for (i = 0; i < this.userAndPostData.length; i++) {
      if (this.userAndPostData[i]['post'] === this.postId && this.userAndPostData[i]['user'] === this.userId) {
        if (this.userAndPostData[i]['activity'] === 8) {
          this.reviewed = true;
        }
        if (this.userAndPostData[i]['activity'] === 3) {
          this.share = true;
        }
        if (this.userAndPostData[i]['activity'] === 4) {
          this.report = true;
        }
      }
    }
    this.totalReviews = this.post['best'] + this.post['good'] + this.post['normal'] + this.post['bad'] + this.post['worst'];
    if (this.totalReviews > 0) {
      this.averageReviews = ((5 * this.post['best']
      + 4 * this.post['good']
      + 3 * this.post['normal']
      + 2 * this.post['bad']
      + this.post['worst']) / this.totalReviews).toFixed(1);
    } else {
      this.averageReviews = 0.00.toFixed(1);
    }
  }
  shareClicked(event) {
    this.shareTooltipStatus = !this.shareTooltipStatus;
    event.stopPropagation();
    let name;
    if (this.post['type'] === 1) {
      name = 'link';
    } else if (this.post['type'] === 6) {
      name = 'discussion';
    } else if (this.post['type'] === 4) {
      name = 'event';
    } else if (this.post['type'] === 5) {
      name = 'object';
    }
    let title = this.post['title'].toString();
    title = title.toLowerCase();
    title = title.replace(/\s+/g, '-');
    title = title.replace('/', '-');
    title = title.replace('.', '');
    title = title + '-' + this.post['id'] + '-' + this.post['community'];
    this.linkToPost = name + '/' + title;
  }
}
