import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HomePageBeforeLoginComponent } from './HomePage/BeforeLogin/home-page-before-login/home-page-before-login.component';
import { DiscoverCommunitiesComponent } from './HomePage/BeforeLogin/discover-communities/discover-communities.component';
import { DiscoverCommunitiesCardComponent } from './HomePage/BeforeLogin/discover-communities/discover-communities-card/discover-communities-card.component';
import { DiscoverCommunitiesCardDoubleComponent } from './HomePage/BeforeLogin/discover-communities/discover-communities-card-double/discover-communities-card-double.component';
import {RouterModule, Routes} from '@angular/router';
import { HomePageAfterLoginComponent } from './HomePage/AfterLogin/home-page-after-login/home-page-after-login.component';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { SidebarTopComponent } from './layouts/sidebar/sidebar-top/sidebar-top.component';
import { SidebarCommunitiesComponent } from './layouts/sidebar/sidebar-communities/sidebar-communities.component';
import { SidebarAccountsComponent } from './layouts/sidebar/sidebar-accounts/sidebar-accounts.component';
import { BodyContainerComponent } from './layouts/body-container/body-container.component';
import { BodyTopHomeComponent } from './layouts/body-container/body-top-home/body-top-home.component';
import { BodyLinkUnitComponent } from './layouts/body-container/body-link-unit/body-link-unit.component';
import {
  BodyDiscussionUnitComponent
} from './layouts/body-container/body-discussion-unit/body-discussion-unit.component';
import { BodyEventUnitComponent } from './layouts/body-container/body-event-unit/body-event-unit.component';
import { BodyObjectUnitComponent } from './layouts/body-container/body-object-unit/body-object-unit.component';
import { BodyRightColumnComponent } from './layouts/body-container/body-right-column/body-right-column.component';
import { RightColumnHomeComponent } from './layouts/body-container/body-right-column/right-column-home/right-column-home.component';
import { SidebarBottomComponent } from './layouts/sidebar/sidebar-bottom/sidebar-bottom.component';
import { SidebarTopCommunitiesComponent } from './layouts/sidebar/sidebar-top-communities/sidebar-top-communities.component';
import { CommunitiesPageComponent } from './CommunitiesPage/communities-page/communities-page.component';
import { SidebarColumnsComponent } from './layouts/sidebar/sidebar-columns/sidebar-columns.component';
import { SidebarContributionsComponent } from './layouts/sidebar/sidebar-contributions/sidebar-contributions.component';
import { BodyImageUnitComponent } from './layouts/body-container/body-image-unit/body-image-unit.component';
import { BodyContributionsUnitComponent } from './layouts/body-container/body-contributions-unit/body-contributions-unit.component';
import { BodyRightCommunityContributionsComponent } from './layouts/body-container/body-right-column/body-right-community-contributions/body-right-community-contributions.component';
import { BodyRightShareComponent } from './layouts/body-container/body-right-column/body-right-share/body-right-share.component';
import { BodyRightColumnsDescriptionComponent } from './layouts/body-container/body-right-column/body-right-columns-description/body-right-columns-description.component';
import { BodyRightColumnsDescriptionUnitComponent } from './layouts/body-container/body-right-column/body-right-columns-description/body-right-columns-description-unit/body-right-columns-description-unit.component';
import { ProfilePageComponent } from './ProfilePage/profile-page/profile-page.component';
import { BodyTopProfileComponent } from './layouts/body-container/body-top-profile/body-top-profile.component';
import { SidebarTopProfileComponent } from './layouts/sidebar/sidebar-top-profile/sidebar-top-profile.component';
import { SidebarActivitiesComponent } from './layouts/sidebar/sidebar-activities/sidebar-activities.component';
import { BodyRightAboutComponent } from './layouts/body-container/body-right-column/body-right-about/body-right-about.component';
import { PopupsAlertMainComponent } from './Popups/popups-alert-main/popups-alert-main.component';
import { PopupsAlertSmallComponent } from './Popups/popups-alert-small/popups-alert-small.component';
import { PopupsCommunitiesSelectionComponent } from './Popups/popups-communities-selection/popups-communities-selection.component';
import { CommunitiesSelectionCommunitiesUnitComponent } from './Popups/popups-communities-selection/communities-selection-communities-unit/communities-selection-communities-unit.component';
import { PopupsFeedbackComponent } from './Popups/popups-feedback/popups-feedback.component';
import { PopupsLoginComponent } from './Popups/popups-login/popups-login.component';
import { PopupsNotificationsComponent } from './Popups/popups-notifications/popups-notifications.component';
import { PopupsNotificationsUnitComponent } from './Popups/popups-notifications/popups-notifications-unit/popups-notifications-unit.component';
import { PopupsSearchComponent } from './Popups/popups-search/popups-search.component';
import { PopupsSearchUnitComponent } from './Popups/popups-search/popups-search-unit/popups-search-unit.component';
import { PopupsSettingsComponent } from './Popups/popups-settings/popups-settings.component';
import { HomePageBeforeLoginTopComponent } from './HomePage/BeforeLogin/home-page-before-login-top/home-page-before-login-top.component';
import { HomeBeforeLoginMobileComponent } from './mobile/HomePageMobile/home-before-login-mobile/home-before-login-mobile.component';
import { DiscoverCommunitiesMobileComponent } from './mobile/HomePageMobile/discover-communities-mobile/discover-communities-mobile.component';
import { DiscoverCommunitiesCardMobileComponent } from './mobile/HomePageMobile/discover-communities-mobile/discover-communities-card-mobile/discover-communities-card-mobile.component';
import { DiscoverCommunitiesCardDoubleMobileComponent } from './mobile/HomePageMobile/discover-communities-mobile/discover-communities-card-double-mobile/discover-communities-card-double-mobile.component';
import { NavbarMobileComponent } from './mobile/layoutsMobile/navbar-mobile/navbar-mobile.component';
import { NavbarActionMobileHomeComponent } from './mobile/layoutsMobile/navbar-action-mobile-home/navbar-action-mobile-home.component';
import { SidebarFollowingComponent } from './layouts/sidebar/sidebar-following/sidebar-following.component';
import { BodyContainerMobileComponent } from './mobile/layoutsMobile/body-container-mobile/body-container-mobile.component';
import { MobileLinkUnitComponent } from './mobile/layoutsMobile/body-container-mobile/mobile-link-unit/mobile-link-unit.component';
import { MobileBodyTopHomeComponent } from './mobile/layoutsMobile/body-container-mobile/mobile-body-top-home/mobile-body-top-home.component';
import { MobileDiscussionUnitComponent } from './mobile/layoutsMobile/body-container-mobile/mobile-discussion-unit/mobile-discussion-unit.component';
import { MobileEventUnitComponent } from './mobile/layoutsMobile/body-container-mobile/mobile-event-unit/mobile-event-unit.component';
import { MobileImageUnitComponent } from './mobile/layoutsMobile/body-container-mobile/mobile-image-unit/mobile-image-unit.component';
import { MobileContributionsUnitComponent } from './mobile/layoutsMobile/body-container-mobile/mobile-contributions-unit/mobile-contributions-unit.component';
import { MobileRightContainerComponent } from './mobile/layoutsMobile/mobile-right-container/mobile-right-container.component';
import { MobileExtrasTopComponent } from './mobile/layoutsMobile/mobile-right-container/mobile-extras-top/mobile-extras-top.component';
import { MobileExtrasCommunityContributionsComponent } from './mobile/layoutsMobile/mobile-right-container/mobile-extras-community-contributions/mobile-extras-community-contributions.component';
import { MobileExtrasColumnsDescriptionComponent } from './mobile/layoutsMobile/mobile-right-container/mobile-extras-columns-description/mobile-extras-columns-description.component';
import { MobileExtrasColumnsDescriptionUnitComponent } from './mobile/layoutsMobile/mobile-right-container/mobile-extras-columns-description/mobile-extras-columns-description-unit/mobile-extras-columns-description-unit.component';
import { MobileSidebarTopCommunitiesComponent } from './mobile/layoutsMobile/mobile-sidebar-top-communities/mobile-sidebar-top-communities.component';
import { MobileSidebarBottomComponent } from './mobile/layoutsMobile/mobile-sidebar-bottom/mobile-sidebar-bottom.component';
import { MobileSidebarTopProfileComponent } from './mobile/layoutsMobile/mobile-sidebar-top-profile/mobile-sidebar-top-profile.component';
import { MobileRightAboutComponent } from './mobile/layoutsMobile/mobile-right-container/mobile-right-about/mobile-right-about.component';
import { MobileRightCommunityContributionsScoreComponent } from './mobile/layoutsMobile/mobile-right-container/mobile-right-community-contributions-score/mobile-right-community-contributions-score.component';
import { MobileContributionsScoreUnitComponent } from './mobile/layoutsMobile/mobile-right-container/mobile-right-community-contributions-score/mobile-contributions-score-unit/mobile-contributions-score-unit.component';
import {MobilePopupsAlertMainComponent} from './mobile/mobilePopups/mobile-popups-alert-main/mobile-popups-alert-main.component';
import {MobilePopupsAlertSmallComponent} from './mobile/mobilePopups/mobile-popups-alert-small/mobile-popups-alert-small.component';
import {MobileLoginPageComponent} from './mobile/mobilePopups/mobile-login-page/mobile-login-page.component';
import {MobileFeedbackPageComponent} from './mobile/mobilePopups/mobile-feedback-page/mobile-feedback-page.component';
import { MobileNotificationsPageComponent } from './mobile/mobilePopups/mobile-notifications-page/mobile-notifications-page.component';
import { MobileNotificationUnitComponent } from './mobile/mobilePopups/mobile-notifications-page/mobile-notification-unit/mobile-notification-unit.component';
import { MobileSettingsPageComponent } from './mobile/mobilePopups/mobile-settings-page/mobile-settings-page.component';
import { MobileCommunitySelectionComponent } from './mobile/mobilePopups/mobile-community-selection/mobile-community-selection.component';
import { PostOpenContainerComponent } from './PostOpen/post-open-container/post-open-container.component';
import { PostOpenDiscussionComponent } from './PostOpen/post-open-discussion/post-open-discussion.component';
import { PostOpenDiscussComponent } from './PostOpen/post-open-discuss/post-open-discuss.component';
import { PostOpenDiscussionWithoutImageComponent } from './PostOpen/post-open-discussion-without-image/post-open-discussion-without-image.component';
import { PostOpenEventComponent } from './PostOpen/post-open-event/post-open-event.component';
import { PostOpenObjectComponent } from './PostOpen/post-open-object/post-open-object.component';
import { MobilePostOpenPageComponent } from './mobile/mobilePostOpen/mobile-post-open-page/mobile-post-open-page.component';
import { MobilePostOpenObjectComponent } from './mobile/mobilePostOpen/mobile-post-open-object/mobile-post-open-object.component';
import { MobilePostOpenDiscussionComponent } from './mobile/mobilePostOpen/mobile-post-open-discussion/mobile-post-open-discussion.component';
import { MobilePostOpenDiscussComponent } from './mobile/mobilePostOpen/mobile-post-open-discuss/mobile-post-open-discuss.component';
import { MobilePostOpenDiscussionWithoutImageComponent } from './mobile/mobilePostOpen/mobile-post-open-discussion-without-image/mobile-post-open-discussion-without-image.component';
import { MobilePostOpenEventComponent } from './mobile/mobilePostOpen/mobile-post-open-event/mobile-post-open-event.component';
import { MobileSearchPageComponent } from './mobile/mobilePopups/mobile-search-page/mobile-search-page.component';
import {SharedService} from './shared.service';
import {CommunityService} from './Services/community.service';
import {PostService} from './Services/post.service';
import {UserService} from './Services/user.service';
import {UserPublicService} from './Services/user-public.service';
import { PostCreateLinkComponent } from './PostCreate/post-create-link/post-create-link.component';
import { PostCreateDiscussionComponent } from './PostCreate/post-create-discussion/post-create-discussion.component';
import { PostCreateEventComponent } from './PostCreate/post-create-event/post-create-event.component';
import { PostCreateObjectComponent } from './PostCreate/post-create-object/post-create-object.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MobilePostCreateLinkComponent } from './mobile/mobilePostCreate/mobile-post-create-link/mobile-post-create-link.component';
import { MobilePostCreateDiscussionComponent } from './mobile/mobilePostCreate/mobile-post-create-discussion/mobile-post-create-discussion.component';
import { MobilePostCreateEventComponent } from './mobile/mobilePostCreate/mobile-post-create-event/mobile-post-create-event.component';
import { MobilePostCreateObjectComponent } from './mobile/mobilePostCreate/mobile-post-create-object/mobile-post-create-object.component';
import { MainPageComponent } from './MainPage/main-page/main-page.component';
import { BodyCommonUnitComponent } from './layouts/body-container/body-common-unit/body-common-unit.component';
import { MobileCommonUnitComponent } from './mobile/layoutsMobile/body-container-mobile/mobile-common-unit/mobile-common-unit.component';
import { PostLoaderUnitComponent } from './layouts/body-container/post-loader-unit/post-loader-unit.component';
import {FormsModule} from '@angular/forms';
import { SidebarTopLoaderComponent } from './layouts/sidebar/sidebar-top-loader/sidebar-top-loader.component';
import { SidebarListLoaderComponent } from './layouts/sidebar/sidebar-list-loader/sidebar-list-loader.component';
const appRoutes: Routes = [
  {path: '', component: HomePageBeforeLoginComponent},
  // {path : 'home', component: HomePageAfterLoginComponent},
  {path : ':routeName/post/:type/:data', component: MainPageComponent},
  // {path : 'communities', component: CommunitiesPageComponent},
  {path : ':routeName', component: MainPageComponent},
  {path : ':routeName/:column', component: MainPageComponent},
  {path : ':routeName/:column/post/:type/:data', component: MainPageComponent},
  // {path : 'profile', component: ProfilePageComponent},
  {path : ':routeName', component: MainPageComponent},
  {path : ':routeName/post/:type/:data', component: MainPageComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomePageBeforeLoginComponent,
    DiscoverCommunitiesComponent,
    DiscoverCommunitiesCardComponent,
    DiscoverCommunitiesCardDoubleComponent,
    HomePageAfterLoginComponent,
    NavBarComponent,
    SidebarComponent,
    SidebarTopComponent,
    SidebarCommunitiesComponent,
    SidebarAccountsComponent,
    BodyContainerComponent,
    BodyTopHomeComponent,
    BodyLinkUnitComponent,
    BodyDiscussionUnitComponent,
    BodyEventUnitComponent,
    BodyObjectUnitComponent,
    BodyRightColumnComponent,
    RightColumnHomeComponent,
    SidebarBottomComponent,
    SidebarTopCommunitiesComponent,
    CommunitiesPageComponent,
    SidebarColumnsComponent,
    SidebarContributionsComponent,
    BodyImageUnitComponent,
    BodyContributionsUnitComponent,
    BodyRightCommunityContributionsComponent,
    BodyRightShareComponent,
    BodyRightColumnsDescriptionComponent,
    BodyRightColumnsDescriptionUnitComponent,
    ProfilePageComponent,
    BodyTopProfileComponent,
    SidebarTopProfileComponent,
    SidebarActivitiesComponent,
    BodyRightAboutComponent,
    PopupsAlertMainComponent,
    PopupsAlertSmallComponent,
    PopupsCommunitiesSelectionComponent,
    CommunitiesSelectionCommunitiesUnitComponent,
    PopupsFeedbackComponent,
    PopupsLoginComponent,
    PopupsNotificationsComponent,
    PopupsNotificationsUnitComponent,
    PopupsSearchComponent,
    PopupsSearchUnitComponent,
    PopupsSettingsComponent,
    HomePageBeforeLoginTopComponent,
    HomeBeforeLoginMobileComponent,
    DiscoverCommunitiesMobileComponent,
    DiscoverCommunitiesCardMobileComponent,
    DiscoverCommunitiesCardDoubleMobileComponent,
    NavbarMobileComponent,
    NavbarActionMobileHomeComponent,
    SidebarFollowingComponent,
    BodyContainerMobileComponent,
    MobileLinkUnitComponent,
    MobileBodyTopHomeComponent,
    MobileDiscussionUnitComponent,
    MobileEventUnitComponent,
    MobileImageUnitComponent,
    MobileContributionsUnitComponent,
    MobileRightContainerComponent,
    MobileExtrasTopComponent,
    MobileExtrasCommunityContributionsComponent,
    MobileExtrasColumnsDescriptionComponent,
    MobileExtrasColumnsDescriptionUnitComponent,
    MobileSidebarTopCommunitiesComponent,
    MobileSidebarBottomComponent,
    MobileSidebarTopProfileComponent,
    MobileRightAboutComponent,
    MobileRightCommunityContributionsScoreComponent,
    MobileContributionsScoreUnitComponent,
    MobilePopupsAlertMainComponent,
    MobilePopupsAlertSmallComponent,
    MobileLoginPageComponent,
    MobileFeedbackPageComponent,
    MobileNotificationsPageComponent,
    MobileNotificationUnitComponent,
    MobileSettingsPageComponent,
    MobileCommunitySelectionComponent,
    PostOpenContainerComponent,
    PostOpenDiscussionComponent,
    PostOpenDiscussComponent,
    PostOpenDiscussionWithoutImageComponent,
    PostOpenEventComponent,
    PostOpenObjectComponent,
    MobilePostOpenPageComponent,
    MobilePostOpenObjectComponent,
    MobilePostOpenDiscussionComponent,
    MobilePostOpenDiscussComponent,
    MobilePostOpenDiscussionWithoutImageComponent,
    MobilePostOpenEventComponent,
    MobileSearchPageComponent,
    PostCreateLinkComponent,
    PostCreateDiscussionComponent,
    PostCreateEventComponent,
    PostCreateObjectComponent,
    MobilePostCreateLinkComponent,
    MobilePostCreateDiscussionComponent,
    MobilePostCreateEventComponent,
    MobilePostCreateObjectComponent,
    MainPageComponent,
    BodyCommonUnitComponent,
    MobileCommonUnitComponent,
    PostLoaderUnitComponent,
    SidebarTopLoaderComponent,
    SidebarListLoaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [SharedService, CommunityService, PostService, UserService, UserPublicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
