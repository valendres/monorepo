import { defineReactMicroFrontend } from "@valendres/react-micro-frontend";
import { lazy, LazyExoticComponent } from "react";
import { QueryClient } from "@tanstack/react-query";
import { RootProvider } from "~containers/root-provider";
import { trpc } from "~utils/trpc";
import styles from "./styles.scss";

const trpcClient = trpc.createClient({
  url: "http://localhost:8081/trpc",
  fetch: (url, options) => {
    return fetch(url, {
      ...options,
      credentials: "include",
    });
  },
});
const queryClient = new QueryClient();

const defineLazyReactMicroFrontend = (
  customElementName: string,
  Root: LazyExoticComponent<any>
) => {
  defineReactMicroFrontend(
    customElementName,
    (_, element) => (
      <RootProvider
        container={element.dynamicRoot}
        trpcClient={trpcClient}
        queryClient={queryClient}
      >
        <Root />
      </RootProvider>
    ),
    {
      shadow: true,
      styles: [styles],
      fonts: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
        },
      ],
    }
  );
};

defineLazyReactMicroFrontend(
  "potato-main",
  lazy(() => import("~roots/main"))
);

defineLazyReactMicroFrontend(
  "potato-card",
  lazy(() => import("~roots/card"))
);
