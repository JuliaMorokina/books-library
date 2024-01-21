import { AbstarctComponent } from "../../common/component";
import { buttonVariants } from "./consts";

import "./button.css";

export class Button extends AbstarctComponent {
  title = "";
  variant = "default";
  type = "button";

  constructor({
    title = "",
    type = "button",
    variant = "default",
    className = "",
  }) {
    super("button");

    this.className = className;
    this.title = title;
    this.type = type;
    this.variant = variant;
  }

  render() {
    this.el.innerHTML = "";
    this.el.innerText = this.title;
    this.el.classList.add("button");
    if (this.className) {
      this.el.classList.add(this.className);
    }
    this.el.classList.add(buttonVariants[this.variant]);
    this.el.setAttribute("type", this.type);

    return this.el;
  }
}
