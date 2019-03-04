import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mobile-community-selection',
  templateUrl: './mobile-community-selection.component.html',
  styleUrls: ['./mobile-community-selection.component.css']
})
export class MobileCommunitySelectionComponent implements OnInit {
  @Input() communitySelectionStatus = false;
  constructor() { }

  ngOnInit() {
  }

}
