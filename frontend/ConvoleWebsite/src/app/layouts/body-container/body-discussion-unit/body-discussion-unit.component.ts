import {Component, Input, OnInit} from '@angular/core';
import {isUndefined} from 'util';
import {CommunityService} from '../../../Services/community.service';
import {UserService} from '../../../Services/user.service';
import {PostService} from '../../../Services/post.service';

@Component({
  selector: 'app-body-discussion-unit',
  templateUrl: './body-discussion-unit.component.html',
  styleUrls: ['./body-discussion-unit.component.css', '../body-link-unit/body-link-unit.component.css']
})
export class BodyDiscussionUnitComponent implements OnInit {
  @Input() post = [];
  @Input() render;
  postId;
  postUser;
  postTitle;
  postDescription;
  postDate;
  date: string;
  @Input() communityName: String;
  @Input() communityId: number;
  columnName: String;
  columnUrl: string;
  @Input() userAndPostData = [];
  userId = 1;
  agreed: boolean;
  disagreed: boolean;
  share: boolean;
  report: boolean;
  shareTooltipStatus = false;
  linkToPost: string;
  postAgreeCount: number;
  postDisagreeCount: number;
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
          let j;
          this.userId = data['my_data']['id'];
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
    this.postId = this.post['id'];
    this.postUser = this.post['user']['username'];
    this.postTitle = this.post['title'];
    this.postDescription = this.post['description'];
    this.postDate = this.post['time_of_Creation'];
    this.postAgreeCount = this.post['agree_count'];
    this.postDisagreeCount = this.post['disagree_count'];
    this.postShareCount = this.post['share_count'];
    this.postReportCount = this.post['report_count'];
    if (!isUndefined(this.postDate)) {
      this.date += this.postDate.slice(8, 10);
      if (this.postDate.slice(5, 7) === '01') {
        this.date += ' Jan, ';
      } else if (this.postDate.slice(5, 7) === '02') {
        this.date += ' Feb, ';
      } else if (this.postDate.slice(5, 7) === '03') {
        this.date += ' March, ';
      } else if (this.postDate.slice(5, 7) === '04') {
        this.date += ' April, ';
      } else if (this.postDate.slice(5, 7) === '05') {
        this.date += ' May, ';
      } else if (this.postDate.slice(5, 7) === '06') {
        this.date += ' June, ';
      } else if (this.postDate.slice(5, 7) === '07') {
        this.date += ' July, ';
      } else if (this.postDate.slice(5, 7) === '08') {
        this.date += ' Aug, ';
      } else if (this.postDate.slice(5, 7) === '09') {
        this.date += ' Sept, ';
      } else if (this.postDate.slice(5, 7) === '10') {
        this.date += ' Oct, ';
      } else if (this.postDate.slice(5, 7) === '11') {
        this.date += ' Nov, ';
      } else if (this.postDate.slice(5, 7) === '12') {
        this.date += ' Dec, ';
      }
      this.date += this.postDate.slice(0, 4);
      this.date = this.date.substr(9);
    }
    let i;
    for (i = 0; i < this.userAndPostData.length; i++) {
      if (this.userAndPostData[i]['post'] === this.postId && this.userAndPostData[i]['user'] === this.userId) {
        if (this.userAndPostData[i]['activity'] === 5) {
          this.agreed = true;
        }
        if (this.userAndPostData[i]['activity'] === 6) {
          this.disagreed = true;
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
  agreeClicked(event) {
    if (this.userId) {
      let message;
      message = '{"activity":' + 5 + ',"user":' + this.userId + ',"post":' + this.postId + '}';
      this.ps.addUserAndPost(JSON.parse(message), this.postId, 1);
      this.agreed = !this.agreed;
    }
    event.stopPropagation();
  }
  disagreeClicked(event) {
    if (this.userId) {
      let message;
      message = '{"activity":' + 6 + ',"user":' + this.userId + ',"post":' + this.postId + '}';
      this.ps.addUserAndPost(JSON.parse(message), this.postId, 2);
      this.disagreed = !this.disagreed;
    }
    event.stopPropagation();
  }
}
