# Generated by Django 3.0.7 on 2020-07-24 17:09

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0004_auto_20200722_1552'),
    ]

    operations = [
        migrations.AlterField(
            model_name='column',
            name='taskIds',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, db_index=True, max_length=4), size=None),
        ),
    ]
