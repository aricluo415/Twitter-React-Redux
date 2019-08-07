from django.shortcuts import render
from .models import Follows
from .serializers import FollowsSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import permissions
# Create your views here.


class FollowsViewSet(viewsets.ModelViewSet):
    queryset = Follows.objects.all()
    serializer_class = FollowsSerializer
    lookup_field = 'user__username'

    '''def retrieve(self, request, *args, **kwargs):
        print(args)
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        data = serializer.data
        # here you can manipulate your data response
        return Response(data)'''

    '''def perform_create(self, serializer):
        serializer.save(user=self.request.user)'''
