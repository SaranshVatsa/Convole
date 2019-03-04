import {Component, ElementRef, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PostService} from '../../Services/post.service';
import {isUndefined} from 'util';
import {SharedService} from '../../shared.service';
import {CommunityService} from '../../Services/community.service';
import {Location} from '@angular/common';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {UserService} from '../../Services/user.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-body-container',
  templateUrl: './body-container.component.html',
  styleUrls: ['./body-container.component.css'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(45deg)' })),
      transition('rotated => default', animate('200ms ease-out')),
      transition('default => rotated', animate('200ms ease-in'))
    ])
  ]
})
export class BodyContainerComponent implements OnInit, OnDestroy {
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
  routeName;
  userCommFollowingData = [];
  commId = '';
  communitiesList = '';
  @Input() unitClicked =  false;
  clickedUnit: String;
  @Output() postData = [];
  @Output() postAndUserData = [];
  @Output() id: any;
  @Input() username: any;
  @Output() postSingle = [];
  pageNumber = '1';
  @Output() communityName: string;
  @Output() oldURL = '';
  postCreateOptionsStatus = false;
  postCreateType = '';
  columnSelected = 'all';
  sortValue = 'All';
  sortDateValue = 'all';
  communityData = [];
  mySaved = false;
  postLoaded = false;
  constructor(private router: Router,
              private cs: CommunityService,
              private ps: PostService,
              private route: ActivatedRoute,
              private ss: SharedService,
              private location: Location,
              private us: UserService) { }

  ngOnInit() {
    this.currRoute = this.router.url;
    this.oldURL = this.currRoute;
    this.routeName = this.route.snapshot.params['routeName'];
    this.route.params.subscribe((params: Params) => {
      this.routeName = params['routeName'];
    });
    if (this.routeName.includes('home')) {
      if (this.subscription3) {
        this.subscription3.unsubscribe();
      }
      if (this.subscription4) {
        this.subscription4.unsubscribe();
      }
      if (this.subscription5) {
        this.subscription5.unsubscribe();
      }
      if (this.subscription8) {
        this.subscription8.unsubscribe();
      }
      if (this.subscription9) {
        this.subscription9.unsubscribe();
      }
      this.mySaved = false;
      this.userCommFollowingData = this.us.uData['community_data'];
      this.communitiesList = '';
      if (!this.us.uData['community_data']) {
        this.subscription1 = this.us.userData.subscribe((data) => {
          this.userCommFollowingData = data['community_data'];
          let i;
          if (this.userCommFollowingData) {
            for (i = 0; i < this.userCommFollowingData.length; i++) {
              this.communitiesList += this.userCommFollowingData[i]['community']['id'].toString();
              if (i + 1 < this.userCommFollowingData.length) {
                this.communitiesList += ',';
              }
            }
          }
          if (this.routeName.includes('home')) {
            this.mySaved = false;
            this.ps.getPostForHome(this.pageNumber, this.communitiesList, this.sortValue, this.sortDateValue);
          }
        });
      } else {
        let i;
        for (i = 0; i < this.userCommFollowingData.length; i++) {
          this.communitiesList += this.userCommFollowingData[i]['community']['id'];
          if (i + 1 < this.userCommFollowingData.length) {
            this.communitiesList += '%2C';
          }
        }
        if (this.routeName.includes('home')) {
          this.mySaved = false;
          this.ps.getPostForHome(this.pageNumber, this.communitiesList, this.sortValue, this.sortDateValue);
        }
      }
      this.subscription2 = this.ss.postSort.subscribe((data) => {
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
    if (!this.routeName.includes('@') && !this.routeName.includes('home')) {
        if (this.subscription1) {
          this.subscription1.unsubscribe();
        }
        if (this.subscription2) {
          this.subscription2.unsubscribe();
        }
        if (this.subscription7) {
          this.subscription7.unsubscribe();
        }
        this.subscription3 = this.route.params.subscribe((params: Params) => {
          let i;
          this.subscription4 = this.cs.communityData.subscribe((data) => {
            this.communityData = data;
            this.commId = this.communityData['community']['id'];
            for (i = 0; i < this.communityData['columns'].length; i++) {
              if (this.communityData['columns'][i]['url'] === params['column']) {
                this.columnSelected = this.communityData['columns'][i]['id'];
                break;
              }
            }
            if (params['column'] === 'random') {
              this.columnSelected = 'random';
            } else if (params['column'] === 'all') {
              this.columnSelected = 'all';
            }
            this.communityName = this.route.snapshot.params['routeName'];
            if (!this.routeName.includes('@') && !this.routeName.includes('home')) {
              this.mySaved = false;
              this.ps.getPostForCommunity(this.pageNumber, this.commId, this.columnSelected, this.sortValue, this.sortDateValue);
            }
          });
          if (this.cs.commData['community']) {
            this.communityData = this.cs.commData;
            this.commId = this.communityData['community']['id'];
            for (i = 0; i < this.communityData['columns'].length; i++) {
              if (this.communityData['columns'][i]['url'] === params['column']) {
                this.columnSelected = this.communityData['columns'][i]['id'];
                break;
              }
            }
            if (params['column'] === 'random') {
              this.columnSelected = 'random';
            } else if (params['column'] === 'all') {
              this.columnSelected = 'all';
            }
            this.communityName = this.route.snapshot.params['routeName'];
            if (!this.routeName.includes('@') && !this.routeName.includes('home')) {
              this.mySaved = false;
              this.ps.getPostForCommunity(this.pageNumber, this.commId, this.columnSelected, this.sortValue, this.sortDateValue);
            }
          }
        });
      this.subscription5 = this.ss.postSort.subscribe((data) => {
        if (!this.routeName.includes('@') && !this.routeName.includes('home')) {
          this.sortValue = data;
          this.mySaved = false;
          this.ps.getPostForCommunity(this.pageNumber, this.commId, this.columnSelected, this.sortValue, this.sortDateValue);
        }
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
    if (this.currRoute.includes('/post/')) {
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
        this.clickedUnit = this.route.snapshot.params['type'];
        this.unitClicked = true;
      });
      this.route.params.subscribe((params: Params) => {
        dataArray = params['data'].split('-');
        this.communityName = dataArray[dataArray.length - 1];
      });
      this.route.params.subscribe((params: Params) => {
        this.clickedUnit = params['type'];
      });
      this.ps.getDiscussion(this.pageNumber);
      this.ps.getUserAndDiscussion(this.pageNumber);
    }
    this.ps.getDiscussion(this.pageNumber);
    this.ps.getUserAndDiscussion(this.pageNumber);
    this.subscription6 = this.ps.postData.subscribe(
      (data) => {
        this.postLoaded = true;
        if (this.mySaved === true ) {
          this.postData = data;
          if (!data[0]) {
            this.postData = [];
          }
        } else {
          this.postData = data['Posts'];
          if (!data['Posts'][0]) {
            this.postData = [];
          }
          this.postAndUserData = data['Activity'];
        }
      });
    this.ss.closePopups.subscribe((data: any) => {
      if (data === false) {
        if (this.state === 'rotated') {
          this.state = 'default';
        }
        this.postCreateOptionsStatus = false;
      }
    });
    this.ss.postCreateCloseEmitter.subscribe((data) => {
      if (data === 'none') {
        this.postCreateType = '';
      }
    });
  }
  onUnitClick(p) {
    this.ss.postOpenClicked.emit('clicked');
    this.postSingle = p;
    let name;
    if (p['type'] === 1) {
      name = 'link';
    } else if (p['type'] === 6) {
      name = 'discussion';
    } else if (p['type'] === 4) {
      name = 'event';
    } else if (p['type'] === 5) {
      name = 'object';
    }
    this.ss.postEmitter.emit(this.postSingle);
    if (name === 'link') {
      this.clickedUnit = 'link';
    }else if (name === 'discussion') {
      this.clickedUnit = 'discussion';
    }else if (name === 'event') {
      this.clickedUnit = 'event';
    }else if (name === 'object') {
      this.clickedUnit = 'object';
    }
    this.unitClicked = true;
    let title = p['title'].toString();
    title = title.toLowerCase();
    title = title.replace(/\s+/g, '-');
    title = title.replace('/', '-');
    title = title.replace('.', '');
    title = title + '-' + p['id'] + '-' + p['community'];
    this.location.replaceState(this.router.url + '/post/' + name + '/' + title );
  }
  showPostCreateOptions() {
    this.postCreateOptionsStatus = !this.postCreateOptionsStatus;
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }
  openPostCreate(event) {
    if (event.target.id === 'add_post_options_link') {
      this.postCreateType = 'link';
    } else if (event.target.id === 'add_post_options_discussion') {
      this.postCreateType = 'discussion';
    } else if (event.target.id === 'add_post_options_event') {
      this.postCreateType = 'event';
    } else if (event.target.id === 'add_post_options_object') {
      this.postCreateType = 'object';
    }
  }
  unitClosed() {
    this.unitClicked = false;
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
