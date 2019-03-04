from django.db import models
from main.models import User, Post, Disscussion, Column
# todo need to go through it again


class PostReport(models.Model):
    user = models.ForeignKey(User)
    post = models.ForeignKey(Post)
    timeOfCreation = models.DateTimeField(auto_now_add=True)
    reason = models.CharField(max_length=30)
    sub_reason = models.CharField(max_length=30)
    explaination = models.CharField(blank=True, max_length=200)
    total_agree = models.DecimalField(default=0, max_digits=7, decimal_places=5)
    total_disagree = models.DecimalField(default=0, max_digits=7, decimal_places=5)
    total_switch = models.DecimalField(default=0, max_digits=7, decimal_places=5)
    final_decision_taken = models.BooleanField(default=False)


class PostReportUserCheck(models.Model):
    user = models.ForeignKey(User)
    report = models.ForeignKey(PostReport)
    result = models.IntegerField()  # 0 for spam, 1 for good content, 2 for switch
    switch_column = models.ForeignKey(Column)


class DiscussionReport(models.Model):
    user = models.ForeignKey(User)
    discussion = models.ForeignKey(Disscussion)
    timeOfCreation = models.DateTimeField(auto_now_add=True)
    reason = models.CharField(max_length=30)
    sub_reason = models.CharField(max_length=30)
    explaination = models.CharField(blank=True, max_length=200)
    total_agree = models.DecimalField(default=0, max_digits=7, decimal_places=5)
    total_disagree = models.DecimalField(default=0, max_digits=7, decimal_places=5)
    final_decision_taken = models.BooleanField(default=False)


class DiscussionReportUserCheck(models.Model):
    user = models.ForeignKey(User)
    report = models.ForeignKey(DiscussionReport)
    result = models.IntegerField()  # 0 for spam, 1 for good content
