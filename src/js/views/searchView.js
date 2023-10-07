import View from './View.js';

class SearchView extends View {
  _parentElement = document.querySelector('.search');
  _errorMessage =
    'You must enter a recipe name first to search for it, please try again!!';

  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this.#clear();
    return query;
  }

  #clear() {
    this._parentElement.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
