import {Component, ElementRef, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {SharedService} from '../../../shared.service';
import {UserService} from '../../../Services/user.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-home-page-after-login',
  templateUrl: './home-page-after-login.component.html',
  styleUrls: ['./home-page-after-login.component.css']
})
export class HomePageAfterLoginComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  @ViewChild('main_container') el: ElementRef;
  @Input() popupsStatus = false;
  @Input() feedbackPageStatus = false;
  @Input() notificationsPageStatus = false;
  @Input() settingsPageStatus = false;
  @Input() communitySelectionStatus = false;
  @Input() postOpenStatus = false;
  @Input() searchOpenStatus = false;
  @Input() postCreateType = 'none';
  @Output() postSingle = [];
  settingsPopupStatus = false;
  username = 'admin';
  unitClicked = false;
  prevScrollPosition = 0;
  constructor(private ss: SharedService,
              private us: UserService) {
    this.ss.mobilePageStatus.subscribe((data: any) => {
      if (data === 'postOpen') {
        this.postOpenStatus = true;
      }else if (data === 'settingsOpen') {
        this.settingsPageStatus = true;
        window.scrollTo(0, 0);
      }else if (data === 'none') {
        this.feedbackPageStatus = false;
        this.notificationsPageStatus = false;
        this.settingsPageStatus = false;
        this.communitySelectionStatus = false;
        this.postOpenStatus = false;
        this.searchOpenStatus = false;
      }
    });
    this.ss.popupStatus.subscribe((data: any) => {
      if (data === 'settings') {
        this.settingsPopupStatus = true;
      }else if (data === 'none') {
        this.settingsPopupStatus = false;
      }
    });
    this.ss.postCreateCloseEmitter.subscribe((data) => {
        this.postCreateType = data;
    });
  }

  ngOnInit() {
    this.ss.closePopups.emit(false);
    this.us.getUser(this.username.toString());
    this.ss.postEmitter.subscribe((data: any) => {
      this.postSingle = data;
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
