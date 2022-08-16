import { StrictMode } from "react";
import { defineReactMicroFrontend } from "@valendres/react-micro-frontend";

import { App } from "./App";
import styles from "./styles.scss?inline";

defineReactMicroFrontend(
  "potato-micro-frontend",
  (_, element) => {
    return (
      <StrictMode>
        <App container={element.shadowRoot} />
      </StrictMode>
    );
  },
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
