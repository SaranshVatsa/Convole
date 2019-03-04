import {AfterContentChecked, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterContentChecked {
  @ViewChild('sidebar') el: ElementRef;
  @ViewChild('sidebar_anchor') el2: ElementRef;
  currRoute = '';
  routeName: string;
  sidebarHeight;
  windowTop;
  sidebarTop;
  windowHeight;
  stickTop = false;
  stickBottom = false;
  anchor = false;
  sidebarBottomAnchorHeight = 0;
  sidebarTopAnchorHeight = 0;
  lastWindowTop = 0;
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.currRoute = this.router.url;
    this.routeName = this.route.snapshot.params['routeName'];
    this.route.params.subscribe((params: Params) => {
      this.routeName = params['routeName'];
    });
  }
  ngAfterContentChecked() {
    this.sidebarHeight = this.el.nativeElement.offsetHeight;
    this.windowHeight = window.innerHeight;
    if (this.sidebarHeight - this.sidebarBottomAnchorHeight < this.windowHeight - 20) {
      this.sidebarBottomAnchorHeight = this.windowHeight - (this.sidebarHeight - this.sidebarBottomAnchorHeight) - 20;
    } else {
      this.sidebarBottomAnchorHeight = 50;
    }
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.sidebarHeight = this.el.nativeElement.clientHeight;
    this.windowTop = window.pageYOffset;
    this.sidebarTop = this.el.nativeElement.offsetY;
    this.windowHeight = window.innerHeight;
    if (this.sidebarHeight < this.windowHeight) {
      this.stickTop = true;
    } else {
      if (this.windowTop > this.lastWindowTop) { // Scroll Down
        if (this.windowTop + this.windowHeight > this.sidebarHeight + this.sidebarTopAnchorHeight &&
          this.windowTop + this.windowHeight < document.documentElement.scrollHeight) {
          this.sidebarTopAnchorHeight = (this.windowTop - this.lastWindowTop) + this.sidebarTopAnchorHeight;
        }
      } else {
        if (this.windowTop < this.sidebarTopAnchorHeight) {
          this.sidebarTopAnchorHeight = this.windowTop;
        }
      }
      this.lastWindowTop = this.windowTop;
    }
  }
}
