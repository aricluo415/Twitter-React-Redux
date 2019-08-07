from django.urls import include, path
from .views import CreateUserProfileView, DetailUserProfileView, ListUserProfileView
from rest_framework.routers import DefaultRouter


urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('tweets/', include('api.tweets.urls')),
    path('follows/', include('api.follows.urls')),
    path('profile/', ListUserProfileView.as_view()),
    path('profile/create/', CreateUserProfileView.as_view()),
    path('profile/<user__username>', DetailUserProfileView.as_view())

]
