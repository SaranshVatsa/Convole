import {EventEmitter, Injectable, Output} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class PostService {
  address = 'http://127.0.0.1:8000/api/v1/Post/?format=json&page=';
  addressUserAndPost = 'http://127.0.0.1:8000/api/v1/UserAndPost/?format=json&page=';
  addressDiscussion = 'http://127.0.0.1:8000/api/v1/Disscussion/?page=';
  addressUserAndDiscussion = 'http://127.0.0.1:8000/api/v1/UserAndDiscussion/?format=json&page=';
  addressSinglePost = 'http://127.0.0.1:8000/api/v1/Post/';
  addressMySaved =
    'http://localhost:8000/api/v1/Post/activity-posts/?format=json&password=password123&username=admin&activity=2&community=';
  @Output() postData = new EventEmitter<any>();
  @Output() pData = [];
  @Output() postAndUserData = new EventEmitter<any>();
  @Output() pAndUserData = [];
  @Output() discussionData = new EventEmitter<any>();
  @Output() dData = [];
  @Output() userAndDiscussionData = new EventEmitter<any>();
  @Output() uAndDiscussionData = [];
  @Output() singlePostData = new EventEmitter<any>();
  @Output() sPostData = [];
  addressAddUserAndPost = 'http://127.0.0.1:8000/api/v1/UserAndPost/do-undo/';
  addressAddUserAndDiscussion = 'http://127.0.0.1:8000/api/v1/UserAndDiscussion/?username=admin&password=password123';
  addressAddDiscussion = 'http://127.0.0.1:8000/api/v1/Disscussion/?username=admin&password=password123';
  constructor(private http: Http) { }
  getPostForHome(pageNo, communities, sort, sortDate) {
    if (!pageNo || !communities || !sort) {
      return;
    }
    this.address = 'http://127.0.0.1:8000/api/v1/Post/?username=admin&password=password123&' +
    'communities=' + communities + '&format=json&page=' + pageNo;
    this.address = this.address + '&sort=' + sort;
    if (sortDate !== 'all') {
      this.address = this.address + '&time_limit=' + sortDate;
    }
    this.http.get(this.address).subscribe(
      (response) => {this.postData.emit(response.json());
        this.pData = response.json();
        this.pAndUserData = this.pData['Activity'];
        // console.log(this.address + '\n' + this.pData);
        },
      (error) => console.log(error)
    );
  }
  getPostForCommunity(pageNo, community, column, sort, sortDate) {
    if (column === 'all' || !column) {
      this.address = 'http://127.0.0.1:8000/api/v1/Post/?username=admin&password=password123&communities=' +
        community + '&format=json&page=' + pageNo ;
    } else {
      this.address = 'http://127.0.0.1:8000/api/v1/Post/?username=admin&password=password123&communities=' +
        community + '&format=json&page=' + pageNo + '&column=' + column;
    }
    this.address = this.address + '&sort=' + sort;
    if (sortDate !== 'all') {
      this.address = this.address + '&time_limit=' + sortDate;
    }
    if (!pageNo || !community || !column || !sort || !sortDate) {
      return;
    }
    this.http.get(this.address).subscribe(
      (response) => {this.postData.emit(response.json());
        this.pData = response.json();
        this.pAndUserData = this.pData['Activity'];
        },
      (error) => console.log(error)
    );
  }
  getMySaved(id: string, column: string) {
    this.addressMySaved =
      'http://localhost:8000/api/v1/Post/activity-posts/?format=json&password=password123&username=admin&activity=2&community=';
    this.addressMySaved += id;
    if (column && column !== 'all' && column !== 'random') {
      this.addressMySaved = this.addressMySaved + '&column=' + column;
    }
    this.http.get(this.addressMySaved).subscribe(
      (response) => {this.postData.emit(response.json());
        this.pData = response.json();
      },
      (error) => console.log(error)
    );
  }
  getDiscussion(id: string) {
    this.addressDiscussion = 'http://127.0.0.1:8000/api/v1/Disscussion/?page=';
    this.addressDiscussion += id;
    this.http.get(this.addressDiscussion).subscribe(
      (response) => {this.discussionData.emit(response.json());
        this.dData = response.json(); },
      (error) => console.log(error)
    );
  }
  getUserAndDiscussion (page: string) {
    this.addressUserAndDiscussion = 'http://127.0.0.1:8000/api/v1/UserAndDiscussion/?format=json&page=';
    this.addressUserAndDiscussion += page;
    this.http.get(this.addressUserAndDiscussion).subscribe(
      (response) => {this.userAndDiscussionData.emit(response.json());
        this.uAndDiscussionData = response.json();
      },
      (error) => console.log(error)
    );
  }
  getSinglePost (id: string) {
    this.addressSinglePost = 'http://127.0.0.1:8000/api/v1/Post/' + id + '/?format=json';
    this.http.get(this.addressSinglePost).subscribe(
      (response) => {this.singlePostData.emit(response.json());
        this.sPostData = response.json();
      },
      (error) => console.log(error)
    );
  }
  addUserAndPost(message, postId, activity) {
    const userId = message['user'];
    this.addressAddUserAndPost = 'http://127.0.0.1:8000/api/v1/UserAndPost/do-undo/?username=admin&password=password123&';
    this.addressAddUserAndPost = this.addressAddUserAndPost + 'post=' + postId + '&activity=' + activity + '&user=' + userId;
    this.http.post(this.addressAddUserAndPost, message).subscribe(
      (response) => {
         console.log('Data added: ' + message + '\nResponse is: ' + response);
      },
      (error) => console.log(error)
    );
  }
  addUserAndDiscussion(message) {
    this.addressAddUserAndDiscussion = 'http://127.0.0.1:8000/api/v1/UserAndDiscussion/?username=admin&password=password123';
    this.http.post(this.addressAddUserAndDiscussion, message).subscribe(
      (response) => {
         // console.log('Data added: ' + message + '\nResponse is: ' + response);
      },
      (error) => console.log(error)
    );
  }
  addDiscussion(message) {
    this.addressAddDiscussion = 'http://127.0.0.1:8000/api/v1/Disscussion/?username=admin&password=password123';
    this.http.post(this.addressAddDiscussion, message).subscribe(
      (response) => {
         // console.log('Data added: ' + message + '\nResponse is: ' + response);
      },
      (error) => console.log(error)
    );
  }
}
