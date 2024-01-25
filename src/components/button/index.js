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
    handleClick = () => {},
  }) {
    super("button");

    this.className = className;
    this.title = title;
    this.type = type;
    this.variant = variant;
    this.handleClick = handleClick;
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
    this.el.addEventListener("click", this.handleClick);

    return this.el;
  }

  destroy() {
    this.el.remove();
  }
}
