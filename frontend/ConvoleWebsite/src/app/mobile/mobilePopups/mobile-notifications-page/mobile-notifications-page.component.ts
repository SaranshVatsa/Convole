import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mobile-notifications-page',
  templateUrl: './mobile-notifications-page.component.html',
  styleUrls: ['./mobile-notifications-page.component.css']
})
export class MobileNotificationsPageComponent implements OnInit {
  @Input() notificationStatus = true;
  constructor() { }

  ngOnInit() {
  }
  goBack() {
    this.notificationStatus = false;
  }
}
