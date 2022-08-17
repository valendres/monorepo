import createEmotionCache from "@emotion/cache";
import { CacheProvider as EmotionCacheProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TRPCClient } from "@trpc/react";
import { FC, ReactNode, useMemo, StrictMode } from "react";
import { trpc } from "~utils/trpc";

export type RootProviderProps = {
  container: Node;
  children: ReactNode;
  trpcClient: TRPCClient<any>;
  queryClient: QueryClient;
};

export const RootProvider: FC<RootProviderProps> = ({
  container,
  children,
  trpcClient,
  queryClient,
}) => {
  const emotionCache = useMemo(
    () =>
      createEmotionCache({
        key: "app",
        container,
      }),
    [container]
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
