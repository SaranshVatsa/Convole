from django_mongoengine import Document
from django_mongoengine import fields
from ..main.models import User


class Feedback(Document):
    user = fields.ReferenceField(User)
    timeOfCreation = fields.DateTimeField(required=True)
    currentUrl = fields.StringField()
    subject = fields.StringField()
    content = fields.StringField()
    checkedByStaff = fields.BooleanField()


# todo Web flow Database needed
