from django.db import models


# Create your models here.
class User(models.Model):
    user_id = models.IntegerField()
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    email = models.EmailField()
    password = models.CharField(max_length=100)
