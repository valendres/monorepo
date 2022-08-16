import { StrictMode } from "react";
import { App } from "./App";
import { defineReactMicroFrontend } from "@valendres/react-micro-frontend";
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
  }
);
