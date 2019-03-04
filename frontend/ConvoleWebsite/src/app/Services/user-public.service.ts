import {EventEmitter, Injectable, Output} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class UserPublicService {
  address = 'http://127.0.0.1:8000/api/v1/UserPublic/profile-visit/?format=json&username=';
  @Output() userPublicData = new EventEmitter<{}>();
  @Output() uPublicData = [];
  constructor(private http: Http) { }
  getUser(username: any) {
    this.address = 'http://127.0.0.1:8000/api/v1/UserPublic/profile-visit/?format=json&username=';
    this.address += username;
    this.http.get(this.address).subscribe(
      (response) => {this.userPublicData.emit(response.json());
        this.uPublicData = response.json(); },
      (error) => console.log(error)
    );
  }
}
