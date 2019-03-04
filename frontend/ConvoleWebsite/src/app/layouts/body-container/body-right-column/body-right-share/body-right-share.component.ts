import { Component, OnInit } from '@angular/core';
import {CommunityService} from '../../../../Services/community.service';

@Component({
  selector: 'app-body-right-share',
  templateUrl: './body-right-share.component.html',
  styleUrls: ['./body-right-share.component.css']
})
export class BodyRightShareComponent implements OnInit {
  communityName: string;
  communityURL: string;
  constructor(private cs: CommunityService) { }

  ngOnInit() {
    this.cs.communityData.subscribe((data) => {
      this.communityName = data['community']['name'];
      this.communityURL = data['community']['url'];
    });
  }

}
