import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Decimal: { input: any; output: any; }
};

export type Query = {
  __typename?: 'Query';
  allUsers?: Maybe<Array<Maybe<UsersType>>>;
  allUsersInfo?: Maybe<Array<Maybe<Users_InfoType>>>;
};

export type UsersType = {
  __typename?: 'UsersType';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  info?: Maybe<Users_InfoType>;
  lastName: Scalars['String']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
};

export type Users_InfoType = {
  __typename?: 'Users_InfoType';
  goalWeight: Scalars['Decimal']['output'];
  height: Scalars['Int']['output'];
  startWeight: Scalars['Decimal']['output'];
  user: UsersType;
  weeklyGoal: Scalars['Int']['output'];
  weight: Scalars['Decimal']['output'];
};

export type Get_UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_UsersQuery = { __typename?: 'Query', allUsers?: Array<{ __typename?: 'UsersType', id: string, name: string, info?: { __typename?: 'Users_InfoType', goalWeight: any, height: number, startWeight: any } | null } | null> | null };


export const Get_UsersDocument = gql`
    query GET_USERS {
  allUsers {
    id
    name
    info {
      goalWeight
      height
      startWeight
    }
  }
}
    `;

export function useGet_UsersQuery(options?: Omit<Urql.UseQueryArgs<Get_UsersQueryVariables>, 'query'>) {
  return Urql.useQuery<Get_UsersQuery, Get_UsersQueryVariables>({ query: Get_UsersDocument, ...options });
};