import {Component, OnInit, Output} from '@angular/core';
import {CommunityService} from '../../../Services/community.service';

@Component({
  selector: 'app-discover-communities-mobile',
  templateUrl: './discover-communities-mobile.component.html',
  styleUrls: ['./discover-communities-mobile.component.css']
})
export class DiscoverCommunitiesMobileComponent implements OnInit {
  @Output() disCommData = [];
  pageNumber = '0';
  constructor(private cs: CommunityService) { }

  ngOnInit() {
    this.cs.getDiscoverCommunities(this.pageNumber);
    this.cs.discoverCommunityData.subscribe((data) => {
      this.disCommData = data['community'];
    });
  }

}
