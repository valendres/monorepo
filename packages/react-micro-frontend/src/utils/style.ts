export type Style = string;

export const loadStyle = (style: Style, container: Node) => {
  const element = document.createElement('style');
  element.dataset.injected = 'true';
  element.innerHTML = style;
  container.appendChild(element);
};
