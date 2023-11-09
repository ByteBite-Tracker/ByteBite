import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { graphql } from '@/gql';
import { cacheExchange, createClient, fetchExchange } from 'urql';

export const authOptions = {
  secret: process.env.NextAuth_SECRET,
  // Configure one or more authentication providers
  providers: [

    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {

        const client = createClient({
          url: 'http://127.0.0.1:8000/graphql',
          exchanges: [cacheExchange, fetchExchange]
        });

        const GET_USER = graphql(`
          query GET_USER($email: String!, $password: String!) {
            user(email: $email, password: $password) {
              id
              email
              password
              firstName
              lastName
            }
          }
        `);

        try {
          const variables = {
            email: credentials?.email,
            password: credentials?.password
          };

          const result = await client.query(GET_USER, variables).toPromise();
          if (result.error) {
            throw new Error(result.error.message);
          }

          const user = result.data.user;
          if (user) {
            return {
              id: user.id,
              name: `${user.firstName} ${user.lastName}`,
              email: user.email
            };
          } else {
            return Promise.reject(new Error('Incorrect email or password'));
          }
        } catch (error) {
          console.error(error);
          return Promise.reject(new Error('Error connecting to GraphQL'));
        }
      }
    })
    // ...add more providers here
  ]
  // ... rest of the config ...
};
export default NextAuth(authOptions);
