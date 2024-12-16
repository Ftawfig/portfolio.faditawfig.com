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

      const userData = await dbService.getUserByEmail(email);

      if (userData === null) {
        return false;
      }

      return true;
    },
  },
}

export default NextAuth(authOptions);