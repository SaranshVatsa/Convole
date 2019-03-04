import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class SharedService {
  @Output() closePopups = new EventEmitter<any>();
  @Output() mobilePostOpen = new EventEmitter<any>();
  @Output() mobilePageStatus = new EventEmitter<any>();
  @Output() postEmitter = new EventEmitter<any>();
  @Output() popupStatus = new EventEmitter<any>();
  @Output() postFilterByColumn = new EventEmitter<String>();
  @Output() discussionShowMore = new EventEmitter<any>();
  @Output() oldURLEmitter = new EventEmitter<any>();
  @Output() postCreateCloseEmitter = new EventEmitter<any>();
  @Output() postSort = new EventEmitter<any>();
  @Output() postSortDate = new EventEmitter<any>();
  @Output() postOpenClicked = new EventEmitter<any>();
  @Output() allPostsEmitter = new EventEmitter<any>();
  @Output() mySavedEmitter = new EventEmitter<any>();
  allPostsMobile = [];
  constructor() { }
  allPostsEmit(posts) {
    this.allPostsEmitter.emit(posts);
    this.allPostsMobile = posts;
  }
}
