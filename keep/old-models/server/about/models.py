from django_mongoengine import Document
from django_mongoengine import fields


class StaticPages(Document):
    url = fields.StringField(max_length=50, unique=True)  # Url after http://convole.com/about/
    title = fields.StringField(max_length=50, unique=True)
    htmlCode = fields.StringField()
    cssCode = fields.StringField()
    jsCode = fields.StringField()
    timeOfUpdate = fields.DateTimeField()