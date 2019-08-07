from rest_framework import serializers
from .models import Follows
from users.serializers import UserSerializer
from users.models import User
from django.shortcuts import get_object_or_404


class forEachUser(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username', 'id')
        extra_kwargs = {
            'username': {'validators': []}
        }


class FollowsSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    print(user)
    follows = forEachUser(many=True)
    print(follows)

    class Meta:
        model = Follows
        fields = ("user", 'follows', "id")

    '''def create(self, validated_data):
        try:
            follows = Follows.objects.get(user=validated_data['user'])
            return follows
        except:
            follow = Follows(user=validated_data['user'])
            return Follows.objects.create(user=validated_data['user'])'''

    def update(self, instance, validated_data):
        queryset = User.objects.all()
        print(validated_data)
        try:
            addUser = get_object_or_404(
                queryset, username=validated_data['follows'][0]['username'])
            print('yes it exists')
            print(instance.follows.all())
            if (addUser in instance.follows.all()):
                instance.follows.remove(addUser)
            else:
                instance.follows.add(addUser)
        except Follows.DoesNotExist:
            print("No MyModel matches the given query.")

        instance.save()
        return instance
