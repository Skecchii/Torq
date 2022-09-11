from django.shortcuts import render
from .models import Owner, Car
from .serializers import CarSerializer
from rest_framework.response import Response
from rest_framework.views import APIView

from torq import serializers

# Create your views here.

# GET
class Cars_List(APIView):
    def get_all(self, request):
        cars = Car.objects.all()
        serializer = CarSerializer(cars, many=True)
        return Response(serializer.data)

# GET
class Car_Detail(APIView):
    def get_detail(self,request, pk):
        car = Car.objects.get(id=pk)
        serializer = CarSerializer(car, many=False)
        return Response(serializer.data)

# POST
class Car_Create(APIView):
    def add_car(self,request):
        serializer = CarSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)

# POST
class Car_Update(APIView):
    def update_car(self,request, pk):
        car = Car.objects.get(id=pk)
        serializer = CarSerializer(instance=car, data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)

# POST
class Car_Delete(APIView):
    def delete_car(self,request, pk):
        car = Car.objects.get(id=pk)
        car.delete()
        return Response('Car deleted successfully')