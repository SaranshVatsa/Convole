import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mobile-popups-alert-small',
  templateUrl: './mobile-popups-alert-small.component.html',
  styleUrls: ['./mobile-popups-alert-small.component.css']
})
export class MobilePopupsAlertSmallComponent implements OnInit {
  @Input() alertSmallPopup = false;
  constructor() { }

  ngOnInit() {
  }
  closePopup() {
    this.alertSmallPopup = false;
  }
}
