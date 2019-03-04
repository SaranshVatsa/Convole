import {Component, Input, OnInit, Output} from '@angular/core';
import {SharedService} from '../../shared.service';
import {UserService} from '../../Services/user.service';
import {ActivatedRoute, Params} from '@angular/router';
import {UserPublicService} from '../../Services/user-public.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  @Input() popupsStatus = false;
  @Input() feedbackPageStatus = false;
  @Input() notificationsPageStatus = false;
  @Input() settingsPageStatus = false;
  @Input() postOpenStatus = false;
  @Input() searchOpenStatus = false;
  @Input() postCreateType = 'none';
  username: any;
  @Input() userData = {};
  @Output() postSingle = [];
  currScrollPosition: number;
  unitClicked = false;
  constructor(private ss: SharedService, private us: UserService, private route: ActivatedRoute, private ups: UserPublicService) {
    this.ss.mobilePageStatus.subscribe((data: any) => {
      if (data === 'postOpen') {
        this.postOpenStatus = true;
        this.currScrollPosition = window.pageYOffset;
        window.scrollTo(0, 0);
      }else if (data === 'none') {
        this.feedbackPageStatus = false;
        this.notificationsPageStatus = false;
        this.settingsPageStatus = false;
        this.postOpenStatus = false;
        this.searchOpenStatus = false;
        window.scrollTo(0, this.currScrollPosition);
      }
    });
  }

  ngOnInit() {
    this.ss.closePopups.emit(false);
    this.username = this.route.snapshot.params['routeName'];
    this.username = this.username.substring(1, this.username.length);
    this.route.params.subscribe((params: Params) => {
      this.username = params['routeName'];
      this.username = this.username.substring(1, this.username.length);
      this.ups.getUser(this.username.toString());
    });
    this.ups.userPublicData.subscribe(
      (data: {}) => {
        this.userData = data;
      });
    this.ss.postEmitter.subscribe((data: any) => {
      this.postSingle = data;
    });
    this.ss.postCreateCloseEmitter.subscribe((data) => {
      this.postCreateType = data;
    });
    this.ss.postOpenClicked.subscribe((data) => {
      if (data === 'clicked') {
        this.unitClicked = true;
      } else {
        this.unitClicked = false;
      }
    });
  }
  closePopups(event) {
    if (event.target.id !== 'add_post_button') {
      this.ss.closePopups.emit(false);
      this.popupsStatus = false;
    }
  }
}
