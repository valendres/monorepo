import type { ReactNode } from "react";
import {
  ReactMicroFrontend,
  ReactMicroFrontendConfig,
} from "./react-micro-frontend";

export const defineReactMicroFrontend = <TProps = {}>(
  tag: string,
  renderApp: (props: TProps, element: ReactMicroFrontend) => ReactNode,
  config?: ReactMicroFrontendConfig
) => {
  class GeneratedReactMicroFrontend extends ReactMicroFrontend {
    constructor() {
      super(config);
    }

    render() {
      this.reactRoot.render(renderApp({} as TProps, this));
    }
  }

  customElements.define(tag, GeneratedReactMicroFrontend);
};
