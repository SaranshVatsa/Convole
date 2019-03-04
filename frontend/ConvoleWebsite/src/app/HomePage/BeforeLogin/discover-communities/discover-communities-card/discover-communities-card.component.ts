import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-discover-communities-card',
  templateUrl: './discover-communities-card.component.html',
  styleUrls: ['./discover-communities-card.component.css']
})
export class DiscoverCommunitiesCardComponent implements OnInit {
  @Input() commData = [];
  commName: string;
  memberCount: number;
  communityDate: any;
  currDate: any;
  createdPast: string;
  constructor() { }

  ngOnInit() {
    this.commName = this.commData['name'];
    this.memberCount = this.commData['memberCount'];
    this.currDate = new Date();
    this.communityDate = this.commData['timeOfCreation'];
    if ((this.currDate.getFullYear() - this.communityDate.slice(0, 4)) > 0) {
      this.createdPast = (this.currDate.getFullYear() - this.communityDate.slice(0, 4)).toString();
      this.createdPast += ' Years';
    }else if ((this.currDate.getMonth() - this.communityDate.slice(5, 7) + 1) > 0) {
      this.createdPast = (this.currDate.getMonth() - this.communityDate.slice(5, 7) + 1 ).toString();
      this.createdPast += ' Months';
    }else if ((this.currDate.getDate() - this.communityDate.slice(8, 10)) >= 0) {
      this.createdPast = (this.currDate.getDate() - this.communityDate.slice(8, 10)).toString();
      this.createdPast += ' Days';
    }
  }

}
