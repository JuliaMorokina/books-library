import onChange from "on-change";

import { AbstarctView } from "../../common/view";
import { Content } from "../../components/content";
import { Search } from "../../components/search";

import { booksSearch } from "../../api";

import { loadingStates } from "../../consts";

export class MainView extends AbstarctView {
  content = null;
  state = {
    loading: loadingStates.init,
    list: [],
    limit: 10,
    numFound: 0,
    search: undefined,
  };

  constructor(appState) {
    super();
    this.appState = appState;
    this.state = onChange(this.state, this.stateHook.bind(this));
    this.setTitle("Поиск книг");
  }

  onChangeSearch() {
    const value = this.app.querySelector("#search-input").value;
    this.state.search = value;
  }

  async onSearch() {
    this.state.loading = loadingStates.loading;
    this.state.list = [];
    this.state.numFound = 0;
    try {
      const { docs, numFound } = await booksSearch(
        this.state.search,
        this.state.limit
      );

      this.state.list = docs;
      this.state.loading = loadingStates.loaded;
      this.state.numFound = numFound;
    } catch (e) {
      this.state.loading = loadingStates.failed;
    }
  }

  renderContent({ loading, list, numFound }) {
    if (this.content) {
      this.content.remove();
    }
    this.content = new Content(this.appState, {
      loading,
      list,
      numFound,
    }).render();
    this.app.append(this.content);
  }

  render() {
    const searchBlock = new Search(
      this.state.search,
      this.onChangeSearch.bind(this)
    ).render();
    this.app.append(searchBlock);
    this.renderContent(this.state);
  }

  async stateHook(path) {
    if (path === "search") {
      await this.onSearch();
    }

    if (path === "loading" || path === "list" || path === "numFound") {
      this.renderContent(this.state);
    }
  }
}
