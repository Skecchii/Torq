from django.db import models

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
    image = models.ImageField(upload_to=upload_to, null=True, blank=True)
    mileage = models.IntegerField()
    
   
    
    def __str__(self):
        return f"{self.year} {self.make} {self.model}"