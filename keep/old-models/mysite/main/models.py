from mongoengine import *


class Devices(EmbeddedDocument):
    screenSizeX = IntField()
    screenSizeY = IntField()
    os = StringField(max_length=25)
    browser = StringField(max_length=30)
    timeOfCreation = DateTimeField(required=True)
    timeOfUpdated = DateTimeField(required=True)
    active = BooleanField()
    deviceId = StringField()
    registrationId = StringField()


class Location(EmbeddedDocument):
    """
        point = GeoPointField()
        new_location = Location(point=[21.1232,23.23432])
    """
    location = GeoPointField()
    streetAddress = StringField(max_length=170)
    city = StringField(max_length=40)
    pincode = StringField(max_length=20)
    state = StringField(max_length=70)
    countryCode = StringField(max_length=3)


class PrivacySettings(EmbeddedDocument):
    like = BooleanField(default=False)
    saved = BooleanField(default=True)
    reviewed = BooleanField(default=False)
    attending = BooleanField(default=True)
    agreed = BooleanField(default=False)
    Disagreed = BooleanField(default=False)


class NotificationSettings(EmbeddedDocument):
    #  Mails and Push Notification
    reminder = BooleanField(default=True)  # reminder of event
    updates = BooleanField(default=True)
    reported = BooleanField(default=True)
    removed = BooleanField(default=True)
    agreed = BooleanField(default=True)
    Disagreed = BooleanField(default=True)
    follow = BooleanField(default=True)
    communityUpdates = BooleanField(default=True)


class SocialInfo(EmbeddedDocument):
    application = StringField()
    data = StringField()
    content = StringField()


class User(Document):
    # TODO Need to make this model as auth User model
    username = StringField(required=True, max_length=50, unique=True)
    name = StringField(required=True, max_length=70)
    timeOfCreation = DateTimeField(required=True)
    contactInfo = ListField(StringField(max_length=15))
    emailInfo = ListField(StringField(max_length=15))
    about = StringField(max_length=250)
    gender = StringField(max_length=1)
    dob = DateTimeField()
    currentLocation = EmbeddedDocumentField(Location)
    followerCount = IntField()
    followingCount = IntField()
    privacy = EmbeddedDocumentField(PrivacySettings)
    notification = EmbeddedDocumentField(NotificationSettings)
    socialAuthData = ListField(EmbeddedDocumentField(SocialInfo))
    is_vip = BooleanField(default=False)
    is_active = BooleanField(default=False)
    is_staff = BooleanField(default=False)
    is_superuser = BooleanField(default=False)


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
    name = StringField(required=True, max_length=50, unique=True)
    url = StringField(required=True, max_length=50, unique=True)  # lowercase with hyphen
    description = StringField(max_length=250)
    rules = ListField(StringField(max_length=150))
    postTypeAllowed = IntField(choices=PostType)  # Types of post allowed to be published in this column
    sortType = StringField(choices=SortingDefault)  # Post will be sorted in this order


class Communities(Document):
    '''
        Image will be CommunityUrl.extension
        and for columns CommunityUrl-ColumnsUrl.extention
    '''
    name = StringField(required=True, max_length=50, unique=True)
    url = StringField(required=True, max_length=50, unique=True)  # lowercase with hyphen
    tags = ListField(StringField(max_length=50))
    timeOfCreation = DateTimeField(required=True)
    beta = BooleanField(default=True)
    plus18 = BooleanField(default=False)
    memberCount = IntField(default=0)
    description = StringField(max_length=250)
    rules = ListField(StringField(max_length=150))
    columns = ListField(EmbeddedDocumentField(Column))


class UserJoinsCommunity(Document):
    user = ReferenceField(User)
    community = ReferenceField(Communities)
    timeOfCreation = DateTimeField(required=True)
    contributionScore = IntField()
    credibilityScore = IntField()
    interestScore = IntField()


class UserFollowUser(Document):
    follower = ReferenceField(User)
    following = ReferenceField(User)
    profileVisit = IntField()


class ReviewCount(EmbeddedDocument):
    best = IntField()
    good = IntField()
    normal = IntField()
    bad = IntField()
    worst = IntField()


class Post(Document):
    timeOfCreation = DateTimeField(required=True)
    title = StringField()
    type = IntField(choices=PostType)
    thumbnail = StringField()
    description = StringField()
    content = StringField()
    tags = ListField(StringField(max_length=50))
    community = ReferenceField(Communities)
    column = StringField()
    score = IntField()
    searchAble = BooleanField(default=False)
    blocked = BooleanField(default=False)
    # --------------------------------------------------------
    link = URLField()
    location = EmbeddedDocumentField(Location)
    fee = StringField()
    Timings = StringField()
    registrationLink = URLField()
    reviewCount = EmbeddedDocumentField(ReviewCount)


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
    username = ReferenceField(User)
    post = ReferenceField(Post)
    review = IntField(default=0)
    parentId = ObjectIdField()
    treelevel = IntField(default=0)
    timeOfCreation = DateTimeField(required=True)
    agreedCount = IntField()
    agreedUser = ListField(ReferenceField(User))
    disagreedCount = IntField()
    disagreedUser = ListField(ReferenceField(User))
    content = StringField()
    block = BooleanField(default=False)
    report = IntField()


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
    user = ReferenceField(User)
    post = ReferenceField(Post)
    activity = IntField(choices=ActivityTypes)
    timeOfActivity = DateTimeField()


class UserReport(EmbeddedDocument):
    user = ReferenceField(User)
    credibilityScore = IntField()
    reason = StringField()


class Report(Document):
    username = ReferenceField(User)
    post = ReferenceField(Post)
    timeOfCreation = DateTimeField(required=True)
    agreedCount = StringField()
    subCategory = StringField()
    agreeUserList = ListField(EmbeddedDocumentField(UserReport))
    disagreeUserList = ListField(EmbeddedDocumentField(UserReport))
    switchUserList = ListField(EmbeddedDocumentField(UserReport))
    totalReview = IntField()



