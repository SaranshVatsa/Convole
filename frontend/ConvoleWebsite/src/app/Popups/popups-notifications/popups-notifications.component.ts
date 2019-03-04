import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-popups-notifications',
  templateUrl: './popups-notifications.component.html',
  styleUrls: ['./popups-notifications.component.css']
})
export class PopupsNotificationsComponent implements OnInit {
  @Input() notificationPopupStatus = false;
  constructor() { }

  ngOnInit() {
  }

}
