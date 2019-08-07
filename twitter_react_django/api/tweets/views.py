from django.shortcuts import render
from .models import Tweet
from .serializers import TweetSerializer
from .pagination import TweetPageNumberPagination
from rest_framework import viewsets
# Create your views here.


class TweetViewSet(viewsets.ModelViewSet):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer
    pagination_class = TweetPageNumberPagination

    def perform_create(self, serializer):
        print(self.request.user)
        serializer.save(author=self.request.user)

    def perform_destroy(self, instance):
        instance = self.get_object()
        if instance.author == self.request.user:
            return super().perform_destroy(instance)
        else:
            return
