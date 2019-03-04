from mongoengine import *
from main.models import User


class Feedback(Document):
    user = ReferenceField(User)
    timeOfCreation = DateTimeField(required=True)
    currentUrl = StringField()
    subject = StringField()
    content = StringField()
    checkedByStaff = BooleanField()


# todo Web flow Database needed
