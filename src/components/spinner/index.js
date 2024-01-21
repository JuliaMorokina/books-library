import { AbstarctComponent } from "../../common/component";

import "./spinner.css";

export class Spinner extends AbstarctComponent {
  constructor() {
    super("div");
  }

  render() {
    this.el.classList.add("spinner");
    return this.el;
  }

  destroy() {
    this.el.remove();
  }
}
