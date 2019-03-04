import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../../shared.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {isUndefined} from 'util';

@Component({
  selector: 'app-mobile-post-open-page',
  templateUrl: './mobile-post-open-page.component.html',
  styleUrls: ['./mobile-post-open-page.component.css']
})
export class MobilePostOpenPageComponent implements OnInit {
  @Input() postOpenStatus = false;
  @Input() unitClicked: any;
  @Input()  post = [];
  @Input() communityName: String;
  oldURL = '';
  allPosts = [];
  postPointer = 0;
  allPostLength = 2;
  constructor(private ss: SharedService, private router: Router, private location: Location) {
    this.ss.mobilePostOpen.subscribe((data: any ) => {
      this.unitClicked = data;
    });
  }

  ngOnInit() {
    this.ss.oldURLEmitter.subscribe((data) => {
      this.oldURL = data;
    });
    this.ss.allPostsEmitter.subscribe((data) => {
      this.allPosts = data;
      this.allPostLength = this.allPosts.length;
      let j;
      for (j = 0; j < this.allPosts.length; j++) {
        if (this.allPosts[j]['id'] === this.post['id']) {
          this.postPointer = j;
          break;
        }
      }
    });
  }
  goBack() {
    if (this.oldURL.includes('/post/')) {
      this.router.navigate([this.post['community']]);
    } else {
      this.location.replaceState(this.oldURL);
    }
    this.postOpenStatus = false;
    this.ss.mobilePageStatus.emit('none');
  }
  nextPost() {
    if (!isUndefined(this.postPointer) && this.postPointer < this.allPosts.length - 1) {
      this.postPointer++;
      this.post = this.allPosts[this.postPointer];
      let name;
      if (this.post['type'] === 1) {
        name = 'link';
        if (this.unitClicked === 'link1') {
          this.unitClicked = 'link';
        } else {
          this.unitClicked = 'link1';
        }
      } else if (this.post['type'] === 4) {
        name = 'event';
        if (this.unitClicked === 'event1') {
          this.unitClicked = 'event';
        } else {
          this.unitClicked = 'event1';
        }
      } else if (this.post['type'] === 5) {
        name = 'object';
        if (this.unitClicked === 'object1') {
          this.unitClicked = 'object';
        } else {
          this.unitClicked = 'object1';
        }
      } else if (this.post['type'] === 6) {
        name = 'discussion';
        if (this.unitClicked === 'discussion1') {
          this.unitClicked = 'discussion';
        } else {
          this.unitClicked = 'discussion1';
        }
      }
      let title = this.post['title'].toString();
      title = title.toLowerCase();
      title = title.replace(/\s+/g, '-');
      title = title.replace('/', '-');
      title = title.replace('.', '');
      title = title + '-' + this.post['id'] + '-' + this.post['community'];
      this.location.replaceState(this.router.url + '/post/' + name + '/' + title );
    }
  }
}
