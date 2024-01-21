import { AbstarctComponent } from "../../common/component";

import { Button } from "../button";
import { Image } from "../image";
import { Title } from "../title";

export class Card extends AbstarctComponent {
  constructor(book, isFavorite) {
    super("li");
    this.book = book;
    this.isFavorite = isFavorite;
  }

  render() {
    this.el.classList.add("card-list__item");
    const title = new Title("h3", this.book.title).render();
    const image = new Image({
      path: `https://covers.openlibrary.org/b/olid/${this.book.cover_edition_key}-M.jpg`,
      width: "auto",
      height: "140px",
      className: "book-image",
    }).render();
    const bookTag = document.createElement("div");
    const author = document.createElement("div");
    const wrapper = document.createElement("div");
    const favoriteBtn = new Button({
      variant: "text",
      className: this.isFavorite ? "button_white" : "",
    }).render();
    const btnIcon = new Image({
      path: this.isFavorite
        ? "/static/favorites.svg"
        : "/static/favorites-w.svg",
      width: "20px",
      height: "20px",
    }).render();

    author.innerText = this.book.author_name[0] ?? "Не задано";
    bookTag.innerText = this.book.subject[0] ?? "Не задано";
    favoriteBtn.append(btnIcon);

    author.classList.add("book-author");
    bookTag.classList.add("book-tags");
    wrapper.classList.add("book-info");

    wrapper.append(bookTag);
    wrapper.append(title);
    wrapper.append(author);
    wrapper.append(favoriteBtn);
    this.el.append(image);
    this.el.append(wrapper);

    return this.el;
  }
}
