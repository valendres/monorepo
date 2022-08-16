import type { ReactNode } from "react";
import { Root, createRoot } from "react-dom/client";

export const defineReactMicroFrontend = <TProps = {}>(
  tag: string,
  renderApp: (props: TProps, element: HTMLElement) => ReactNode,
  config?: {
    shadow?: boolean;
  }
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
      if (config?.shadow) {
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(this.reactRootElement);
      } else {
        this.appendChild(this.reactRootElement);
      }
      this.render();
    }

    render() {
      this.reactRoot.render(renderApp({} as TProps, this));
    }
  }

  customElements.define(tag, GeneratedReactMicroFrontend);
};
