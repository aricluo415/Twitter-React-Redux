from rest_framework import serializers
from users.serializers import UserSerializer
from api.follows.serializers import FollowsSerializer
from .models import UserProfile
from api.tweets.models import Tweet
from api.follows.models import Follows
from api.tweets.serializers import TweetSerializer


class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    follows = FollowsSerializer()
    tweets = TweetSerializer(many=True)

    class Meta:
        model = UserProfile
        fields = ('user', 'follows', 'tweets', 'id')

    '''def create(self, validated_data):
        print("hello", validated_data)
        user = validated_data['user']
        follows = Follows.objects.get(user=validated_data['user'].id)
        print(follows)
        tweets = list(Tweet.objects.filter(author=validated_data['user']))
        print(tweets)
        instance = UserProfile.objects.create(
            user=validated_data['user'], follows=follows)
        print('created', instance)
        instance.save()
        return instance'''
