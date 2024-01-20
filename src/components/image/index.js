import { AbstarctComponent } from "../../common/component";

export class Image extends AbstarctComponent {
  path = "";
  alt = "";
  className = "";
  wrapperClass = "";

  constructor({ path, width, height, alt = "", className = "" }) {
    super("img");
    this.path = path;
    this.alt = alt;
    this.className = className;
    this.width = width;
    this.height = height;
  }

  renderWrapper() {
    this.wrapper = document.createElement("div");
    this.wrapper.innerHTML = "";
    this.wrapper.classList.add("image-wrapper");
    this.wrapper.style.width = this.width;
    this.wrapper.style.height = this.height;

    if (this.className) {
      this.wrapper.classList.add(this.className);
    }
    return this.wrapper;
  }

  render() {
    const wrapper = this.renderWrapper();

    this.el.setAttribute("src", this.path);
    this.el.setAttribute("alt", this.alt);

    wrapper.append(this.el);

    return wrapper;
  }
}
