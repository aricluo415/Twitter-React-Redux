

# Create your views here.
from django.shortcuts import render
from rest_framework import viewsets, generics, status
from rest_framework.response import Response

from .models import UserProfile
from users.models import User
from .serializers import UserProfileSerializer
from api.tweets.models import Tweet
from api.follows.models import Follows

# Create your views here.


class ListUserProfileView(generics.ListAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer


class CreateUserProfileView(generics.CreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    lookup_field = "user__username"

    '''def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(
            data={"user": request.user.username, "follows": {"follows": []}, "tweets": []})

        serializer.is_valid(raise_exception=False)
        serializer.save(user=request.user)

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    '''


class DetailUserProfileView(generics.RetrieveAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    lookup_field = "user__username"

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        print(serializer.data)
        return Response(serializer.data)
