import { AbstarctComponent } from "../../common/component";
import { buttonVariants } from "./consts";

export class Button extends AbstarctComponent {
  className = "";
  title = "";
  type = "text";

  constructor({
    title = "",
    type = "text",
    variant = "default",
    className = "button",
  }) {
    super("button");

    this.className = className;
    this.title = title;
    this.type = type;
    this.variant = variant;
  }

  getClasses() {
    const variantClass = buttonVariants[this.variant];
    return [`${this.className} ${variantClass}`];
  }

  render() {
    const btnClasses = this.getClasses();
    this.el.innerHTML = "";
    this.el.innerText = this.title;
    this.el.classList.add(btnClasses);
    this.el.setAttribute("type", this.type);

    return this.el;
  }
}
