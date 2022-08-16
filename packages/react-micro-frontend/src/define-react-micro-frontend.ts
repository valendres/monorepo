import type { ReactNode } from "react";

import {
  ReactMicroFrontend,
  ReactMicroFrontendConfig,
} from "./react-micro-frontend";
import { loadFont } from "./utils/font";

export const defineReactMicroFrontend = <TProps = {}>(
  tag: string,
  renderApp: (props: TProps, element: ReactMicroFrontend) => ReactNode,
  config?: ReactMicroFrontendConfig
) => {
  const { fonts, ...configWithoutFonts } = config;

  class GeneratedReactMicroFrontend extends ReactMicroFrontend {
    constructor() {
      super(configWithoutFonts);
    }

    render() {
      this.reactRoot.render(renderApp({} as TProps, this));
    }
  }

  customElements.define(tag, GeneratedReactMicroFrontend);

  // Performance optimisation: load fonts when defining the micro-frontend
  fonts?.forEach((font) => loadFont(font));
};
