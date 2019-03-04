import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mobile-popups-alert-main',
  templateUrl: './mobile-popups-alert-main.component.html',
  styleUrls: ['./mobile-popups-alert-main.component.css']
})
export class MobilePopupsAlertMainComponent implements OnInit {
  @Input() alertPopupStatus = false;
  constructor() { }

  ngOnInit() {
  }
  closePopup() {
    this.alertPopupStatus = false;
  }
}
