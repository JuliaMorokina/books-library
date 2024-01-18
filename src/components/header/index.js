import { AbstarctComponent } from "../../common/component";

export class Header extends AbstarctComponent {
  constructor(appState) {
    super("header");
    this.appState = appState;
  }

  render() {
    this.el.innerHTML = "";
    this.el.classList.add("header");
    this.el.innerHTML = `
      <div>
        <img src="/static/logo.svg" alt="Logo" />
      </div>
    `;

    return this.el;
  }
}
