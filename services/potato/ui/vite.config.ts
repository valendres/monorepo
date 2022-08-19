/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { resolve } from 'path';
import tsconfig from './tsconfig.json';

export const packagePath = (relativePath = ''): string =>
  resolve(__dirname, './', relativePath);

const convertTsConfigPathsToViteAliases = (
  paths: Record<string, string[]>,
): Record<string, string> =>
  Object.entries(paths).reduce(
    (accumulator, [key, path]) => ({
      ...accumulator,
      [key.replace('/*', '')]: packagePath(path[0].replace('/*', '')),
    }),
    {},
  );

export default defineConfig({
  server: {
    port: 8080,
  },
  resolve: {
    alias: convertTsConfigPathsToViteAliases(tsconfig.compilerOptions.paths),
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
});
