from django.contrib import admin
from django.urls import path,include
from home import views

urlpatterns = [
    path('', views.homepage,name='home'),
    path('blog', views.blog,name='blog'),
    path('about', views.about,name='about'),
    path('members', views.members,name='members'),
    path('contact', views.contact,name='contact'),
    path('team', views.team,name='team'),
    path('upcomingevents', views.upcoming,name='upcoming'),
    path('gallery', views.gallery,name='gallery'),
    path('ourprojects', views.projects,name='ourprojects'),
    path('mbsa', views.mbsa,name='mbsa'),
    
    
]
