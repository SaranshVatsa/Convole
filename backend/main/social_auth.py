from django.contrib.auth import login, authenticate
from .models import User
import json


def save_profile(backend, user, response, request, details, strategy, uid, *args, **kwargs):
    print(user)
    # if backend.__class__.__name__ == 'FacebookOAuth2':
    user = User.objects.get(email=response['email'])
    # user.name = details['fullname']
    # user.save()
    print()
    strategy.session_set('user_id', user.pk)
    login(strategy.request, user, backend=backend)
