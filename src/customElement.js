export default function CustomElement(name) {
  return function decorator(target) {
    window.customElements.define(name, target);
  };
}
