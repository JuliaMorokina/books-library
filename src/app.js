import onChange from "on-change";

import { MainView } from "./views/main";

import { Header } from "./components/header";
import { FavoritesView } from "./views/favorites";

class App {
  header = null;
  routes = [
    { path: "", view: MainView },
    { path: "#favorites", view: FavoritesView },
  ];
  appState = {
    favorites: [],
  };

  constructor() {
    window.addEventListener("hashchange", this.route.bind(this));
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.app = document.getElementById("root");
    this.route();
  }

  renderHeader() {
    if (this.header) {
      this.header.remove();
    }
    this.header = new Header(this.appState).render();
    this.app.before(this.header);
  }

  route() {
    if (this.currentView) {
      this.currentView.destroy();
    }

    const currentRoute = this.routes.find((r) => r.path === location.hash);
    const View = currentRoute.view;
    this.renderHeader();
    this.currentView = new View(this.appState);
    this.currentView.render();
  }

  appStateHook(path) {
    if (path === "favorites") {
      this.renderHeader();
    }
  }
}

new App();
