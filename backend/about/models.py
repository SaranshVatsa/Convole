from django.db import models
from django.utils import timezone


class AboutPage(models.Model):
    """

    All data related to url /about/... is present here
    ... replace with url_suffix

    """
    title = models.CharField(max_length=50, unique=True)
    url_suffix = models.CharField(max_length=50, unique=True,
            help_text="Same as Title, But spaces and symbol converted to '-'. Ex 'Privacy policy' -> 'privacy-policy'.")
    html = models.TextField(blank=True,
            help_text="Styles avalible for h1, h2, h3, p, i and b")
    css = models.TextField(blank=True)
    js = models.TextField(blank=True)
    time_of_creation = models.DateTimeField(auto_now_add=True)
    time_of_update = models.DateTimeField(default=timezone.now)
    published = models.BooleanField(default=False)
    staff_comment = models.TextField(max_length=500, blank=True,
            help_text="Log of what is done and what needs to be done.")


class StaffAboutPage(AboutPage):
    class Meta:
        proxy = True