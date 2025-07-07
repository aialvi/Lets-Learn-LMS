import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error('Username and password are required');
        }

        try {
          const response = await axios.post(`${API_URL}/auth/login`, {
            username: credentials.username,
            password: credentials.password,
          });

          const data = response.data;

          if (data && data.access_token) {
            // Return user with token that we'll use to set in the session
            return {
              id: data.user.id.toString(),
              email: data.user.email,
              name: data.user.username,
              role: data.user.role,
              accessToken: data.access_token,
            };
          }

          return null;
        } catch (error: unknown) {
          // Handle errors from the API
          if (axios.isAxiosError(error) && error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            const message =
              error.response.data?.message || error.response.statusText;
            throw new Error(message);
          } else if (axios.isAxiosError(error) && error.request) {
            // The request was made but no response was received
            throw new Error('No response received from authentication server');
          } else {
            // Something happened in setting up the request
            throw new Error(error instanceof Error ? error.message : 'Authentication failed');
          }
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Initial sign in
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.role = token.role as string;
        session.accessToken = token.accessToken as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret:
    process.env.NEXTAUTH_SECRET || 'your-secret-here-replace-in-production',
  debug: process.env.NODE_ENV === 'development',
};
