import { Component, OnInit } from '@angular/core';
import {CommunityService} from '../../../../Services/community.service';

@Component({
  selector: 'app-body-right-columns-description',
  templateUrl: './body-right-columns-description.component.html',
  styleUrls: ['./body-right-columns-description.component.css']
})
export class BodyRightColumnsDescriptionComponent implements OnInit {
  columns = [];
  constructor( private cs: CommunityService) { }

  ngOnInit() {
    this.cs.communityData.subscribe(
      (data: {}) => {
        this.columns = data['columns'];
        // console.log(this.columns);
      }
    );
  }

}
