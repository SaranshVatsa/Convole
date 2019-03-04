from django_mongoengine import Document
from django_mongoengine import fields
from main.models import User, Post, Communities


class Notification(Document):
    timeOfCreation = fields.DateTimeField()
    user = fields.ReferenceField(User)
    type = fields.IntField()
    # TODO convert above to choice
    primaryPost = fields.ReferenceField(Post)
    primaryUser = fields.ListField(fields.ReferenceField(User))
    primaryCommunity = fields.ReferenceField(Communities)
    content = fields.StringField()
    websiteNotifi = fields.BooleanField(default=False)
    websiteNotifiUsed = fields.BooleanField(default=False)
    mailNotifi = fields.BooleanField(default=False)
    mailNotifiUsed = fields.BooleanField(default=False)
    pushNotifi = fields.BooleanField(default=False)
    pushNotifiUsed = fields.BooleanField(default=False)

