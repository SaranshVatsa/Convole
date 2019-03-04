from mongoengine import *


class StaticPages(Document):
    url = StringField(required=True, max_length=50, unique=True)  # Url after http://convole.com/about/
    title = StringField(required=True, max_length=50, unique=True)
    htmlCode = StringField()
    cssCode = StringField()
    jsCode = StringField()
    timeOfUpdate = DateTimeField(required=True)