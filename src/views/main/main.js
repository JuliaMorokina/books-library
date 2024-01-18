import onChange from "on-change";
import { AbstarctView } from "../../common/view";
import { Header } from "../../components/header";

export class MainView extends AbstarctView {
  state = {
    isLoading: false,
    list: [],
    offset: 0,
    search: undefined,
  };

  constructor(appState) {
    super();
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.setTitle("Поиск книг");
  }

  render() {
    const main = document.createElement("div");
    main.innerText = `Число книг ${this.appState.favorites.length}`;
    this.app.innerHTML = "";
    this.app.append(main);
    this.renderHeader();
  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }

  appStateHook(path) {
    console.log(path);
    if (path === "favorites") {
      console.log(path);
    }
  }
}
