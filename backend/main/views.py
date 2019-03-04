from django.shortcuts import render

def test_auth(request):
    template = 'testsocialauth.html'
    context = {
        'request': request,
        'user': request.user,
    }

    return render(request, template, context)

