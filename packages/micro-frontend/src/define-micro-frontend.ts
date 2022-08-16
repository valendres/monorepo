export const defineMicroFrontend =
  (tag: string) => (constructor: CustomElementConstructor) => {
    customElements.define(tag, constructor);
  };
