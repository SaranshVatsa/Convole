import { Component, OnInit } from '@angular/core';
import {CommunityService} from '../../../../Services/community.service';

@Component({
  selector: 'app-right-column-home',
  templateUrl: './right-column-home.component.html',
  styleUrls: ['./right-column-home.component.css']
})
export class RightColumnHomeComponent implements OnInit {
  communityDescription = '';
  constructor(private cs: CommunityService) {
  }

  ngOnInit() {
    this.cs.communityData.subscribe(
      (data: {}) => {
        this.communityDescription = data['community']['description'];
      }
    );
  }

}
