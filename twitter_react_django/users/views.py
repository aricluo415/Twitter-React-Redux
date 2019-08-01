from django.shortcuts import render
from rest_framework import viewsets, generics
from .models import User
from .serializers import UserSerializer


# Create your views here.
class UserListView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
