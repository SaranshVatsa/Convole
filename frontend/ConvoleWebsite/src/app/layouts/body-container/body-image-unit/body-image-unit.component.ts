import {Component, Input, OnInit} from '@angular/core';
import {CommunityService} from '../../../Services/community.service';
import {UserService} from '../../../Services/user.service';
import {PostService} from '../../../Services/post.service';

@Component({
  selector: 'app-body-image-unit',
  templateUrl: './body-image-unit.component.html',
  styleUrls: ['./body-image-unit.component.css', '../body-link-unit/body-link-unit.component.css']
})
export class BodyImageUnitComponent implements OnInit {
  @Input() post = [];
  @Input() render;
  postId;
  postUser;
  postTitle;
  @Input() communityName: String;
  @Input() communityId: number;
  columnName: String;
  columnUrl: string;
  @Input() userAndPostData = [];
  userId: number;
  liked: boolean;
  saved: boolean;
  share: boolean;
  report: boolean;
  shareTooltipStatus = false;
  linkToPost: string;
  postLikeCount: number;
  postSaveCount: number;
  postShareCount: number;
  postReportCount: number;
  constructor(private cs: CommunityService, private us: UserService, private ps: PostService) { }

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
    this.postLikeCount = this.post['like_count'];
    this.postSaveCount = this.post['save_count'];
    this.postShareCount = this.post['share_count'];
    this.postReportCount = this.post['report_count'];
    let i;
    for (i = 0; i < this.userAndPostData.length; i++) {
      if (this.userAndPostData[i]['post'] === this.postId && this.userAndPostData[i]['user'] === this.userId) {
        if (this.userAndPostData[i]['activity'] === 1) {
          this.liked = true;
        }
        if (this.userAndPostData[i]['activity'] === 2) {
          this.saved = true;
        }
        if (this.userAndPostData[i]['activity'] === 3) {
          this.share = true;
        }
        if (this.userAndPostData[i]['activity'] === 4) {
          this.report = true;
        }
      }
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
  likeClicked(event) {
    if (this.userId) {
      let message;
      message = '{"activity":' + 1 + ',"user":' + this.userId + ',"post":' + this.postId + '}';
      this.ps.addUserAndPost(JSON.parse(message), this.post, 1);
      this.liked = !this.liked;
    }
    event.stopPropagation();
  }
  saveClicked(event) {
    if (!this.saved && this.userId) {
      let message;
      message = '{"activity":' + 2 + ',"user":' + this.userId + ',"post":' + this.postId + '}';
      this.ps.addUserAndPost(JSON.parse(message), this.postId, 2);
      this.saved = true;
    }
    event.stopPropagation();
  }
}
