import {Component, OnInit} from '@angular/core';
import {CommunityService} from '../../../Services/community.service';
import {isUndefined} from 'util';
import {SharedService} from '../../../shared.service';

@Component({
  selector: 'app-sidebar-columns',
  templateUrl: './sidebar-columns.component.html',
  styleUrls: ['./sidebar-columns.component.css']
})
export class SidebarColumnsComponent implements OnInit {
  columns = [];
  communityId: number;
  commName = '';
  dataReceived = false;
  constructor(private cs: CommunityService, private ss: SharedService) { }

  ngOnInit() {
    if (!isUndefined(this.cs.commData['columns'])) {
      this.communityId = this.cs.commData['community']['id'];
      this.commName = this.cs.commData['community']['url'];
      this.columns = this.cs.commData['columns'];
      this.dataReceived = true;
    }
    this.cs.communityData.subscribe(
      (data: {}) => {
        this.communityId = data['community']['id'];
        this.commName = data['community']['url'];
        this.columns = data['columns'];
        this.dataReceived = true;
      }
    );
  }
  columnClicked() {
    this.ss.postFilterByColumn.emit('clicked');
  }
}
