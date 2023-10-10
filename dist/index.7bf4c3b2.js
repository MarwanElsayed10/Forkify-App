function e(e,t,r,i){Object.defineProperty(e,t,{get:r,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},a=r.parcelRequire88b7;null==a&&((a=function(e){if(e in i)return i[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return i[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},r.parcelRequire88b7=a),a.register("27Lyk",function(t,r){e(t.exports,"register",()=>i,e=>i=e),e(t.exports,"resolve",()=>n,e=>n=e);var i,n,a={};i=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)a[t[r]]=e[t[r]]},n=function(e){var t=a[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),a("27Lyk").register(JSON.parse('{"f9fpV":"index.7bf4c3b2.js","hfd23":"icons.c14567a0.svg"}'));const s="https://forkify-api.herokuapp.com/api/v2/recipes/",o="1dcc31bb-f2e6-47b0-9709-5cb2aa239534",l=async function(e,t,r=!1){try{let i=t?fetch(e,{method:!0===r?"DELETE":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([i,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]);if(r)return!0;let a=await n.json();if(!n.ok)throw Error(`${a.message} (${n.status})`);return a}catch(e){throw e}},c={recipe:{},search:{query:"",results:[],resultsPerPage:15,page:1},bookmarks:[]},d=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},u=async function(e){try{let t=await l(`${s}${e}?key=${o}`);c.recipe=d(t),c.bookmarks.some(t=>t.id===e)?c.recipe.bookmarked=!0:c.recipe.bookmarked=!1}catch(e){throw e}},p=async function(e){try{c.search.query=e;let t=await l(`${s}?search=${e}&key=${o}`);c.search.results=t.data.recipes.map(e=>({id:e.id,image:e.image_url,title:e.title,publisher:e.publisher,...e.key&&{key:e.key}})),c.search.page=1}catch(e){throw e}},h=function(e=c.search.page){c.search.page=e;let t=(e-1)*c.search.resultsPerPage,r=e*c.search.resultsPerPage;return c.search.results.slice(t,r)},_=function(e){c.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/c.recipe.servings}),c.recipe.servings=e},g=function(){localStorage.setItem("bookmarks",JSON.stringify(c.bookmarks))},m=function(e){c.bookmarks.push(e),e.id===c.recipe.id&&(c.recipe.bookmarked=!0),g()},b=function(e){let t=c.bookmarks.findIndex(t=>t.id===e);c.bookmarks.splice(t,1),c.recipe.bookmarked=!1,g()},v=function(){localStorage.clear()},f=async function(e){try{let t=[];for(let r=1;r<=6;r++){let[i]=Object.entries(e).filter(e=>e[0].startsWith(`quantity-${r}`)&&""!==e[1]).map(e=>e[1]),[n]=Object.entries(e).filter(e=>e[0].startsWith(`unit-${r}`)&&""!==e[1]).map(e=>e[1]),[a]=Object.entries(e).filter(e=>e[0].startsWith(`description-${r}`)&&""!==e[1]).map(e=>e[1]);if(i){let e={quantity:i?+i:null,unit:n,description:a};t.push(e)}}let r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},i=await l(`${s}?key=${o}`,r);c.recipe=d(i),m(c.recipe)}catch(e){throw e}},y=async function(){try{let e={title:c.recipe.title,source_url:c.recipe.sourceUrl,image_url:c.recipe.image,publisher:c.recipe.publisher,cooking_time:c.recipe.cookingTime,servings:c.recipe.servings,ingredients:c.recipe.ingredients},t=await l(`${s}${c.recipe.id}?key=${o}`,e,!0);if(t)return t}catch(e){throw e}};!function(){let e=localStorage.getItem("bookmarks");e&&(c.bookmarks=JSON.parse(e))}();var k={};k=new URL(a("27Lyk").resolve("hfd23"),import.meta.url).toString();var w={};class ${/**
   * @constructor
   * @param {number|Fraction} [numerator]
   * @param {number} [denominator]
   * @throws {Error} - if the given denominator is zero.
   * @returns {Fraction}
   * @description Default, copy, single arg, basic constructor.
   *  Always keep sign on the numerator. If denominator gets negative value, then shift sign to the numerator.
   */constructor(e,t){// Two numbers are passed.
if(// Defaults to 0/1 = 0 if no valid arguments have passed.
this._numerator=0,this._denominator=1,isNaN(arguments[0])||isNaN(arguments[1]))isNaN(arguments[0])?arguments[0]instanceof $&&(this._numerator=arguments[0]._numerator,this._denominator=arguments[0]._denominator):this._numerator=Number(arguments[0]);else{if(Number(0===arguments[1]))throw Error("Cannot divide by zero.");this._numerator=Number(arguments[0]),this._denominator=Number(arguments[1]),this._denominator<0&&(this._numerator*=-1,this._denominator*=-1)}this._handleDecimal(),this._normalize()}/**
   * @public
   * @param {Fraction} that
   * @returns {Fraction}
   * @throws {Error} - if the given argument is not an instance of Fraction.
   * @description Add.
   */add(e){return $._validateFractionArg(e),this._numerator=this._numerator*e._denominator+this._denominator*e._numerator,this._denominator=this._denominator*e._denominator,this._normalize()}/**
   * @public
   * @param {Fraction} that
   * @returns {Fraction}
   * @throws {Error} - if the given argument is not an instance of Fraction.
   * @description Subtract.
   */subtract(e){return $._validateFractionArg(e),this._numerator=this._numerator*e._denominator-this._denominator*e._numerator,this._denominator=this._denominator*e._denominator,this._normalize()}/**
   * @public
   * @param {Fraction} that
   * @returns {Fraction}
   * @throws {Error} - if the given argument is not an instance of Fraction.
   * @description Multiply.
   */multiply(e){return $._validateFractionArg(e),this._numerator*=e._numerator,this._denominator*=e._denominator,this._normalize()}/**
   * @public
   * @param {Fraction} that
   * @returns {Fraction}
   * @throws {Error} - if the given argument is not an instance of Fraction.
   * @description Divide.
   */divide(e){return $._validateFractionArg(e),this.multiply(e.inverse())}/**
   * @public
   * @returns {Fraction} - New Fraction instance.
   * @description Inverse.
   *  Keep the sign on numerator.
   */inverse(){let e=1;return this._numerator<0&&(e=-1),new $(e*this._denominator,e*this._numerator)}/**
   * @public
   * @returns {Fraction} - New Fraction instance.
   * @description Clone.
   */clone(){return new $(this)}/**
   * @public
   * @param {Fraction} that
   * @returns {Fraction}
   * @throws {Error} - if the given argument is not an instance of Fraction.
   * @description Copy the values from the given Fraction.
   */copy(e){return $._validateFractionArg(e),this._numerator=e._numerator,this._denominator=e._denominator,this}/**
   * @public
   * @param {Fraction} that
   * @returns {boolean}
   * @throws {Error} - if the given argument is not an instance of Fraction.
   * @description Checks whether the given Fraction is equal or not.
   */equals(e){return $._validateFractionArg(e),this._numerator===e._numerator&&this._denominator===e._denominator}/**
   * @public
   * @returns {number}
   * @description Get the value.
   */value(){return this._numerator/this._denominator}/**
   * @public
   * @returns {string}
   * @description Convert to string.
   */toString(){return this._numerator+"/"+this._denominator}/**
   * @public
   * @returns {number}
   * @description Compute gcd (Euclidean algorithm).
   *  Compute based on absolute values to handle negative numbers as well.
   */gcd(){let e=Math.abs(this._numerator),t=Math.abs(this._denominator);if(0===e)return t;for(;0!==t;){let r=t;t=e%t,e=r}return e}/**
   * @public
   * @param {any} that
   * @returns {boolean}
   * @description Checks whether the given instance is a Fraction instance.
   */static isFraction(e){return e instanceof $}/**
   * @private
   * @returns {void}
   * @description Handle decimal.
   */_handleDecimal(){if(!Number.isInteger(this._numerator)||!Number.isInteger(this._denominator)){let e=$._numberToFraction(this._numerator),t=$._numberToFraction(this._denominator),r=e.divide(t);this._numerator=r._numerator,this._denominator=r._denominator}}/**
   * @private
   * @returns {Fraction}
   * @description Normalize.
   */_normalize(){let e=this.gcd();return this._numerator/=e,this._denominator/=e,this}/**
   * @private
   * @param {any} that
   * @returns {void}
   * @throws {Error} - if the given argument is not an instance of Fraction.
   * @description Validate Fraction argument.
   */static _validateFractionArg(e){if(!$.isFraction(e))throw Error("Should be an instance of Fraction.")}/**
   * @private
   * @param {number} number
   * @returns {Fraction}
   * @description Number to fraction.
   */static _numberToFraction(e){let t=String(e),r=t.indexOf(".");if(-1===r)return new $(Number(e));{let e=t.substring(0,r),i=-1!==e.indexOf("-"),n=t.substring(r+1,t.length),a=Math.pow(10,n.length);return i?new $(Number(e)).subtract(new $(Number(n),a)):new $(Number(e)).add(new $(Number(n),a))}}}w=$;class E{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderErrorMessage();this._data=e;let t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),i=Array.from(r.querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));i.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderErrorMessage(e=this._errorMessage){let r=`
      <div class="error">
        <div>
          <svg>
            <use href="${/*@__PURE__*/t(k)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(e=this._message){let r=`
      <div class="message">
        <div>
          <svg>
            <use href="${/*@__PURE__*/t(k)}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}showSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${/*@__PURE__*/t(k)}#icon-loader"></use>
        </svg>
      </div>  
      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}}class q extends E{_parentElement=document.querySelector(".recipe");_deleteRecipeMessage="Recipe has been deleted :) Now search for new recipes!";_deleteRecipeErrorMessage="Something went wrong!! please try again!";_errorMessage="Error getting the recipe , Please try again !!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--increase-servings");if(!r)return;let i=+r.dataset.updateTo;i>0&&e(i)})}addHandlerBookmark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn-bookmark");r&&e()})}addHandlerLogo(e){document.querySelector(".header__logo").addEventListener("click",e)}addHandlerDelete(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--delete");r&&e()})}_generateMarkup(){return`
      <figure class="recipe__fig" title="Recipe Image">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img"/>
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info" title="Cooking time">
          <svg class="recipe__info-icon">
            <use href="${/*@__PURE__*/t(k)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info" title="Number of servings">
          <svg class="recipe__info-icon">
            <use href="${/*@__PURE__*/t(k)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--increase-servings" data-update-to="${this._data.servings-1}" title="Decrease number of servings">
              <svg>
                <use href="${/*@__PURE__*/t(k)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--increase-servings" data-update-to="${this._data.servings+1}" title="Increase number of servings">
              <svg>
                <use href="${/*@__PURE__*/t(k)}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated ${this._data.key?"":"hidden"}" title="Your Own Recipe">
          <svg>
            <use href="${/*@__PURE__*/t(k)}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round btn-bookmark" title="Bookmark Recipe">
          <svg class="">
            <use href="${/*@__PURE__*/t(k)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
          </svg>
        </button>
        <button class="btn--round btn--delete ${this._data.key?"":"hidden"}" title="Delete Recipe">
          ❌
        </button>
        
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateIngredient).join("")}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${this._data.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${/*@__PURE__*/t(k)}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>`}_generateIngredient(e){return`
    ${null===e.quantity||0===e.quantity?"":`
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${/*@__PURE__*/t(k)}#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${1==new/*@__PURE__*/(t(w))(e.quantity)._denominator?new/*@__PURE__*/(t(w))(e.quantity)._numerator:new/*@__PURE__*/(t(w))(e.quantity).toString()}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${e.unit}</span>
            ${e.description}
          </div>
        </li> 
        `}
    `}}var S=new q;class x extends E{_parentElement=document.querySelector(".results");_errorMessage='No recipe matches , please try again! NOTE: Click on "Search Keywords" button to know the recipes that you can search for :)';_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){let r=window.location.hash.slice(1);return`
      <li class="preview">
        <a class="preview__link ${e.id===r?"preview__link--active":""}" href="#${e.id}">
          <figure class="preview__fig">
            <img src="${e.image}" alt="${e.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${e.title}</h4>
            <p class="preview__publisher">${e.publisher}</p>
            <div class="preview__user-generated ${e.key?"":"hidden"}" title="Your Own Recipe">
              <svg>
                <use href="${/*@__PURE__*/t(k)}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `}}var R=new x;class M extends E{_parentElement=document.querySelector(".search");_errorMessage="You must enter a recipe name first to search for it, please try again!!";getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this.#e(),e}#e(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}}var L=new M;class A extends E{_parentElement=document.querySelector(".pagination");_generateMarkup(){let e=this._data.page,r=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&r>1?`
      <button class="btn--inline-prime">
        <span>Page ${e}</span>
      </button>
      <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
        <span>Page ${e+1}</span>
        <svg class="search__icon">
          <use href="${/*@__PURE__*/t(k)}#icon-arrow-right"></use>
        </svg>
      </button>
      `:e===r&&r>1?`
      
      <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${/*@__PURE__*/t(k)}#icon-arrow-left"></use>
        </svg>
        <span>Page ${e-1}</span>
      </button>
      <button class="btn--inline-prime">
        <span>Page ${e}</span>
      </button>
      `:e<r?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${/*@__PURE__*/t(k)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
        <button class="btn--inline-prime">
          <span>Page ${e}</span>
        </button>
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${/*@__PURE__*/t(k)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:Array.isArray(this._data)&&0===this._data.length?`
      <button class="btn--inline-prime">
        <span>Page ${e}</span>
      </button>
    `:""}addHandlerPagination(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let i=+r.dataset.goto;e(i)})}}var H=new A;class P extends E{_parentElement=document.querySelector(".bookmarks__list");_Bookmarks=document.querySelector(".btn--bookmark");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}addHandlerRender(e){window.addEventListener("load",e)}_generateMarkupPreview(e){let r=window.location.hash.slice(1);return`
      <li class="preview">
        <a class="preview__link ${e.id===r?"preview__link--active":""}" href="#${e.id}">
          <figure class="preview__fig">
            <img src="${e.image}" alt="${e.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${e.title}</h4>
            <p class="preview__publisher">${e.publisher}</p>
            <div class="preview__user-generated ${e.key?"":"hidden"}" title="Your Own Recipe">
              <svg>
                <use href="${/*@__PURE__*/t(k)}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `}removeButtonClearBookmarks(){this._Bookmarks.classList.remove("hidden")}addButtonClearBookmarks(){this._Bookmarks.classList.add("hidden")}addHandlerDeleteBookmarks(e){this._Bookmarks.addEventListener("click",e)}}var N=new P;class T extends E{_parentElement=document.querySelector(".upload");_overlay=document.querySelector(".overlay");_window=document.querySelector(".add-recipe-window");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_errorMessage="Error adding the recipe , Please try again !!";_message="Congratulations! Adding recipe has been completed successfully! :)";_counter=0;toggleAddRecipe(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden"),this._counter++,this._counter%2==0&&this.render(this._generateMarkup)}addHandlerAddRecipe(){this._btnOpen.addEventListener("click",this.toggleAddRecipe.bind(this)),this._btnClose.addEventListener("click",this.toggleAddRecipe.bind(this)),this._overlay.addEventListener("click",this.toggleAddRecipe.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=[...new FormData(this)],i=Object.fromEntries(r);e(i)})}_generateMarkup(){return`
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
    `}}var O=new T;class D extends E{_parentElement=document.querySelector(".all-recipe");_btnOpen=document.querySelector(".nav__btn--all-recipes");_btnClose=document.querySelector(".btn--all-close-modal");_btnCloseForm=document.querySelector(".all-recipe__btn");_overlay=document.querySelector(".overlay-all");_window=document.querySelector(".all-recipe-window");toggleAllRecipe(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}addHandlerAllRecipe(e){this._btnOpen.addEventListener("click",this.toggleAllRecipe.bind(this)),this._btnClose.addEventListener("click",this.toggleAllRecipe.bind(this)),this._overlay.addEventListener("click",this.toggleAllRecipe.bind(this)),this._btnCloseForm.addEventListener("click",function(t){t.preventDefault(),e()})}}var C=new D;const F=async function(){try{let e=window.location.hash.slice(1);if(!e)return;S.showSpinner(),R.update(h()),await u(e),S.render(c.recipe),N.update(c.bookmarks),I()}catch(e){S.renderErrorMessage()}},U=async function(){try{R.showSpinner();let e=L.getQuery();if(""===e){R.renderErrorMessage(L._errorMessage);return}await p(e),R.render(h()),H.render(c.search)}catch(e){console.log(e)}},I=function(){0===c.bookmarks.length?N.addButtonClearBookmarks():N.removeButtonClearBookmarks()},B=async function(e){try{O.showSpinner(),// Upload the new recipe data
await f(e),S.render(c.recipe),O.renderMessage(),N.render(c.bookmarks),I(),// Change ID in URL
window.history.pushState(null,"",`#${c.recipe.id}`),// Close form window
setTimeout(function(){O.toggleAddRecipe()},1500)}catch(e){O.renderErrorMessage(O._errorMessage+"  "+e.message)}},j=async function(){try{let e=await y();e&&(window.history.replaceState(null,""," "),S.renderMessage(S._deleteRecipeMessage),b(c.recipe.id),R.showSpinner(),setTimeout(function(){location.reload()},1500))}catch(e){S.renderErrorMessage(S._deleteRecipeErrorMessage)}};N.addHandlerRender(function(){N.render(c.bookmarks)}),N.addHandlerRender(I),N.addHandlerDeleteBookmarks(function(){v(),location.reload()}),S.addHandlerRender(F),S.addHandlerServings(function(e){_(e),S.update(c.recipe)}),S.addHandlerBookmark(function(){c.recipe.bookmarked?b(c.recipe.id):m(c.recipe),S.update(c.recipe),N.render(c.bookmarks),I()}),S.addHandlerDelete(j),L.addHandlerSearch(U),H.addHandlerPagination(function(e){R.render(h(e)),H.render(c.search)}),O.addHandlerAddRecipe(),O.addHandlerUpload(B),C.addHandlerAllRecipe(function(){C.toggleAllRecipe()}),S.addHandlerLogo(function(){window.history.replaceState(null,""," "),location.reload()});//# sourceMappingURL=index.7bf4c3b2.js.map

//# sourceMappingURL=index.7bf4c3b2.js.map
