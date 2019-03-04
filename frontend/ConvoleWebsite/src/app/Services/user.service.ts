import {EventEmitter, Injectable, Output} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class UserService {
  address = 'http://127.0.0.1:8000/api/v1/UserPrivate/data-all/?format=json&username=';
  addressPatch = 'http://127.0.0.1:8000/api/v1/UserPrivate/';
  addressUserFollowingUser = 'http://127.0.0.1:8000/api/v1/UserFollowUser/';
  addressUserJoinsComm = 'http://127.0.0.1:8000/api/v1/UserJoinsCommunity/?username=admin&password=password123';
  @Output() userData = new EventEmitter<{}>();
  @Output() uData = [];
  userId;
  constructor(private http: Http) {
  }

  getUser(username: any) {
    this.address = 'http://127.0.0.1:8000/api/v1/UserPrivate/data-all/?format=json&username=';
    this.address += username;
    this.address += '&password=password123';
    this.http.get(this.address).subscribe(
      (response) => {
        this.userData.emit(response.json());
        this.uData = response.json();
        this.userId = this.uData['my_data']['id'];
      },
      (error) => console.log(error)
    );
  }
  changeSettings(message) {
    this.addressPatch = 'http://127.0.0.1:8000/api/v1/UserPrivate/';
    this.addressPatch += this.userId;
    this.addressPatch = this.addressPatch + '/?username=admin&password=password123';
    console.log(this.addressPatch);
    console.log(message);
    this.http.patch(this.addressPatch, message).subscribe(
      (response) => {
        console.log('Settings changed: ' + message + '\nResponse is: ' + response);
      },
      (error) => console.log(error)
    );
  }
  addUserFollowingUser(message) {
    this.addressUserFollowingUser = 'http://127.0.0.1:8000/api/v1/UserFollowUser/';
    this.addressUserFollowingUser += this.userId;
    this.addressUserFollowingUser += '/follow/?username=admin&password=password123';
    this.http.post(this.addressUserFollowingUser, message).subscribe(
      (response) => {
        console.log('Data added: ' + message + '\nResponse is: ' + response);
      },
      (error) => console.log(error)
    );
  }
  addUserJoinsCommunity(id) {
    let message;
    message = 'community=' + id;
    this.addressUserJoinsComm = 'http://127.0.0.1:8000/api/v1/UserJoinsCommunity/?username=admin&password=password123';
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    this.http.post(this.addressUserJoinsComm, message, options).subscribe(
      (response) => {
        console.log('Data added: ' + message + '\nResponse is: ' + response);
      },
      (error) => console.log(error)
    );
  }
  userLeavesCommunity(id) {
    this.http.post(
      'http://127.0.0.1:8000/api/v1/UserJoinsCommunity/' + id + '/leave-community/?username=admin&password=password123',
      '').subscribe(
        (response) => {
          console.log(response);
        },
        (error) => console.log(error)
    );
  }
}
