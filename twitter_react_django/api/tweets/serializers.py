from rest_framework import serializers
from .models import Tweet
from users.serializers import UserSerializer


class TweetSerializer(serializers.ModelSerializer):
    author = UserSerializer(many=False, read_only=True)

    class Meta:
        model = Tweet
        fields = ('content', 'id', 'author')
