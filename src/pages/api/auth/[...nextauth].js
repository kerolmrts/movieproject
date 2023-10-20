import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
<<<<<<< HEAD
<<<<<<< HEAD
import {config} from "dotenv";
=======

>>>>>>> b42e777 (Revert "update Buscador")
=======

>>>>>>> b42e7772df4c9cc20c8257a3ffe414f13a47490d

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
});

