import createEmotionCache from "@emotion/cache";
import { CacheProvider as EmotionCacheProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, ReactNode, useMemo, StrictMode } from "react";
import { trpc } from "~utils/trpc";

export type RootProviderProps = { container: Node; children: ReactNode };

export const RootProvider: FC<RootProviderProps> = ({
  container,
  children,
}) => {
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
    <StrictMode>
      <EmotionCacheProvider value={emotionCache}>
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </trpc.Provider>
      </EmotionCacheProvider>
    </StrictMode>
  );
};
