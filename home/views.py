from django.shortcuts import render

# Create your views here.
def homepage(request):
    return render(request,'index.html')
def blog(request):
    return render(request,'blog.html')
def contact(request):
    return render(request,'contact.html')
def members(request):
    return render(request,'members.html')
def about(request):
    return render(request,'about.html')
def team(request):
    return render(request,'team.html')
def upcoming(request):
    return render(request,'upcoming.html')
def gallery(request):
    return render(request,'gallery.html')
def projects(request):
    return render(request,'project.html')
def mbsa(request):
    return render(request,'mbsa.html')