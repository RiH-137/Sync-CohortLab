import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";


// in order to check if the user is logged in, we need to use the currentUser function from Clerk
// and the db instance from Prisma. We will check if the user exists in the database,
//  and if not, we will create a new user.
// cherk --> prisma
export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  try {
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    const name = `${user.firstName} ${user.lastName}`;

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
      },
    });

    return newUser;
  } catch (error) {
    console.log(error.message);
  }
};
