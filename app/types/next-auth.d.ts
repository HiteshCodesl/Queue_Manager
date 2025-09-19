import NextAuth, {DefaultSession} from "next-auth";
import {video} from "@Prisma/client"

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            name: string;
            email: string;
            password: string;
        } & DefaultSession["user"];
    }

    interface User {
        id: string;
        email: string;
        name: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        email: string;
    }
}