from django.contrib import admin
from bytebite.models import User, Users_info, UserFoodLog, FoodItem, Exercise

# Register your models here.
admin.site.register(User)
admin.site.register(Users_info)
admin.site.register(UserFoodLog)
admin.site.register(FoodItem)
admin.site.register(Exercise)