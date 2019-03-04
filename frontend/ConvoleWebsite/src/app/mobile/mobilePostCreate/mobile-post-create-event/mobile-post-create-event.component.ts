import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../../shared.service';
import {UserService} from '../../../Services/user.service';
import {CommunityService} from '../../../Services/community.service';

@Component({
  selector: 'app-mobile-post-create-event',
  templateUrl: './mobile-post-create-event.component.html',
  styleUrls: ['./mobile-post-create-event.component.css',
    '../mobile-post-create-link/mobile-post-create-link.component.css',
    '../mobile-post-create-discussion/mobile-post-create-discussion.component.css']
})
export class MobilePostCreateEventComponent implements OnInit {
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
