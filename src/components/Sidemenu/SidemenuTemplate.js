/* eslint-disable class-methods-use-this */
import { MDCList } from '@material/list';

class Sidemenu extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = '';
    this.list = [];
    this.selectedItem = null;
  }

  getTemplate() {
    return `
    <aside class="mdc-drawer">
    <div class="mdc-drawer__content">
      <nav class="mdc-list">
      ${this.list.map(i => `
        <a data-uui="${i.text}" class="mdc-list-item navItem" href="#">
        <i class="material-icons mdc-list-item__graphic" aria-hidden="true"
           >${i.icon}</i
          >
          <span class="mdc-list-item__text">${i.text}</span>
        </a>
        `).join(' ')}
      
      </nav>
    </div>
  </aside>
    `;
  }

  connectedCallback() {
    this.init();
  }

  init() {
    const listItems = this.getAttribute('items').split(',');
    const listIcons = this.getAttribute('icons').split(',');

    this.list = listItems.map((item, i) => ({
      text: item,
      icon: listIcons[i],
    }));

    this.innerHTML = this.getTemplate();

    const list = MDCList.attachTo(document.querySelector('.mdc-list'));
    list.wrapFocus = true;

    const navItems = document.querySelectorAll('.navItem');

    navItems.forEach((i) => {
      i.addEventListener('click', () => {
        const event = new CustomEvent('itemSelected');
        this.selectedItem = i.getAttribute('data-uui');
        this.dispatchEvent(event);
      });
    });
  }
}

window.customElements.define('sidemenu-nav', Sidemenu);
