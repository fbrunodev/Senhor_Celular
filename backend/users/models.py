from django.db import models

# Create your models here.
class Users(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)