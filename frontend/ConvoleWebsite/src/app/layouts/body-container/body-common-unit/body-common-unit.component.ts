import {Component, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-body-common-unit',
  templateUrl: './body-common-unit.component.html',
  styleUrls: ['./body-common-unit.component.css']
})
export class BodyCommonUnitComponent implements OnInit {
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
