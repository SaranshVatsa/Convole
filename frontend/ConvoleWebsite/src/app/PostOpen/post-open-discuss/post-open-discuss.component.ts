import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';
import {PostService} from '../../Services/post.service';
import {UserService} from '../../Services/user.service';

@Component({
  selector: 'app-post-open-discuss',
  templateUrl: './post-open-discuss.component.html',
  styleUrls: ['./post-open-discuss.component.css']
})
export class PostOpenDiscussComponent implements OnInit {
  @Input() post = [];
  @Input() discussData = [];
  @Input() allDiscussions = [];
  render: boolean;
  discussionFirstName: String;
  discussionLastName: String;
  discussionContent: String;
  discussionLevel: number;
  showMoreRender = false;
  userAndDiscussionData = [];
  currentUserData = [];
  agreed = false;
  userId: number;
  discussionId: number;
  discussionAgreeCount: number;
  discussionDisagreeCount: number;
  discussionReportCount: number;
  replyStatus =  false;
  constructor(private ss: SharedService, private ps: PostService, private us: UserService) { }

  ngOnInit() {
    this.discussionFirstName = this.discussData['user']['first_name'];
    this.discussionLastName = this.discussData['user']['last_name'];
    this.discussionContent = this.discussData['content'];
    this.discussionLevel = this.discussData['treelevel'];
    this.discussionAgreeCount = this.discussData['agreedCount'];
    this.discussionDisagreeCount = this.discussData['disagreedCount'];
    this.discussionReportCount = this.discussData['report_count'];
    this.discussionId = this.discussData['id'];
    if (this.discussData['parentId'] === null && this.post['id'] === this.discussData['post']) {
      this.render = true;
    }
    this.ss.discussionShowMore.subscribe((data) => {
      if (this.discussData['parentId'] === data && this.post['id'] === this.discussData['post']) {
        this.render = true;
      }
    });
    let i;
    for (i = 0; i < this.allDiscussions.length; i++) {
      if (this.discussData['id'] === this.allDiscussions[i]['parentId']) {
        this.showMoreRender = true;
        break;
      }
    }
    if (this.us.uData['my_data']) {
      this.currentUserData = this.us.uData['my_data'];
      this.userId = this.us.uData['my_data']['id'];
      this.userAndDiscussionData = this.ps.uAndDiscussionData;
      let j;
      for (j = 0; j < this.userAndDiscussionData.length; j++) {
        if (this.currentUserData['id'] === this.userAndDiscussionData[j]['user']
          && this.discussData['id'] === this.userAndDiscussionData[j]['discussion']
          && this.userAndDiscussionData[j]['agree'] === true) {
          this.agreed = true;
          break;
        }
      }
    }
  }
  showMore() {
    this.ss.discussionShowMore.emit(this.discussData['id']);
    this.showMoreRender = false;
  }
  agreeClicked() {
    if (!this.agreed && this.userId) {
      let message;
      message = '{"agree":' + true + ',"user":' + this.userId + ',"discussion":' + this.discussionId + '}';
      this.ps.addUserAndDiscussion(JSON.parse(message));
      this.agreed = true;
      this.replyStatus = true;
    }
  }
  replyClicked() {
    this.replyStatus = !this.replyStatus;
    if (!this.userId) {
      this.replyStatus = false;
    }
  }
  submitReply(event) {
    let message;
    message = '{"user":' + this.userId + ',"content":"' + event.target.previousElementSibling.innerHTML
      + '","review":' + 0 + ',"treelevel":' + (this.discussionLevel + 1) + ',"post":' + this.post['id']
      + ',"parentId":' + this.discussionId + '}';
    this.ps.addDiscussion(JSON.parse(message));
  }
}
