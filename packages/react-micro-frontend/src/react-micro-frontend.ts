import { createRoot, Root } from "react-dom/client";

import { loadFont, Font } from "./utils/font";
import { loadStyle, Style } from "./utils/style";

export type ReactMicroFrontendConfig = {
  shadow?: boolean;
  styles?: Style[];
  fonts?: Font[];
};

export class ReactMicroFrontend extends HTMLElement {
  public isInitialised = false;
  public config?: ReactMicroFrontendConfig;
  public reactRoot: Root;

  /** Returns the shadow root if defined, otherwise returns a reference to the element. */
  public get dynamicRoot(): ShadowRoot | ReactMicroFrontend {
    return this.shadowRoot ?? this;
  }

  constructor(config?: ReactMicroFrontendConfig) {
    super();
    this.config = config;
  }

  connectedCallback() {
    if (!this.isInitialised) {
      this.initialise();
    }
  }

  initialise(): void {
    this.isInitialised = true;

    // Initialise shadow DOM
    if (this.config.shadow) {
      this.attachShadow({ mode: "open" });
    }

    // Load fonts
    this.config?.fonts?.map((font) => loadFont(font));

    // Load styles
    this.config?.styles?.map((style) => loadStyle(style, this.dynamicRoot));

    // Create react root
    const element = document.createElement("div");
    this.reactRoot = createRoot(element);
    this.dynamicRoot.appendChild(element);

    // Render app for first time
    this.render();
  }

  render(): void {}
}
