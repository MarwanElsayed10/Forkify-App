import * as config from './config.js';
import { AJAX } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resultsPerPage: config.RES_PER_PAGE,
    page: 1,
  },
  bookmarks: [],
};

const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }),
  };
};

export const loadRecipe = async function (id) {
  try {
    const dataRecipe = await AJAX(`${config.API_URL}${id}?key=${config.KEY}`);
    state.recipe = createRecipeObject(dataRecipe);
    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  } catch (err) {
    throw err;
  }
};

export const searchRecipe = async function (query) {
  try {
    state.search.query = query;
    const searchResult = await AJAX(
      `${config.API_URL}?search=${query}&key=${config.KEY}`
    );
    state.search.results = searchResult.data.recipes.map(rec => {
      return {
        id: rec.id,
        image: rec.image_url,
        title: rec.title,
        publisher: rec.publisher,
        ...(rec.key && { key: rec.key }),
      };
    });
    state.search.page = 1;
  } catch (err) {
    throw err;
  }
};

export const paginationResults = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;
  return state.search.results.slice(start, end);
};

export const updateServings = function (servings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * servings) / state.recipe.servings;
  });
  state.recipe.servings = servings;
};

const reloadingBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  state.bookmarks.push(recipe);
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
  reloadingBookmarks();
};

export const removeBookmark = function (id) {
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);
  state.recipe.bookmarked = false;
  reloadingBookmarks();
};

export const clearBookmarks = function () {
  localStorage.clear();
};

export const uploadRecipe = async function (dataNewRecipe) {
  try {
    const ingredients = [];
    for (let i = 1; i <= 6; i++) {
      const [quantity] = Object.entries(dataNewRecipe)
        .filter(
          entry => entry[0].startsWith(`quantity-${i}`) && entry[1] !== ''
        )
        .map(des => des[1]);
      const [unit] = Object.entries(dataNewRecipe)
        .filter(entry => entry[0].startsWith(`unit-${i}`) && entry[1] !== '')
        .map(des => des[1]);
      const [description] = Object.entries(dataNewRecipe)
        .filter(
          entry => entry[0].startsWith(`description-${i}`) && entry[1] !== ''
        )
        .map(des => des[1]);
      if (quantity) {
        const ingredientsFinal = {
          quantity: quantity ? +quantity : null,
          unit: unit,
          description: description,
        };
        ingredients.push(ingredientsFinal);
      }
    }

    const recipe = {
      title: dataNewRecipe.title,
      source_url: dataNewRecipe.sourceUrl,
      image_url: dataNewRecipe.image,
      publisher: dataNewRecipe.publisher,
      cooking_time: +dataNewRecipe.cookingTime,
      servings: +dataNewRecipe.servings,
      ingredients,
    };

    const data = await AJAX(`${config.API_URL}?key=${config.KEY}`, recipe);
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};

export const deleteRecipe = async function () {
  try {
    const recipe = {
      title: state.recipe.title,
      source_url: state.recipe.sourceUrl,
      image_url: state.recipe.image,
      publisher: state.recipe.publisher,
      cooking_time: state.recipe.cookingTime,
      servings: state.recipe.servings,
      ingredients: state.recipe.ingredients,
    };
    const data = await AJAX(
      `${config.API_URL}${state.recipe.id}?key=${config.KEY}`,
      recipe,
      true
    );
    if (data) return data;
  } catch (err) {
    throw err;
  }
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};
init();
