const GITHUB_URL = 'https://github.com/BrsJsk/ping-pong-count';

const ITEMS = {
  HOME: 'home',
  SETTINGS: 'settings',
  GITHUB: 'github',
};

const sitemenuTemplate = () => `
<sidemenu-nav icons='inbox,send,drafts' items='${ITEMS.HOME},${ITEMS.SETTINGS},${ITEMS.GITHUB}'></sidemenu-nav>`;

const initSidemenu = () => {
  const app = document.querySelector('#app');

  const sidemenu = document.createElement('div');
  sidemenu.className = 'sidemenu';
  sidemenu.innerHTML = sitemenuTemplate();

  app.appendChild(sidemenu);

  const temp = document.querySelector('sidemenu-nav');
  temp.addEventListener('itemSelected', (e) => {
    const { selectedItem } = e.srcElement;

    if (selectedItem === ITEMS.GITHUB) {
      window.open(GITHUB_URL, '_blank');
    }
  });
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
