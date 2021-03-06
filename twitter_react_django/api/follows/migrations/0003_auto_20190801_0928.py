# Generated by Django 2.2.3 on 2019-08-01 09:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('follows', '0002_auto_20190801_0804'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='follows',
            name='follows',
        ),
        migrations.AddField(
            model_name='follows',
            name='follows',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='rel_to', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='follows',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='rel_from', to=settings.AUTH_USER_MODEL),
        ),
    ]
