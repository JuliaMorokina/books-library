import { MainView } from "./views/main/main";
import { SearchView } from "./views/search/search";

class App {
  routes = [
    { path: "", view: MainView },
    { path: "#search", view: SearchView },
  ];
  appState = {
    favorites: [],
  };

  constructor() {
    window.addEventListener("hashchange", this.route.bind(this));
    this.route();
  }

  route() {
    if (this.currentView) {
      this.currentView.destroy();
    }

    const currentRoute = this.routes.find((r) => r.path === location.hash);
    const View = currentRoute.view;
    this.currentView = new View(this.appState);
    this.currentView.render();
  }
}

new App();
