import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {SharedService} from '../../../shared.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PostService} from '../../../Services/post.service';
import {isUndefined} from 'util';
import {CommunityService} from '../../../Services/community.service';
import {Location} from '@angular/common';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {UserService} from '../../../Services/user.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-body-container-mobile',
  templateUrl: './body-container-mobile.component.html',
  styleUrls: ['./body-container-mobile.component.css'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(45deg)' })),
      transition('rotated => default', animate('200ms ease-out')),
      transition('default => rotated', animate('200ms ease-in'))
    ])
  ]
})
export class BodyContainerMobileComponent implements OnInit, OnDestroy {
  subscription1: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  subscription4: Subscription;
  subscription5: Subscription;
  subscription6: Subscription;
  subscription7: Subscription;
  subscription8: Subscription;
  subscription9: Subscription;
  state = 'default';
  currRoute = '';
  routeName = '';
  columnSelected = 'all';
  commId;
  userCommFollowingData = [];
  communitiesList: string;
  @Input() username: any;
  @Output() postData = [];
  @Output() postAndUserData = [];
  @Output() id: any;
  @Output() postSingle = [];
  pageNumber = '1';
  @Output() communityName: String;
  @Output() communityId: any;
  postCreateOptionsStatus = false;
  postCreateType = '';
  sortDateValue = 'all';
  sortValue = 'All';
  mySaved = false;
  constructor(private router: Router,
              private ss: SharedService,
              private ps: PostService,
              private cs: CommunityService,
              private route: ActivatedRoute,
              private location: Location,
              private us: UserService) { }

  ngOnInit() {
    this.currRoute = this.router.url;
    this.routeName = this.route.snapshot.params['routeName'];
    this.route.params.subscribe((params: Params) => {
      this.routeName = params['routeName'];
    });
    if (this.currRoute.includes('/post/')) {
      if (this.subscription4) {
        this.subscription4.unsubscribe();
      }
      if (this.subscription5) {
        this.subscription5.unsubscribe();
      }
      if (this.subscription7) {
        this.subscription7.unsubscribe();
      }
      if (this.subscription9) {
        this.subscription9.unsubscribe();
      }
      let dataArray = [];
      dataArray = this.route.snapshot.params['data'].split('-');
      let postSingleId = dataArray[dataArray.length - 2];
      this.ps.getSinglePost(postSingleId);
      this.route.params.subscribe((params: Params) => {
        dataArray = params['data'].split('-');
        postSingleId = dataArray[dataArray.length - 2];
        this.ps.getSinglePost(postSingleId);
      });
      this.postSingle = this.ps.sPostData;
      this.ps.singlePostData.subscribe((data) => {
        this.postSingle = data;
        this.communityName = dataArray[dataArray.length - 1];
        this.ss.postEmitter.emit(this.postSingle);
        this.ss.mobilePostOpen.emit(this.route.snapshot.params['type']);
        this.ss.mobilePageStatus.emit('postOpen');
        this.ss.oldURLEmitter.emit(this.router.url);
      });
      this.route.params.subscribe((params: Params) => {
        dataArray = params['data'].split('-');
        this.communityName = dataArray[dataArray.length - 1];
      });
      this.route.params.subscribe((params: Params) => {
        this.ss.mobilePostOpen.emit(params['type']);
      });
    }
    if (!this.routeName.includes('@') && !this.routeName.includes('home')) {
      if (this.subscription4) {
        this.subscription4.unsubscribe();
      }
      if (this.subscription5) {
        this.subscription5.unsubscribe();
      }
      if (this.subscription7) {
        this.subscription7.unsubscribe();
      }
      if (!isUndefined(this.route.snapshot.params['column']) && this.route.snapshot.params['column'] !== 'all') {
        this.columnSelected = this.cs.getColumnId(this.route.snapshot.params['column']);
        this.commId = this.cs.getColumnId(this.route.snapshot.params['column']);
        this.mySaved = false;
        this.ps.getPostForCommunity(this.pageNumber, this.commId, this.columnSelected, this.sortValue, this.sortDateValue);
        this.communityName = this.route.snapshot.params['routeName'];
      } else {
        this.subscription1 = this.cs.communityData.subscribe((data) => {
          this.commId = data['community']['id'];
          this.subscription2 = this.route.params.subscribe((params: Params) => {
            let i;
            for (i = 0; i < data['columns'].length; i++) {
              if (data['columns'][i]['url'] === params['column']) {
                this.columnSelected = data['columns'][i]['id'];
                break;
              }
            }
            if (params['column'] === 'random') {
              this.columnSelected = 'random';
            } else if (params['column'] === 'all') {
              this.columnSelected = 'all';
            }
            this.communityName = this.route.snapshot.params['routeName'];
            this.mySaved = false;
            this.ps.getPostForCommunity(this.pageNumber, this.commId, this.columnSelected, this.sortValue, this.sortDateValue);
          });
        });
        this.subscription3 = this.ss.postSort.subscribe((data) => {
          this.sortValue = data;
          this.mySaved = false;
          this.ps.getPostForCommunity(this.pageNumber, this.commId, this.columnSelected, this.sortValue, this.sortDateValue);
        });
        this.subscription8 = this.ss.postSortDate.subscribe((data) => {
          this.sortDateValue = data;
          this.mySaved = false;
          this.ps.getPostForCommunity(this.pageNumber, this.commId, this.columnSelected, this.sortValue, this.sortDateValue);
        });
        this.subscription9 = this.ss.mySavedEmitter.subscribe((data) => {
          if (data === 'saved') {
            this.mySaved = true;
            this.ps.getMySaved(this.commId, this.columnSelected);
          }
        });
      }
    }
    if (this.routeName.includes('home')) {
      if (this.subscription1) {
        this.subscription1.unsubscribe();
      }
      if (this.subscription2) {
        this.subscription2.unsubscribe();
      }
      if (this.subscription3) {
        this.subscription3.unsubscribe();
      }
      if (this.subscription8) {
        this.subscription8.unsubscribe();
      }
      if (this.subscription9) {
        this.subscription9.unsubscribe();
      }
      this.userCommFollowingData = this.us.uData['community_data'];
      this.communitiesList = '';
      if (!this.us.uData['community_data']) {
        this.subscription4 = this.us.userData.subscribe((data) => {
          this.userCommFollowingData = data['community_data'];
          let i;
          if (this.userCommFollowingData) {
            for (i = 0; i < this.userCommFollowingData.length; i++) {
              this.communitiesList += this.userCommFollowingData[i]['community']['id'].toString();
              if (i + 1 < this.userCommFollowingData.length) {
                this.communitiesList += ',';
              }
            }
            if (this.route.snapshot.params['routeName'].includes('home')) {
              this.mySaved = false;
              this.ps.getPostForHome(this.pageNumber, this.communitiesList, this.sortValue, this.sortDateValue);
            }
          }
        });
      } else {
        let i;
        if (this.userCommFollowingData) {
          for (i = 0; i < this.userCommFollowingData.length; i++) {
            this.communitiesList += this.userCommFollowingData[i]['community']['id'];
            if (i + 1 < this.userCommFollowingData.length) {
              this.communitiesList += '%2C';
            }
          }
        }
        this.mySaved = false;
        this.ps.getPostForHome(this.pageNumber, this.communitiesList, this.sortValue, this.sortDateValue);
      }
      this.subscription5 = this.ss.postSort.subscribe((data) => {
        if (this.route.snapshot.params['routeName'].includes('home')) {
          this.sortValue = data;
          this.mySaved = false;
          this.ps.getPostForHome(this.pageNumber, this.communitiesList, this.sortValue, this.sortDateValue);
        }
      });
      this.subscription7 = this.ss.postSortDate.subscribe((data) => {
        this.sortDateValue = data;
        this.mySaved = false;
        this.ps.getPostForHome(this.pageNumber, this.communitiesList, this.sortValue, this.sortDateValue);
      });
    }
    // this.ps.getDiscussion(this.pageNumber);
    // this.ps.getUserAndDiscussion(this.pageNumber);
    // if (!isUndefined(this.ps.pData['id'])) {
    //   this.postData = this.ps.pData;
    // }
    this.subscription6 = this.ps.postData.subscribe(
      (data) => {
        if (!data['Activity']) {
          this.mySaved = true;
        } else {
          this.mySaved = false;
        }
        if (this.mySaved === true ) {
          this.postData = data;
          if (!data || !data[0]) {
            this.postData = [];
          }
        } else {
          this.postData = data['Posts'];
          if (!data['Posts'] || !data['Posts'][0]) {
            this.postData = [];
          }
          this.postAndUserData = data['Activity'];
        }
      });
    if (!isUndefined(this.ps.pAndUserData['id'])) {
      this.postAndUserData = this.ps.pAndUserData['Posts'];
      this.postAndUserData = this.ps.pAndUserData['Activity'];
    }
  }
  unitClicked(p) {
    this.postSingle = p;
    let unitName;
    if (p['type'] === 1) {
      unitName = 'link';
    } else if (p['type'] === 6) {
      unitName = 'discussion';
    } else if (p['type'] === 4) {
      unitName = 'event';
    } else if (p['type'] === 5) {
      unitName = 'object';
    }
    this.ss.postEmitter.emit(this.postSingle);
    this.ss.mobilePostOpen.emit(unitName);
    this.ss.mobilePageStatus.emit('postOpen');
    this.ss.oldURLEmitter.emit(this.router.url);
    let title = p['title'].toString();
    title = title.toLowerCase();
    title = title.replace(/\s+/g, '-');
    title = title.replace('/', '-');
    title = title.replace('.', '');
    title = title + '-' + p['id'] + '-' + p['community'];
    this.location.replaceState(this.router.url + '/post/' + unitName + '/' + title );
    this.ss.allPostsEmit(this.postData);
  }
  showPostCreateOptions() {
    this.postCreateOptionsStatus = !this.postCreateOptionsStatus;
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }
  openPostCreate(event) {
    if (event.target.id === 'add_post_options_link') {
      this.ss.postCreateCloseEmitter.emit('link');
    } else if (event.target.id === 'add_post_options_discussion') {
      this.ss.postCreateCloseEmitter.emit('discussion');
    } else if (event.target.id === 'add_post_options_event') {
      this.ss.postCreateCloseEmitter.emit('event');
    } else if (event.target.id === 'add_post_options_object') {
      this.ss.postCreateCloseEmitter.emit('object');
    }
  }
  closePopups(event) {
    if (event.target.id !== 'add_post_button') {
      this.postCreateOptionsStatus = false;
      if (this.state === 'rotated') {
        this.state = 'default';
      }
    }
  }
  ngOnDestroy() {
    if (this.subscription1) {
      this.subscription1.unsubscribe();
    }
    if (this.subscription2) {
      this.subscription2.unsubscribe();
    }
    if (this.subscription3) {
      this.subscription3.unsubscribe();
    }
    if (this.subscription4) {
      this.subscription4.unsubscribe();
    }
    if (this.subscription5) {
      this.subscription5.unsubscribe();
    }
    if (this.subscription6) {
      this.subscription6.unsubscribe();
    }
    if (this.subscription7) {
      this.subscription7.unsubscribe();
    }
    if (this.subscription8) {
      this.subscription8.unsubscribe();
    }
    if (this.subscription9) {
      this.subscription9.unsubscribe();
    }
  }
}
