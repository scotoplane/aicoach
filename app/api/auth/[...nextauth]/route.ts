import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const { GOOGLE_CLIENT_ID = '', GOOGLE_CLIENT_SECRET = '' } = process.env;

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],

  async session({ session }) {
    // store user id from prisma in session
    const sessionUser = await prisma.session.findUnique({
      where: {
        email: session.user.email as string
      }
    });
    session.userId = sessionUser?.id;
  },
  // every nextjs route is a serverless function, lambda function
  // that opens up only when it is called, so server does not have
  // to run constantly
  async signIn({ profile }) {
    try {
      const sessionUser = await prisma.session.findUnique({
        where: {
          email: 
      // const user = await prisma.user.findUnique({
      //   where: {
      //     email: profile.email as string,
      //   },
      // });
      // if (user) {
      //   return true;
      // }
      // await prisma.user.create({
      //   data: {
      //     email: profile.email as string,
      //     name: profile.name as string,
      //     image: profile.image as string,
      //   },
      // });
      return true;
    } catch (error) {

    }
  },
});

export { handler as GET, handler as POST };
