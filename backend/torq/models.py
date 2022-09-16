from django.db import models
from django.utils.timezone import now

# Create your models here.

class Owner(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return f'{self.name}'

# explicitly set upload path and filename
def upload_to(instance, filename):
        return 'images/{filename}'.format(filenmae=filename)
    
class Car(models.Model):
    year = models.IntegerField()
    make = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    
    def __str__(self):
        return f"{self.year} {self.make} {self.model}"
    
class Maintenance(models.Model):
    mileage = models.PositiveIntegerField()
    brakes = models.BooleanField(default=False)
    tires = models.BooleanField(default=False)
    engineOil = models.PositiveIntegerField()
    airFilter = models.BooleanField(default=False)
    timestamp = models.DateField(default=now)
    car = models.ForeignKey('Car', on_delete=models.CASCADE, related_name='maintenances')
    
class Notes(models.Model):
    note = models.TextField()
    car = models.ForeignKey('Car', on_delete=models.CASCADE, related_name='notes')
    timestamp = models.DateField(default=now)
    