import { MainView } from "./views/main/main";

class App {
  routes = [{ path: "", view: MainView }];
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
