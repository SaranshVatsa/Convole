import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../../shared.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CommunityService} from '../../../../Services/community.service';

@Component({
  selector: 'app-mobile-body-top-home',
  templateUrl: './mobile-body-top-home.component.html',
  styleUrls: ['./mobile-body-top-home.component.css']
})
export class MobileBodyTopHomeComponent implements OnInit {
  selected;
  currRoute = '';
  sortType;
  commData = [];
  date: Date;
  routeName;
  constructor(private router: Router,
              private ss: SharedService,
              private cs: CommunityService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.date = new Date();
    this.routeName = this.route.snapshot.params['routeName'];
    this.route.params.subscribe((params: Params) => {
      this.routeName = params['routeName'];
    });
    this.currRoute = this.router.url;
    this.cs.communityData.subscribe((data) => {
      this.commData = data['columns'];
      this.route.params.subscribe((params: Params) => {
        if (params['column'] === 'all' || params['column'] === 'random') {
          this.selected = 'Hot';
          this.ss.postSort.emit('hot');
        } else {
          let i;
          for (i = 0; i < this.commData.length; i++) {
            if (this.commData[i]['url'] === params['column']) {
              this.sortType = this.commData[i]['sortType'];
              break;
            }
          }
          if (this.sortType === 1) {
            this.selected = 'New';
            this.ss.postSort.emit('new');
          } else if (this.sortType === 2) {
            this.selected = 'Hot';
            this.ss.postSort.emit('hot');
          } else if (this.sortType === 3) {
            this.selected = 'Top';
            this.ss.postSort.emit('top');
          }
        }
      });
    });
    if (!this.selected) {
      let i;
      this.commData = this.cs.commData['columns'];
      if (this.commData) {
        for (i = 0; i < this.commData.length; i++) {
          if (this.commData[i]['url'] === this.route.snapshot.params['column']) {
            this.sortType = this.commData[i]['sortType'];
            break;
          }
        }
        if (this.sortType === 1) {
          this.selected = 'New';
          this.ss.postSort.emit('new');
        } else if (this.sortType === 2) {
          this.selected = 'Hot';
          this.ss.postSort.emit('hot');
        } else if (this.sortType === 3) {
          this.selected = 'Top';
          this.ss.postSort.emit('top');
        }
      }
    }
    if (!this.selected) {
      this.selected = 'Hot';
      this.ss.postSort.emit('hot');
    }
  }
  onButtonClick(event) {
    if (event.target.id === 'Hot') {
      this.selected = 'Hot';
      this.ss.postSort.emit('hot');
    }else if (event.target.id === 'New') {
      this.selected = 'New';
      this.ss.postSort.emit('new');
    }else if (event.target.id === 'Top') {
      this.selected = 'Top';
      this.ss.postSort.emit('top');
    }
  }
  dateSelected(event) {
    let year, month, day, hours, dateQuery;
    year = this.date.getFullYear();
    month = this.date.getMonth() + 1;
    day = this.date.getDate();
    hours = this.date.getHours();
    dateQuery = '';
    if (event.target.value === '1 Day') {
      if (day > 1) {
        dateQuery = year + ',' + month + ',' + (day - 1) + ',' + hours;
      } else {
        dateQuery = year + ',' + (month - 1) + ',' + (day + 29) + ',' + hours;
      }
    } else if (event.target.value === '1 Week') {
      if (day > 7) {
        dateQuery = year + ',' + month + ',' + (day - 7) + ',' + hours;
      } else if (month > 1) {
        dateQuery = year + ',' + (month - 1) + ',' + (day + 23) + ',' + hours;
      } else {
        dateQuery = (year - 1) + ',' + (month + 11) + ',' + (day + 23) + ',' + hours;
      }
    } else if (event.target.value === '1 Month') {
      if (month > 1) {
        dateQuery = year + ',' + (month - 1) + ',' + day + ',' + hours;
      } else {
        dateQuery = (year - 1) + ',' + (month + 11) + ',' + day + ',' + hours;
      }
    } else if (event.target.value === '1 Year') {
      dateQuery = (year - 1) + ',' + month + ',' + day + ',' + hours;
    } else if (event.target.value === 'BoT') {
      dateQuery = 'all';
    }
    this.ss.postSortDate.emit(dateQuery);
  }
  mySavedClicked() {
    this.ss.mySavedEmitter.emit('saved');
    this.selected = 'Saved';
  }
}
