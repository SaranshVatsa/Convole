import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../../shared.service';
import {UserService} from '../../../Services/user.service';
import {CommunityService} from '../../../Services/community.service';

@Component({
  selector: 'app-mobile-post-create-discussion',
  templateUrl: './mobile-post-create-discussion.component.html',
  styleUrls: ['./mobile-post-create-discussion.component.css', '../mobile-post-create-link/mobile-post-create-link.component.css']
})
export class MobilePostCreateDiscussionComponent implements OnInit {
  @Input() postCreateStatus = false;
  communityList = [];
  columnsList = [];
  constructor(private ss: SharedService, private us: UserService, private cs: CommunityService) { }

  ngOnInit() {
    this.communityList = this.us.uData['community_data'];
    this.cs.columnsEmitter.subscribe((data) => {
      this.columnsList = data;
    });
  }
  goBack() {
    this.postCreateStatus = false;
    this.ss.postCreateCloseEmitter.emit('none');
  }
  communitySelected(event) {
    this.cs.getAllColumns(event.target.value);
  }
}
