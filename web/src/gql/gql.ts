/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation CreateFoodItem(\n    $calories: Int!\n    $carbs: Decimal!\n    $fat: Decimal!\n    $name: String!\n    $protein: Decimal!\n  ) {\n    createFoodItem(\n      calories: $calories\n      carbs: $carbs\n      fat: $fat\n      name: $name\n      protein: $protein\n    ) {\n      foodItem {\n        calories\n        carbs\n        fat\n        name\n        protein\n      }\n    }\n  }\n": types.CreateFoodItemDocument,
    "\n  mutation CreateUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {\n    createUser(email: $email, firstName: $firstName, lastName: $lastName, password: $password, username: $email) {\n      user {\n        email\n        firstName\n        lastName\n        username\n      }\n    }\n  }\n": types.CreateUserDocument,
    "\n  mutation CreateUserDetails(\n      $username: String!,\n      $password: String!\n      $age: Int!, \n      $dailyCalories: Int!, \n      $gender: String!, \n      $goalWeight: Float!,\n      $height: Int!,\n      $weight: Float!) \n    {\n      loginUser(password: $password, username: $username) {\n        message\n        success\n        user {\n          email\n          id\n          firstName\n          lastName\n          username\n        }\n      }\n      createUsersInfo(\n        age: $age\n        dailyCalories: $dailyCalories\n        gender: $gender\n        goalWeight: $goalWeight\n        height: $height\n        weight: $weight\n    ) \n    {\n      usersInfo {\n        age\n        dailyCalories\n        gender\n        goalWeight\n        height\n        weight\n      }\n    }\n  }\n": types.CreateUserDetailsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateFoodItem(\n    $calories: Int!\n    $carbs: Decimal!\n    $fat: Decimal!\n    $name: String!\n    $protein: Decimal!\n  ) {\n    createFoodItem(\n      calories: $calories\n      carbs: $carbs\n      fat: $fat\n      name: $name\n      protein: $protein\n    ) {\n      foodItem {\n        calories\n        carbs\n        fat\n        name\n        protein\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateFoodItem(\n    $calories: Int!\n    $carbs: Decimal!\n    $fat: Decimal!\n    $name: String!\n    $protein: Decimal!\n  ) {\n    createFoodItem(\n      calories: $calories\n      carbs: $carbs\n      fat: $fat\n      name: $name\n      protein: $protein\n    ) {\n      foodItem {\n        calories\n        carbs\n        fat\n        name\n        protein\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {\n    createUser(email: $email, firstName: $firstName, lastName: $lastName, password: $password, username: $email) {\n      user {\n        email\n        firstName\n        lastName\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {\n    createUser(email: $email, firstName: $firstName, lastName: $lastName, password: $password, username: $email) {\n      user {\n        email\n        firstName\n        lastName\n        username\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUserDetails(\n      $username: String!,\n      $password: String!\n      $age: Int!, \n      $dailyCalories: Int!, \n      $gender: String!, \n      $goalWeight: Float!,\n      $height: Int!,\n      $weight: Float!) \n    {\n      loginUser(password: $password, username: $username) {\n        message\n        success\n        user {\n          email\n          id\n          firstName\n          lastName\n          username\n        }\n      }\n      createUsersInfo(\n        age: $age\n        dailyCalories: $dailyCalories\n        gender: $gender\n        goalWeight: $goalWeight\n        height: $height\n        weight: $weight\n    ) \n    {\n      usersInfo {\n        age\n        dailyCalories\n        gender\n        goalWeight\n        height\n        weight\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUserDetails(\n      $username: String!,\n      $password: String!\n      $age: Int!, \n      $dailyCalories: Int!, \n      $gender: String!, \n      $goalWeight: Float!,\n      $height: Int!,\n      $weight: Float!) \n    {\n      loginUser(password: $password, username: $username) {\n        message\n        success\n        user {\n          email\n          id\n          firstName\n          lastName\n          username\n        }\n      }\n      createUsersInfo(\n        age: $age\n        dailyCalories: $dailyCalories\n        gender: $gender\n        goalWeight: $goalWeight\n        height: $height\n        weight: $weight\n    ) \n    {\n      usersInfo {\n        age\n        dailyCalories\n        gender\n        goalWeight\n        height\n        weight\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;