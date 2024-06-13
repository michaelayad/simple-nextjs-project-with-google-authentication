
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as any,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as any,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {

      return true;
    }
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
