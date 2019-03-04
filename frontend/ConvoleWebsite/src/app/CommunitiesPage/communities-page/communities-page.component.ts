import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {SharedService} from '../../shared.service';
import {ActivatedRoute, Params} from '@angular/router';
import {CommunityService} from '../../Services/community.service';
import {Subscription} from 'rxjs/Subscription';
import {UserService} from '../../Services/user.service';

@Component({
  selector: 'app-communities-page',
  templateUrl: './communities-page.component.html',
  styleUrls: ['./communities-page.component.css']
})
export class CommunitiesPageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  @Input() popupsStatus = false;
  loginPopupStatus = false;
  @Input() feedbackPageStatus = false;
  @Input() notificationsPageStatus = false;
  @Input() settingsPageStatus = false;
  @Input() postOpenStatus = false;
  @Input() searchOpenStatus = false;
  @Input() loginPageStatus = false;
  @Input() postCreateType = 'none';
  id: any;
  @Input() communityData = {};
  @Output() postSingle = [];
  currScrollPosition: number;
  @Output() selectedCommunities = 'Columns';
  @Output() communityName: String;
  oldComm = '';
  unitClicked = false;
  prevScrollPosition = 0;
  plus18 = false;
  userPlus18 = false;
  userLoggedIn = false;
  currDate: Date;
  constructor(private ss: SharedService,
              private route: ActivatedRoute,
              private cs: CommunityService,
              private us: UserService) {
    this.ss.popupStatus.subscribe((data) => {
      if (data === 'login') {
        this.loginPopupStatus = true;
      } else {
        this.loginPopupStatus = false;
      }
    });
    this.ss.mobilePageStatus.subscribe((data: any) => {
      if (data === 'postOpen') {
        this.postOpenStatus = true;
        this.currScrollPosition = 0;
        this.currScrollPosition = window.pageYOffset;
        window.scrollTo(0, 0);
      }else if (data === 'settingsOpen') {
        this.settingsPageStatus = true;
        window.scrollTo(0, 0);
      } else if (data === 'loginOpen') {
        this.loginPageStatus = true;
        window.scrollTo(0, 0);
      } else if (data === 'none') {
        this.feedbackPageStatus = false;
        this.notificationsPageStatus = false;
        this.settingsPageStatus = false;
        this.postOpenStatus = false;
        this.searchOpenStatus = false;
        this.loginPageStatus = false;
        this.selectedCommunities = 'Posts';
        window.scrollTo(0, this.currScrollPosition);
      }
    });
  }

  ngOnInit() {
    this.ss.closePopups.emit(false);
    this.id = this.route.snapshot.params['routeName'];
    if (this.id) {
      this.cs.getCommunity(this.id.toString());
    }
    this.route.params.subscribe((params: Params) => {
      if (params['routeName'] !== this.oldComm) {
        this.oldComm = params['routeName'];
        this.id = params['routeName'];
        this.cs.getCommunity(this.id.toString());
      }
    });
    this.cs.communityData.subscribe(
      (data: {}) => {
        this.communityData = data;
        this.communityName = data['community']['name'];
        this.plus18 = data['community']['plus18'];
        if (this.plus18) {
          if (this.us.uData['my_data']) {
            this.userLoggedIn = true;
            this.userPlus18 = this.us.uData['my_data']['plus18'];
          }
        }
      });
    this.ss.postEmitter.subscribe((data: any) => {
      this.postSingle = data;
    });
    this.ss.postCreateCloseEmitter.subscribe((data) => {
      this.postCreateType = data;
    });
    this.subscription = this.ss.postOpenClicked.subscribe((data) => {
      if (data === 'clicked') {
        this.prevScrollPosition = window.pageYOffset;
        this.unitClicked = true;
      } else {
        this.unitClicked = false;
        setTimeout(() => {document.documentElement.scrollTo(0, this.prevScrollPosition); }, 100);
      }
    });
  }
  closePopups(event) {
    if (event.target.id !== 'add_post_button') {
      this.ss.closePopups.emit(false);
      this.popupsStatus = false;
    }
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
