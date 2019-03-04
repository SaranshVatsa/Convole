import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-popups-search',
  templateUrl: './popups-search.component.html',
  styleUrls: ['./popups-search.component.css']
})
export class PopupsSearchComponent implements OnInit {
  @Input() searchPopupStatus = false;
  constructor() { }

  ngOnInit() {
  }
}
