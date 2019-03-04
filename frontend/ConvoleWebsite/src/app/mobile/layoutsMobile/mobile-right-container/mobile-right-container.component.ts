import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-mobile-right-container',
  templateUrl: './mobile-right-container.component.html',
  styleUrls: ['./mobile-right-container.component.css']
})
export class MobileRightContainerComponent implements OnInit {
  currRoute = '/';
  routeName: string;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.currRoute = this.router.url;
    this.routeName = this.route.snapshot.params['routeName'];
    this.route.params.subscribe((params: Params) => {
      this.routeName = params['routeName'];
    });
  }

}
