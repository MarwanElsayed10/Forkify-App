import View from './View';

class addRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _overlay = document.querySelector('.overlay');
  _window = document.querySelector('.add-recipe-window');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  _errorMessage = 'Error adding the recipe , Please try again !!';
  _message =
    'Congratulations! Adding recipe has been completed successfully! :)';
  _counter = 0;

  toggleAddRecipe() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
    this._counter++;
    if (this._counter % 2 === 0) {
      this.render(this._generateMarkup);
    }
  }
  addHandlerAddRecipe() {
    this._btnOpen.addEventListener('click', this.toggleAddRecipe.bind(this));
    this._btnClose.addEventListener('click', this.toggleAddRecipe.bind(this));
    this._overlay.addEventListener('click', this.toggleAddRecipe.bind(this));
  }
  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  _generateMarkup() {
    return `
    <form class="upload">
    <div class="upload__column">
      <h3 class="upload__heading">Recipe data</h3>
      <label>Title</label>
      <input placeholder="Recipe title" required name="title" type="text" />
      <label>URL</label>
      <input
        placeholder="URL (must be at least 5 characters)"
        required
        name="sourceUrl"
        type="text"
      />
      <label>Image URL</label>
      <input
        placeholder="Recipe Image URL"
        required
        name="image"
        type="text"
      />
      <label>Publisher</label>
      <input
        placeholder="Recipe Publisher name"
        required
        name="publisher"
        type="text"
      />
      <label>Prep time</label>
      <input
        placeholder="Recipe preparation time"
        required
        name="cookingTime"
        type="number"
      />
      <label>Servings</label>
      <input
        placeholder="Recipe number of servings"
        required
        name="servings"
        type="number"
      />
    </div>

    <div class="upload__column">
      <h3 class="upload__heading">Ingredients</h3>
      <label>Ingredient 1</label>
      <input
        type="text"
        required
        name="quantity-1"
        placeholder="Quantity"
      />
      <input
        type="text"
        required
        name="unit-1"
        placeholder="Unit"
      />
      <input
        type="text"
        required
        name="description-1"
        placeholder="Description"
      />
      
      <label>Ingredient 2</label>
      <input
        type="text"
        name="quantity-2"
        placeholder="Quantity"
      />
      <input
        type="text"
        name="unit-2"
        placeholder="Unit"
      />
      <input
        type="text"
        name="description-2"
        placeholder="Description"
      />
      <label>Ingredient 3</label>
      <input
        type="text"
        name="quantity-3"
        placeholder="Quantity"
      />
      <input
        type="text"
        name="unit-3"
        placeholder="Unit"
      />
      <input
        type="text"
        name="description-3"
        placeholder="Description"
      />
      <label>Ingredient 4</label>
      <input
        type="text"
        name="quantity-4"
        placeholder="Quantity"
      />
      <input
        type="text"
        name="unit-4"
        placeholder="Unit"
      />
      <input
        type="text"
        name="description-4"
        placeholder="Description"
      />
      <label>Ingredient 5</label>
      <input
        type="text"
        name="quantity-5"
        placeholder="Quantity"
      />
      <input
        type="text"
        name="unit-5"
        placeholder="Unit"
      />
      <input
        type="text"
        name="description-5"
        placeholder="Description"
      />
      <label>Ingredient 6</label>
      <input
        type="text"
        name="quantity-6"
        placeholder="Quantity"
      />
      <input
        type="text"
        name="unit-6"
        placeholder="Unit"
      />
      <input
        type="text"
        name="description-6"
        placeholder="Description"
      />
    </div>

    <button class="btn upload__btn">
      <svg>
        <use href="src/img/icons.svg#icon-upload-cloud"></use>
      </svg>
      <span>Upload</span>
    </button>
  </form>
    `;
  }
}

export default new addRecipeView();
