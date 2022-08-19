import { inferAsyncReturnType } from '@trpc/server';
import { CreateHTTPContextOptions } from '@trpc/server/adapters/standalone';
import { CreateWSSContextFnOptions } from '@trpc/server/adapters/ws';

export const createContext = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- required for type-safety
  opts: CreateHTTPContextOptions | CreateWSSContextFnOptions,
) => {
  return {};
};

export type Context = inferAsyncReturnType<typeof createContext>;
