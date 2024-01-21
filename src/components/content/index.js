import { AbstarctComponent } from "../../common/component";

import { CardList } from "../card-list";
import { Container } from "../container";
import { Spinner } from "../spinner";
import { Title } from "../title";

import { loadingStates } from "../../consts";

import "./content.css";
export class Content extends AbstarctComponent {
  content = "";

  constructor(state) {
    super("div");
    this.state = state;
  }

  renderContent() {
    switch (this.state.loading) {
      case loadingStates.loading:
        this.content = new Spinner().render();
        break;
      case loadingStates.loaded:
        this.content = new CardList(this.state.list).render();
        break;
      case loadingStates.failed:
        this.content = "error";
        break;
      default:
        this.content = "";
    }

    return this.content;
  }

  render() {
    this.el.classList.add("content");

    const container = new Container().render();

    if (this.state.numFound) {
      const title = new Title(
        "h2",
        `Найдено книг – ${this.state.numFound}`
      ).render();
      container.prepend(title);
    }
    const content = this.renderContent();

    container.append(content);

    this.el.append(container);

    return this.el;
  }
}
