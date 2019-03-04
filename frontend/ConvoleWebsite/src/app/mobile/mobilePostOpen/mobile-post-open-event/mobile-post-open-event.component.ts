import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {isUndefined} from 'util';
import {CommunityService} from '../../../Services/community.service';
import {UserService} from '../../../Services/user.service';
import {PostService} from '../../../Services/post.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-mobile-post-open-event',
  templateUrl: './mobile-post-open-event.component.html',
  styleUrls: ['./mobile-post-open-event.component.css',
    '../mobile-post-open-discussion/mobile-post-open-discussion.component.css']
})
export class MobilePostOpenEventComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  @Input()  post = [];
  userAndPostData = [];
  postUser;
  postId;
  postTitle;
  postContent;
  postDate;
  date: string;
  postLocation;
  postTimings;
  postFee;
  postRegistrationLink;
  postAttendingCount: number;
  @Input() communityName: String;
  columnName: String;
  currentUserFirstName: String;
  currentUserLastName: String;
  userId: number;
  attending: boolean;
  share: boolean;
  report: boolean;
  discussionData = [];
  newDiscussionData = [];
  shareTooltipStatus = false;
  linkToPost: string;
  postShareCount: number;
  postReportCount: number;
  constructor(private cs: CommunityService, private us: UserService, private ps: PostService) {
  }

  ngOnInit() {
    if (this.us.uData['my_data']) {
      this.currentUserFirstName = this.us.uData['my_data']['first_name'];
      this.currentUserLastName = this.us.uData['my_data']['last_name'];
      this.userId = this.us.uData['my_data']['id'];
    }
    this.columnName = this.cs.getColumnName(this.post['column']);
    this.postUser = this.post['user']['username'];
    this.postId = this.post['id'];
    this.postTitle = this.post['title'];
    this.postContent = this.post['content'];
    this.postDate = this.post['time_of_Creation'];
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
    this.postLocation = this.post['location'];
    this.postTimings = this.post['Timings'];
    this.postFee = this.post['fee'];
    this.postRegistrationLink = this.post['registrationLink'];
    this.postAttendingCount = this.post['attending_count'];
    this.userAndPostData = this.ps.pAndUserData;
    if (this.userAndPostData) {
      let i;
      for (i = 0; i < this.userAndPostData.length; i++) {
        if (this.userAndPostData[i]['post'] === this.postId && this.userAndPostData[i]['user'] === this.userId) {
          if (this.userAndPostData[i]['activity'] === 7) {
            this.attending = true;
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
    this.discussionData = this.ps.dData;
    this.arrange(null);
    if (!this.discussionData[0]) {
      this.subscription = this.ps.discussionData.subscribe((data) => {
        this.newDiscussionData = [];
        this.discussionData = data;
        this.arrange(null);
      });
    }
  }
  arrange(parentId: number) {
    let i;
    for (i = 0; i < this.discussionData.length; i++) {
      if (this.discussionData[i]['parentId'] === parentId) {
        let j, flag = 0;
        for ( j = 0; j < this.newDiscussionData.length; j++) {
          if (this.discussionData[i] === this.newDiscussionData[j]) {
            flag = 1;
            break;
          }
        }
        if ( flag === 0) {
          this.newDiscussionData.push(this.discussionData[i]);
          this.arrange(this.discussionData[i]['id']);
        }
      }
    }
    return;
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
  attendingClicked(event) {
    if (this.userId) {
      let message;
      message = '{"activity":' + 7 + ',"user":' + this.userId + ',"post":' + this.postId + '}';
      this.ps.addUserAndPost(JSON.parse(message), this.postId, 7);
      this.attending = !this.attending;
    }
    event.stopPropagation();
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  submitComment(event) {
    if (this.userId) {
      let message;
      message = '{"user":' + this.userId + ',"content":"' + event.target.previousElementSibling.innerHTML
        + '","review":' + 0 + ',"treelevel":' + 0 + ',"post":' + this.post['id']
        + ',"parentId":' + null + '}';
      this.ps.addDiscussion(JSON.parse(message));
    }
  }
}
