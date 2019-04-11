
import { MDCRipple } from '@material/ripple';

class FAB extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = '';
  }

  connectedCallback() {
    const template = `
      <button class="mdc-fab mdc-fab--extended app-fab--absolute">
      <span class="material-icons mdc-fab__icon">add</span>
      <span class="mdc-fab__label">Create</span>
     </button>
      `;

    this.innerHTML = template;

    const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));
  }
}

window.customElements.define('fab-button', FAB);
