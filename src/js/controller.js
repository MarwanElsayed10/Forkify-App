import * as model from './model.js';
import recipeView from './views/recipeView';
import resultsView from './views/resultsView.js';
import searchView from './views/searchView.js';
import paginationView from './views/paginationView.js';
import BookmarkView from './views/BookmarkView.js';
import addRecipeView from './views/addRecipeView.js';
import { MODAL_CLOSE_SEC } from './config.js';
import allRecipesView from './views/allRecipesView.js';

if (module.hot) {
  module.hot.accept();
}

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.showSpinner();
    resultsView.update(model.paginationResults());
    await model.loadRecipe(id);
    recipeView.render(model.state.recipe);
    BookmarkView.update(model.state.bookmarks);
    controlEmptyBookmarks();
  } catch (err) {
    recipeView.renderErrorMessage();
  }
};

const controlSearchRecipe = async function () {
  try {
    resultsView.showSpinner();
    const query = searchView.getQuery();
    if (query === '') {
      resultsView.renderErrorMessage(searchView._errorMessage);
      return;
    }
    await model.searchRecipe(query);
    // resultsView.render(model.state.search.results);
    resultsView.render(model.paginationResults());
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  resultsView.render(model.paginationResults(goToPage));
  paginationView.render(model.state.search);
};

const controlServings = function (servings) {
  model.updateServings(servings);
  recipeView.update(model.state.recipe);
};

const controlBookmarks = function () {
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.removeBookmark(model.state.recipe.id);
  recipeView.update(model.state.recipe);
  BookmarkView.render(model.state.bookmarks);
  controlEmptyBookmarks();
};
const controlGetBookmarks = function () {
  BookmarkView.render(model.state.bookmarks);
};
const controlEmptyBookmarks = function () {
  if (model.state.bookmarks.length === 0)
    BookmarkView.addButtonClearBookmarks();
  else BookmarkView.removeButtonClearBookmarks();
};
const controlClearBookmark = function () {
  model.clearBookmarks();
  location.reload();
};

const controlAddRecipe = async function (data) {
  try {
    // Show loading spinner
    addRecipeView.showSpinner();

    // Upload the new recipe data
    await model.uploadRecipe(data);

    // Render recipe
    recipeView.render(model.state.recipe);

    // Success message
    addRecipeView.renderMessage();

    // Render bookmark view
    BookmarkView.render(model.state.bookmarks);
    controlEmptyBookmarks();

    // Change ID in URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // Close form window
    setTimeout(function () {
      addRecipeView.toggleAddRecipe();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    addRecipeView.renderErrorMessage(
      addRecipeView._errorMessage + '  ' + err.message
    );
  }
};
const deleteRecipe = async function () {
  try {
    const status = await model.deleteRecipe();
    if (status) {
      window.history.replaceState(null, '', ' ');
      recipeView.renderMessage(recipeView._deleteRecipeMessage);
      model.removeBookmark(model.state.recipe.id);
      resultsView.showSpinner();
      setTimeout(function () {
        location.reload();
      }, MODAL_CLOSE_SEC * 1000);
    }
  } catch (err) {
    recipeView.renderErrorMessage(recipeView._deleteRecipeErrorMessage);
  }
};

const controlAllRecipes = function () {
  allRecipesView.toggleAllRecipe();
};

const controlLogo = function () {
  window.history.replaceState(null, '', ' ');
  location.reload();
};

const init = function () {
  BookmarkView.addHandlerRender(controlGetBookmarks);
  BookmarkView.addHandlerRender(controlEmptyBookmarks);
  BookmarkView.addHandlerDeleteBookmarks(controlClearBookmark);
  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandlerServings(controlServings);
  recipeView.addHandlerBookmark(controlBookmarks);
  recipeView.addHandlerDelete(deleteRecipe);
  searchView.addHandlerSearch(controlSearchRecipe);
  paginationView.addHandlerPagination(controlPagination);
  addRecipeView.addHandlerAddRecipe();
  addRecipeView.addHandlerUpload(controlAddRecipe);
  allRecipesView.addHandlerAllRecipe(controlAllRecipes);
  recipeView.addHandlerLogo(controlLogo);
};
init();
