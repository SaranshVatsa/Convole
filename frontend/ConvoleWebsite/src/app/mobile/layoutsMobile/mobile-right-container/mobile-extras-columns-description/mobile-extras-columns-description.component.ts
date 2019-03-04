import { Component, OnInit } from '@angular/core';
import {CommunityService} from '../../../../Services/community.service';

@Component({
  selector: 'app-mobile-extras-columns-description',
  templateUrl: './mobile-extras-columns-description.component.html',
  styleUrls: ['./mobile-extras-columns-description.component.css']
})
export class MobileExtrasColumnsDescriptionComponent implements OnInit {
  communityColumns = [];
  constructor(private cs: CommunityService) { }

  ngOnInit() {
    this.communityColumns = this.cs.commData['columns'];
  }

}
