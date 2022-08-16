// utils/trpc.ts
import { createReactQueryHooks, createReactQueryHooksProxy } from "@trpc/react";
import type { Router } from "@valendres/potato-bff";

const hooks = createReactQueryHooks<Router>();
// => { useQuery: ..., useMutation: ...}

const proxy = createReactQueryHooksProxy<Router>(hooks);
// => proxy.<router>.<query>.useQuery(...),

export const trpc = {
  proxy,
  ...hooks,
};
