import prisma from "./prisma.js";

await prisma.user.deleteMany();

await prisma.user.createMany({
  data: [
    { email: "1@email.gov", username: "jakemail1" },
    { email: "2@email.gov", username: "jakemail2" },
    { email: "3@email.gov", username: "jakemail3" },
  ],
});

const user = (await prisma.user.findFirst())!;

await prisma.post.createMany({
  data: [
    {
      title: "first",
      body: "my first post",
      userId: user?.id,
    },
    {
      title: "second",
      body: "my second post",
      userId: user?.id,
    },
  ],
});
