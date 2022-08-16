import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

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
      babel: {
        plugins: [
          ["@babel/plugin-proposal-decorators", { legacy: true }],
          ["@babel/plugin-proposal-class-properties", { loose: true }],
        ],
      },
    }),
    vanillaExtractPlugin(),
  ],
});
