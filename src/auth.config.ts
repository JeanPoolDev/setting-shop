// auth.config.ts

import NextAuth, { type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import bcryptjs from 'bcryptjs';
import { z } from 'zod';

import prisma from './lib/prisma';

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/auth/login',
    newUser: '/auth/new-account',
  },

  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === 'google') {
        const existingUser = await prisma.user.findUnique({ where: { email: user.email?.toLowerCase() } });
    
        if (!existingUser) {
          // Crear un nuevo usuario si no existe
          const newUser = await prisma.user.create({
            data: {
              name: user.name || '',
              email: user.email?.toLowerCase() as string,
              image: user.image,
              password: '', // No necesitas contraseña para Google auth
            },
          });
          console.log('Usuario creado:', newUser);
          return true;
        } else {
          console.log('Usuario existente:', existingUser);
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.data = user;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = token.data as any;
      return session;
    },
  },

  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) return null;

        const { email, password } = parsedCredentials.data;

        const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
        if (!user) return null;

        if (!bcryptjs.compareSync(password, user.password)) return null;

        const { password: _, ...rest } = user;

        return rest;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
};

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);
