import { AbstarctComponent } from "../../common/component";
import { Button } from "../button";
import { Container } from "../container";
import { Image } from "../image";
import { Input } from "../input";

import "./search.css";

export class Search extends AbstarctComponent {
  constructor(search, onSearch) {
    super("div");

    this.search = search;
    this.onSearch = onSearch;
  }

  renderInput() {
    const icon = { src: "/static/search.svg", width: "24px", height: "24px" };
    const input = new Input({
      icon,
      inputProps: {
        type: "text",
        placeholder: "Найти книгу или автора....",
        value: this.search ?? "",
        id: "search-input",
      },
    });

    return input.render();
  }

  renderButton() {
    const btn = new Button({
      title: "",
      type: "button",
      variant: "primary",
      className: "icon",
    }).render();

    const icon = new Image({
      path: "/static/search-w.svg",
      width: "32px",
      height: "32px",
    }).render();

    btn.append(icon);
    return btn;
  }

  render() {
    const container = new Container().render();
    const input = this.renderInput();
    const btn = this.renderButton();

    input.addEventListener("keydown", (e) => {
      if (e.code === "Enter") {
        this.onSearch();
      }
    });

    btn.addEventListener("click", this.onSearch);

    this.el.classList.add("search");

    container.append(input);
    container.append(btn);

    this.el.append(container);

    return this.el;
  }
}
