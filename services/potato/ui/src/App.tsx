import logo from "./logo.svg";
import * as styles from "./App.styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, useState } from "react";
import { trpc } from "~utils/trpc";

import { Welcome } from "./containers/welcome";

export const App: FC = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      url: "http://localhost:8081/trpc",
      fetch: (url, options) => {
        return fetch(url, {
          ...options,
          credentials: "include",
        });
      },
    })
  );
  return (
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
  );
};
