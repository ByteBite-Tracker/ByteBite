from .mutations import addFood, addFoodLog, createPrefereneces, createUser, updatePrefereneces, updateUser
import graphene
from graphene_django.forms import mutation
from graphene_django import DjangoObjectType, DjangoListField
from .forms import CreatePreferenceForm, UpdatePreferenceForm, UserForm, UserUpdateForm
from .models import Users, Users_info, FoodItem, UserFoodLog


class UsersType(DjangoObjectType):
    class Meta:
        model = Users
        fields = "__all__"


class Users_InfoType(DjangoObjectType):
    class Meta:
        model = Users_info
        fields = "__all__"

class FoodItemType(DjangoObjectType):
    class Meta:
        model = FoodItem
        fields = ("name", "calories", "protein", "carbs", "fat")

class UserFoodLogType(DjangoObjectType):
    class Meta:
        model = UserFoodLog
        fields = ("user", "date", "food_item", "servings")

class Query(graphene.ObjectType):
    all_users = graphene.List(UsersType)
    all_users_info = graphene.List(Users_InfoType)

    def resolve_all_users(root, info):
        return Users.objects.all()

    def resolve_all_users_info(root, info):
        return Users_info.objects.all()

class Mutation(graphene.ObjectType):
    create_user =createUser.Field()
    update_user = updateUser.Field()
    create_preferences = createPrefereneces.Field()
    update_preferences = updatePrefereneces.Field()
    add_food = addFood.Field()
    add_food_log = addFoodLog.Field()
schema = graphene.Schema(query=Query, mutation=Mutation)
