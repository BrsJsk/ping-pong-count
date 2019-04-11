
import { MDCRipple } from '@material/ripple';

import { openSidemenu } from '../Sidemenu/Sidemenu';

const template = () => `
    <button class="mdc-icon-button material-icons opensidemenuBtn">menu</button>

    <div id="table">
    <div class="table-part-1">
    </div>
    <div>
    </div>
    </div>

    <fab-button></fab-button>
    `;

const initHome = () => {
  const app = document.querySelector('#app');

  const home = document.createElement('div');
  home.className = 'home';
  home.innerHTML = template();

  app.appendChild(home);

  const iconButtonRipple = new MDCRipple(
    document.querySelector('.mdc-icon-button'),
  );


  iconButtonRipple.unbounded = true;

  const openSidemenuButton = document.querySelector('.opensidemenuBtn');

  openSidemenuButton.addEventListener('click', () => {
    openSidemenu();
  });
};

export default initHome;
