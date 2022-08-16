import { StrictMode } from "react";
import { App } from "./App";
import { defineMicroFrontend } from "@valendres/micro-frontend";
import { ReactMicroFrontend } from "@valendres/micro-frontend/src/react";
import "./global.css";

@defineMicroFrontend("potato-micro-frontend")
export class PotatoMicroFrontend extends ReactMicroFrontend {
  render() {
    return (
      <StrictMode>
        <App />
      </StrictMode>
    );
  }
}
