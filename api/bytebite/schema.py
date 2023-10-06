import graphene

from graphene_django import DjangoObjectType, DjangoListField
from .models import User


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = "___all___"
