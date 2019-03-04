from django.contrib import admin
from .models import *
# Register your models here.


class AboutPagesAdmin(admin.ModelAdmin):
    list_display = ('title', 'published', 'time_of_update', 'staff_comment')
    list_filter = ['published', 'time_of_update', 'time_of_creation']
    search_fields = ['title', 'staff_comment']

    fieldsets = [
        (None,               {'fields': ['title', 'url_suffix']}),
        ('Status', {'fields': ['published', 'time_of_update', 'staff_comment']}),
        ('Source', {'fields': ['html', 'css', 'js']}),
    ]


class StaffAboutPagesAdmin(admin.ModelAdmin):
    list_display = ('title', 'published', 'time_of_update', 'staff_comment')
    list_filter = ['published', 'time_of_update']
    search_fields = ['title', 'staff_comment']

    fieldsets = [
        ('Status', {'fields': ['staff_comment']}),
        ('Source', {'fields': ['html', 'css', 'js']}),
    ]


admin.site.register(AboutPage, AboutPagesAdmin)
admin.site.register(StaffAboutPage, StaffAboutPagesAdmin)
