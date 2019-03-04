import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-body-right-column',
  templateUrl: './body-right-column.component.html',
  styleUrls: ['./body-right-column.component.css']
})
export class BodyRightColumnComponent implements OnInit {
  routeName: string;
  currRoute = '/';
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.currRoute = this.router.url;
    this.routeName = this.route.snapshot.params['routeName'];
    this.route.params.subscribe((params: Params) => {
      this.routeName = params['routeName'];
    });
  }

}
