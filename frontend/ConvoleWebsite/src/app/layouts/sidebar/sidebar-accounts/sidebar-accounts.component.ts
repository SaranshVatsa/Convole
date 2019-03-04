import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../shared.service';

@Component({
  selector: 'app-sidebar-accounts',
  templateUrl: './sidebar-accounts.component.html',
  styleUrls: ['./sidebar-accounts.component.css', '../sidebar-top/sidebar-top.component.css']
})
export class SidebarAccountsComponent implements OnInit {

  constructor(private ss: SharedService) { }

  ngOnInit() {
  }
  settingsOpen() {
    this.ss.mobilePageStatus.emit('settingsOpen');
    this.ss.popupStatus.emit('settings');
  }

}
