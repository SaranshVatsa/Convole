import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page-before-login-top',
  templateUrl: './home-page-before-login-top.component.html',
  styleUrls: ['./home-page-before-login-top.component.css']
})
export class HomePageBeforeLoginTopComponent implements OnInit {
  @Input() suggestionsStatus = true;
  @Input() loginPopupStatus = false;
  constructor() { }

  ngOnInit() {
  }
  displaySuggestions() {
    this.suggestionsStatus = false;
  }
  suggestionsClose() {
    this.suggestionsStatus = true;
  }
  openLoginPopup() {
    this.loginPopupStatus = !this.loginPopupStatus;
  }
}
