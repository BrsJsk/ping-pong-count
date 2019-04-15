import { initSidemenu } from "./src/components/Sidemenu/Sidemenu";
import initHome from "./src/components/Home/Home";
import './src/components/Sidemenu/SidemenuTemplate';
import './src/components/FAB/FAB';
import './src/components/Table/TableTemplate';

import("./app.scss");

window.onload = () => {
  console.log("loaded");
  initSidemenu()
  initHome();
};
