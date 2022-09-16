from django.shortcuts import render
from .models import Owner, Car
from .serializers import CarSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView, CreateAPIView


# Create your views here.

@api_view(['GET', 'POST'])
def cars_list(request):
    if request.method == 'GET':
        cars = Car.objects.all()
        serializer = CarSerializer(cars, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = CarSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors)
        


@api_view(['GET', 'PUT', 'DELETE'])
def car_details(request, pk):
    if request.method == 'GET':
        car = Car.objects.get(id=pk)
        serializer = CarSerializer(car, many=False)
        return Response(serializer.data)
    if request.method == 'PUT':
        car = Car.objects.get(id=pk)
        serializer = CarSerializer(instance=car, data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)
    if request.method == 'DELETE':
        car = Car.objects.get(id=pk)
        car.delete()
    else:
        return Response(serializer.errors)

# class Car_List(ListCreateAPIView):
#     queryset = Car.objects.all()
#     serializer_class = CarSerializer

# class Car_Detail(RetrieveAPIView):
#     queryset = Car.objects.all()
#     serializer_class = CarSerializer

# class Car_Update(UpdateAPIView):
#     queryset = Car.objects.all()
#     serializer_class = CarSerializer

# class Car_Destroy(DestroyAPIView):
#     queryset = Car.objects.all()
#     serializer_class = CarSerializer
    
# class Car_Create(CreateAPIView):
#     queryset = Car.objects.all()
#     serializer_class = CarSerializer

# class Cars_List(APIView):
#     def get(self, request):
#         cars = Car.objects.all()
#         serializer = CarSerializer(cars, many=True)
#         return Response(serializer.data)

# class Car_Detail(APIView):
#     def get(self,request, pk):
#         car = Car.objects.get(id=pk)
#         serializer = CarSerializer(car, many=False)
#         return Response(serializer.data)

# class Car_Create(APIView):
#     def post(self,request, format=None):
#         serializer = CarSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#         return Response(serializer.data)

# class Car_Update(APIView):
#     def put(self,request, pk):
#         car = Car.objects.get(id=pk)
#         serializer = CarSerializer(instance=car, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#         return Response(serializer.data)

# class Car_Delete(APIView):
#     def delete(self,request, pk):
#         car = Car.objects.get(id=pk)
#         car.delete()
#         return Response('Car deleted successfully')
