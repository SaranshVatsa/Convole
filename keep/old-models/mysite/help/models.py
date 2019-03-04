from mongoengine import *


class Review(EmbeddedDocument):
    ip = StringField(max_length=15)  # ipv4 for the location
    timeOfCreation = DateTimeField(required=True)
    helpful = BooleanField(default=False)
    suggestions = StringField(max_length=512)


class Help(Document):
    url = StringField(required=True, max_length=250, unique=True)  # Url after http://convole.com/about/
    title = StringField(required=True, max_length=250, unique=True)
    timeOfCreation = DateTimeField(required=True)
    timeOfUpdate = DateTimeField(required=True)
    htmlCode = StringField()
    cssCode = StringField()
    jsCode = StringField()
    helpful = ListField(EmbeddedDocumentField(Review))

