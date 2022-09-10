from django.shortcuts import render
from .models import Owner, Car
from .serializers import CarSerializer
from rest_framework.response import Response
from rest_framework.views import APIView

# Create your views here.

class All_Cars(APIView):
    def get(self, request):
        cars = Car.objects.all()
        serializer = CarSerializer(cars, many=True)
        return Response(serializer.data)
