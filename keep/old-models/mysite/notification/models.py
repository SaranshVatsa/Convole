from mongoengine import *
from ..main.models import User, Post, Communities


class Notification(Document):
    timeOfCreation = DateTimeField(required=True)
    user = ReferenceField(User)
    type = IntField()
    # TODO convert above to choice
    primaryPost = ReferenceField(Post)
    primaryUser = ListField(ReferenceField(User))
    primaryCommunity = ReferenceField(Communities)
    content = StringField()
    websiteNotifi = BooleanField(default=False)
    websiteNotifiUsed = BooleanField(default=False)
    mailNotifi = BooleanField(default=False)
    mailNotifiUsed = BooleanField(default=False)
    pushNotifi = BooleanField(default=False)
    pushNotifiUsed = BooleanField(default=False)

