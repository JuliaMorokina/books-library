import { AbstarctComponent } from "../../common/component";
import { Image } from "../image";

export class MenuItem extends AbstarctComponent {
  item = null;

  constructor(item) {
    super("li");

    this.item = item;
  }

  render() {
    const link = document.createElement("a");
    link.innerText = this.item.title;
    link.setAttribute("href", this.item.link);

    if (this.item.icon) {
      const icon = new Image({
        path: this.item.icon,
        alt: this.item.title,
        width: "20px",
        height: "20px",
      }).render();

      link.prepend(icon);
    }

    if (this.item.counter !== false) {
      const counter = document.createElement("div");
      counter.classList.add("counter");
      counter.innerText = this.item.counter;

      link.append(counter);
    }

    this.el.innerHTML = "";
    this.el.classList.add("menu-item");
    if (this.item.className) {
      this.el.classList.add(this.item.className);
    }
    this.el.append(link);

    return this.el;
  }
}
