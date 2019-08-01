from django.db import models
from users.models import User
# Create your models here.


class Tweet(models.Model):
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.content
