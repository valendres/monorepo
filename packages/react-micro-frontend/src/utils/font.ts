export type Font = {
  rel: 'preconnect' | 'stylesheet';
  href: string;
  /** https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin */
  crossOrigin?: 'anonymous' | 'use-credentials';
};

export const loadFont = ({ rel, href, crossOrigin }: Font) => {
  // Prevent adding duplicate links to document head
  if (document.querySelector(`link[rel="${rel}"][href="${href}"]`)) {
    return;
  }

  const element = document.createElement('link');
  element.rel = rel;
  element.href = href;
  element.dataset.injected = 'true';
  if (crossOrigin) {
    element.crossOrigin = '';
  }
  document.head.appendChild(element);
};
