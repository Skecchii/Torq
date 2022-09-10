from django.urls import path
from .import views
urlpatterns = [
    path('', views.All_Cars.as_view(), name='cars_list')
]
