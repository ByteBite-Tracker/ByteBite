/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: { input: any; output: any; }
  /** The `Decimal` scalar type represents a python Decimal. */
  Decimal: { input: any; output: any; }
};

/** An enumeration. */
export enum BytebiteUsers_InfoGenderChoices {
  /** Female */
  Female = 'FEMALE',
  /** Male */
  Male = 'MALE'
}

export type ChangePassword = {
  __typename?: 'ChangePassword';
  user?: Maybe<UserType>;
};

export type CreateExercise = {
  __typename?: 'CreateExercise';
  exercise?: Maybe<ExerciseType>;
};

export type CreateUser = {
  __typename?: 'CreateUser';
  user?: Maybe<UserType>;
};

export type CreateUserAndInfo = {
  __typename?: 'CreateUserAndInfo';
  user?: Maybe<UserType>;
  usersInfo?: Maybe<UsersInfoType>;
};

export type CreateUserFoodLog = {
  __typename?: 'CreateUserFoodLog';
  userFoodLog?: Maybe<UserFoodLogType>;
};

export type CreateUsersInfo = {
  __typename?: 'CreateUsersInfo';
  usersInfo?: Maybe<UsersInfoType>;
};

export type ExerciseType = {
  __typename?: 'ExerciseType';
  caloriesConsumed: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  userInfo?: Maybe<UsersInfoType>;
  workoutTime: Scalars['Int']['output'];
};

export type FoodItemMutation = {
  __typename?: 'FoodItemMutation';
  foodItem?: Maybe<FoodItemType>;
};

export type FoodItemType = {
  __typename?: 'FoodItemType';
  calories: Scalars['Int']['output'];
  carbs: Scalars['Decimal']['output'];
  fat: Scalars['Decimal']['output'];
  name: Scalars['String']['output'];
  protein: Scalars['Decimal']['output'];
};

export type LoginUser = {
  __typename?: 'LoginUser';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<UserType>;
};

export type LogoutUser = {
  __typename?: 'LogoutUser';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword?: Maybe<ChangePassword>;
  createExercise?: Maybe<CreateExercise>;
  createFoodItem?: Maybe<FoodItemMutation>;
  createUser?: Maybe<CreateUser>;
  createUserAndInfo?: Maybe<CreateUserAndInfo>;
  createUserFoodLog?: Maybe<CreateUserFoodLog>;
  createUsersInfo?: Maybe<CreateUsersInfo>;
  loginUser?: Maybe<LoginUser>;
  logoutUser?: Maybe<LogoutUser>;
  updateUsersInfo?: Maybe<UpdateUsersInfo>;
};


export type MutationChangePasswordArgs = {
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};


export type MutationCreateExerciseArgs = {
  caloriesConsumed: Scalars['Int']['input'];
  userInfoId: Scalars['Int']['input'];
  workoutTime: Scalars['Int']['input'];
};


export type MutationCreateFoodItemArgs = {
  calories: Scalars['Int']['input'];
  carbs: Scalars['Decimal']['input'];
  fat: Scalars['Decimal']['input'];
  name: Scalars['String']['input'];
  protein: Scalars['Decimal']['input'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationCreateUserAndInfoArgs = {
  age: Scalars['Int']['input'];
  dailyCalories: Scalars['Int']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  goalWeight: Scalars['Float']['input'];
  height: Scalars['Int']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
  weight: Scalars['Float']['input'];
};


export type MutationCreateUserFoodLogArgs = {
  date: Scalars['Date']['input'];
  foodItemName: Scalars['String']['input'];
  servings: Scalars['Int']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationCreateUsersInfoArgs = {
  age: Scalars['Int']['input'];
  dailyCalories: Scalars['Int']['input'];
  gender: Scalars['String']['input'];
  goalWeight: Scalars['Float']['input'];
  height: Scalars['Int']['input'];
  weight: Scalars['Float']['input'];
};


export type MutationLoginUserArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationUpdateUsersInfoArgs = {
  age?: InputMaybe<Scalars['Int']['input']>;
  dailyCalories?: InputMaybe<Scalars['Int']['input']>;
  email: Scalars['String']['input'];
  gender?: InputMaybe<Scalars['String']['input']>;
  goalWeight?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type Query = {
  __typename?: 'Query';
  allFoodItems?: Maybe<Array<Maybe<FoodItemType>>>;
  allUsers?: Maybe<Array<Maybe<UserType>>>;
  allUsersInfo?: Maybe<Array<Maybe<UsersInfoType>>>;
  userById?: Maybe<UserType>;
  userFoodLogSummary?: Maybe<UserFoodLogSummaryType>;
  userInfoByEmail?: Maybe<UsersInfoType>;
  usersInfo?: Maybe<UsersInfoType>;
};


export type QueryUserByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserFoodLogSummaryArgs = {
  date: Scalars['Date']['input'];
  userId: Scalars['ID']['input'];
};


export type QueryUserInfoByEmailArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateUsersInfo = {
  __typename?: 'UpdateUsersInfo';
  usersInfo?: Maybe<UsersInfoType>;
};

export type UserFoodLogSummaryType = {
  __typename?: 'UserFoodLogSummaryType';
  totalCalories?: Maybe<Scalars['Float']['output']>;
  totalCarbohydrates?: Maybe<Scalars['Float']['output']>;
  totalFat?: Maybe<Scalars['Float']['output']>;
  totalProtein?: Maybe<Scalars['Float']['output']>;
};

export type UserFoodLogType = {
  __typename?: 'UserFoodLogType';
  date: Scalars['Date']['output'];
  foodItem: FoodItemType;
  id?: Maybe<Scalars['ID']['output']>;
  servings: Scalars['Int']['output'];
  user: UsersInfoType;
};

export type UserType = {
  __typename?: 'UserType';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  lastName: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type UsersInfoType = {
  __typename?: 'UsersInfoType';
  age: Scalars['Int']['output'];
  dailyCalories: Scalars['Int']['output'];
  exercises?: Maybe<Array<Maybe<ExerciseType>>>;
  gender: BytebiteUsers_InfoGenderChoices;
  goalWeight: Scalars['Decimal']['output'];
  height: Scalars['Int']['output'];
  user: UserType;
  userfoodlogSet: Array<UserFoodLogType>;
  weight: Scalars['Decimal']['output'];
};

export type CreateFoodItemMutationVariables = Exact<{
  calories: Scalars['Int']['input'];
  carbs: Scalars['Decimal']['input'];
  fat: Scalars['Decimal']['input'];
  name: Scalars['String']['input'];
  protein: Scalars['Decimal']['input'];
}>;


export type CreateFoodItemMutation = { __typename?: 'Mutation', createFoodItem?: { __typename?: 'FoodItemMutation', foodItem?: { __typename?: 'FoodItemType', calories: number, carbs: any, fat: any, name: string, protein: any } | null } | null };

export type ChangePasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword?: { __typename?: 'ChangePassword', user?: { __typename?: 'UserType', id?: string | null, email: string, firstName: string } | null } | null };

export type GetFoodQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFoodQuery = { __typename?: 'Query', allFoodItems?: Array<{ __typename?: 'FoodItemType', calories: number, carbs: any, fat: any, name: string, protein: any } | null> | null };

export type UpdateCalsMutationVariables = Exact<{
  date: Scalars['Date']['input'];
  foodItemName: Scalars['String']['input'];
  servings: Scalars['Int']['input'];
  userId: Scalars['ID']['input'];
}>;


export type UpdateCalsMutation = { __typename?: 'Mutation', createUserFoodLog?: { __typename?: 'CreateUserFoodLog', userFoodLog?: { __typename?: 'UserFoodLogType', date: any, id?: string | null, servings: number } | null } | null };

export type UpdateWeightMutationVariables = Exact<{
  email: Scalars['String']['input'];
  weight: Scalars['Float']['input'];
}>;


export type UpdateWeightMutation = { __typename?: 'Mutation', updateUsersInfo?: { __typename?: 'UpdateUsersInfo', usersInfo?: { __typename?: 'UsersInfoType', weight: any } | null } | null };

export type UserInfoQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type UserInfoQuery = { __typename?: 'Query', userInfoByEmail?: { __typename?: 'UsersInfoType', age: number, dailyCalories: number, gender: BytebiteUsers_InfoGenderChoices, goalWeight: any, height: number, weight: any, exercises?: Array<{ __typename?: 'ExerciseType', workoutTime: number, caloriesConsumed: number } | null> | null, userfoodlogSet: Array<{ __typename?: 'UserFoodLogType', servings: number, foodItem: { __typename?: 'FoodItemType', calories: number } }> } | null };

export type UpdateUserSettingsMutationVariables = Exact<{
  email: Scalars['String']['input'];
  age: Scalars['Int']['input'];
  dailyCalories: Scalars['Int']['input'];
  gender: Scalars['String']['input'];
  goalWeight: Scalars['Float']['input'];
  height: Scalars['Int']['input'];
  weight: Scalars['Float']['input'];
}>;


export type UpdateUserSettingsMutation = { __typename?: 'Mutation', updateUsersInfo?: { __typename?: 'UpdateUsersInfo', usersInfo?: { __typename?: 'UsersInfoType', age: number, dailyCalories: number, gender: BytebiteUsers_InfoGenderChoices, goalWeight: any, height: number, weight: any } | null } | null };

export type UserProfileInfoQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type UserProfileInfoQuery = { __typename?: 'Query', userInfoByEmail?: { __typename?: 'UsersInfoType', age: number, dailyCalories: number, gender: BytebiteUsers_InfoGenderChoices, goalWeight: any, height: number, weight: any } | null };

export type CreateUserMutationVariables = Exact<{
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
  age: Scalars['Int']['input'];
  dailyCalories: Scalars['Int']['input'];
  gender: Scalars['String']['input'];
  goalWeight: Scalars['Float']['input'];
  height: Scalars['Int']['input'];
  weight: Scalars['Float']['input'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUserAndInfo?: { __typename?: 'CreateUserAndInfo', user?: { __typename?: 'UserType', email: string, firstName: string, lastName: string, username: string } | null, usersInfo?: { __typename?: 'UsersInfoType', age: number, dailyCalories: number, gender: BytebiteUsers_InfoGenderChoices, goalWeight: any, height: number, weight: any } | null } | null };


export const CreateFoodItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFoodItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"calories"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"carbs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fat"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"protein"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFoodItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"calories"},"value":{"kind":"Variable","name":{"kind":"Name","value":"calories"}}},{"kind":"Argument","name":{"kind":"Name","value":"carbs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"carbs"}}},{"kind":"Argument","name":{"kind":"Name","value":"fat"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fat"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"protein"},"value":{"kind":"Variable","name":{"kind":"Name","value":"protein"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"foodItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"calories"}},{"kind":"Field","name":{"kind":"Name","value":"carbs"}},{"kind":"Field","name":{"kind":"Name","value":"fat"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"protein"}}]}}]}}]}}]} as unknown as DocumentNode<CreateFoodItemMutation, CreateFoodItemMutationVariables>;
export const ChangePasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oldPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"newPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}}},{"kind":"Argument","name":{"kind":"Name","value":"oldPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oldPassword"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}}]}}]}}]}}]} as unknown as DocumentNode<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const GetFoodDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFood"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allFoodItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"calories"}},{"kind":"Field","name":{"kind":"Name","value":"carbs"}},{"kind":"Field","name":{"kind":"Name","value":"fat"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"protein"}}]}}]}}]} as unknown as DocumentNode<GetFoodQuery, GetFoodQueryVariables>;
export const UpdateCalsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCals"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"foodItemName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"servings"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUserFoodLog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}},{"kind":"Argument","name":{"kind":"Name","value":"foodItemName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"foodItemName"}}},{"kind":"Argument","name":{"kind":"Name","value":"servings"},"value":{"kind":"Variable","name":{"kind":"Name","value":"servings"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userFoodLog"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"servings"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateCalsMutation, UpdateCalsMutationVariables>;
export const UpdateWeightDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateWeight"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"weight"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUsersInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"weight"},"value":{"kind":"Variable","name":{"kind":"Name","value":"weight"}}},{"kind":"Argument","name":{"kind":"Name","value":"age"},"value":{"kind":"NullValue"}},{"kind":"Argument","name":{"kind":"Name","value":"dailyCalories"},"value":{"kind":"NullValue"}},{"kind":"Argument","name":{"kind":"Name","value":"gender"},"value":{"kind":"NullValue"}},{"kind":"Argument","name":{"kind":"Name","value":"goalWeight"},"value":{"kind":"NullValue"}},{"kind":"Argument","name":{"kind":"Name","value":"height"},"value":{"kind":"NullValue"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"weight"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateWeightMutation, UpdateWeightMutationVariables>;
export const UserInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userInfoByEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"dailyCalories"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"goalWeight"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"exercises"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workoutTime"}},{"kind":"Field","name":{"kind":"Name","value":"caloriesConsumed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userfoodlogSet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"foodItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"calories"}}]}},{"kind":"Field","name":{"kind":"Name","value":"servings"}}]}}]}}]}}]} as unknown as DocumentNode<UserInfoQuery, UserInfoQueryVariables>;
export const UpdateUserSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserSettings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"age"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dailyCalories"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gender"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"goalWeight"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"height"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"weight"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUsersInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"age"},"value":{"kind":"Variable","name":{"kind":"Name","value":"age"}}},{"kind":"Argument","name":{"kind":"Name","value":"dailyCalories"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dailyCalories"}}},{"kind":"Argument","name":{"kind":"Name","value":"gender"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gender"}}},{"kind":"Argument","name":{"kind":"Name","value":"goalWeight"},"value":{"kind":"Variable","name":{"kind":"Name","value":"goalWeight"}}},{"kind":"Argument","name":{"kind":"Name","value":"height"},"value":{"kind":"Variable","name":{"kind":"Name","value":"height"}}},{"kind":"Argument","name":{"kind":"Name","value":"weight"},"value":{"kind":"Variable","name":{"kind":"Name","value":"weight"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"dailyCalories"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"goalWeight"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateUserSettingsMutation, UpdateUserSettingsMutationVariables>;
export const UserProfileInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserProfileInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userInfoByEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"dailyCalories"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"goalWeight"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}}]}}]}}]} as unknown as DocumentNode<UserProfileInfoQuery, UserProfileInfoQueryVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"age"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dailyCalories"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gender"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"goalWeight"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"height"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"weight"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUserAndInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"age"},"value":{"kind":"Variable","name":{"kind":"Name","value":"age"}}},{"kind":"Argument","name":{"kind":"Name","value":"dailyCalories"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dailyCalories"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"gender"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gender"}}},{"kind":"Argument","name":{"kind":"Name","value":"goalWeight"},"value":{"kind":"Variable","name":{"kind":"Name","value":"goalWeight"}}},{"kind":"Argument","name":{"kind":"Name","value":"height"},"value":{"kind":"Variable","name":{"kind":"Name","value":"height"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"weight"},"value":{"kind":"Variable","name":{"kind":"Name","value":"weight"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"usersInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"dailyCalories"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"goalWeight"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}}]}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;