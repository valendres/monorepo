import type { ReactNode } from "react";
import { Root, createRoot } from "react-dom/client";

export const defineReactMicroFrontend = (
  tag: string,
  renderApp: () => ReactNode
) => {
  class GeneratedReactMicroFrontend extends HTMLElement {
    private reactRootElement: HTMLElement;
    private reactRoot: Root;

    public isInitialised = false;

    connectedCallback() {
      if (!this.isInitialised) {
        this.initialise();
      }
    }

    initialise(): void {
      this.isInitialised = true;
      this.reactRootElement = document.createElement("div");
      this.reactRoot = createRoot(this.reactRootElement);
      this.appendChild(this.reactRootElement);
      this.render();
    }

    render() {
      this.reactRoot.render(renderApp());
    }
  }

  customElements.define(tag, GeneratedReactMicroFrontend);
};
