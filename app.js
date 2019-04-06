import { MDCRipple } from "@material/ripple";
import { MDCList } from "@material/list";
import { MDCDrawer } from "@material/drawer";
import { MDCTopAppBar } from "@material/top-app-bar";

import("./app.scss");

window.onload = () => {
  console.log("loaded");
  const iconButtonRipple = new MDCRipple(
    document.querySelector(".mdc-icon-button")
  );
  iconButtonRipple.unbounded = true;

  const list = MDCList.attachTo(document.querySelector(".mdc-list"));
  list.wrapFocus = true;

  const listEl = document.querySelector(".mdc-drawer .mdc-list");
  const mainContentEl = document.querySelector(".main-content");
};
