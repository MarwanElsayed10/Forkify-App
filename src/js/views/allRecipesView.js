import View from './View';

class AllRecipes extends View {
  _parentElement = document.querySelector('.all-recipe');
  _btnOpen = document.querySelector('.nav__btn--all-recipes');
  _btnClose = document.querySelector('.btn--all-close-modal');
  _btnCloseForm = document.querySelector('.all-recipe__btn');
  _overlay = document.querySelector('.overlay-all');
  _window = document.querySelector('.all-recipe-window');

  toggleAllRecipe() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  addHandlerAllRecipe(handler) {
    this._btnOpen.addEventListener('click', this.toggleAllRecipe.bind(this));
    this._btnClose.addEventListener('click', this.toggleAllRecipe.bind(this));
    this._overlay.addEventListener('click', this.toggleAllRecipe.bind(this));
    this._btnCloseForm.addEventListener('click', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new AllRecipes();
