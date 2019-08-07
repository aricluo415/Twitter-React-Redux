from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from .models import UserProfile
from users.models import User
from api.follows.models import Follows
from api.tweets.models import Tweet


@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        #print("created the man")
        follows = Follows.objects.create(user=instance)
        print(UserProfile.objects.create(user=instance, follows=follows))
        # print('created')
    else:
        print("not creatd but in here?", instance)


@receiver(post_save, sender=Tweet)
def save_tweet(sender, instance, created, **kwargs):
    if created:
        profile = UserProfile.objects.get(user=instance.author)
        profile.tweets.add(instance)
        profile.save()
    else:
        '''
        print(instance.author)
        profile = UserProfile.objects.get(user=instance.author)
        profile.tweets.add(instance)
        profile.save()'''


@receiver(post_delete, sender=Tweet)
def delete_tweet(sender, instance, **kwargs):
    profile = UserProfile.objects.get(user=instance.author)
    profile.tweets.remove(instance)
    profile.save()
