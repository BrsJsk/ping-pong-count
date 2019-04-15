import { MDCRipple } from '@material/ripple';

import { openSidemenu } from '../Sidemenu/Sidemenu';

const template = () => `
    <button class="mdc-icon-button material-icons opensidemenuBtn">menu</button>
    <div id="table">
    <app-table playing="no"></app-table>
    <app-table playing="no"></app-table>
    </div>

    <fab-button playing="no"></fab-button>

    <app-bottom-sheet></app-bottom-sheet>
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

  const fabButton = document.querySelector('fab-button');
  fabButton.addEventListener('click', () => {
    const isPlaying = fabButton.getAttribute('playing');

    if (isPlaying === 'no') {
      document.querySelectorAll('app-table').forEach((e) => {
        e.setAttribute('playing', 'yes');
      });
      fabButton.setAttribute('playing', 'yes');
    } else {
      document.querySelectorAll('app-table').forEach((e) => {
        e.setAttribute('playing', 'no');
      });
      fabButton.setAttribute('playing', 'no');
    }
  });
};

export default initHome;
