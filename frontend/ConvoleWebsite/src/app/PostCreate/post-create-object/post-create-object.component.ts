import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';
import {UserService} from '../../Services/user.service';
import {CommunityService} from '../../Services/community.service';

@Component({
  selector: 'app-post-create-object',
  templateUrl: './post-create-object.component.html',
  styleUrls: ['./post-create-object.component.css',
    '../post-create-link/post-create-link.component.css',
    '..//post-create-discussion//post-create-discussion.component.css']
})
export class PostCreateObjectComponent implements OnInit {
  popupStatus = true;
  communityList = [];
  columnsList = [];
  topLocation;
  constructor(private ss: SharedService, private us: UserService, private cs: CommunityService) { }

  ngOnInit() {
    this.topLocation = window.pageYOffset;
    this.communityList = this.us.uData['community_data'];
    this.cs.columnsEmitter.subscribe((data) => {
      this.columnsList = data;
    });
  }
  closePopup(event) {
    if (event.target.id === 'post_create_link_full') {
      this.popupStatus = false;
      this.ss.postCreateCloseEmitter.emit('none');
    }
  }
  communitySelected(event) {
    this.cs.getAllColumns(event.target.value);
  }
}
