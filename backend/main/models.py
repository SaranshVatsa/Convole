from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone
# from easy_thumbnails.fields import ThumbnailerImageField


class Location(models.Model):
    typeId = models.IntegerField()  # For reverse maping
    time = models.DateTimeField(auto_now_add=True)
    LocationType = (
        (1, 'User'),
        (2, 'Community'),
        (3, 'Posts'),
    )
    location_of = models.IntegerField(choices=LocationType, default=1)
    lat = models.IntegerField(blank=True, null=True)
    long = models.IntegerField(blank=True, null=True)
    # above used for location matching
    streetAddress = models.CharField(max_length=100, blank=True)
    city = models.CharField(max_length=50, blank=True)
    state = models.CharField(max_length=50, blank=True)
    country = models.CharField(max_length=30, blank=True)
    pincode = models.CharField(max_length=30, blank=True)

    def __str__(self):
        return str(self.location_of) + " <- " + str(self.typeId)


class User(AbstractUser):
    """
    "password": "",
    "username": "",
    "first_name": "",
    "last_name": "",
    "email": "",
    "is_active": True,
    "date_joined": null,
    "groups": [],
    "user_permissions": []
    """
    image = models.ImageField(upload_to='profile_pic/full/', blank=True)
    primary_phone_No = models.CharField(max_length=20, blank=True)
    about = models.TextField(max_length=500, blank=True, null=True)
    last_login = models.DateTimeField(auto_now_add=True)
    GENDER_CHOICE = (
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    )
    gender = models.CharField(max_length=1, choices=GENDER_CHOICE, blank=True)
    dob = models.DateField(blank=True, null=True)
    present_location = models.ForeignKey(Location, blank=True, null=True)
    followerCount = models.IntegerField(default=0)
    followingCount = models.IntegerField(default=0)
    # privacy settings
    like_privacy = models.BooleanField(default=False)
    saved_privacy = models.BooleanField(default=True)
    reviewed_privacy = models.BooleanField(default=False)
    attending_privacy = models.BooleanField(default=True)
    agreed_privacy = models.BooleanField(default=False)
    Disagreed_privacy = models.BooleanField(default=False)
    #  Mails settings
    reminder_mail = models.BooleanField(default=True)  # reminder of event
    updates_mail = models.BooleanField(default=True)
    reported_mail = models.BooleanField(default=True)
    removed_mail = models.BooleanField(default=True)
    agreed_mail = models.BooleanField(default=True)
    Disagreed_mail = models.BooleanField(default=True)
    follow_mail = models.BooleanField(default=True)
    communityUpdates_mail = models.BooleanField(default=True)
    #  push notification settings
    reminder_push = models.BooleanField(default=True)  # reminder of event
    updates_push = models.BooleanField(default=True)
    reported_push = models.BooleanField(default=True)
    removed_push = models.BooleanField(default=True)
    agreed_push = models.BooleanField(default=True)
    Disagreed_push = models.BooleanField(default=True)
    follow_push = models.BooleanField(default=True)
    communityUpdates_push = models.BooleanField(default=True)
    # Specializations
    is_vip = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    report_count = models.IntegerField(default=0)
    account_state = (
        ('I', 'Initial'),
        ('5', '5 Communities join'),
        ('B', 'Blocked'),
        ('I', 'Inactive'),
        ('A', 'Activated'),
    )
    state = models.CharField(max_length=1, choices=account_state, default='I')
    state_statement = models.CharField(max_length=200, null=True, blank=True)
    plus18 = models.BooleanField(default=False)

    USERNAME_FIELD = 'username'
    REQUIRED_models = ['email']

    def __str__(self):
        return str(self.username)


class StaffUser(User):
    class Meta:
        proxy = True


class Devices(models.Model):
    user = models.ForeignKey(User)
    screen_X = models.IntegerField(blank=True, null=True)
    screen_Y = models.IntegerField(blank=True, null=True)
    TYPE_choice = (
        ('W', 'Web'),
        ('M', 'Mobile'),
        ('T', 'Tablet'),
        ('O', 'other'),
    )
    type = models.CharField(max_length=1, choices=TYPE_choice, default='W')
    os = models.CharField(max_length=100, blank=True, null=True)
    browser = models.CharField(max_length=100, blank=True, null=True)
    time_creation = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(default=timezone.now)
    active = models.BooleanField(default=True)
    deviceId = models.CharField(max_length=100, blank=True, null=True)
    registrationId = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return str(self.type) + " # " + str(self.user)


class Community(models.Model):
    '''
    Image will be CommunityUrl.extension
    and for columns CommunityUrl-ColumnsUrl.extention
    '''
    name = models.CharField(max_length=50, unique=True)
    url = models.CharField(max_length=50, unique=True)  # lowercase with hyphen
    timeOfCreation = models.DateTimeField(auto_now_add=True)
    image_large = models.ImageField(upload_to='community_pic/full/', blank=True)
    total_score = models.IntegerField(default=0)
    creator = models.ForeignKey(User)
    plus18 = models.BooleanField(default=False)
    memberCount = models.IntegerField(default=0)
    description = models.TextField(max_length=250)
    rules = models.TextField()  # JSON stringify of list of rules
    state_choice = (
        ('R', 'Under Review'),
        ('B', 'Blocked'),
        ('U', 'Under Beta'),
        ('N', 'Normal'),
    )
    state = models.CharField(max_length=1, choices=state_choice, default='R')
    state_statement = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.name


class StaffCommunity(Community):
    class Meta:
        proxy = True


class Column(models.Model):
    communtiy = models.ForeignKey(Community, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, unique=True)
    url = models.CharField(max_length=50, unique=True)  # lowercase with hyphen
    image_large = models.ImageField(upload_to='column_pic/full/', blank=True)
    description = models.TextField(max_length=250)
    rules = models.TextField()  # JSON stringify of list of rules
    timeOfCreation = models.DateTimeField(auto_now_add=True)
    creator = models.ForeignKey(User)
    PostType = (
        (1, 'Link'),
        (2, 'Images'),
        (3, 'Videos'),
        (4, 'Link And Images'),
        (5, 'Link And Videos'),
        (6, 'Image and Video'),
        (7, 'Link And Image And Videos'),
        (8, 'Event'),
        (9, 'Noun'),
        (10, 'Discussion')
    )

    SortingDefault = (
        (1, 'New'),
        (2, 'hot'),
        (3, 'Top'),
    )
    postTypeAllowed = models.IntegerField(choices=PostType)  # Types of post allowed to be published in this column
    sortType = models.IntegerField(choices=SortingDefault, default=2)  # Post will be sorted in this order
    state_choice = (
        ('A', 'Under Review'),
        ('B', 'Blocked'),
        ('U', 'Under Beta'),
        ('N', 'Normal'),
    )
    state = models.CharField(max_length=1, choices=state_choice, default='N')
    state_statement = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.name + " / " + str(self.communtiy)


class StaffColumn(Column):
    class Meta:
        proxy = True


class UserJoinsCommunity(models.Model):
    user = models.ForeignKey(User)
    community = models.ForeignKey(Community)
    time_creation = models.DateTimeField(auto_now_add=True)
    joined = models.BooleanField(default=True)
    contributionScore = models.IntegerField(default=0)  # active participation
    credibilityScore = models.IntegerField(default=0)  # good and true community member
    interestScore = models.IntegerField(default=0)  # good follower
    state_choice = (
        (0, 'Initial'),
        (1, 'Posting Blocked'),
        (2, 'Posting and Discussion Blocked'),
        (3, 'Read Only'),
        (4, 'Moderator'),
    )
    state = models.IntegerField(choices=state_choice, default=0)
    state_statement = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return str(self.user) + " -> " + str(self.community)


class StaffUserJoinsCommunity(UserJoinsCommunity):
    class Meta:
        proxy = True


class UserFollowUser(models.Model):
    follower = models.ForeignKey(User, related_name="follower_user")
    following = models.ForeignKey(User, related_name="following_user")
    followingTrue = models.BooleanField(default=True)
    profileVisit = models.IntegerField(default=1)
    time_creation = models.DateTimeField(auto_now_add=True)
    correlation = models.DecimalField(null=True, decimal_places=5, max_digits=7)
    state_choice = (
        (0, 'Initial'),
        (1, 'Blocked'),
    )
    state = models.IntegerField(choices=state_choice, default=0)

    def __str__(self):
        return str(self.follower) + " following ->  " + str(self.following)


class Post(models.Model):
    user = models.ForeignKey(User)
    time_of_Creation = models.DateTimeField(auto_now_add=True)
    title = models.TextField()
    PostType = (
        (1, 'Link'),
        (2, 'Images'),
        (3, 'Videos'),
        (4, 'Event'),
        (5, 'Noun'),
        (6, 'Discussion'),
        (7, 'Text content')
    )
    type = models.IntegerField(choices=PostType)
    thumbnail = models.ImageField(upload_to='post/full/', blank=True)
    description = models.CharField(max_length=250, blank=True)
    content = models.TextField(blank=True)
    community = models.ForeignKey(Community)
    column = models.ForeignKey(Column)
    reading_time = models.IntegerField(default=0)
    # general
    score = models.IntegerField(default=0)
    report_count = models.IntegerField(default=0)
    share_count = models.IntegerField(default=0)
    # event
    location = models.ForeignKey(Location, blank=True, null=True)
    fee = models.CharField(blank=True, max_length=50)
    Timings = models.CharField(blank=True, max_length=50)
    registrationLink = models.URLField(blank=True)
    attending_count = models.IntegerField(default=0)
    # review count
    best = models.IntegerField(default=0)
    good = models.IntegerField(default=0)
    normal = models.IntegerField(default=0)
    bad = models.IntegerField(default=0)
    worst = models.IntegerField(default=0)
    # post
    link = models.CharField(blank=True, max_length=255, verbose_name="link of post")  # post link
    like_count = models.IntegerField(default=0)
    save_count = models.IntegerField(default=0)
    # discussions
    agree_count = models.IntegerField(default=0)
    disagree_count = models.IntegerField(default=0)
    # States
    state_choice = (
        ('B', 'Blocked'),
        ('U', 'Report'),
        ('N', 'Normal'),
        ('U', 'Verified'),
    )
    state = models.CharField(max_length=1, choices=state_choice, default='N')
    state_statement = models.CharField(max_length=200, null=True, blank=True)
    search_indexed = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class StaffPost(Post):
    class Meta:
        proxy = True


class ImageInPost(models.Model):
    post = models.ForeignKey(Post)
    image = models.ImageField(upload_to='post/full/')


class Disscussion(models.Model):
    """
    Review and Discussion are together in discussion
        1. review contains
            0 = not review
            1 = worst
            2 = bad
            3 = normal
            4 = good
            5 = best

    """
    user = models.ForeignKey(User)
    post = models.ForeignKey(Post)
    timeOfCreation = models.DateTimeField(auto_now_add=True)
    content = models.TextField()
    # type and level
    review = models.IntegerField(default=0)  # type of review or discussion
    parentId = models.ForeignKey('self', blank=True, null=True)
    treelevel = models.IntegerField(default=0)  # 0 means post, 1 means first comment
    # counters
    agreedCount = models.IntegerField(default=0)
    disagreedCount = models.IntegerField(default=0)
    report_count = models.IntegerField(default=0)
    state_choice = (
        ('B', 'Blocked'),
        ('U', 'Report'),
        ('N', 'Normal'),
        ('U', 'Verified'),
    )
    state = models.CharField(max_length=1, choices=state_choice, default='N')
    state_statement = models.CharField(max_length=200, null=True, blank=True)


class StaffDisscussion(Disscussion):
    class Meta:
        proxy = True


class UserAndPost(models.Model):
    user = models.ForeignKey(User)
    post = models.ForeignKey(Post)
    ActivityTypes = (
        (1, 'like'),
        (2, 'save'),
        (3, 'share'),
        (4, 'reviewed'),
        (5, 'agree'),
        (6, 'disagree'),
        (7, 'attending'),
    )
    activity = models.IntegerField(choices=ActivityTypes)
    time_Of_Activity = models.DateTimeField(auto_now_add=True)


class UserAndDiscussion(models.Model):
    user = models.ForeignKey(User)
    discussion = models.ForeignKey(Disscussion)
    agree = models.BooleanField()
    time_Of_Activity = models.DateTimeField(auto_now_add=True)
