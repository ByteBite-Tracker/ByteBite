import graphene

from graphene_django import DjangoObjectType, DjangoListField
from .models import User


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = "__all__"


class Query(graphene.ObjectType):
    all_users = graphene.List(UserType)
    User_by_name = graphene.Field(UserType, last_name=graphene.String(required=True))

    def resolve_all_users(root, info):
        # We can easily optimize query count in the resolve method
        return User.objects.select_related("id").all()

    def resolve_user_by_last_name(root, info, last_name):
        try:
            return User.objects.get(last_name=last_name)
        except User.DoesNotExist:
            return None


schema = graphene.Schema(query=Query)
