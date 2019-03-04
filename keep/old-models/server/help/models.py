from django_mongoengine import Document, EmbeddedDocument
from django_mongoengine import fields


class Review(EmbeddedDocument):
    ip = fields.StringField(max_length=15)  # ipv4 for the location
    timeOfCreation = fields.DateTimeField()
    helpful = fields.BooleanField(default=False)
    suggestions = fields.StringField(max_length=512)


class Help(Document):
    url = fields.StringField(max_length=250, unique=True)  # Url after http://convole.com/about/
    title = fields.StringField(max_length=250, unique=True)
    timeOfCreation = fields.DateTimeField()
    timeOfUpdate = fields.DateTimeField()
    htmlCode = fields.StringField()
    cssCode = fields.StringField()
    jsCode = fields.StringField()
    helpful = fields.ListField(fields.EmbeddedDocumentField(Review))

