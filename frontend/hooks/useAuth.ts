'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  username: string;
  email: string;
  name?: string;
  role: 'user' | 'admin';
}

export function useAuth() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  // Map NextAuth session to our expected user format
  const user: User | null = session && session.user ? {
    id: session.user.id,
    username: session.user.name || '',
    email: session.user.email || '',
    name: session.user.name || '',
    role: (session.user.role as 'user' | 'admin') || 'user',
  } : null;
  
  const isLoading = status === 'loading';
  const error = null; // We can track errors in a more sophisticated way if needed

  // Using signIn from NextAuth directly in the sign-in-form.tsx component
  const login = async (/* username: string, password: string */) => {
    // This is now handled by the sign-in-form component directly
    return false;
  };

  // Using signOut from NextAuth
  const logout = () => {
    signOut({ redirect: false });
    router.push('/auth/signin');
  };

  const register = async (
    /* username: string, email: string, password: string */
  ) => {
    // Registration is handled separately
    return false;
  };

  return {
    user,
    isLoading,
    error,
    login,
    logout,
    register,
  };
}
