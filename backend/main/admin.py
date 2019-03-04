from django.contrib import admin
from .models import *


class StaffUserAdmin(admin.ModelAdmin):
    list_display = ('email', 'username', 'is_active', 'state')
    list_filter = ['is_vip', 'is_staff', 'date_joined', 'state']
    search_fields = ['username', 'first_name', 'last_name', 'email']

    fieldsets = [
        ('Status', {'fields': ['is_vip', 'state', 'state_statement']}),
    ]


class StaffColumnInline(admin.StackedInline):
    model = StaffColumn
    extra = 1

    fieldsets = [
        (None, {'fields': ['name', 'url', 'creator']}),
        (None, {'fields': ['image_large', 'description', 'rules']}),
        (None, {'fields': ['postTypeAllowed', 'sortType', 'state', 'state_statement']}),
    ]


class StaffCommunityAdmin(admin.ModelAdmin):
    list_display = ('name', 'memberCount', 'plus18', 'state')
    list_filter = ['total_score', 'plus18', 'memberCount', 'state']
    search_fields = ['username', 'first_name', 'last_name', 'email']

    fieldsets = [
        (None, {'fields': ['name', 'url', 'creator']}),
        ('Specifications', {'fields': ['image_large', 'description', 'rules', 'state', 'state_statement']}),
    ]

    inlines = [StaffColumnInline]


class StaffUserJoinsCommunityAdmin(admin.ModelAdmin):
    list_display = ('user', 'community', 'state', 'contributionScore')
    list_filter = ['state']
    search_fields = ['user', 'community']

    fieldsets = [
        (None, {'fields': ['state', 'state_statement']}),
    ]


class StaffPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'user', 'state', 'score')
    list_filter = ['report_count', 'state']
    search_fields = ['user', 'title']

    fieldsets = [
        (None, {'fields': ['state', 'state_statement']}),
    ]


class StaffDisscussionAdmin(admin.ModelAdmin):
    list_display = ('post', 'user', 'review', 'state')
    list_filter = ['state', 'timeOfCreation']
    search_fields = ['post']

    fieldsets = [
        (None, {'fields': ['state', 'state_statement']}),
    ]


admin.site.register(Location)
admin.site.register(Devices)
admin.site.register(User)
admin.site.register(StaffUser, StaffUserAdmin)
admin.site.register(Community)
admin.site.register(StaffCommunity, StaffCommunityAdmin)
admin.site.register(Column)
admin.site.register(Post)
admin.site.register(StaffPost, StaffPostAdmin)
admin.site.register(Disscussion)
admin.site.register(StaffDisscussion, StaffDisscussionAdmin)
admin.site.register(UserJoinsCommunity)
admin.site.register(StaffUserJoinsCommunity, StaffUserJoinsCommunityAdmin)
admin.site.register(UserFollowUser)
admin.site.register(UserAndPost)
admin.site.register(UserAndDiscussion)









