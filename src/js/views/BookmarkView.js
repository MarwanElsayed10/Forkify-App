import View from './View';
import icons from '../../img/icons.svg';

class BookmarkView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _Bookmarks = document.querySelector('.btn--bookmark');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkupPreview(result) {
    const id = window.location.hash.slice(1);
    return `
      <li class="preview">
        <a class="preview__link ${
          result.id === id ? 'preview__link--active' : ''
        }" href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" alt="${result.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
            <div class="preview__user-generated ${
              result.key ? '' : 'hidden'
            }" title="Your Own Recipe">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `;
  }
  removeButtonClearBookmarks() {
    this._Bookmarks.classList.remove('hidden');
  }
  addButtonClearBookmarks() {
    this._Bookmarks.classList.add('hidden');
  }
  addHandlerDeleteBookmarks(handler) {
    this._Bookmarks.addEventListener('click', handler);
  }
}

export default new BookmarkView();
