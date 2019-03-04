import {Component, OnInit} from '@angular/core';
import {UserService} from '../../Services/user.service';
import {isUndefined} from 'util';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-popups-settings',
  templateUrl: './popups-settings.component.html',
  styleUrls: ['./popups-settings.component.css']
})
export class PopupsSettingsComponent implements OnInit {
  user = [];
  email: string;
  username: string;
  mails1Button: boolean;
  mails2Button: boolean;
  mails3Button: boolean;
  mails4Button: boolean;
  pushNotifButton: boolean;
  pushNotifLikesButton: boolean;
  pushNotifAgreeButton: boolean;
  pushNotifDisagreeButton: boolean;
  pushNotifReminderButton: boolean;
  pushNotifFollowersButton: boolean;
  pushNotifUpdatesButton: boolean;
  privacyLikesButton: boolean;
  privacyAgreeButton: boolean;
  privacyDisagreeButton: boolean;
  privacySavesButton: boolean;
  privacyAttendingButton: boolean;
  privacyReviewsButton: boolean;
  settingsStatus = true;
  constructor(private us: UserService, private ss: SharedService) { }

  ngOnInit() {
    if (!isUndefined(this.us.uData['my_data'])) {
      this.user = this.us.uData['my_data'];
      this.email = this.user['email'];
      this.username = this.user['username'];
      this.mails1Button = this.user['reminder_mail'];
      this.mails2Button = this.user['updates_mail'];
      this.mails3Button = this.user['reported_mail'];
      this.mails4Button = this.user['removed_mail'];
      this.pushNotifButton = true;
      this.pushNotifLikesButton = true;
      this.pushNotifAgreeButton = this.user['agreed_push'];
      this.pushNotifDisagreeButton = this.user['Disagreed_push'];
      this.pushNotifReminderButton = this.user['reminder_push'];
      this.pushNotifFollowersButton = this.user['follow_push'];
      this.pushNotifUpdatesButton = this.user['communityUpdates_push'];
      this.privacyLikesButton = this.user['like_privacy'];
      this.privacyAgreeButton = this.user['agreed_privacy'];
      this.privacyDisagreeButton = this.user['Disagreed_privacy'];
      this.privacySavesButton = this.user['saved_privacy'];
      this.privacyAttendingButton = this.user['attending_privacy'];
      this.privacyReviewsButton = this.user['reviewed_privacy'];
    } else {
      this.us.userData.subscribe(
        (data: {}) => {
          this.user = data['my_data'];
          this.email = this.user['email'];
          this.username = this.user['username'];
          this.mails1Button = this.user['reminder_mail'];
          this.mails2Button = this.user['updates_mail'];
          this.mails3Button = this.user['reported_mail'];
          this.mails4Button = this.user['removed_mail'];
          this.pushNotifButton = true;
          this.pushNotifLikesButton = true;
          this.pushNotifAgreeButton = this.user['agreed_push'];
          this.pushNotifDisagreeButton = this.user['Disagreed_push'];
          this.pushNotifReminderButton = this.user['reminder_push'];
          this.pushNotifFollowersButton = this.user['follow_push'];
          this.pushNotifUpdatesButton = this.user['communityUpdates_push'];
          this.privacyLikesButton = this.user['like_privacy'];
          this.privacyAgreeButton = this.user['agreed_privacy'];
          this.privacyDisagreeButton = this.user['Disagreed_privacy'];
          this.privacySavesButton = this.user['saved_privacy'];
          this.privacyAttendingButton = this.user['attending_privacy'];
          this.privacyReviewsButton = this.user['reviewed_privacy'];
        }
      );
    }
  }
  public mails1Toggle(event) {
    console.log(event.target.id);
    if (event.target.id === 'mails_1_on') {
      this.mails1Button = true;
      this.us.changeSettings(JSON.parse('{"reminder_mail": true}'));
    } else {
      this.mails1Button = false;
      this.us.changeSettings(JSON.parse('{"reminder_mail": false}'));
    }
  }
  public mails2Toggle(event) {
    console.log(event.target.id);
    if (event.target.id === 'mails_2_on') {
      this.us.changeSettings(JSON.parse('{"updates_mail": true}'));
      this.mails2Button = true;
    } else {
      this.us.changeSettings(JSON.parse('{"updates_mail": false}'));
      this.mails2Button = false;
    }
  }
  public mails3Toggle(event) {
    console.log(event.target.id);
    if (event.target.id === 'mails_3_on') {
      this.us.changeSettings(JSON.parse('{"reported_mail": true}'));
      this.mails3Button = true;
    } else {
      this.us.changeSettings(JSON.parse('{"reported_mail": false}'));
      this.mails3Button = false;
    }
  }
  public mails4Toggle(event) {
    console.log(event.target.id);
    if (event.target.id === 'mails_4_on') {
      this.us.changeSettings(JSON.parse('{"removed_mail": true}'));
      this.mails4Button = true;
    } else {
      this.us.changeSettings(JSON.parse('{"removed_mail": false}'));
      this.mails4Button = false;
    }
  }
  public pushNotifToggle(event) {
    console.log(event.target.id);
    if (event.target.id === 'push_notif_on') {
      this.pushNotifButton = true;
    } else {
      this.pushNotifButton = false;
    }
  }
  public pushNotifLikesToggle(event) {
    console.log(event.target.id);
    if (event.target.id === 'push_notif_like_on') {
      this.pushNotifLikesButton = true;
    } else {
      this.pushNotifLikesButton = false;
    }
  }
  public pushNotifAgreeToggle(event) {
    console.log(event.target.id);
    if (event.target.id === 'push_notif_agree_on') {
      this.us.changeSettings(JSON.parse('{"agreed_push": true}'));
      this.pushNotifAgreeButton = true;
    } else {
      this.us.changeSettings(JSON.parse('{"agreed_push": false}'));
      this.pushNotifAgreeButton = false;
    }
  }
  public pushNotifDisagreeToggle(event) {
    console.log(event.target.id);
    if (event.target.id === 'push_notif_disagree_on') {
      this.us.changeSettings(JSON.parse('{"Disagreed_push": true}'));
      this.pushNotifDisagreeButton = true;
    } else {
      this.us.changeSettings(JSON.parse('{"Disagreed_push": false}'));
      this.pushNotifDisagreeButton = false;
    }
  }
  public pushNotifReminderToggle(event) {
    console.log(event.target.id);
    if (event.target.id === 'push_notif_reminder_on') {
      this.us.changeSettings(JSON.parse('{"reminder_push": true}'));
      this.pushNotifReminderButton = true;
    } else {
      this.us.changeSettings(JSON.parse('{"reminder_push": false}'));
      this.pushNotifReminderButton = false;
    }
  }
  public pushNotifFollowersToggle(event) {
    console.log(event.target.id);
    if (event.target.id === 'push_notif_follower_on') {
      this.us.changeSettings(JSON.parse('{"follow_push": true}'));
      this.pushNotifFollowersButton = true;
    } else {
      this.us.changeSettings(JSON.parse('{"follow_push": false}'));
      this.pushNotifFollowersButton = false;
    }
  }
  public pushNotifUpdatesToggle(event) {
    console.log(event.target.id);
    if (event.target.id === 'push_notif_updates_on') {
      this.us.changeSettings(JSON.parse('{"communityUpdates_push": true}'));
      this.pushNotifUpdatesButton = true;
    } else {
      this.us.changeSettings(JSON.parse('{"communityUpdates_push": false}'));
      this.pushNotifUpdatesButton = false;
    }
  }
  public privacyLikesToggle(event) {
    console.log(event.target.id);
    if (event.target.id === 'privacy_likes_on') {
      this.us.changeSettings(JSON.parse('{"like_privacy": true}'));
      this.privacyLikesButton = true;
    } else {
      this.us.changeSettings(JSON.parse('{"like_privacy": false}'));
      this.privacyLikesButton = false;
    }
  }
  public privacySavesToggle(event) {
    console.log(event.target.id);
    if (event.target.id === 'privacy_saves_on') {
      this.us.changeSettings(JSON.parse('{"saved_privacy": true}'));
      this.privacySavesButton = true;
    } else {
      this.us.changeSettings(JSON.parse('{"saved_privacy": false}'));
      this.privacySavesButton = false;
    }
  }
  public privacyAgreeToggle(event) {
    console.log(event.target.id);
    if (event.target.id === 'privacy_agree_on') {
      this.us.changeSettings(JSON.parse('{"agreed_privacy": true}'));
      this.privacyAgreeButton = true;
    } else {
      this.us.changeSettings(JSON.parse('{"agreed_privacy": false}'));
      this.privacyAgreeButton = false;
    }
  }
  public privacyDisagreeToggle(event) {
    console.log(event.target.id);
    if (event.target.id === 'privacy_disagree_on') {
      this.us.changeSettings(JSON.parse('{"Disagreed_privacy": true}'));
      this.privacyDisagreeButton = true;
    } else {
      this.us.changeSettings(JSON.parse('{"Disagreed_privacy": false}'));
      this.privacyDisagreeButton = false;
    }
  }
  public privacyAttendingToggle(event) {
    console.log(event.target.id);
    if (event.target.id === 'privacy_attending_on') {
      this.us.changeSettings(JSON.parse('{"attending_privacy": true}'));
      this.privacyAttendingButton = true;
    } else {
      this.us.changeSettings(JSON.parse('{"attending_privacy": false}'));
      this.privacyAttendingButton = false;
    }
  }
  public privacyReviewsToggle(event) {
    console.log(event.target.id);
    if (event.target.id === 'privacy_reviews_on') {
      this.us.changeSettings(JSON.parse('{"reviewed_privacy": true}'));
      this.privacyReviewsButton = true;
    } else {
      this.us.changeSettings(JSON.parse('{"reviewed_privacy": false}'));
      this.privacyReviewsButton = false;
    }
  }
  closePopup() {
    this.settingsStatus = false;
    this.ss.popupStatus.emit('none');
    this.ss.mobilePageStatus.emit('none');
  }
}
