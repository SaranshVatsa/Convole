import {Component, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SharedService} from '../../../shared.service';
import {CommunityService} from '../../../Services/community.service';

@Component({
  selector: 'app-navbar-action-mobile-home',
  templateUrl: './navbar-action-mobile-home.component.html',
  styleUrls: ['./navbar-action-mobile-home.component.css']
})
export class NavbarActionMobileHomeComponent implements OnInit {
  @Input() selected = 'Navigator';
  @Input() selectedCommunities = 'Columns';
  @Input() selectedProfile = 'Activities';
  @Output() filteredColumn = 'all';
  currRoute = '/';
  routeName = '';
  communityName = '';
  constructor(private router: Router, private ss: SharedService, private route: ActivatedRoute, private cs: CommunityService) { }

  ngOnInit() {
    this.routeName = this.route.snapshot.params['routeName'];
    this.cs.communityData.subscribe((data) => {
      this.communityName = data['community']['url'];
    });
    this.route.params.subscribe((params: Params) => {
      this.routeName = params['routeName'];
      if (params['column'] && params['column'] === 'all') {
        this.selectedCommunities = 'Posts';
      }
    });
    this.currRoute = this.router.url;
    this.ss.postFilterByColumn.subscribe((data) => {
      this.selectedCommunities = 'Posts';
      this.filteredColumn = data;
    });
    if (this.router.url.includes('/post/')) {
      this.selected = 'Home';
      this.selectedCommunities = 'Posts';
      this.selectedProfile = 'Posts';
    }
    this.ss.postFilterByColumn.subscribe(() => {
      this.selected = 'Home';
      this.selectedCommunities = 'Posts';
      this.selectedProfile = 'Posts';
    });
  }
  navbarActionSelect(event) {
    if (event.target.id === 'navbar_action_navigator') {
      this.selected = 'Navigator';
    } else if (event.target.id === 'navbar_action_home') {
      this.selected = 'Home';
    }else if (event.target.id === 'navbar_action_explore') {
      this.selected = 'Explore';
    } else if (event.target.id === 'navbar_action_extras') {
      this.selected = 'Extras';
    } else if (event.target.id === 'navbar_action_columns') {
      this.selectedCommunities = 'Columns';
    } else if (event.target.id === 'navbar_action_posts') {
      if (this.route.snapshot.params['routeName'].charCodeAt(0) >= 48 && this.route.snapshot.params['routeName'].charCodeAt(0) <= 57) {
        this.router.navigate([this.cs.commData['community']['url'], 'all']);
      }
      this.selectedCommunities = 'Posts';
    } else if (event.target.id === 'navbar_action_comm_extras') {
      this.selectedCommunities = 'Extras';
    } else if (event.target.id === 'navbar_action_activities') {
      this.selectedProfile = 'Activities';
    } else if (event.target.id === 'navbar_action_profile_posts') {
      this.selectedProfile = 'Posts';
    } else if (event.target.id === 'navbar_action_about') {
      this.selectedProfile = 'About';
    }
  }
}
