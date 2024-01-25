import { AbstarctComponent } from "../../common/component";

import { CardList } from "../card-list";
import { Container } from "../container";
import { Spinner } from "../spinner";
import { Title } from "../title";

import { MESSAGES, loadingStates } from "../../consts";

import "./content.css";
import { Message } from "../message";
export class Content extends AbstarctComponent {
  content = "";

  constructor(appState, state, messages = MESSAGES) {
    super("div");
    this.appState = appState;
    this.state = state;
    this.messages = messages;
  }

  renderContent() {
    switch (this.state.loading) {
      case loadingStates.loading:
        this.content = new Spinner().render();
        break;
      case loadingStates.loaded:
        if (this.state.list.length > 0) {
          this.content = new CardList(this.appState, this.state.list).render();
        } else {
          this.content = new Message(this.messages.empty).render();
        }
        break;
      case loadingStates.failed:
        this.content = new Message(this.messages.error, "danger").render();
        break;
      default:
        this.content = new Message(this.messages.default).render();
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
