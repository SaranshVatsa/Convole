import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Params, Router} from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  routeName: string;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.routeName = this.route.snapshot.params['routeName'];
    this.route.params.subscribe((params: Params) => {
      this.routeName = params['routeName'];
    });
  }

}
