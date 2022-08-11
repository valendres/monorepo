import { initTRPC } from "@trpc/server";
import { z } from "zod";

import { Context } from "./context";

const t = initTRPC<{ ctx: Context }>()();

const userRouter = t.router({
  greeting: t.procedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query(({ input }) => `Hello, ${input.name}!`),
});

const messageRouter = t.router({
  createMessage: t.procedure
    .input(
      z.object({
        title: z.string(),
        text: z.string(),
      })
    )
    .mutation(({ input }) => {
      // imagine db call here
      return {
        id: `${Math.random()}`,
        ...input,
      };
    }),
});

// Merge routers together
export const router = t.router({
  user: userRouter,
  message: messageRouter,
});

export type Router = typeof router;
