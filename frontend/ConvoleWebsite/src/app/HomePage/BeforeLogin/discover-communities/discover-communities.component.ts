import {Component, OnInit, Output} from '@angular/core';
import {CommunityService} from '../../../Services/community.service';

@Component({
  selector: 'app-discover-communities',
  templateUrl: './discover-communities.component.html',
  styleUrls: ['./discover-communities.component.css']
})
export class DiscoverCommunitiesComponent implements OnInit {
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
