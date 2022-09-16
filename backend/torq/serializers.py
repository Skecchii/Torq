from rest_framework import serializers
from .models import Owner, Car

class CarSerializer(serializers.ModelSerializer):

    class Meta:
        model = Car
        fields = ['id','year', 'make', 'model', 'image', 'mileage']