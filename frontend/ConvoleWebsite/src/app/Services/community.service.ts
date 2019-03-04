import {EventEmitter, Injectable, Output} from '@angular/core';
import {Http} from '@angular/http';
import {isUndefined} from 'util';

@Injectable()
export class CommunityService {
  address = 'http://127.0.0.1:8000/api/v1/Community/';
  addressColumns = 'http://127.0.0.1:8000/api/v1/Column/?communtiy=';
  addressDiscover = 'http://localhost:8000/api/v1/Community/home-communities-list/?format=json&page=';
  @Output() communityData = new EventEmitter<{}>();
  @Output() commData = [];
  @Output() columnsEmitter = new EventEmitter<any>();
  column = [];
  @Output() discoverCommunityData = new EventEmitter<any>();
  @Output() disCommData = [];
  constructor(private http: Http) { }
  getCommunity(id: string) {
    this.address = 'http://127.0.0.1:8000/api/v1/Community/';
    this.address += id;
    this.address += '/all/?format=json';
    this.http.get(this.address).subscribe(
      (response) => {this.communityData.emit(response.json());
                      this.commData = response.json();
                      this.column = this.commData['columns'];
      },
      (error) => console.log(error)
    );
  }
  getColumnName(id: number) {
    if (!isUndefined(this.column)) {
      let i;
      for (i = 0; i < this.column.length; i++) {
        if (this.column[i]['id'] === id) {
          return this.column[i]['name'];
        }
      }
    }
  }
  getColumnUrl(id: number) {
    if (!isUndefined(this.column)) {
      let i;
      for (i = 0; i < this.column.length; i++) {
        if (this.column[i]['id'] === id) {
          return this.column[i]['url'];
        }
      }
    }
  }
  getColumnId(id) {
    if (!isUndefined(this.column)) {
      let i;
      for (i = 0; i < this.column.length; i++) {
        if (this.column[i]['url'] === id) {
          return this.column[i]['id'];
        }
      }
    }
  }
  getAllColumns(id: string) {
    this.addressColumns = 'http://127.0.0.1:8000/api/v1/Column/?communtiy=' + id + '&format=json';
    this.http.get(this.addressColumns).subscribe(
      (response) => {this.columnsEmitter.emit(response.json());
      },
      (error) => console.log(error)
    );
  }
  getDiscoverCommunities(pageNo) {
    this.addressDiscover = 'http://localhost:8000/api/v1/Community/home-communities-list/?format=json&page=' + pageNo;
    this.http.get(this.addressDiscover).subscribe(
      (response) => {this.discoverCommunityData.emit(response.json());
        this.disCommData = response.json();
      },
      (error) => console.log(error)
    );
  }
}
