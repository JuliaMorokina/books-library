import { AbstarctComponent } from "../../common/component";
import { Card } from "./card";

import "./card-list.css";

export class CardList extends AbstarctComponent {
  list = [];
  constructor(list = []) {
    super("ul");
    this.list = list;
  }

  renderCard(book) {
    const card = new Card(book);
    return card.render();
  }

  render() {
    this.el.classList.add("card-list");
    this.list.forEach((item) => this.el.append(this.renderCard(item)));
    return this.el;
  }

  destroy() {
    this.el.remove();
  }
}
