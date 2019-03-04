import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-popups-login',
  templateUrl: './popups-login.component.html',
  styleUrls: ['./popups-login.component.css']
})
export class PopupsLoginComponent implements OnInit {
  @Input() loginStatus = true;
  constructor(private ss: SharedService) { }

  ngOnInit() {
  }
  closePopup() {
    this.loginStatus = false;
    this.ss.popupStatus.emit('none');
  }
}
