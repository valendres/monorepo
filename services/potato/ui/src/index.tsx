import { StrictMode } from "react";
import { App } from "./App";
import { defineReactMicroFrontend } from "@valendres/react-micro-frontend";
import "./global.styles";

defineReactMicroFrontend("potato-micro-frontend", () => (
  <StrictMode>
    <App />
  </StrictMode>
));
