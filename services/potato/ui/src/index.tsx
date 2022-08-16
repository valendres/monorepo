import { StrictMode } from "react";
import { App } from "./App";
import { defineReactMicroFrontend } from "@valendres/react-micro-frontend";
import "./global.styles";

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
  }
);
