import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TRPCClient } from '@trpc/react';
import { FC, ReactNode, useMemo, StrictMode } from 'react';
import { trpc } from '~utils/trpc';

export type RootProviderProps = {
  shadowRoot: ShadowRoot;
  children: ReactNode;
  trpcClient: TRPCClient<any>;
  queryClient: QueryClient;
};

export const RootProvider: FC<RootProviderProps> = ({
  shadowRoot,
  children,
  trpcClient,
  queryClient,
}) => {
  const cache = useMemo(() => {
    const container = shadowRoot;
    return createCache({
      key: 'app',
      container,
    });
  }, [shadowRoot]);
  const theme = useMemo(() => {
    const container = shadowRoot.querySelector('#root');
    return createTheme({
      components: {
        MuiPopover: {
          defaultProps: {
            container,
          },
        },
        MuiPopper: {
          defaultProps: {
            container,
          },
        },
        MuiModal: {
          defaultProps: {
            container,
          },
        },
      },
    });
  }, [shadowRoot]);
  return (
    <StrictMode>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </trpc.Provider>
        </ThemeProvider>
      </CacheProvider>
    </StrictMode>
  );
};
