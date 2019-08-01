from django.db import models
from users.models import User
# Create your models here.


class Follows(models.Model):
    user = models.ForeignKey(User, related_name='rel_from',
                             on_delete=models.CASCADE)
    follows = models.ManyToManyField(
        User, related_name='rel_to')

    def __str__(self):
        return "%s follows %s" % (self.user, self.follows)
