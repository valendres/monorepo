import { StrictMode } from "react";
import { App } from "./App";
import { defineReactMicroFrontend } from "@valendres/micro-frontend/src/react";
import "./global.css";

defineReactMicroFrontend("potato-micro-frontend", () => (
  <StrictMode>
    <App />
  </StrictMode>
));
