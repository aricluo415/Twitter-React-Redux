from django.urls import path, include
from rest_framework import routers
from . import views

#router = routers.DefaultRouter()
#router.register('users', views.UserListView.as_view())

urlpatterns = [
    path('', views.UserListView.as_view())
]
