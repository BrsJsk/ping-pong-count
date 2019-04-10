/* eslint-disable class-methods-use-this */
import { MDCList } from '@material/list';

class Sidemenu extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return `
    <aside class="mdc-drawer">
    <div class="mdc-drawer__content">
      <nav class="mdc-list">
        <a
          class="mdc-list-item mdc-list-item--activated"
          href="#"
          aria-current="page"
        >
          <i class="material-icons mdc-list-item__graphic" aria-hidden="true"
            >inbox</i
          >
          <span class="mdc-list-item__text">Inbox</span>
        </a>
        <a class="mdc-list-item" href="#">
          <i class="material-icons mdc-list-item__graphic" aria-hidden="true"
            >send</i
          >
          <span class="mdc-list-item__text">Outgoing</span>
        </a>
        <a class="mdc-list-item" href="#">
          <i class="material-icons mdc-list-item__graphic" aria-hidden="true"
            >drafts</i
          >
          <span class="mdc-list-item__text">Drafts</span>
        </a>
      </nav>
    </div>
  </aside>
    `;
  }

  connectedCallback() {
    const list = MDCList.attachTo(document.querySelector('.mdc-list'));
    list.wrapFocus = true;
  }
}

window.customElements.define('sidemenu-nav', Sidemenu);
