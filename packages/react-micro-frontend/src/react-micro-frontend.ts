import { createRoot, Root } from "react-dom/client";

export type ReactMicroFrontendConfig = {
  shadow?: boolean;
  styles?: string[];
  fonts?: Array<{
    rel: "preconnect" | "stylesheet";
    href: string;
    /** https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin */
    crossOrigin?: "anonymous" | "use-credentials";
  }>;
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

    this.loadFonts();
    this.createReactRoot();
    this.injectStyles();
    this.render();
  }

  createReactRoot(): void {
    const element = document.createElement("div");
    this.reactRoot = createRoot(element);
    this.dynamicRoot.appendChild(element);
  }

  injectStyles(): void {
    this.config?.styles.map((style) => {
      const element = document.createElement("style");
      element.dataset.injected = "true";
      element.innerHTML = style;
      this.dynamicRoot.appendChild(element);
    });
  }

  loadFonts(): void {
    this.config?.fonts.map(({ rel, href, crossOrigin }) => {
      // Prevent adding duplicate links to document head
      if (document.querySelector(`link[rel="${rel}"][href="${href}"]`)) {
        return;
      }

      const element = document.createElement("link");
      element.rel = rel;
      element.href = href;
      element.dataset.injected = "true";
      if (crossOrigin) {
        element.crossOrigin = "";
      }
      document.head.appendChild(element);
    });
  }

  render(): void {}
}
