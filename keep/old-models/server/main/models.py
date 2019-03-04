from django_mongoengine import Document, EmbeddedDocument
from django_mongoengine import fields
from django_mongoengine.mongo_auth.models import BaseUser as bs
from django.db import models


class Devices(EmbeddedDocument):
    screenSizeX = fields.IntField()
    screenSizeY = fields.IntField()
    os = fields.StringField(max_length=25)
    browser = fields.StringField(max_length=30)
    timeOfCreation = fields.DateTimeField()
    timeOfUpdated = fields.DateTimeField()
    active = fields.BooleanField()
    deviceId = fields.StringField()
    registrationId = fields.StringField()


class Location(EmbeddedDocument):
    """
        point = GeoPointField()
        new_location = Location(point=[21.1232,23.23432])
    """
    location = fields.GeoPointField()
    streetAddress = fields.StringField(max_length=170)
    city = fields.StringField(max_length=40)
    pincode = fields.StringField(max_length=20)
    state = fields.StringField(max_length=70)
    countryCode = fields.StringField(max_length=3)


class PrivacySettings(EmbeddedDocument):
    like = fields.BooleanField(default=False)
    saved = fields.BooleanField(default=True)
    reviewed = fields.BooleanField(default=False)
    attending = fields.BooleanField(default=True)
    agreed = fields.BooleanField(default=False)
    Disagreed = fields.BooleanField(default=False)


class NotificationSettings(EmbeddedDocument):
    #  Mails and Push Notification
    reminder = fields.BooleanField(default=True)  # reminder of event
    updates = fields.BooleanField(default=True)
    reported = fields.BooleanField(default=True)
    removed = fields.BooleanField(default=True)
    agreed = fields.BooleanField(default=True)
    Disagreed = fields.BooleanField(default=True)
    follow = fields.BooleanField(default=True)
    communityUpdates = fields.BooleanField(default=True)


class SocialInfo(EmbeddedDocument):
    application = fields.StringField()
    data = fields.StringField()
    content = fields.StringField()


class User(bs, models.model):
    username = fields.StringField(max_length=50, unique=True)
    name = fields.StringField(max_length=70)
    timeOfCreation = fields.DateTimeField()
    contactInfo = fields.ListField(fields.StringField(max_length=15))
    email = fields.StringField(max_length=15)
    about = fields.StringField(max_length=250)
    gender = fields.StringField(max_length=1)
    dob = fields.DateTimeField()
    currentLocation = fields.EmbeddedDocumentField(Location)
    followerCount = fields.IntField()
    followingCount = fields.IntField()
    privacy = fields.EmbeddedDocumentField(PrivacySettings)
    notification = fields.EmbeddedDocumentField(NotificationSettings)
    socialAuthData = fields.ListField(fields.EmbeddedDocumentField(SocialInfo))
    is_vip = fields.BooleanField(default=False)
    is_active = fields.BooleanField(default=False)
    is_staff = fields.BooleanField(default=False)
    is_superuser = fields.BooleanField(default=False)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']




PostType = (
    (1, 'Link'),
    (2, 'Images'),
    (3, 'Videos'),
    (4, 'Link And Images'),
    (5, 'Link And Videos'),
    (6, 'Link And Image And Videos'),
    (7, 'Event'),
    (8, 'Noun'),
    (9, 'Discussion')
)

SortingDefault = (
    (1, 'New'),
    (2, 'Trending'),
    (3, 'Top'),
)


class Column(EmbeddedDocument):
    name = fields.StringField(max_length=50, unique=True)
    url = fields.StringField(max_length=50, unique=True)  # lowercase with hyphen
    description = fields.StringField(max_length=250)
    rules = fields.ListField(fields.StringField(max_length=150))
    postTypeAllowed = fields.IntField(choices=PostType)  # Types of post allowed to be published in this column
    sortType = fields.StringField(choices=SortingDefault)  # Post will be sorted in this order


class Communities(Document):
    '''
        Image will be CommunityUrl.extension
        and for columns CommunityUrl-ColumnsUrl.extention
    '''
    name = fields.StringField(max_length=50, unique=True)
    url = fields.StringField(max_length=50, unique=True)  # lowercase with hyphen
    tags = fields.ListField(fields.StringField(max_length=50))
    timeOfCreation = fields.DateTimeField()
    beta = fields.BooleanField(default=True)
    plus18 = fields.BooleanField(default=False)
    memberCount = fields.IntField(default=0)
    description = fields.StringField(max_length=250)
    rules = fields.ListField(fields.StringField(max_length=150))
    columns = fields.ListField(fields.EmbeddedDocumentField(Column))


class UserJoinsCommunity(Document):
    user = fields.ReferenceField(User)
    community = fields.ReferenceField(Communities)
    timeOfCreation = fields.DateTimeField()
    contributionScore = fields.IntField()
    credibilityScore = fields.IntField()
    interestScore = fields.IntField()


class UserFollowUser(Document):
    follower = fields.ReferenceField(User)
    following = fields.ReferenceField(User)
    profileVisit = fields.IntField()


class ReviewCount(EmbeddedDocument):
    best = fields.IntField()
    good = fields.IntField()
    normal = fields.IntField()
    bad = fields.IntField()
    worst = fields.IntField()


class Post(Document):
    timeOfCreation = fields.DateTimeField()
    title = fields.StringField()
    type = fields.IntField(choices=PostType)
    thumbnail = fields.StringField()
    description = fields.StringField()
    content = fields.StringField()
    tags = fields.ListField(fields.StringField(max_length=50))
    community = fields.ReferenceField(Communities)
    column = fields.StringField()
    score = fields.IntField()
    searchAble = fields.BooleanField(default=False)
    blocked = fields.BooleanField(default=False)
    # --------------------------------------------------------
    link = fields.URLField()
    location = fields.EmbeddedDocumentField(Location)
    fee = fields.StringField()
    Timings = fields.StringField()
    registrationLink = fields.URLField()
    reviewCount = fields.EmbeddedDocumentField(ReviewCount)


class Disscussion(EmbeddedDocument):
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
    username = fields.ReferenceField(User)
    post = fields.ReferenceField(Post)
    review = fields.IntField(default=0)
    parentId = fields.ObjectIdField()
    treelevel = fields.IntField(default=0)
    timeOfCreation = fields.DateTimeField()
    agreedCount = fields.IntField()
    agreedUser = fields.ListField(fields.ReferenceField(User))
    disagreedCount = fields.IntField()
    disagreedUser = fields.ListField(fields.ReferenceField(User))
    content = fields.StringField()
    block = fields.BooleanField(default=False)
    report = fields.IntField()


ActivityTypes = (
    (1, 'like'),
    (2, 'save'),
    (3, 'share'),
    (4, 'report'),
    (5, 'reviewed'),
    (6, 'agree'),
    (7, 'disagree'),
    (8, 'attending'),
)


class UserAndPost(Document):
    user = fields.ReferenceField(User)
    post = fields.ReferenceField(Post)
    activity = fields.IntField(choices=ActivityTypes)
    timeOfActivity = fields.DateTimeField()


class UserReport(EmbeddedDocument):
    user = fields.ReferenceField(User)
    credibilityScore = fields.IntField()
    reason = fields.StringField()


class Report(Document):
    username = fields.ReferenceField(User)
    post = fields.ReferenceField(Post)
    timeOfCreation = fields.DateTimeField()
    agreedCount = fields.StringField()
    subCategory = fields.StringField()
    agreeUserList = fields.ListField(fields.EmbeddedDocumentField(UserReport))
    disagreeUserList = fields.ListField(fields.EmbeddedDocumentField(UserReport))
    switchUserList = fields.ListField(fields.EmbeddedDocumentField(UserReport))
    totalReview = fields.IntField()



