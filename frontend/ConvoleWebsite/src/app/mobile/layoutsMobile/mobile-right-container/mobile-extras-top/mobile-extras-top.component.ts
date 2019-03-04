import { Component, OnInit } from '@angular/core';
import {CommunityService} from '../../../../Services/community.service';

@Component({
  selector: 'app-mobile-extras-top',
  templateUrl: './mobile-extras-top.component.html',
  styleUrls: ['./mobile-extras-top.component.css']
})
export class MobileExtrasTopComponent implements OnInit {
  communityDescription;
  constructor(private cs: CommunityService) { }

  ngOnInit() {
    if (this.cs.commData['community']) {
      this.communityDescription = this.cs.commData['community']['description'];
    }
  }

}
