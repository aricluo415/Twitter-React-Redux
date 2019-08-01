from django.shortcuts import render
from .models import Follows
from .serializers import FollowsSerializer
from rest_framework import viewsets
from rest_framework import permissions
# Create your views here.


class FollowsViewSet(viewsets.ModelViewSet):
    queryset = Follows.objects.all()
    serializer_class = FollowsSerializer
    lookup_field = 'user__username'

    def put(self, request, pk):
        '''instance = self.queryset.get(pk=kwargs.get('pk'))
        serializer = self.serializer_class(
            instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()'''
        return Response({"method": "PUT"})

    def patch(self, request, pk):
        return Response({"method": "PATCH"})
    '''def update(self, request, serializer, pk, partial):

        instance = self.get_object()
        instance.follows.add(4)
        print(partial)
        for x in instance.follows.all():
            print(x.id)
        print("HELLOOOOO", instance.follows)
        instance.save()
        return super().perform_update(serializer)'''
