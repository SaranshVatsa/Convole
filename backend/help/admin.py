from django.contrib import admin
from .models import *


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


class HelpKeywordsInline(admin.StackedInline):
    model = HelpKeyword
    extra = 3


class HelpPagesAdmin(admin.ModelAdmin):
    list_display = ('title', 'published', 'time_of_update', 'staff_comment')
    list_filter = ['published', 'time_of_update', 'time_of_creation']
    search_fields = ['title', 'staff_comment']

    fieldsets = [
        (None,               {'fields': ['title', 'url_suffix']}),
        ('Status', {'fields': ['published', 'time_of_update', 'staff_comment']}),
        ('Content', {
            'classes': ('collapse',),
            'fields': ['html', 'css', 'js']
        }),
    ]

    inlines = [HelpKeywordsInline]


class StaffHelpPagesAdmin(admin.ModelAdmin):
    list_display = ('title', 'published', 'time_of_update', 'staff_comment')
    list_filter = ['published', 'time_of_update']
    search_fields = ['title']

    fieldsets = [
        ('Status', {'fields': ['staff_comment']}),
        ('Content', {'fields': ['html', 'css', 'js']}),
    ]

    inlines = [HelpKeywordsInline]


class HelpReviewsAdmin(ReadOnlyAdmin):
    list_display = ('help', 'good', 'timestamp')
    list_filter = ('good', 'timestamp')
    search_fields = ['help']


admin.site.register(HelpPage, HelpPagesAdmin)
admin.site.register(StaffHelpPage, StaffHelpPagesAdmin)
admin.site.register(HelpReview, HelpReviewsAdmin)
