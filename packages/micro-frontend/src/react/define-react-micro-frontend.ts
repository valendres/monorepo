import type { ReactNode } from "react";
import { MicroFrontend } from "../micro-frontend";
import { Root, createRoot } from "react-dom/client";

export const defineReactMicroFrontend = (
  tag: string,
  renderApp: () => ReactNode
) => {
  class GeneratedReactMicroFrontend extends MicroFrontend {
    private reactRootElement: HTMLElement;
    private reactRoot: Root;

    initialise(): void {
      // Render react root
      this.reactRootElement = document.createElement("div");
      this.reactRoot = createRoot(this.reactRootElement);
      this.render();
    }

    render() {
      this.reactRoot.render(renderApp());
    }
  }

  customElements.define(tag, GeneratedReactMicroFrontend);
};
