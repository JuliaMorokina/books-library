import { AbstarctView } from "../../common/view";
import { Content } from "../../components/content";
import { loadingStates } from "../../consts";

export class FavoritesView extends AbstarctView {
  content = null;

  constructor(appState) {
    super();
    this.appState = appState;
    this.setTitle("Мои книги");
  }

  renderContent() {
    if (this.content) {
      this.content.remove();
    }

    this.content = new Content(
      this.appState,
      {
        loading: loadingStates.loaded,
        list: this.appState.favorites,
      },
      { empty: "" }
    ).render();

    this.app.append(this.content);
  }

  render() {
    this.renderContent(this.state);
  }
}
