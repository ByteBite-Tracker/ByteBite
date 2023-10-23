from api.bytebite.schema import Users_InfoType, UsersType
import graphene
from graphene_django.forms import mutation
from .models import FoodItem, UserFoodLog, Users
from .forms import AddFood, AddFoodLog, UpdatePreferenceForm, UsersForm, UserUpdateForm

class createUser(mutation.DjangoModelFormMutation):
    user = graphene.Field(UsersType)

    class Meta:
        formCl = UsersForm
    def perform_mutate(cls,form,info):
        user = form.save()
        return cls(user=user)
    
class updateUser(mutation.DjangoModelFormMutation):
    user = graphene.Field(UsersType)

    class Meta:
        formCl = UserUpdateForm
    def perform_mutate(cls,form,info):
        user = form.save()
        return cls(user=user)
    
class createPrefereneces(mutation.DjangoModelFormMutation):
    user = graphene.Field(Users_InfoType)

    class Meta:
        formCl = UpdatePreferenceForm
    def perform_mutate(cls,form,info):
        user = form.save()
        return cls(user=user)
        
class updatePrefereneces(mutation.DjangoModelFormMutation):
    user = graphene.Field(Users_InfoType)

    class Meta:
        formCl = UpdatePreferenceForm
    def perform_mutate(cls,form,info):
        user = form.save()
        return cls(user=user)
    
class addFood(mutation.DjangoModelFormMutation):
    user = graphene.Field(FoodItem)

    class Meta:
        formCl = AddFood
    def perform_mutate(cls,form,info):
        user = form.save()
        return cls(user=user)
    
class addFoodLog(mutation.DjangoModelFormMutation):
    user = graphene.Field(UserFoodLog)

    class Meta:
        formCl = AddFoodLog
    def perform_mutate(cls,form,info):
        user = form.save()
        return cls(user=user)