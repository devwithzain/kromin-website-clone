import bcrypt from "bcrypt";
import prisma from "@/db/prisma";
import NextAuth, { AuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions: AuthOptions = {
   adapter: PrismaAdapter(prisma),
   providers: [
      CredentialsProvider({
         name: 'credentials',
         credentials: {
            email: { label: 'email', type: 'text' },
            password: { label: 'password', type: 'password' }
         },
         async authorize(credentials) {
            if (!credentials?.email || !credentials?.password) {
               throw new Error('Invalid credentials');
            }

            const user = await prisma.user.findUnique({
               where: {
                  email: credentials.email
               }
            });

            if (!user || !user?.hashedPassword) {
               throw new Error('Invalid credentials');
            }

            const isCorrectPassword = await bcrypt.compare(
               credentials.password,
               user.hashedPassword
            );

            if (!isCorrectPassword) {
               throw new Error('Invalid credentials');
            }

            return user;
         }
      })
   ],
   pages: {
      signIn: '/',
   },
   session: {
      strategy: "jwt",
   },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
