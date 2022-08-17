import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import tsconfig from "./tsconfig.json";
import { resolve } from "path";

export const packagePath = (relativePath = ""): string =>
  // eslint-disable-next-line unicorn/prefer-module -- webpack does not support esm configuration
  resolve(__dirname, "./", relativePath);

const convertTsConfigPathsToViteAliases = (
  paths: Record<string, string[]>,
): Record<string, string> =>
  Object.entries(paths).reduce(
    (accumulator, [key, path]) => ({
      ...accumulator,
      [key.replace("/*", "")]: packagePath(path[0].replace("/*", "")),
    }),
    {},
  );

console.log(convertTsConfigPathsToViteAliases(tsconfig.compilerOptions.paths));

export default defineConfig({
  server: {
    port: 8080,
  },
  resolve: {
    alias: convertTsConfigPathsToViteAliases(tsconfig.compilerOptions.paths),
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
