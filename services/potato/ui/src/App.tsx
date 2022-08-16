import logo from "./logo.svg";
import * as styles from "./App.styles";
import createEmotionCache from "@emotion/cache";
import { CacheProvider as EmotionCacheProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, useMemo } from "react";
import { trpc } from "~utils/trpc";

import { Welcome } from "./containers/welcome";

export const App: FC<{ container: Node }> = ({ container }) => {
  const emotionCache = useMemo(
    () =>
      createEmotionCache({
        key: "app",
        container,
      }),
    [container]
  );
  const queryClient = useMemo(() => new QueryClient(), []);
  const trpcClient = useMemo(
    () =>
      trpc.createClient({
        url: "http://localhost:8081/trpc",
        fetch: (url, options) => {
          return fetch(url, {
            ...options,
            credentials: "include",
          });
        },
      }),
    []
  );
  return (
    <EmotionCacheProvider value={emotionCache}>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <div css={styles.app}>
            <header css={styles.header}>
              <img css={styles.logo} src={logo} alt="logo" />
              <h3>
                <Welcome />
              </h3>
            </header>
          </div>
        </QueryClientProvider>
      </trpc.Provider>
    </EmotionCacheProvider>
  );
};
