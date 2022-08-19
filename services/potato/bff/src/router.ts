import { initTRPC } from '@trpc/server';
import { z } from 'zod';

import { Context } from './context';

const t = initTRPC<{ ctx: Context }>()();

const userRouter = t.router({
  greeting: t.procedure
    .input(
      z.object({
        name: z.string(),
      }),
    )
    .query(({ input }) => `Hello, ${input.name}!`),
  profile: t.procedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(({ input }) => ({
      id: input.id,
      fullName: 'Peter Weller',
      firstName: 'Peter',
      lastName: 'Weller',
      tagLine: 'Senior Software Engineer',
      introduction: 'Hi, my name is Pete and I am a 🥔',
    })),
});

const messageRouter = t.router({
  createMessage: t.procedure
    .input(
      z.object({
        title: z.string(),
        text: z.string(),
      }),
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
