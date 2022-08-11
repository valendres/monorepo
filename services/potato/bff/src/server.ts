import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { Server } from "ws";
import { applyWSSHandler } from "@trpc/server/adapters/ws";
import { router, Router } from "./router";

// http server
const { server, listen } = createHTTPServer({
  router,
  createContext() {
    return {};
  },
});

// ws server
const wss = new Server({ server });
applyWSSHandler<Router>({
  wss,
  router,
  createContext() {
    return {};
  },
});

listen(2022);
