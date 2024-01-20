import { AbstarctComponent } from "../../common/component";

import "./container.css";

export class Container extends AbstarctComponent {
  constructor() {
    super("div");
  }

  render() {
    this.el.innerHTML = "";
    this.el.classList.add("container");

    return this.el;
  }
}
