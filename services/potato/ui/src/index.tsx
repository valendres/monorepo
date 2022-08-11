import { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";
import { App } from "./components/app";
import "./global.css";

class PotatoMicroFrontend extends HTMLElement {
  private reactRootElement: HTMLElement;
  private reactRoot: Root;

  constructor() {
    super();
    // Render react root
    this.reactRootElement = document.createElement("div");
    this.reactRoot = createRoot(this.reactRootElement);
    this.reactRoot.render(
      <StrictMode>
        <App />
      </StrictMode>
    );

    // Attach react root
    // this.attachShadow({ mode: "open" });
    // this.shadowRoot.appendChild(this.reactRootElement);
    this.appendChild(this.reactRootElement);
  }
}

customElements.define("potato-micro-frontend", PotatoMicroFrontend);
