import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {isUndefined} from 'util';
import {SharedService} from '../../shared.service';


@Component({
  selector: 'app-post-open-container',
  templateUrl: './post-open-container.component.html',
  styleUrls: ['./post-open-container.component.css']
})
export class PostOpenContainerComponent implements OnInit {
  @Input() postOpenStatus = false;
  @Output() postOpenStatusChange = new EventEmitter<any>();
  @Input() openedUnit: any;
  @Input()  post = [];
  @Input() postAndUserData = [];
  @Input() communityName: String;
  @Input() oldURL: string;
  @Input() allPosts = [];
  postPointer: number;
  allPostLength: number;
  constructor(private location: Location, private router: Router, private ss: SharedService) { }

  ngOnInit() {
    if (this.allPosts) {
      this.allPostLength = this.allPosts.length;
      let i;
      for (i = 0; i < this.allPosts.length; i++) {
        if (this.allPosts[i]['id'] === this.post['id']) {
          this.postPointer = i;
          break;
        }
      }
    }
  }
  closePopup() {
    this.postOpenStatus = false;
    this.ss.postOpenClicked.emit('none');
    this.postOpenStatusChange.emit(false);
    if (!this.oldURL.includes('/post/')) {
      this.location.replaceState(this.oldURL);
    } else {
      this.router.navigate([this.post['community']]);
    }
  }
  lastPost() {
    if (!isUndefined(this.postPointer) && this.postPointer > 0) {
      this.postPointer --;
      this.post = this.allPosts[this.postPointer];
      let name;
      if (this.post['type'] === 1) {
        name = 'link';
        if (this.openedUnit === 'link1') {
          this.openedUnit = 'link';
        } else {
          this.openedUnit = 'link1';
        }
      } else if (this.post['type'] === 4) {
        name = 'event';
        if (this.openedUnit === 'event1') {
          this.openedUnit = 'event';
        } else {
          this.openedUnit = 'event1';
        }
      } else if (this.post['type'] === 5) {
        name = 'object';
        if (this.openedUnit === 'object1') {
          this.openedUnit = 'object';
        } else {
          this.openedUnit = 'object1';
        }
      } else if (this.post['type'] === 6) {
        name = 'discussion';
        if (this.openedUnit === 'discussion1') {
          this.openedUnit = 'discussion';
        } else {
          this.openedUnit = 'discussion1';
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
  nextPost() {
    if (!isUndefined(this.postPointer) && this.postPointer < this.allPosts.length - 1) {
      this.postPointer++;
      this.post = this.allPosts[this.postPointer];
      let name;
      if (this.post['type'] === 1) {
        name = 'link';
        if (this.openedUnit === 'link1') {
          this.openedUnit = 'link';
        } else {
          this.openedUnit = 'link1';
        }
      } else if (this.post['type'] === 4) {
        name = 'event';
        if (this.openedUnit === 'event1') {
          this.openedUnit = 'event';
        } else {
          this.openedUnit = 'event1';
        }
      } else if (this.post['type'] === 5) {
        name = 'object';
        if (this.openedUnit === 'object1') {
          this.openedUnit = 'object';
        } else {
          this.openedUnit = 'object1';
        }
      } else if (this.post['type'] === 6) {
        name = 'discussion';
        if (this.openedUnit === 'discussion1') {
          this.openedUnit = 'discussion';
        } else {
          this.openedUnit = 'discussion1';
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
