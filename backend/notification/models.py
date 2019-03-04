from django.db import models
from main.models import User
from django.utils import timezone

# todo Create notification models here.
class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    creation_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(default=timezone.now)
    TYPE_choice = (
        (1, 'x liked your post'),
        (2, 'User saved your post'),
        (3, 'x agreed'),
        (4, 'x disagreed'),
        (5, 'x reviewed'),
        (6, 'x attending'),
        (7, 'reported your content'),
        (8, 'removed your content'),
        (9, 'removed others content that you reported'),
        (0, 'Global Alert'),
    )
    type = models.IntegerField(choices=TYPE_choice)
    related_user = models.CharField(max_length=255, blank=True)
    related_user_count = models.IntegerField(default=0)
    related_entity_id = models.IntegerField(blank=True)
    related_entity_title = models.CharField(max_length=255, blank=True)
    content = models.CharField(blank=True, max_length=100)
    image_url = models.CharField(max_length=100, blank=True)
    link_url = models.CharField(max_length=100, blank=True)
    read = models.BooleanField(default=False)

    class Meta:
        ordering = ['-updated_time']


