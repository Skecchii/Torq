from django.shortcuts import render
from .models import Owner, Car, Maintenance, Note
from .serializers import CarSerializer, MaintenanceSerializer, NoteSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView, CreateAPIView


# Create your views here.

# maintenance
@api_view(['GET', 'POST'])
def maintenance_lists(request):
    if request.method == 'GET':
        maintenances = Maintenance.objects.all()
        serializer = MaintenanceSerializer(maintenances, many=True)
        return Response(serializer.data)
    
    if request.method == 'POST':
        serializer = MaintenanceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors)
# maintenance
@api_view(['PUT', 'DELETE'])
def maintenance_details(request, pk):    
    if request.method == 'PUT':
        maintenance = Maintenance.objects.get(id=pk)
        serializer = MaintenanceSerializer(instance=maintenance, data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)
    
    if request.method == 'DELETE':
        note = Maintenance.objects.get(id=pk)
        note.delete()
    else:
        return Response(serializer.errors)

# note
@api_view(['GET', 'POST'])
def note_lists(request):
    if request.method == 'GET':
        notes = Note.objects.all()
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors)
# note
@api_view(['GET','PUT', 'DELETE'])
def note_details(request, pk):
    if request.method == 'GET':
        note = Note.objects.get(id=pk)
        serializer = NoteSerializer(note, many=False)
        return Response(serializer.data)
    
    if request.method == 'PUT':
        note = Note.objects.get(id=pk)
        serializer = NoteSerializer(instance=note, data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)
    
    if request.method == 'DELETE':
        note = Note.objects.get(id=pk)
        note.delete()
    else:
        return Response(serializer.errors)
        
# car
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
# car
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
