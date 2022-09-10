from django.db import models

# Create your models here.

class Owner(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return f'{self.name}'
    
class Car(models.Model):
    owner = models.ForeignKey('owner', on_delete=models.CASCADE, related_name='cars')
    year = models.IntegerField()
    make = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    mileage = models.IntegerField()
    
    def __str__(self):
        return f"{self.owner.name}'s {self.year} {self.make} {self.model}"