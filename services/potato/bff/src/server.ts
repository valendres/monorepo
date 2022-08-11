import { createExpressMiddleware } from "@trpc/server/adapters/express";
import express from "express";
import cors from "cors";

import { createContext } from "./context";
import { router } from "./router";

const PORT = 8081;

const app = express();

app.use(cors());

app.use("/healthcheck", (_, res) => {
  res.json({ success: true });
});

app.use(
  "/trpc",
  createExpressMiddleware({
    router,
    createContext,
  })
);

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
