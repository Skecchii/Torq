from django.shortcuts import render
from .models import Owner, Car
from .serializers import CarSerializer
from rest_framework.response import Response
from rest_framework.views import APIView

from torq import serializers

# Create your views here.

class Cars_List(APIView):
    def get(self, request):
        cars = Car.objects.all()
        serializer = CarSerializer(cars, many=True)
        return Response(serializer.data)

class Car_Detail(APIView):
    def get(self,request, pk):
        car = Car.objects.get(id=pk)
        serializer = CarSerializer(car, many=False)
        return Response(serializer.data)
    
class Car_Create(APIView):
    def post(self,request):
        serializer = CarSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)

class Car_Update(APIView):
    def put(self,request, pk):
        car = Car.objects.get(id=pk)
        serializer = CarSerializer(instance=car, data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)
    
class Car_Delete(APIView):
    def delete(self,request, pk):
        car = Car.objects.get(id=pk)
        car.delete()
        return Response('Car deleted successfully')