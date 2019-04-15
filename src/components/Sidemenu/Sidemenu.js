const GITHUB_URL = 'https://github.com/BrsJsk/ping-pong-count';
const ITEMS = {
  HOME: 'home',
  SETTINGS: 'settings',
  GITHUB: 'github',
};

const sitemenuTemplate = () => `
<sidemenu-nav icons='home,settings,code' items='${ITEMS.HOME},${ITEMS.SETTINGS},${ITEMS.GITHUB}'></sidemenu-nav>`;

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

  import(/* webpackChunkName: "hammer" */ 'hammerjs').then(Hammer => {
    console.log('WATCHING FOR SWIPES')
    const app = document.querySelector("#app");
    const mc = new Hammer.Manager(app);
  
    const Swipe = new Hammer.Swipe({
      velocity: 0.2
    });
  
    mc.add(Swipe);
  
    //   Name              Value
    //   DIRECTION_NONE         1
    //   DIRECTION_LEFT         2
    //   DIRECTION_RIGHT        4
    //   DIRECTION_UP           8
    //   DIRECTION_DOWN         16
    //   DIRECTION_HORIZONTAL   6
    //   DIRECTION_VERTICAL     24
    //   DIRECTION_ALL          30
    mc.on("swipe", function(e) {
      if (e.direction === 4) {
        openSidemenu();
      } else if (e.direction === 2) {
        closeSidemenu();
      } else if (e.direction === 8) {
        window.location = '#bottom-sheet';
      } else if (e.direction === 16) {
        window.location = '#close';
      }
    });
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
