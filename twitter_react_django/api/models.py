from django.db import models
from users.models import User
from api.follows.models import Follows
from api.tweets.models import Tweet
# Create your models here.


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    follows = models.OneToOneField(Follows, on_delete=models.CASCADE)
    tweets = models.ManyToManyField(Tweet,  blank=True)

    def __str__(self):
        return ("%s" % (self.user))
