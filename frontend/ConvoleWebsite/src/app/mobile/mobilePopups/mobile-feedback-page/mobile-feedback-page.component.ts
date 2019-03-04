import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mobile-feedback-page',
  templateUrl: './mobile-feedback-page.component.html',
  styleUrls: ['./mobile-feedback-page.component.css']
})
export class MobileFeedbackPageComponent implements OnInit {
  @Input() feedbackStatus = false;
  constructor() { }

  ngOnInit() {
  }
  goBack() {
    this.feedbackStatus = false;
  }
}
