export class MicroFrontend extends HTMLElement {
  public isInitialised = false;

  connectedCallback() {
    if (!this.isInitialised) {
      this.initialise();
    }
  }

  initialise() {
    this.isInitialised = true;
  }
}
