// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aD7Zm":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _recipeView = require("./views/recipeView");
var _recipeViewDefault = parcelHelpers.interopDefault(_recipeView);
var _resultsViewJs = require("./views/resultsView.js");
var _resultsViewJsDefault = parcelHelpers.interopDefault(_resultsViewJs);
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _bookmarkViewJs = require("./views/BookmarkView.js");
var _bookmarkViewJsDefault = parcelHelpers.interopDefault(_bookmarkViewJs);
var _addRecipeViewJs = require("./views/addRecipeView.js");
var _addRecipeViewJsDefault = parcelHelpers.interopDefault(_addRecipeViewJs);
var _configJs = require("./config.js");
var _allRecipesViewJs = require("./views/allRecipesView.js");
var _allRecipesViewJsDefault = parcelHelpers.interopDefault(_allRecipesViewJs);
if (module.hot) module.hot.accept();
const controlRecipe = async function() {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        (0, _recipeViewDefault.default).showSpinner();
        (0, _resultsViewJsDefault.default).update(_modelJs.paginationResults());
        await _modelJs.loadRecipe(id);
        (0, _recipeViewDefault.default).render(_modelJs.state.recipe);
        (0, _bookmarkViewJsDefault.default).update(_modelJs.state.bookmarks);
        controlEmptyBookmarks();
    } catch (err) {
        (0, _recipeViewDefault.default).renderErrorMessage();
    }
};
const controlSearchRecipe = async function() {
    try {
        (0, _resultsViewJsDefault.default).showSpinner();
        const query = (0, _searchViewJsDefault.default).getQuery();
        if (query === "") {
            (0, _resultsViewJsDefault.default).renderErrorMessage((0, _searchViewJsDefault.default)._errorMessage);
            return;
        }
        await _modelJs.searchRecipe(query);
        // resultsView.render(model.state.search.results);
        (0, _resultsViewJsDefault.default).render(_modelJs.paginationResults());
        (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
    } catch (err) {
        console.log(err);
    }
};
const controlPagination = function(goToPage) {
    (0, _resultsViewJsDefault.default).render(_modelJs.paginationResults(goToPage));
    (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
};
const controlServings = function(servings) {
    _modelJs.updateServings(servings);
    (0, _recipeViewDefault.default).update(_modelJs.state.recipe);
};
const controlBookmarks = function() {
    if (!_modelJs.state.recipe.bookmarked) _modelJs.addBookmark(_modelJs.state.recipe);
    else _modelJs.removeBookmark(_modelJs.state.recipe.id);
    (0, _recipeViewDefault.default).update(_modelJs.state.recipe);
    (0, _bookmarkViewJsDefault.default).render(_modelJs.state.bookmarks);
    controlEmptyBookmarks();
};
const controlGetBookmarks = function() {
    (0, _bookmarkViewJsDefault.default).render(_modelJs.state.bookmarks);
};
const controlEmptyBookmarks = function() {
    if (_modelJs.state.bookmarks.length === 0) (0, _bookmarkViewJsDefault.default).addButtonClearBookmarks();
    else (0, _bookmarkViewJsDefault.default).removeButtonClearBookmarks();
};
const controlClearBookmark = function() {
    _modelJs.clearBookmarks();
    location.reload();
};
const controlAddRecipe = async function(data) {
    try {
        // Show loading spinner
        (0, _addRecipeViewJsDefault.default).showSpinner();
        // Upload the new recipe data
        await _modelJs.uploadRecipe(data);
        // Render recipe
        (0, _recipeViewDefault.default).render(_modelJs.state.recipe);
        // Success message
        (0, _addRecipeViewJsDefault.default).renderMessage();
        // Render bookmark view
        (0, _bookmarkViewJsDefault.default).render(_modelJs.state.bookmarks);
        controlEmptyBookmarks();
        // Change ID in URL
        window.history.pushState(null, "", `#${_modelJs.state.recipe.id}`);
        // Close form window
        setTimeout(function() {
            (0, _addRecipeViewJsDefault.default).toggleAddRecipe();
        }, (0, _configJs.MODAL_CLOSE_SEC) * 1000);
    } catch (err) {
        (0, _addRecipeViewJsDefault.default).renderErrorMessage((0, _addRecipeViewJsDefault.default)._errorMessage + "  " + err.message);
    }
};
const deleteRecipe = async function() {
    try {
        const status = await _modelJs.deleteRecipe();
        if (status) {
            window.history.replaceState(null, "", " ");
            (0, _recipeViewDefault.default).renderMessage((0, _recipeViewDefault.default)._deleteRecipeMessage);
            _modelJs.removeBookmark(_modelJs.state.recipe.id);
            (0, _resultsViewJsDefault.default).showSpinner();
            setTimeout(function() {
                location.reload();
            }, (0, _configJs.MODAL_CLOSE_SEC) * 1000);
        }
    } catch (err) {
        (0, _recipeViewDefault.default).renderErrorMessage((0, _recipeViewDefault.default)._deleteRecipeErrorMessage);
    }
};
const controlAllRecipes = function() {
    (0, _allRecipesViewJsDefault.default).toggleAllRecipe();
};
const controlLogo = function() {
    window.history.replaceState(null, "", " ");
    location.reload();
};
const init = function() {
    (0, _bookmarkViewJsDefault.default).addHandlerRender(controlGetBookmarks);
    (0, _bookmarkViewJsDefault.default).addHandlerRender(controlEmptyBookmarks);
    (0, _bookmarkViewJsDefault.default).addHandlerDeleteBookmarks(controlClearBookmark);
    (0, _recipeViewDefault.default).addHandlerRender(controlRecipe);
    (0, _recipeViewDefault.default).addHandlerServings(controlServings);
    (0, _recipeViewDefault.default).addHandlerBookmark(controlBookmarks);
    (0, _recipeViewDefault.default).addHandlerDelete(deleteRecipe);
    (0, _searchViewJsDefault.default).addHandlerSearch(controlSearchRecipe);
    (0, _paginationViewJsDefault.default).addHandlerPagination(controlPagination);
    (0, _addRecipeViewJsDefault.default).addHandlerAddRecipe();
    (0, _addRecipeViewJsDefault.default).addHandlerUpload(controlAddRecipe);
    (0, _allRecipesViewJsDefault.default).addHandlerAllRecipe(controlAllRecipes);
    (0, _recipeViewDefault.default).addHandlerLogo(controlLogo);
};
init();

},{"./model.js":"Y4A21","./views/recipeView":"l60JC","./views/resultsView.js":"cSbZE","./views/searchView.js":"9OQAM","./views/paginationView.js":"6z7bi","./views/BookmarkView.js":"d9IvG","./views/addRecipeView.js":"i6DNj","./config.js":"k5Hzs","./views/allRecipesView.js":"6PNHp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe);
parcelHelpers.export(exports, "searchRecipe", ()=>searchRecipe);
parcelHelpers.export(exports, "paginationResults", ()=>paginationResults);
parcelHelpers.export(exports, "updateServings", ()=>updateServings);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark);
parcelHelpers.export(exports, "removeBookmark", ()=>removeBookmark);
parcelHelpers.export(exports, "clearBookmarks", ()=>clearBookmarks);
parcelHelpers.export(exports, "uploadRecipe", ()=>uploadRecipe);
parcelHelpers.export(exports, "deleteRecipe", ()=>deleteRecipe);
var _configJs = require("./config.js");
var _helpersJs = require("./helpers.js");
const state = {
    recipe: {},
    search: {
        query: "",
        results: [],
        resultsPerPage: _configJs.RES_PER_PAGE,
        page: 1
    },
    bookmarks: []
};
const createRecipeObject = function(data) {
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
        ...recipe.key && {
            key: recipe.key
        }
    };
};
const loadRecipe = async function(id) {
    try {
        const dataRecipe = await (0, _helpersJs.AJAX)(`${_configJs.API_URL}${id}?key=${_configJs.KEY}`);
        state.recipe = createRecipeObject(dataRecipe);
        if (state.bookmarks.some((bookmark)=>bookmark.id === id)) state.recipe.bookmarked = true;
        else state.recipe.bookmarked = false;
    } catch (err) {
        throw err;
    }
};
const searchRecipe = async function(query) {
    try {
        state.search.query = query;
        const searchResult = await (0, _helpersJs.AJAX)(`${_configJs.API_URL}?search=${query}&key=${_configJs.KEY}`);
        state.search.results = searchResult.data.recipes.map((rec)=>{
            return {
                id: rec.id,
                image: rec.image_url,
                title: rec.title,
                publisher: rec.publisher,
                ...rec.key && {
                    key: rec.key
                }
            };
        });
        state.search.page = 1;
    } catch (err) {
        throw err;
    }
};
const paginationResults = function(page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage;
    const end = page * state.search.resultsPerPage;
    return state.search.results.slice(start, end);
};
const updateServings = function(servings) {
    state.recipe.ingredients.forEach((ing)=>{
        ing.quantity = ing.quantity * servings / state.recipe.servings;
    });
    state.recipe.servings = servings;
};
const reloadingBookmarks = function() {
    localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};
const addBookmark = function(recipe) {
    state.bookmarks.push(recipe);
    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
    reloadingBookmarks();
};
const removeBookmark = function(id) {
    const index = state.bookmarks.findIndex((el)=>el.id === id);
    state.bookmarks.splice(index, 1);
    state.recipe.bookmarked = false;
    reloadingBookmarks();
};
const clearBookmarks = function() {
    localStorage.clear();
};
const uploadRecipe = async function(dataNewRecipe) {
    try {
        const ingredients = [];
        for(let i = 1; i <= 6; i++){
            const [quantity] = Object.entries(dataNewRecipe).filter((entry)=>entry[0].startsWith(`quantity-${i}`) && entry[1] !== "").map((des)=>des[1]);
            const [unit] = Object.entries(dataNewRecipe).filter((entry)=>entry[0].startsWith(`unit-${i}`) && entry[1] !== "").map((des)=>des[1]);
            const [description] = Object.entries(dataNewRecipe).filter((entry)=>entry[0].startsWith(`description-${i}`) && entry[1] !== "").map((des)=>des[1]);
            if (quantity) {
                const ingredientsFinal = {
                    quantity: quantity ? +quantity : null,
                    unit: unit,
                    description: description
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
            ingredients
        };
        const data = await (0, _helpersJs.AJAX)(`${_configJs.API_URL}?key=${_configJs.KEY}`, recipe);
        state.recipe = createRecipeObject(data);
        addBookmark(state.recipe);
    } catch (err) {
        throw err;
    }
};
const deleteRecipe = async function() {
    try {
        const recipe = {
            title: state.recipe.title,
            source_url: state.recipe.sourceUrl,
            image_url: state.recipe.image,
            publisher: state.recipe.publisher,
            cooking_time: state.recipe.cookingTime,
            servings: state.recipe.servings,
            ingredients: state.recipe.ingredients
        };
        const data = await (0, _helpersJs.AJAX)(`${_configJs.API_URL}${state.recipe.id}?key=${_configJs.KEY}`, recipe, true);
        if (data) return data;
    } catch (err) {
        throw err;
    }
};
const init = function() {
    const storage = localStorage.getItem("bookmarks");
    if (storage) state.bookmarks = JSON.parse(storage);
};
init();

},{"./config.js":"k5Hzs","./helpers.js":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC);
parcelHelpers.export(exports, "RES_PER_PAGE", ()=>RES_PER_PAGE);
parcelHelpers.export(exports, "KEY", ()=>KEY);
parcelHelpers.export(exports, "MODAL_CLOSE_SEC", ()=>MODAL_CLOSE_SEC);
const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes/";
const TIMEOUT_SEC = 10;
const RES_PER_PAGE = 15;
const KEY = "1dcc31bb-f2e6-47b0-9709-5cb2aa239534";
const MODAL_CLOSE_SEC = 1.5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AJAX", ()=>AJAX);
var _config = require("./config");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const AJAX = async function(url, uploadData, keyDelete = false) {
    try {
        const fetchPro = uploadData ? fetch(url, {
            method: keyDelete === true ? "DELETE" : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(uploadData)
        }) : fetch(url);
        const res = await Promise.race([
            fetchPro,
            timeout((0, _config.TIMEOUT_SEC))
        ]);
        if (keyDelete) return true;
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        throw err;
    }
};

},{"./config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l60JC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _fraction = require("@mathematics/fraction");
var _fractionDefault = parcelHelpers.interopDefault(_fraction);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class RecipeView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".recipe");
    _deleteRecipeMessage = "Recipe has been deleted :) Now search for new recipes!";
    _deleteRecipeErrorMessage = "Something went wrong!! please try again!";
    _errorMessage = "Error getting the recipe , Please try again !!";
    _message = "";
    addHandlerRender(handler) {
        [
            "hashchange",
            "load"
        ].forEach((ev)=>window.addEventListener(ev, handler));
    }
    addHandlerServings(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--increase-servings");
            if (!btn) return;
            const updateTo = +btn.dataset.updateTo;
            if (updateTo > 0) handler(updateTo);
        });
    }
    addHandlerBookmark(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn-bookmark");
            if (!btn) return;
            handler();
        });
    }
    addHandlerLogo(handler) {
        document.querySelector(".header__logo").addEventListener("click", handler);
    }
    addHandlerDelete(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--delete");
            if (!btn) return;
            handler();
        });
    }
    _generateMarkup() {
        return `
      <figure class="recipe__fig" title="Recipe Image">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img"/>
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info" title="Cooking time">
          <svg class="recipe__info-icon">
            <use href="${0, _iconsSvgDefault.default}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info" title="Number of servings">
          <svg class="recipe__info-icon">
            <use href="${0, _iconsSvgDefault.default}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--increase-servings" data-update-to="${this._data.servings - 1}" title="Decrease number of servings">
              <svg>
                <use href="${0, _iconsSvgDefault.default}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--increase-servings" data-update-to="${this._data.servings + 1}" title="Increase number of servings">
              <svg>
                <use href="${0, _iconsSvgDefault.default}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated ${this._data.key ? "" : "hidden"}" title="Your Own Recipe">
          <svg>
            <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round btn-bookmark" title="Bookmark Recipe">
          <svg class="">
            <use href="${0, _iconsSvgDefault.default}#icon-bookmark${this._data.bookmarked ? "-fill" : ""}"></use>
          </svg>
        </button>
        <button class="btn--round btn--delete ${this._data.key ? "" : "hidden"}" title="Delete Recipe">
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
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>`;
    }
    _generateIngredient(ing) {
        return `
    ${ing.quantity === null || ing.quantity === 0 ? "" : `
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${new (0, _fractionDefault.default)(ing.quantity)._denominator == 1 ? new (0, _fractionDefault.default)(ing.quantity)._numerator : new (0, _fractionDefault.default)(ing.quantity).toString()}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${ing.unit}</span>
            ${ing.description}
          </div>
        </li> 
        `}
    `;
    }
}
exports.default = new RecipeView();

},{"../../img/icons.svg":"cMpiy","@mathematics/fraction":"gDJcX","./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cMpiy":[function(require,module,exports) {
module.exports = require("17cff2908589362b").getBundleURL("hWUTQ") + "icons.21bad73c.svg" + "?" + Date.now();

},{"17cff2908589362b":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"gDJcX":[function(require,module,exports) {
class Fraction {
    /**
   * @constructor
   * @param {number|Fraction} [numerator]
   * @param {number} [denominator]
   * @throws {Error} - if the given denominator is zero.
   * @returns {Fraction}
   * @description Default, copy, single arg, basic constructor.
   *  Always keep sign on the numerator. If denominator gets negative value, then shift sign to the numerator.
   */ constructor(numerator, denominator){
        // Defaults to 0/1 = 0 if no valid arguments have passed.
        this._numerator = 0;
        this._denominator = 1;
        // Two numbers are passed.
        if (!isNaN(arguments[0]) && !isNaN(arguments[1])) {
            if (Number(arguments[1] === 0)) throw new Error("Cannot divide by zero.");
            this._numerator = Number(arguments[0]);
            this._denominator = Number(arguments[1]);
            // shift denominator sign to the numerator.
            if (this._denominator < 0) {
                this._numerator *= -1;
                this._denominator *= -1;
            }
        } else if (!isNaN(arguments[0])) this._numerator = Number(arguments[0]);
        else if (arguments[0] instanceof Fraction) {
            this._numerator = arguments[0]._numerator;
            this._denominator = arguments[0]._denominator;
        }
        this._handleDecimal();
        this._normalize();
    }
    /**
   * @public
   * @param {Fraction} that
   * @returns {Fraction}
   * @throws {Error} - if the given argument is not an instance of Fraction.
   * @description Add.
   */ add(that) {
        Fraction._validateFractionArg(that);
        this._numerator = this._numerator * that._denominator + this._denominator * that._numerator;
        this._denominator = this._denominator * that._denominator;
        return this._normalize();
    }
    /**
   * @public
   * @param {Fraction} that
   * @returns {Fraction}
   * @throws {Error} - if the given argument is not an instance of Fraction.
   * @description Subtract.
   */ subtract(that) {
        Fraction._validateFractionArg(that);
        this._numerator = this._numerator * that._denominator - this._denominator * that._numerator;
        this._denominator = this._denominator * that._denominator;
        return this._normalize();
    }
    /**
   * @public
   * @param {Fraction} that
   * @returns {Fraction}
   * @throws {Error} - if the given argument is not an instance of Fraction.
   * @description Multiply.
   */ multiply(that) {
        Fraction._validateFractionArg(that);
        this._numerator *= that._numerator;
        this._denominator *= that._denominator;
        return this._normalize();
    }
    /**
   * @public
   * @param {Fraction} that
   * @returns {Fraction}
   * @throws {Error} - if the given argument is not an instance of Fraction.
   * @description Divide.
   */ divide(that) {
        Fraction._validateFractionArg(that);
        return this.multiply(that.inverse());
    }
    /**
   * @public
   * @returns {Fraction} - New Fraction instance.
   * @description Inverse.
   *  Keep the sign on numerator.
   */ inverse() {
        let sign = 1;
        if (this._numerator < 0) sign = -1;
        return new Fraction(sign * this._denominator, sign * this._numerator);
    }
    /**
   * @public
   * @returns {Fraction} - New Fraction instance.
   * @description Clone.
   */ clone() {
        return new Fraction(this);
    }
    /**
   * @public
   * @param {Fraction} that
   * @returns {Fraction}
   * @throws {Error} - if the given argument is not an instance of Fraction.
   * @description Copy the values from the given Fraction.
   */ copy(that) {
        Fraction._validateFractionArg(that);
        this._numerator = that._numerator;
        this._denominator = that._denominator;
        return this;
    }
    /**
   * @public
   * @param {Fraction} that
   * @returns {boolean}
   * @throws {Error} - if the given argument is not an instance of Fraction.
   * @description Checks whether the given Fraction is equal or not.
   */ equals(that) {
        Fraction._validateFractionArg(that);
        return this._numerator === that._numerator && this._denominator === that._denominator;
    }
    /**
   * @public
   * @returns {number}
   * @description Get the value.
   */ value() {
        return this._numerator / this._denominator;
    }
    /**
   * @public
   * @returns {string}
   * @description Convert to string.
   */ toString() {
        return this._numerator + "/" + this._denominator;
    }
    /**
   * @public
   * @returns {number}
   * @description Compute gcd (Euclidean algorithm).
   *  Compute based on absolute values to handle negative numbers as well.
   */ gcd() {
        let a = Math.abs(this._numerator);
        let b = Math.abs(this._denominator);
        if (a === 0) return b;
        while(b !== 0){
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    /**
   * @public
   * @param {any} that
   * @returns {boolean}
   * @description Checks whether the given instance is a Fraction instance.
   */ static isFraction(that) {
        return that instanceof Fraction;
    }
    /**
   * @private
   * @returns {void}
   * @description Handle decimal.
   */ _handleDecimal() {
        if (!Number.isInteger(this._numerator) || !Number.isInteger(this._denominator)) {
            const f1 = Fraction._numberToFraction(this._numerator);
            const f2 = Fraction._numberToFraction(this._denominator);
            const fraction = f1.divide(f2);
            this._numerator = fraction._numerator;
            this._denominator = fraction._denominator;
        }
    }
    /**
   * @private
   * @returns {Fraction}
   * @description Normalize.
   */ _normalize() {
        const gcd = this.gcd();
        this._numerator /= gcd;
        this._denominator /= gcd;
        return this;
    }
    /**
   * @private
   * @param {any} that
   * @returns {void}
   * @throws {Error} - if the given argument is not an instance of Fraction.
   * @description Validate Fraction argument.
   */ static _validateFractionArg(that) {
        if (!Fraction.isFraction(that)) throw new Error("Should be an instance of Fraction.");
    }
    /**
   * @private
   * @param {number} number
   * @returns {Fraction}
   * @description Number to fraction.
   */ static _numberToFraction(number) {
        const _number = String(number);
        const decimalPointIndex = _number.indexOf(".");
        if (decimalPointIndex !== -1) {
            const whole = _number.substring(0, decimalPointIndex);
            const isNegative = whole.indexOf("-") !== -1;
            const remaining = _number.substring(decimalPointIndex + 1, _number.length);
            const nthPlace = Math.pow(10, remaining.length);
            return isNegative ? new Fraction(Number(whole)).subtract(new Fraction(Number(remaining), nthPlace)) : new Fraction(Number(whole)).add(new Fraction(Number(remaining), nthPlace));
        } else return new Fraction(Number(number));
    }
}
module.exports = Fraction;

},{}],"5cUXS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _data;
    render(data) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderErrorMessage();
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    update(data) {
        this._data = data;
        const newMarkup = this._generateMarkup();
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll("*"));
        const curElements = Array.from(this._parentElement.querySelectorAll("*"));
        newElements.forEach((newEl, i)=>{
            const curEl = curElements[i];
            // console.log(curEl, newEl.isEqualNode(curEl));
            // Updates changed TEXT
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== "") // console.log('💥', newEl.firstChild.nodeValue.trim());
            curEl.textContent = newEl.textContent;
            // Updates changed ATTRIBUTES
            if (!newEl.isEqualNode(curEl)) Array.from(newEl.attributes).forEach((attr)=>curEl.setAttribute(attr.name, attr.value));
        });
    }
    _clear() {
        this._parentElement.innerHTML = "";
    }
    renderErrorMessage(message = this._errorMessage) {
        const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderMessage(message = this._message) {
        const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${(0, _iconsSvgDefault.default)}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    showSpinner() {
        const markup = `
      <div class="spinner">
        <svg>
          <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
        </svg>
      </div>  
      `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
}
exports.default = View;

},{"../../img/icons.svg":"cMpiy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cSbZE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class ResultsView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".results");
    _errorMessage = 'No recipe matches , please try again! NOTE: Click on "Search Keywords" button to know the recipes that you can search for :)';
    _generateMarkup() {
        return this._data.map(this._generateMarkupPreview).join("");
    }
    _generateMarkupPreview(result) {
        const id = window.location.hash.slice(1);
        return `
      <li class="preview">
        <a class="preview__link ${result.id === id ? "preview__link--active" : ""}" href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" alt="${result.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
            <div class="preview__user-generated ${result.key ? "" : "hidden"}" title="Your Own Recipe">
              <svg>
                <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `;
    }
}
exports.default = new ResultsView();

},{"./View":"5cUXS","../../img/icons.svg":"cMpiy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9OQAM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class SearchView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".search");
    _errorMessage = "You must enter a recipe name first to search for it, please try again!!";
    getQuery() {
        const query = this._parentElement.querySelector(".search__field").value;
        this.#clear();
        return query;
    }
    #clear() {
        this._parentElement.querySelector(".search__field").value = "";
    }
    addHandlerSearch(handler) {
        this._parentElement.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new SearchView();

},{"./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6z7bi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class PaginationView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".pagination");
    _generateMarkup() {
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        if (curPage === 1 && numPages > 1) return `
      <button class="btn--inline-prime">
        <span>Page ${curPage}</span>
      </button>
      <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
          <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
        </svg>
      </button>
      `;
        if (curPage === numPages && numPages > 1) return `
      
      <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
      </button>
      <button class="btn--inline-prime">
        <span>Page ${curPage}</span>
      </button>
      `;
        if (curPage < numPages) return `
        <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
        <button class="btn--inline-prime">
          <span>Page ${curPage}</span>
        </button>
        <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
        if (Array.isArray(this._data) && this._data.length === 0) return `
      <button class="btn--inline-prime">
        <span>Page ${curPage}</span>
      </button>
    `;
        return "";
    }
    addHandlerPagination(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--inline");
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }
}
exports.default = new PaginationView();

},{"../../img/icons.svg":"cMpiy","./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d9IvG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class BookmarkView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".bookmarks__list");
    _Bookmarks = document.querySelector(".btn--bookmark");
    _errorMessage = "No bookmarks yet. Find a nice recipe and bookmark it :)";
    _generateMarkup() {
        return this._data.map(this._generateMarkupPreview).join("");
    }
    addHandlerRender(handler) {
        window.addEventListener("load", handler);
    }
    _generateMarkupPreview(result) {
        const id = window.location.hash.slice(1);
        return `
      <li class="preview">
        <a class="preview__link ${result.id === id ? "preview__link--active" : ""}" href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" alt="${result.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
            <div class="preview__user-generated ${result.key ? "" : "hidden"}" title="Your Own Recipe">
              <svg>
                <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `;
    }
    removeButtonClearBookmarks() {
        this._Bookmarks.classList.remove("hidden");
    }
    addButtonClearBookmarks() {
        this._Bookmarks.classList.add("hidden");
    }
    addHandlerDeleteBookmarks(handler) {
        this._Bookmarks.addEventListener("click", handler);
    }
}
exports.default = new BookmarkView();

},{"./View":"5cUXS","../../img/icons.svg":"cMpiy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i6DNj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class addRecipeView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".upload");
    _overlay = document.querySelector(".overlay");
    _window = document.querySelector(".add-recipe-window");
    _btnOpen = document.querySelector(".nav__btn--add-recipe");
    _btnClose = document.querySelector(".btn--close-modal");
    _errorMessage = "Error adding the recipe , Please try again !!";
    _message = "Congratulations! Adding recipe has been completed successfully! :)";
    _counter = 0;
    toggleAddRecipe() {
        this._overlay.classList.toggle("hidden");
        this._window.classList.toggle("hidden");
        this._counter++;
        if (this._counter % 2 === 0) this.render(this._generateMarkup);
    }
    addHandlerAddRecipe() {
        this._btnOpen.addEventListener("click", this.toggleAddRecipe.bind(this));
        this._btnClose.addEventListener("click", this.toggleAddRecipe.bind(this));
        this._overlay.addEventListener("click", this.toggleAddRecipe.bind(this));
    }
    addHandlerUpload(handler) {
        this._parentElement.addEventListener("submit", function(e) {
            e.preventDefault();
            const dataArr = [
                ...new FormData(this)
            ];
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
exports.default = new addRecipeView();

},{"./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6PNHp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class AllRecipes extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".all-recipe");
    _btnOpen = document.querySelector(".nav__btn--all-recipes");
    _btnClose = document.querySelector(".btn--all-close-modal");
    _btnCloseForm = document.querySelector(".all-recipe__btn");
    _overlay = document.querySelector(".overlay-all");
    _window = document.querySelector(".all-recipe-window");
    toggleAllRecipe() {
        this._overlay.classList.toggle("hidden");
        this._window.classList.toggle("hidden");
    }
    addHandlerAllRecipe(handler) {
        this._btnOpen.addEventListener("click", this.toggleAllRecipe.bind(this));
        this._btnClose.addEventListener("click", this.toggleAllRecipe.bind(this));
        this._overlay.addEventListener("click", this.toggleAllRecipe.bind(this));
        this._btnCloseForm.addEventListener("click", function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new AllRecipes();

},{"./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aD7Zm","aenu9"], "aenu9", "parcelRequire88b7")

//# sourceMappingURL=index.e37f48ea.js.map
