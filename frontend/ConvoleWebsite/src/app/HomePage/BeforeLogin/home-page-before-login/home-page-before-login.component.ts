import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page-before-login',
  templateUrl: './home-page-before-login.component.html',
  styleUrls: ['./home-page-before-login.component.css']
})
export class HomePageBeforeLoginComponent implements OnInit {
  @Input() loginPageStatus = false;
  constructor() { }

  ngOnInit() {
  }
}
