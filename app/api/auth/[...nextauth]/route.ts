import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider  from "next-auth/providers/credentials"
import {compare} from "bcrypt"
import prismaClient from "@/app/config/prisma"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
        name: "Credentials",
        credentials: {
           email: {label: "email", type: "text", placeholder: "enter a email"},
           password: {label: "password", type: "password"}
        },
        async authorize(credentials){
            if(!credentials?.email || !credentials?.password) return null;

            const user = await prismaClient.user.findUnique({
                where: {
                    email: credentials.email
                },
            })

            if(!user) return null;

            const isValidPass = await compare(credentials.password, user?.password)
            if(!isValidPass){
                return null;
            }
            return {
               id: user.id,
               email: user.email,
               name: user.name || ""
            }
        }
    })
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt"
  },

  callbacks: {
    async jwt({ token, user}: any) {
        if(user) {
        token.id = user.id;
        };
        return token;
    },
    async session({session, token}: any){
        if(session.user && token.id){
            session.user.id = token.id as string
        }
        return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;