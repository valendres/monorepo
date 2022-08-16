import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export const sourcePath = (relativePath = ""): string =>
  // eslint-disable-next-line unicorn/prefer-module -- webpack does not support esm configuration
  resolve(__dirname, "./src", relativePath);

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      "~utils": sourcePath("utils"),
    },
  },
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
});
