import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-popups-alert-main',
  templateUrl: './popups-alert-main.component.html',
  styleUrls: ['./popups-alert-main.component.css']
})
export class PopupsAlertMainComponent implements OnInit {
  @Input() alertPopupStatus = false;
  constructor() { }

  ngOnInit() {
  }
  closePopup() {
    this.alertPopupStatus = false;
  }
}
