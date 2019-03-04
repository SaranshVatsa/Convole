from main.models import *
from report.models import *
from notification.models import *
from rest_framework import serializers


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'


class UserPrivateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ('password', 'groups', 'user_permissions', 'is_staff', 'is_superuser', 'present_location')
        read_only_fields = ('id', 'username', 'is_vip', 'is_active', 'date_joined', 'followerCount',
                            'followingCount', 'state', 'state_statement')


class UserPublicSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'image', 'about', 'followerCount',
                            'followingCount', 'is_vip', 'like_privacy', 'saved_privacy', 'reviewed_privacy',
                            'attending_privacy', 'agreed_privacy', 'Disagreed_privacy', 'state', 'state_statement')
        read_only_fields = fields


class UserPublicSmallSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'image')
        read_only_fields = fields


class DevicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Devices
        fields = '__all__'
        # read_only_fields = ('active', 'deviceId', 'registrationId',)


class ColumnSerializer(serializers.ModelSerializer):
    class Meta:
        model = Column
        fields = '__all__'
        read_only_fields = ('name', 'communtiy', 'url', 'postTypeAllowed', 'state', 'state_statement')


class ColumnSmallSerializer(serializers.ModelSerializer):
    class Meta:
        model = Column
        fields = ('name', 'url', 'postTypeAllowed', 'state', 'image_large')
        read_only_fields = fields


class CommunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Community
        fields = '__all__'
        read_only_fields = ('name', 'url', 'timeOfCreation', 'plus18', 'creator', 'total_score',
                            'state', 'state_statement')


class CommunitySmallSerializer(serializers.ModelSerializer):
    class Meta:
        model = Community
        fields = ('id', 'name', 'url', 'plus18', 'image_large')
        read_only_fields = fields

class CommunitySmallHomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Community
        fields = ('id', 'name', 'url', 'timeOfCreation', 'image_large', 'memberCount')
        read_only_fields = fields


class UserJoinsCommunitySerializer(serializers.ModelSerializer):
    community = CommunitySmallSerializer(many=False)
    class Meta:
        model = UserJoinsCommunity
        fields = ('user', 'community')
        read_only_fields = ('time_creation', 'contributionScore',)


class UserFollowUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserFollowUser
        fields = ('id', 'follower', 'following', 'state')
        read_only_fields = ('time_creation',)
        # only show followingTrue == True


class MyfollowerSerializer(UserFollowUserSerializer):
    follower = UserPublicSmallSerializer(read_only=True)


class MyfollowingSerializer(UserFollowUserSerializer):
    following = UserPublicSmallSerializer(read_only=True)


class PostSerializer(serializers.ModelSerializer):
    user = UserPublicSmallSerializer()
    class Meta:
        model = Post
        fields = '__all__'
        read_only_fields = ('time_of_Creation', 'score', 'report_count', 'share_count', 'attending_count',
                            'best', 'good', 'normal', 'bad', 'worst', 'like_count', 'save_count', 'agree_count',
                            'disagree_count', 'state', 'state_statement', 'search_indexed', 'reading_time')


class ImageInPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageInPost
        fields = '__all__'


class DisscussionSerializer(serializers.ModelSerializer):
    user = UserPublicSmallSerializer()
    class Meta:
        model = Disscussion
        fields = '__all__'
        read_only_fields = ('agreedCount', 'disagreedCount', 'report_count', 'state', 'state_statement')


class UserAndPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAndPost
        fields = '__all__'

class UserAndDiscussionSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAndDiscussion
        fields = '__all__'


class PostReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostReport
        fields = '__all__'
        read_only_fields = ('user', 'post', 'timeOfCreation', 'total_agree', 'total_disagree', 'total_switch',
                            'final_decision_taken')


class PostReportUserCheckSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostReportUserCheck
        fields = '__all__'
        read_only_fields = ('user', 'report')



class DiscussionReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiscussionReport
        fields = '__all__'
        read_only_fields = ('user', 'discussions', 'total_agree', 'total_disagree', 'final_decision_taken')


class DiscussionReportUserCheckSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiscussionReportUserCheck
        fields = '__all__'

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = '__all__'
        # read_only_fields = fields
"""
fields = ('id', 'email', 'first_name', 'last_name' ,'security_question',
'security_question_answer', 'password', 'is_active', 'is_staff')

read_only_fields = ('is_active', 'is_staff')
extra_kwargs = {
    'security_question': {'write_only': True},
    'security_question_answer': {'write_only': True},
    'password': {'write_only': True}
}

"""
