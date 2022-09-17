from django.urls import path
from . import views
urlpatterns = [
    # # note
    path('notes', views.note_lists, name='notes'),
    path('notes/<int:pk>/', views.note_details, name='note_details'),
    path('notes/<int:pk>/update', views.note_details, name='note_update'),
    path('notes/<int:pk>/delete', views.note_details, name='note_delete'),
    path('notes/create', views.note_lists, name='note_create'),
    
    # maintenance
    path('maintenance', views.maintenance_lists, name='notes'),
    path('maintenance/<int:pk>/update', views.maintenance_details, name='note_update'),
    path('maintenance/<int:pk>/delete', views.maintenance_details, name='note_delete'),
    path('maintenance/create', views.maintenance_lists, name='note_create'),
    
    # car
    path('cars', views.cars_list, name='cars_list'),
    path('cars/<int:pk>/', views.car_details, name='car_detail'),
    path('cars/<int:pk>/update', views.car_details, name='car_update'),
    path('cars/<int:pk>/delete', views.car_details, name='car_delete'),
    path('cars/create', views.cars_list, name='car_create'),
    
    # path('cars', views.Car_List.as_view()),
    # path('cars/<int:pk>/', views.Car_Detail.as_view()),
    # path('cars/<int:pk>/update', views.Car_Update.as_view()),
    # path('cars/<int:pk>/delete', views.Car_Destroy.as_view()),
    # path('cars/create', views.Car_Create.as_view()),
    
    # path('cars', views.Cars_List.as_view(), name='cars_list'),
    # path('cars/<int:pk>/', views.Car_Detail.as_view(), name='car_detail'),
    # path('cars/create', views.Car_Create.as_view(), name='car_create'),
    # path('cars/<int:pk>/update', views.Car_Update.as_view(), name='car_update'),
    # path('cars/<int:pk>/delete', views.Car_Delete.as_view(), name='car_delete'),
]
