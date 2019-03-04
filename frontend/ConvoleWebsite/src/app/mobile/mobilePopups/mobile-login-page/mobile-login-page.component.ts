import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../../shared.service';

@Component({
  selector: 'app-mobile-login-page',
  templateUrl: './mobile-login-page.component.html',
  styleUrls: ['./mobile-login-page.component.css']
})
export class MobileLoginPageComponent implements OnInit {
  @Input() loginStatus = false;
  constructor(private ss: SharedService) { }

  ngOnInit() {
  }
  goBack() {
    this.loginStatus = false;
    this.ss.mobilePageStatus.emit('none');
  }
}
