import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popups-feedback',
  templateUrl: './popups-feedback.component.html',
  styleUrls: ['./popups-feedback.component.css']
})
export class PopupsFeedbackComponent implements OnInit {
  popupStatus = true;
  constructor() { }

  ngOnInit() {
  }
  closePopup(event) {
    if (event.target.id === 'popup_container_feedback') {
      this.popupStatus = false;
    }
  }

}
