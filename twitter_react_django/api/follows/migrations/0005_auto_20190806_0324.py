# Generated by Django 2.2.3 on 2019-08-06 03:24

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('follows', '0004_auto_20190801_0944'),
    ]

    operations = [
        migrations.AlterField(
            model_name='follows',
            name='follows',
            field=models.ManyToManyField(blank=True, related_name='rel_to', to=settings.AUTH_USER_MODEL),
        ),
    ]