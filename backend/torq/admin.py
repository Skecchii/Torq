from django.contrib import admin
from .models import Owner, Car, Maintenance, Note

# Register your models here.
admin.site.register(Owner)
admin.site.register(Car)
admin.site.register(Maintenance)
admin.site.register(Note)