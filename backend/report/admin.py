from django.contrib import admin
from .models import *
# Register your models here.


class ReadOnlyAdmin(admin.ModelAdmin):
    readonly_fields = []

    def get_readonly_fields(self, request, obj=None):
        return list(self.readonly_fields) + \
               [field.name for field in obj._meta.fields] + \
               [field.name for field in obj._meta.many_to_many]

    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj=None):
        return False


class PostReportAdmin(ReadOnlyAdmin):
    list_display = ('reason', 'final_decision_taken', 'post')
    list_filter = ['final_decision_taken', 'timeOfCreation']
    search_fields = ['post']

    fieldsets = [
        ('Status', {'fields': ['reason', 'sub_reason', 'explaination']}),
    ]


class DiscussionReportAdmin(ReadOnlyAdmin):
    list_display = ('reason', 'final_decision_taken', 'discussion')
    list_filter = ['final_decision_taken', 'timeOfCreation']
    search_fields = ['discussion']

    fieldsets = [
        ('Status', {'fields': ['reason', 'sub_reason', 'explaination']}),
    ]


admin.site.register(PostReport, PostReportAdmin)
admin.site.register(PostReportUserCheck)
admin.site.register(DiscussionReport, DiscussionReportAdmin)
admin.site.register(DiscussionReportUserCheck)
