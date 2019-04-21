import { initSidemenu } from './src/components/Sidemenu/Sidemenu';
import initHome from './src/components/Home/Home';
import './src/components/Sidemenu/SidemenuTemplate';
import './src/components/Sidemenu/BottomSheet';
import './src/components/FAB/FAB';
import './src/components/Table/TableTemplate';

import('./app.scss');

window.onload = () => {
  console.log('loaded');
  initSidemenu();
  initHome();
};

// eslint-disable-next-line func-names
(function () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js', { scope: '/' })
      .then(() => console.log('Service Worker registered successfully.'))
      .catch(error => console.log('Service Worker registration failed:', error));
  }
}());
