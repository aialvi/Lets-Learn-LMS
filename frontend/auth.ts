import NextAuth from "next-auth";
import { authOptions } from "./lib/auth";

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
