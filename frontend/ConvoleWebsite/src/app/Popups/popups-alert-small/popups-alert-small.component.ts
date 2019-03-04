import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-popups-alert-small',
  templateUrl: './popups-alert-small.component.html',
  styleUrls: ['./popups-alert-small.component.css']
})
export class PopupsAlertSmallComponent implements OnInit {
  @Input() alertSmallPopup = false;
  constructor() {
  }
  ngOnInit() {
  }
  closePopup() {
      this.alertSmallPopup = false;
  }
}
