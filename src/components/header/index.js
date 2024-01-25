import { AbstarctComponent } from "../../common/component";
import { Container } from "../container";

import { Image } from "../image";
import { Menu } from "../menu";

import "./header.css";

export class Header extends AbstarctComponent {
  constructor(appState) {
    super("header");
    this.appState = appState;
  }

  renderLogo() {
    const logo = new Image({
      path: "/static/logo.svg",
      alt: "Logo",
      className: "logo",
      width: "40px",
      height: "40px",
    });

    return logo.render();
  }

  renderMenu() {
    const menu = new Menu(this.appState.favorites.length);
    return menu.render();
  }

  renderContainer() {
    const container = new Container();
    return container.render();
  }

  render() {
    const logo = this.renderLogo();
    const menu = this.renderMenu();
    const container = this.renderContainer();

    this.el.classList.add("header");

    container.append(logo);
    container.append(menu);
    this.el.append(container);

    return this.el;
  }
}
