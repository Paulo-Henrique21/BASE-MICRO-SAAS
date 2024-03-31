import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  pages: {
    signIn: "/",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) return null;

        if (
          credentials.email === "ph.sant@hotmail.com" &&
          credentials.password === "123"
        ) {
          return {
            id: "1",
            name: "Paulo",
            email: "ph.sant@hotmail.com",
          };
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
