# Generated by Django 2.0 on 2017-12-19 08:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Ownership', '0003_remove_staff_staffid'),
    ]

    operations = [
        migrations.AddField(
            model_name='staff',
            name='staffID',
            field=models.CharField(blank=True, default=None, max_length=20, null=True),
        ),
    ]
