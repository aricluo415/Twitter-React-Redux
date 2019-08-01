from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):

    #password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        slug_field = "username"
        fields = ['username', 'email', 'id']

    # def create(self, validated_data):
    #    user = super(UserSerializer, self).create(validated_data)
    #    user.set_password(validated_data['password'])
    #    user.save()
    #    return user
