import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mobile-search-page',
  templateUrl: './mobile-search-page.component.html',
  styleUrls: ['./mobile-search-page.component.css']
})
export class MobileSearchPageComponent implements OnInit {
  @Input() searchStatus = false;
  constructor() { }

  ngOnInit() {
  }
  goBack() {
    this.searchStatus = false;
  }

}
