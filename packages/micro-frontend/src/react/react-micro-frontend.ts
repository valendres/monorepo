import { MicroFrontend } from "../micro-frontend";
import { Root, createRoot } from "react-dom/client";
import type { ReactNode } from "react";

export class ReactMicroFrontend extends MicroFrontend {
  private reactRootElement: HTMLElement;
  private reactRoot: Root;

  initialise(): void {
    // Render react root
    this.reactRootElement = document.createElement("div");
    this.reactRoot = createRoot(this.reactRootElement);
    this.reactRoot.render(this.render());
    // Attach react root
    // this.attachShadow({ mode: "open" });
    // this.shadowRoot.appendChild(this.reactRootElement);
    this.appendChild(this.reactRootElement);
  }

  render(): ReactNode {
    return null;
  }
}
