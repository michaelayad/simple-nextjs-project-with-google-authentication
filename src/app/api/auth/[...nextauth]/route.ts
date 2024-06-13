import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { pages } from "next/dist/build/templates/app-page";

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as any,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as any,
    }),
  ],
  session: {
    strategy: "jwt",

    // ** Seconds - How long until an idle session expires and is no longer valid
    maxAge: 30 * 24 * 60 * 60, // ** 30 days
  },
  callbacks: {
    async signIn({ user, account }: { user: any; account: any }) {
      return true;
    },
    async jwt({ token, user }: { user: any; token: any }) {
      if (user) {
        token.name = user.name;
      }

      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (session.user) {
        // ** Add custom params to user in session which are added in `jwt()` callback via `token` parameter
        session.user.name = token.name;
      }

      return session;
    },
  },
  pages: {
    signIn: "/login",
    signOut:"/signout"
  },
};

// const handler = NextAuth(authOptions);


const  handlers = NextAuth(authOptions);
export { handlers as GET, handlers as POST  };

// export const { GET, POST } = handlers;
