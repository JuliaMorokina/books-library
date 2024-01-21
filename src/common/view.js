import { Header } from "../components/header";

export class AbstarctView {
  header = null;

  constructor() {
    this.app = document.getElementById("root");
  }

  setTitle(title) {
    document.title = title;
  }

  renderHeader() {
    this.header = new Header(this.appState).render();
    this.app.before(this.header);
  }

  render() {
    this.renderHeader();
    return;
  }

  destroy() {
    this.header.remove();
    this.app.innerHTML = "";
    return this.app;
  }
}
