from django.db import models
from django.utils import timezone
from main.models import User


class HelpPage(models.Model):
    """

    All data related to url /help/... is present here
    ... replace with url_suffix

    """
    title = models.CharField(max_length=100, unique=True)
    url_suffix = models.CharField(max_length=100, unique=True)
    html = models.TextField(blank=True)
    css = models.TextField(blank=True)
    js = models.TextField(blank=True)
    time_of_creation = models.DateTimeField(auto_now_add=True)
    time_of_update = models.DateTimeField(default=timezone.now)
    published = models.BooleanField(default=False)
    staff_comment = models.TextField(max_length=500, blank=True)

    def __str__(self):
        return self.title


class StaffHelpPage(HelpPage):
    class Meta:
        proxy = True


class HelpReview(models.Model):
    user = models.ForeignKey(User, blank=True, null=True)
    help = models.ForeignKey(HelpPage)
    timestamp = models.DateTimeField(auto_now_add=True)
    good = models.BooleanField(default=False)
    comment = models.TextField(blank=True)

    def __str__(self):
        return str(self.pk)


class HelpKeyword(models.Model):
    help = models.ForeignKey(HelpPage)
    keyword = models.CharField(max_length=50)

    def __str__(self):
        return self.keyword
