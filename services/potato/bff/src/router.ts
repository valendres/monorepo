import * as trpc from "@trpc/server";
import { z } from "zod";

export const router = trpc
  .router()
  .query("getUser", {
    input: z.object({
      id: z.string().min(5),
    }),
    async resolve(req) {
      return { id: req.input, name: "Bilbo" };
    },
  })
  .mutation("createUser", {
    input: z.object({ name: z.string().min(5) }),
    async resolve(req) {
      console.log("input", req.input);
    },
  });

export type Router = typeof router;
