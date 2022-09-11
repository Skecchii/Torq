from django.urls import path
from . import views
urlpatterns = [
    path('cars', views.Cars_List.as_view(), name='cars_list'),
    path('cars/<int:pk>/', views.Car_Detail.as_view(), name='car_detail'),
    path('cars/create', views.Car_Create.as_view(), name='car_create'),
    path('cars/<int:pk>/update', views.Car_Update.as_view(), name='car_update'),
    path('cars/<int:pk>/delete', views.Car_Delete.as_view(), name='car_delete'),
]
