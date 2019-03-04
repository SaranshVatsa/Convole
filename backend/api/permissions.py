from rest_framework import permissions


class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    """

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the owner of the snippet.
        return obj.owner == request.user


class OwnerCanReadAndWrite(permissions.BasePermission):
    """
    Only User can read and write
    """
    def has_object_permission(self, request, view, obj):
        # Write permissions are only allowed to the owner of the snippet.
        return obj == request.user


###########################################
#  Only can write other can read (OCWOCR) #
###########################################


class CommunityOCWOCR(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.creator == request.user


class UserOCWOCR(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.user == request.user


#####################################
#  Owner can Read and write (OCRAW) #
#####################################


class UserOCRAW(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.user == request.user


class followerOCRAW(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.follower == request.user