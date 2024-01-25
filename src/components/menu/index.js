import { AbstarctComponent } from "../../common/component";
import { MenuItem } from "./menu-item";

import "./menu.css";

export class Menu extends AbstarctComponent {
  className = "";

  constructor(favoritesCount = 0, className = "") {
    super("ul");

    this.menuList = [
      {
        className: "bold",
        counter: false,
        icon: "/static/search.svg",
        link: "/",
        title: "Поиск книг",
      },
      {
        counter: favoritesCount,
        icon: "/static/favorites.svg",
        link: "#favorites",
        title: "Избранное",
      },
    ];

    this.className = className;
  }

  renderMenuItem(item) {
    const menuItem = new MenuItem(item);
    return menuItem.render();
  }

  render() {
    this.el.innerHTML = "";
    this.el.classList.add("menu");

    this.menuList.forEach((item) => {
      const menuEl = this.renderMenuItem(item);
      this.el.append(menuEl);
    });

    return this.el;
  }
}
