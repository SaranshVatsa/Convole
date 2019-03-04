from django.shortcuts import render_to_response
from django.template.context import RequestContext

# Create your views here.

def test_auth(self, request):
    template = 'social_networks/testsocialauth.html'

    context = RequestContext(request, {
                        'request': request,
                        'user': request.user,
                    })

    return render_to_response(self.template, context_instance=context)


