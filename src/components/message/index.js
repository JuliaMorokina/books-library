import { AbstarctComponent } from "../../common/component";
import { Container } from "../container";

import "./message.css";

export class Message extends AbstarctComponent {
  message = "";
  constructor(message, variant = "info") {
    super("div");
    this.message = message;
    this.variant = variant;
  }

  renderContainer() {
    const container = new Container();
    return container.render();
  }

  render() {
    this.el.innerText = "";
    this.el.innerText = this.message;
    this.el.classList.add("message");
    this.el.classList.add(`message_${this.variant}`);

    return this.el;
  }
}
