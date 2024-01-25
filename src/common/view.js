export class AbstarctView {
  constructor(appState) {
    this.app = document.getElementById("root");
    this.appState = appState;
  }

  setTitle(title) {
    document.title = title;
  }

  render() {
    return;
  }

  destroy() {
    this.app.innerHTML = "";
    return this.app;
  }
}
