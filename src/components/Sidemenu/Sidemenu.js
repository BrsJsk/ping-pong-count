import { MDCList } from '@material/list';

const sitemenuTemplate = () => `
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
    </aside>`;

const initSidemenu = () => {
  const app = document.querySelector('#app');

  const sidemenu = document.createElement('div');
  sidemenu.className = 'sidemenu';
  sidemenu.innerHTML = sitemenuTemplate();

  app.appendChild(sidemenu);

  const list = MDCList.attachTo(document.querySelector('.mdc-list'));
  list.wrapFocus = true;
};

const openSidemenu = () => {
  const sidemenu = document.querySelector('.sidemenu');

  sidemenu.classList += ' open';
};

const closeSidemenu = () => {
  const sidemenu = document.querySelector('.sidemenu');

  sidemenu.classList = 'sidemenu';
};

export { initSidemenu, openSidemenu, closeSidemenu };
