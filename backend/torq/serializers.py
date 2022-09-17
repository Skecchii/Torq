from rest_framework import serializers
from .models import Owner, Car, Maintenance, Note

class CarSerializer(serializers.ModelSerializer):

    class Meta:
        model = Car
        fields = ['id','year', 'make', 'model', 'mileage']
        
class MaintenanceSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Maintenance
        fields = '__all__'
        
class NoteSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Note
        fields = '__all__'