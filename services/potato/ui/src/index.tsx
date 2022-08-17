import { defineReactMicroFrontend } from "@valendres/react-micro-frontend";
import { lazy, LazyExoticComponent } from "react";
import { RootProvider } from "~containers/root-provider";
import styles from "./styles.scss";

const defineLazyReactMicroFrontend = (
  customElementName: string,
  Root: LazyExoticComponent<any>
) => {
  defineReactMicroFrontend(
    customElementName,
    (_, element) => (
      <RootProvider container={element.dynamicRoot}>
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
