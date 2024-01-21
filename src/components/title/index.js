import { AbstarctComponent } from "../../common/component";

import "./title.css";

export class Title extends AbstarctComponent {
  constructor(tag = "h1", title = "") {
    super(tag);
    this.className = tag;
    this.title = title;
  }

  render() {
    this.el.classList.add("title");
    this.el.classList.add(this.className);

    this.el.innerText = this.title;
    return this.el;
  }
}
