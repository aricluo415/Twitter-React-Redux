""" from django.urls import path

from .views import TweetListView, TweetDetailView, TweetCreateView, TweetDeleteView, TweetUpdateView

urlpatterns = [
    path('', TweetListView.as_view()),
    path('create/', TweetCreateView.as_view()),
    path('<pk>', TweetDetailView.as_view()),
    path('<pk>/update/', TweetUpdateView.as_view()),
    path('<pk>/delete/', TweetDeleteView.as_view()),

] """
from api.tweets.views import TweetViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', TweetViewSet, base_name='tweet')
urlpatterns = router.urls
