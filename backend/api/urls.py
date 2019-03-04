from django.conf.urls import url, include
from rest_framework import routers
from . import views
from rest_framework_swagger.views import get_swagger_view



schema_view = get_swagger_view(title='Convole RestAPI')
router = routers.DefaultRouter()
router.register(r'Location', views.LocationViewSet)
router.register(r'UserPublic', views.UserPublicViewSet, 'UserPublic')
router.register(r'UserPrivate', views.UserPrivateViewSet, 'UserPrivate')
router.register(r'Devices', views.DevicesViewSet)
router.register(r'Community', views.CommunityViewSet)
router.register(r'Column', views.ColumnViewSet)
router.register(r'UserJoinsCommunity', views.UserJoinsCommunityViewSet)
router.register(r'UserFollowUser', views.UserFollowUserViewSet)
router.register(r'Post', views.PostViewSet)
router.register(r'ImageInPost', views.ImageInPostViewSet)
router.register(r'Disscussion', views.DisscussionViewSet)
router.register(r'UserAndPost', views.UserAndPostViewSet)
router.register(r'UserAndDiscussion', views.UserAndDiscussionViewSet)
router.register(r'PostReport', views.PostReportViewSet)
router.register(r'PostReportUserCheck', views.PostReportUserCheckViewSet)
router.register(r'DiscussionReport', views.DiscussionReportViewSet)
router.register(r'DiscussionReportUserCheck', views.DiscussionReportUserCheckViewSet)
router.register(r'Notification', views.NotificationViewSet)
router.register(r'Search', views.SearchViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^docs', schema_view),
    url(r'^auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^', include(router.urls)),
]