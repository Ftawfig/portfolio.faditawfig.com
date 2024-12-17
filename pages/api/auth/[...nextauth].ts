import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { dbService } from "../../../db";
import { call } from "@mdxeditor/editor";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      const { email } = user;
      const { name } = profile;
      const { id } = account;
      const adminEmail = process.env.ADMIN_EMAIL;

      const userData = await dbService.getUserByEmail(email);

      console.log(userData);

      if (userData === null || email != adminEmail) {
        return false;
      }

      return true;
    },async jwt({ token }) {
      const { user, account } = token;

      console.log(user);

      if (!token.account) {
        const userData = await dbService.getUserByEmail(token.email);
        console.log("USERDATA: ", userData);
        token.account = userData;
        console.log("TOKEN: ", token);
      }

      return token;
    },async session({ token }) {
      return token;
    },
  },
}

export default NextAuth(authOptions);