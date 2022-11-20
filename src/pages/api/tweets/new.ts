import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const Prisma = new PrismaClient();

export const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  // if (req.method === "POST") {
  //   if (!req.body) {
  //     return res.status(404).json({ error: "Empty Tweet" });
  //   }
  //   const Tweet = await Prisma.tweet.create({
  //     data: {
  //       data: req.body as string,
  //     },
  //   });
  //   return res.status(200).json({ msg: Tweet });
  // }
  const Tweet = await Prisma.tweet.create({
    data: {
      data: "Hello World",
    },
  });

  return res.status(200).json({ msg: Tweet });
};
