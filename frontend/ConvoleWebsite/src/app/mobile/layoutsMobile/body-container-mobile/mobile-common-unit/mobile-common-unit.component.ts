import {Component, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mobile-common-unit',
  templateUrl: './mobile-common-unit.component.html',
  styleUrls: ['./mobile-common-unit.component.css']
})
export class MobileCommonUnitComponent implements OnInit {
  @Input() post = [];
  postType;
  @Input() postAndUserData = [];
  @Input() communityName: String;
  @Output() oldURL = '';
  currRoute = '';
  constructor(private router: Router) { }

  ngOnInit() {
    this.postType = this.post['type'];
    this.currRoute = this.router.url;
    this.oldURL = this.router.url;
  }

}
