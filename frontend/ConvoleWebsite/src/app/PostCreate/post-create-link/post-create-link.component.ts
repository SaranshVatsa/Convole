import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';
import {UserService} from '../../Services/user.service';
import {CommunityService} from '../../Services/community.service';

@Component({
  selector: 'app-post-create-link',
  templateUrl: './post-create-link.component.html',
  styleUrls: ['./post-create-link.component.css']
})
export class PostCreateLinkComponent implements OnInit {
  popupStatus = true;
  communityList = [];
  columnsList = [];
  constructor(private ss: SharedService, private us: UserService, private cs: CommunityService) { }

  ngOnInit() {
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
