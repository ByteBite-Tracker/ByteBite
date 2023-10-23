from django import forms
from .models import FoodItem, UserFoodLog, Users, Users_info

class UsersForm(forms.ModelForm):
    class Meta:
        model = Users
        fields = ['username', 'first_name', 'last_name', 'email', 'password']


class UserUpdateForm(forms.ModelForm):
    class Meta:
        model = Users
        fields = ['username', 'first_name', 'last_name', 'email', 'password']

class CreatePreferenceForm(forms.ModelForm):
    class Meta:
        model = Users_info
        fields = ['height', 'age', 'start_weight','weight', 'goal_weight', 'daily_calories','goal']     

class UpdatePreferenceForm(forms.ModelForm):
    class Meta:
        model = Users_info
        fields = ['height', 'age', 'weight', 'goal_weight', 'daily_calories','goal']    

class AddFood(forms.ModelForm):
    class Meta:
        model = FoodItem
        fields = ['name', 'calories', 'protein', 'carbs', 'fat']       

class AddFoodLog(forms.ModelForm):
    class Meta:
        model = UserFoodLog
        fields = ['food_item', 'servings']     