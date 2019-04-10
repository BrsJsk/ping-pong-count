const sitemenuTemplate = () => '<sidemenu-nav></sidemenu-nav>';

const initSidemenu = () => {
  const app = document.querySelector('#app');

  const sidemenu = document.createElement('div');
  sidemenu.className = 'sidemenu';
  sidemenu.innerHTML = sitemenuTemplate();

  app.appendChild(sidemenu);
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
