import { AbstarctComponent } from "../../common/component";
import { Image } from "../image";

import "./input.css";

export class Input extends AbstarctComponent {
  className = "";
  label = "";
  icon = null;
  inputProps = {};

  constructor({
    label = "",
    icon = null,
    className = "input-wrapper",
    inputProps = {},
  }) {
    super("input");

    this.className = className;
    this.label = label;
    this.icon = icon;
    this.inputProps = inputProps;
  }

  renderWrapper() {
    const wrapper = document.createElement("div");
    wrapper.classList.add(this.className);

    if (this.icon) {
      const icon = new Image({
        path: this.icon.src,
        width: this.icon.width,
        height: this.icon.height,
      }).render();

      wrapper.append(icon);
    }
    return wrapper;
  }

  render() {
    this.el.classList.add("input");
    Object.keys(this.inputProps).forEach((p) => {
      this.el.setAttribute(p, this.inputProps[p]);
    });

    const wrapper = this.renderWrapper();
    wrapper.append(this.el);

    return wrapper;
  }
}
