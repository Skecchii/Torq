# Generated by Django 4.1.1 on 2022-09-16 20:37

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('torq', '0006_remove_car_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='car',
            name='mileage',
        ),
        migrations.CreateModel(
            name='Notes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('note', models.TextField()),
                ('timestamp', models.DateField(default=django.utils.timezone.now)),
                ('car', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='notes', to='torq.car')),
            ],
        ),
        migrations.CreateModel(
            name='Maintenance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mileage', models.PositiveIntegerField()),
                ('brakes', models.BooleanField(default=False)),
                ('tires', models.BooleanField(default=False)),
                ('engineOil', models.PositiveIntegerField()),
                ('airFilter', models.BooleanField(default=False)),
                ('timestamp', models.DateField(default=django.utils.timezone.now)),
                ('car', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='maintenances', to='torq.car')),
            ],
        ),
    ]
