from main.models import *
from report.models import *
from notification.models import *
from rest_framework import viewsets, mixins, status
from .serializers import *
from .permissions import *
from rest_framework.response import Response
from rest_framework.decorators import detail_route, list_route
from url_filter.integrations.drf import DjangoFilterBackend
from django.db.models import Q
from operator import __or__ as OR
from django.contrib.auth import authenticate
import re
from functools import reduce

class LocationViewSet(mixins.CreateModelMixin,
                      mixins.RetrieveModelMixin,
                      mixins.ListModelMixin,
                      viewsets.GenericViewSet):
    """
    API endpoint that allows Location based searches
    """
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    # todo queryset to not include user location
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['lat', 'long', 'city', 'state', 'country']

    # todo near by events post

    # def create(self, request):
    #     pass


class UserPrivateViewSet(viewsets.ViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserPrivateSerializer
    # todo make a patch
    permission_classes = (OwnerCanReadAndWrite,)

    @list_route(methods=['post'], url_path='update-username')
    def update_username(self, request):
        """
        to check new username
        {"username":"[New username]", "update":"False" }

        to update username (post)
        {"username":"[New username]", "update": "True"}

        return:
        if username already exist then {"detail": "Username unavailable"}
        if username changed {"detail": "Username Changed"}

        """
        try:
            import re
            pattern = re.compile("[a-zA-Z0-9\_]{5,20}")
            if not pattern.match(request.data['username']):
                return Response({"detail": "Bad Username, Only [a-zA-Z0-9\_]{5,20} allowed"}, status=status.HTTP_400_BAD_REQUEST)

            if User.objects.filter(username=request.data['username']):
                return Response({"detail": "Username unavailable"}, status=status.HTTP_400_BAD_REQUEST)
            else:
                if request.data['update'] == "True":
                    user = User.objects.get(username=request.user.username)
                    user.username = request.data['username']
                    user.save()
                    return Response({"detail": "Username Changed"}, status=status.HTTP_400_BAD_REQUEST)
                else:
                    return Response({"detail": "Username available"}, status=status.HTTP_400_BAD_REQUEST)
        except:
            response = {"detail": "Authorization Error or Syntax Error"}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)


    @list_route(methods=['get'], url_path='data')
    def data(self, request):
        """
        Get private user data
        """
        try:
            if 'username' in request.GET:
                user = authenticate(username=request.GET['username'], password=request.GET['password'])
            else:
                user = User.objects.get(pk=request.user.id)
            user = self.serializer_class(instance=user, many=False)
            return Response(user.data)
        except:
            response = {"detail": "Authorization or Syntax Error"}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)
    # todo Check the update authorization for this api


    @list_route(methods=['get'], url_path='data-all')
    def data_all(self, request):
        """
        Get private user data
        """
        # try:
        if 'username' in request.GET:
            user_d = authenticate(username=request.GET['username'], password=request.GET['password'])
        else:
            user_d = User.objects.get(pk=request.user.id)
        user = self.serializer_class(instance=user_d, many=False)

        follower = UserFollowUser.objects.filter(follower=user_d.pk).filter(followingTrue=True).filter(~Q(state=1))
        if follower.exists():
            follower = MyfollowingSerializer(instance=follower, many=True)
        else:
            follower.data = None

        community = UserJoinsCommunity.objects.filter(user=user_d.pk).filter(joined=True)

        if community.exists():
            community = UserJoinsCommunitySerializer(instance=community, many=True)
        else:
            community.data = None

        return Response({'my_data': user.data, 'follow_data': follower.data, 'community_data': community.data})
        # except:
        #     response = {"detail": "Authorization or Syntax Error"}
        #     return Response(response, status=status.HTTP_400_BAD_REQUEST)
    # todo Check the update authorization for this api

    def partial_update(self, request, pk):
        # todo add authentication in the "pk"
        if 'username' in request.GET:
            user_d = authenticate(username=request.GET['username'], password=request.GET['password'])
        else:
            user_d = request.user

        serializer = UserPrivateSerializer(user_d, data=request.data, partial=True, many=False) # set partial=True to update a data partially
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)



class UserPublicViewSet(viewsets.GenericViewSet):
    """
    API endpoint to see user others profile
    """
    queryset = User.objects.all()
    serializer_class = UserPublicSerializer
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['id', 'username', 'followingCount']

    @list_route(methods=['get'], url_path='profile-visit')
    def profile_visit(self, request):
        """
        <h3>To get using profile username pass (/UserPublic/profile-visit/?username=[username]),<br />
        To get using profile using id pass (/UserPublic/profile-visit/?id=[id of account])</h3>
        """
        try:
            # Increase Profile visit counter
            if request.GET.get('id', False):
                user = User.objects.get(pk=int(request.GET['id']))
            elif request.GET.get('username', False):
                user = User.objects.get(username=str(request.GET['username']))
            user = self.serializer_class(instance=user, many=False)
            return Response(user.data)

            # add async for following etc
        except:
            return Response({"detail": "Bad Request"}, status=status.HTTP_400_BAD_REQUEST)


class DevicesViewSet(mixins.RetrieveModelMixin,
                     mixins.CreateModelMixin,
                    viewsets.GenericViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Devices.objects.all()
    serializer_class = DevicesSerializer
    permission_classes = (UserOCRAW,)
    # todo go throught it in last


class CommunityViewSet(mixins.RetrieveModelMixin,
                   mixins.UpdateModelMixin,
                   mixins.ListModelMixin,
                   viewsets.GenericViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Community.objects.all()
    serializer_class = CommunitySerializer
    permission_classes = (CommunityOCWOCR,)
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['plus18', 'total_score', 'name', 'url', 'creator', 'state']


    @detail_route(methods=['get'], url_path='all')
    def all(self, request, pk):
        try:
            if pk.isdigit():
                comm = Community.objects.get(pk=int(pk))
            elif re.match("[a-z0-9\-]+", pk):
                comm = Community.objects.get(url=pk)
            else:
                assert "Wrong input Provided"

            col = Column.objects.filter(communtiy=comm.id)

            comm = CommunitySerializer(instance=comm, many=False)
            col = ColumnSerializer(instance=col, many=True)
            return Response({"community": comm.data, "columns": col.data})
        except:
            return Response({"detail": "Bad Request"}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'], url_path='home-communities-list')
    def home_communities_list(self, request):
        """
        http://localhost:8000/api/v1/Community/home-communities-list/?page=0,
        Here you will get 20 communties, after that in multiple of 20 like page=20 ....

        """
        try:
            if request.GET.get('page', False):
                start = int(request.GET['page'])
            else:
                start = 0

            comm = Community.objects.filter(state='N').filter(plus18=False).values('id', 'name', 'url', 'timeOfCreation', 'image_large', 'memberCount').order_by('-memberCount', '-timeOfCreation')[start:(start+20)]
            comm = CommunitySmallHomeSerializer(comm, many=True)
            return Response({"community": comm.data})
        except:
            return Response({"detail": "Bad Request"}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'], url_path='signup-communities-list')
    def signup_communities_list(self, request):
        """
        2 GET PARAMS

        page=0 ... (20 n),
        already selected => selected=1,2,3,4,5,
        """

        try:
            if request.GET.get('page', False):
                start = int(request.GET['page'])
            else:
                start = 0

            comm = Community.objects.filter(state='N').filter(plus18=False).values('id', 'name', 'url', 'timeOfCreation', 'image_large', 'memberCount').order_by('-memberCount', '-timeOfCreation')[start:(start+20)]
            comm = CommunitySmallHomeSerializer(comm, many=True)
            return Response({"community": comm.data})
        except:
            return Response({"detail": "Bad Request"}, status=status.HTTP_400_BAD_REQUEST)



class ColumnViewSet(mixins.RetrieveModelMixin,
                   mixins.ListModelMixin,
                   viewsets.GenericViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Column.objects.all()
    serializer_class = ColumnSerializer
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['name', 'communtiy', 'url', 'state']

    # todo updates in future



class UserJoinsCommunityViewSet(mixins.CreateModelMixin,
                   viewsets.GenericViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = UserJoinsCommunity.objects.all()
    serializer_class = UserJoinsCommunitySerializer
    permission_classes = (UserOCRAW,)

    def create(self, request, *args, **kwargs):
        """
        for testing send GET request for "username" and "password"
        and post community id in POST parameter "community"
        """
        if 'username' in request.GET:
            user = authenticate(username=request.GET['username'], password=request.GET['password'])
        else:
            user = request.user

        newJoin, created = UserJoinsCommunity.objects.get_or_create(
            user=user,
            community=int(request.POST['community'])
        )

        if created:
            return Response({"Details": "User Joined Community"})
        else:
            newJoin.joined = True
            newJoin.save()
            return Response({"Details": "User again Joined community"})

    @detail_route(methods=['post'], url_path='leave-community')
    def leave_community(self, request, pk):
        """
        for testing send GET request for "username" and "password"
        Post request parameter id=[communtiy id of leaving communtiy]

        """
        if 'username' in request.GET:
            user = authenticate(username=request.GET['username'], password=request.GET['password'])
        else:
            user = request.user

        obj = UserJoinsCommunity.objects.get(user=user, community=int(pk))
        obj.joined = False
        obj.save()

        return Response({"Details": "User Left Community"})


class UserFollowUserViewSet(viewsets.GenericViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = UserFollowUser.objects.all()
    serializer_class = UserFollowUserSerializer
    permission_classes = (followerOCRAW,)

    # todo user follow and leave

    @list_route(methods=['get'], url_path='following-list')
    def following(self, request):
        """
        <h3> List of data of user id of people I am following</h3>
        """
        # try:
        if 'username' in request.GET:
            user = authenticate(username=request.GET['username'], password=request.GET['password'])
            followlist = UserFollowUser.objects.filter(follower=user.id)
        else:
            followlist = UserFollowUser.objects.filter(follower=request.user)
        followlist = MyfollowingSerializer(instance=followlist, many=True)
        return Response(followlist.data)
        # except:
        #     return Response({'detail': "Not Valid request"}, status=status.HTTP_400_BAD_REQUEST)

    @list_route(methods=['get'], url_path='follower-list')
    def follower(self, request):
        """
        <h3> List of data of user id that are following me</h3>
        """
        try:
            if 'username' in request.GET:
                user = authenticate(username=request.GET['username'], password=request.GET['password'])
                followlist = UserFollowUser.objects.filter(follower=user.id)
            else:
                followlist = UserFollowUser.objects.filter(following=request.user)
            followlist = MyfollowerSerializer(instance=followlist, many=True)
            return Response(followlist.data)
        except:
            return Response({'detail': "Not Valid request"}, status=status.HTTP_400_BAD_REQUEST)
    # todo try to reduce the use of serilizer

    @detail_route(methods=['post'], url_path='follow')
    def follow(self, request, pk):
        """
        for testing send GET request for "username" and "password"
        Post request parameter id=[userid of user i am going to follow]
        """
        if 'username' in request.GET:
            user = authenticate(username=request.GET['username'], password=request.GET['password'])
        else:
            user = request.user

        newJoin, created = UserFollowUser.objects.get_or_create(
            follower=user,
            following=int(pk)
        )

        if created:
            return Response({"Details": "User started following"})
        else:
            newJoin.followingTrue = True
            newJoin.save()
            return Response({"Details": "User started following again"})

        # todo put try and auth verification

    @detail_route(methods=['post'], url_path='unfollow')
    def unfollow(self, request, pk):
        """
        for testing send GET request for "username" and "password"
        Post request parameter id=[userid of user i am going to unfollow]
        """
        if 'username' in request.GET:
            user = authenticate(username=request.GET['username'], password=request.GET['password'])
        else:
            user = request.user

        obj = UserFollowUser.objects.get(follower=user, following=int(pk))
        obj.followingTrue = False
        obj.save()
        return Response({"Details": "User ended following"})

        # todo put try and auth verification


class PostViewSet(mixins.CreateModelMixin,
                   mixins.RetrieveModelMixin,
                   mixins.UpdateModelMixin,
                   mixins.ListModelMixin,
                   viewsets.GenericViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['user', 'type', 'score', 'community', 'column', 'reading_time']
    permission_classes = (UserOCWOCR,)

    def list(self, request):
        """
        Newsfeed searilizer (used in home, community)

        GET Parameters:
            1. community(one or many) =] communities=1,2323,23,2 ... ids in comma
            2. column(id('s) or random) =] column=(random or id)
            3. sorting type =] sort=(top, new, hot)
            4. date sorting (post after date and time) =] time_limit=( Year,month,d,H)
            5. page count =] page=20 ... (multiple of 20)
            6. user(enter id) =] user=[userid]

        Note:
            1. "communities" has no effect when "column" id is provided.
            2. if "column" is random then "communities" must be provided and other sorting type will be disabled
            3. activities list will only be shown if user is logined
            4. If multiple community is selected then do not pass column parameter.

        Ex:
            http://localhost:8000/api/v1/Post/?communities=1&column=random&time_limit=2017,11,04,9&username=admin&password=password123&sort=top

        """
        # try:
        if 'username' in request.GET:
            userLogined = authenticate(username=request.GET['username'], password=request.GET['password']).id
        else:
            userLogined = request.user.id



        random = False
        if not request.GET.get('page', False):
            page = int(request.GET['page'])-1
        else:
            page = 0

        if request.GET.get('column', False):
            if request.GET['column'] == "random":
                random = True
                q = Post.objects.filter(community=int(request.GET['communities']))
            else:
                q = Post.objects.filter(column=int(request.GET['column']))
        elif request.GET.get('communities', False):
            if not request.GET['communities'].isdigit():
                commlist = []
                for i in request.GET['communities'].split(','):
                    commlist += [Q(community=int(i))]
                q = Post.objects.filter(reduce(OR, commlist))
            else:
                q = Post.objects.filter(community=int(request.GET['communities']))
        elif request.GET.get('user', False):
            q = Post.objects.filter(user=int(request.GET['user']))
        else:
            q = Post.objects.all()

        if request.GET.get('time_limit', False):
            timeList = list(map(int, request.GET['time_limit'].split(',')))
            from django.utils import timezone
            dateGT = timezone.make_aware(timezone.datetime(timeList[0], timeList[1], timeList[2], timeList[3], 0, 0, 0), timezone.get_current_timezone())
            q = q.filter(time_of_Creation__gte=dateGT)

        if random:
            q = q.order_by('?')
        elif request.GET.get('sort', False):
            if request.GET['sort'] == "-share_count":
                q = q.order_by('-time_of_Creation')
            elif request.GET['sort'] == "top":
                q = q.order_by('-score')
            else:
                q = q.order_by('-time_of_Creation')


        if userLogined is not None and len(q) > 0:
            q = q[(page*20):((page+1)*20)]
            activityList = []
            for i in q:
                activityList += [Q(post=i.pk)]
            activity = UserAndPost.objects.filter(user=userLogined).filter(reduce(OR, activityList))
            activity = UserAndPostSerializer(activity, many=True).data
        else:
            activity = "None"

        posts = PostSerializer(q, many=True)

        return Response({"Posts": posts.data, "Activity": activity})
        # except:
        #     return Response({'detail': "Not Valid request"}, status=status.HTTP_400_BAD_REQUEST)


    @list_route(methods=['get'], url_path='activity-posts')
    def activity_posts(self, request):
        """
        Used in retriving posts retrival based on activity or other users profile viewing

        GET parameter
            1. activity code => activity=1
            2. username and password if not logined or under development
            3. column or community ids
            4. page in multiple of 20 => page=20
            5. if viewing other user's profile pass parameter other => other=user_id
            6. user(enter id) =] user=[userid]

        Ex.
            1. all post that user saved based on community or column
            2. http://localhost:8000/api/v1/Post/activity-posts/?username=admin&password=password123&activity=1&community=1
        """

        if request.GET.get('page', False):
            pageC = int(request.GET['page'])-1
        else:
            pageC = 0

        if not request.GET.get('other', False):
            if 'username' in request.GET:
                userLogined = authenticate(username=request.GET['username'], password=request.GET['password']).id
            else:
                userLogined = request.user.id
        else:
            otherUser = User.objects.get(pk=int(request.GET['other'])) #.only('like_privacy', 'saved_privacy', 'reviewed_privacy', 'attending_privacy', 'agreed_privacy', 'Disagreed_privacy')

            if request.GET['activity'] == "1" and otherUser.like_privacy:
                notAllowed = False
            elif request.GET['activity'] == "2" and otherUser.saved_privacy:
                notAllowed = False
            elif request.GET['activity'] == "4" and otherUser.reviewed_privacy:
                notAllowed = False
            elif request.GET['activity'] == "5" and otherUser.agreed_privacy:
                notAllowed = False
            elif request.GET['activity'] == "6" and otherUser.Disagreed_privacy:
                notAllowed = False
            elif request.GET['activity'] == "7" and otherUser.attending_privacy:
                notAllowed = False
            else:
                notAllowed = True

            if notAllowed:
                return Response({'detail': 'Permission to access denied by user'})
            else:
                userLogined = otherUser.id


        q = UserAndPost.objects.filter(user=userLogined).filter(activity=int(request.GET['activity']))

        if request.GET.get('column', False):
            q = q.filter(post__column=int(request.GET['column']))
        elif request.GET.get('community', False):
            q = q.filter(post__community=int(request.GET['community']))

        q = q.order_by('-time_Of_Activity')[pageC*20:(pageC+1)*20]

        postList = []
        for i in q:
            postList += [Q(pk=i.post.id)]

        if len(postList) > 0:
            q = Post.objects.filter(reduce(OR, postList))
        else:
            return Response({'detail': 'No Posts'})

        posts = PostSerializer(q, many=True)
        return Response(posts.data)

    # todo update create method
    # todo make counter update


class ImageInPostViewSet(mixins.CreateModelMixin,
                   mixins.RetrieveModelMixin,
                   mixins.ListModelMixin,
                   viewsets.GenericViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = ImageInPost.objects.all()
    serializer_class = ImageInPostSerializer


class DisscussionViewSet(mixins.CreateModelMixin,
                   mixins.RetrieveModelMixin,
                   mixins.UpdateModelMixin,
                   mixins.ListModelMixin,
                   viewsets.GenericViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Disscussion.objects.all()
    serializer_class = DisscussionSerializer
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['user', 'post', 'treelevel', 'parentId']
    permission_classes = (UserOCWOCR,)

    # todo Update create mothod
    # todo make counter update


class UserAndPostViewSet(mixins.ListModelMixin,
                   viewsets.GenericViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = UserAndPost.objects.all()
    serializer_class = UserAndPostSerializer
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['activity', 'time_Of_Activity']
    permission_classes = (UserOCRAW,)

    # todo update create method
    # todo get post based on activity
    # todo make counter update
    # todo make posting unique test

    @list_route(methods=['post'], url_path='do-undo')
    def do_undo(self, request):
        """
        for testing send GET request for "username" and "password"
        Post request parameter post= [postid of post  on whom activity is performed]
        post request parameter activity=[activity no.]
        """
        if 'username' in request.GET:
            user = authenticate(username=request.GET['username'], password=request.GET['password'])
        else:
            user = request.user

        if request.POST.get('activity', False) and request.POST.get('post', False):

            newJoin, created = UserAndPost.objects.get_or_create(
                user=user,
                post_id=int(request.POST['post']),
                activity=int(request.POST['activity'])
            )

            if created:
                return Response({"Details": "User activity done"})
            else:
                newJoin.delete()
                return Response({"Details": "User activity undone"})
        else:
            return Response({"Details": "Bad Request :("})


class UserAndDiscussionViewSet(mixins.ListModelMixin,
                   viewsets.GenericViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = UserAndDiscussion.objects.all()
    serializer_class = UserAndDiscussionSerializer
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['agree', 'time_Of_Activity']
    permission_classes = (UserOCRAW,)

    @list_route(methods=['post'], url_path='do-undo')
    def do_undo(self, request):
        """
        for testing send GET request for "username" and "password"
        Post request parameter discussion= [discussionid of discussion  on whom activity is performed]
        post request parameter agree=[true or false]
        """
        if 'username' in request.GET:
            user = authenticate(username=request.GET['username'], password=request.GET['password'])
        else:
            user = request.user

        if request.POST.get('agree', False) and request.POST.get('discussion', False):

            newJoin, created = UserAndDiscussion.objects.get_or_create(
                user=user,
                discussion_id=int(request.POST['discussion']),
                agree=bool(request.POST['agree'])
            )

            if created:
                return Response({"Details": "activity done"})
            else:
                newJoin.delete()
                return Response({"Details": "activity undone"})
        else:
            return Response({"Details": "Bad Request :("})

    # todo make counter update
    # todo update counter



class PostReportViewSet(mixins.CreateModelMixin,
                   mixins.RetrieveModelMixin,
                   mixins.ListModelMixin,
                   viewsets.GenericViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = PostReport.objects.all()
    serializer_class = PostReportSerializer
    permission_classes = (UserOCWOCR,)
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['reason', 'post', 'total_agree', 'total_disagree']

    # todo update for viewing
    #


class PostReportUserCheckViewSet(mixins.CreateModelMixin,
                   mixins.RetrieveModelMixin,
                   mixins.UpdateModelMixin,
                   viewsets.GenericViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = PostReportUserCheck.objects.all()
    serializer_class = PostReportUserCheckSerializer
    permission_classes = (UserOCRAW,)
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['user', 'report']


class DiscussionReportViewSet(mixins.CreateModelMixin,
                   mixins.RetrieveModelMixin,
                   mixins.ListModelMixin,
                   viewsets.GenericViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = DiscussionReport.objects.all()
    serializer_class = DiscussionReportSerializer
    permission_classes = (UserOCWOCR,)
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['reason', 'discussion', 'total_agree', 'total_disagree']


class DiscussionReportUserCheckViewSet(mixins.CreateModelMixin,
                   mixins.RetrieveModelMixin,
                   mixins.UpdateModelMixin,
                   viewsets.GenericViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = DiscussionReportUserCheck.objects.all()
    serializer_class = DiscussionReportUserCheckSerializer
    permission_classes = (UserOCRAW,)
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['user', 'report']


class NotificationViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
    permission_classes = (UserOCWOCR,)
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['user', 'updated_time']

    def list(self, request):
        # try:
        notification = Notification.objects.filter(Q(user=request.user.id) | Q(user__isnull=True))
        notification = NotificationSerializer(instance=notification, many=True)
        return Response(notification.data)
        # except:
        #     return Response({'detail': 'Some Error Occurred'}, status=status.HTTP_400_BAD_REQUEST)

    @detail_route(methods=['get'], url_path='seen')
    def seen(self, request, pk):
        """
        <h3> Mark the notification as seen, need notification id</h3>
        """
        try:
            notification = Notification.objects.get(id=pk, user=request.user.id)
            notification['seen'] = True
            notification.save()
            return Response({'detail': 'Request Completed'})
        except:
            return Response({'detail': 'Some Error Occurred'}, status=status.HTTP_400_BAD_REQUEST)


class SearchViewSet(viewsets.GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserPublicSerializer

    @list_route(methods=['get'], url_path='all')
    def all(self, request):

        pass



"""
Some Imports Snippits


ModelViewSet ==
class ModelViewSet(mixins.CreateModelMixin,
                   mixins.RetrieveModelMixin,
                   mixins.UpdateModelMixin,
                   mixins.DestroyModelMixin,
                   mixins.ListModelMixin,
                   viewsets.GenericViewSet)

"""