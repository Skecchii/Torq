from django.db import models
from django.utils.timezone import now

# Create your models here.

class Owner(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return f'{self.name}'
    
class Car(models.Model):
    year = models.IntegerField()
    make = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    mileage = models.PositiveIntegerField()
    
    def __str__(self):
        return f"{self.year} {self.make} {self.model}"
    
class Maintenance(models.Model):
    engine_oil = models.PositiveIntegerField()
    transmission_oil = models.PositiveIntegerField()
    differential_oil = models.PositiveIntegerField()
    coolant = models.PositiveIntegerField()
    brake_fluid = models.PositiveIntegerField()
    brake_pads = models.PositiveIntegerField()
    brake_rotor = models.PositiveIntegerField()
    engine_air_filter = models.PositiveIntegerField()
    cabin_air_filter = models.PositiveIntegerField()
    fuel_filter = models.PositiveIntegerField()
    tires = models.PositiveIntegerField()
    timestamp = models.DateField(default=now)
    car = models.ForeignKey('Car', on_delete=models.CASCADE, related_name='maintenances')
    
class Note(models.Model):
    note = models.TextField()
    car = models.ForeignKey('Car', on_delete=models.CASCADE, related_name='notes')
    timestamp = models.DateField(default=now)
    