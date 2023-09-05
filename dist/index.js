"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Ubuntu&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*, *::before, *::after {
  box-sizing: border-box;
}

:root {
  --lightwhite: rgb(255,255,255, 75%);
  --floralwhite: floralwhite;
  --nightmode: linear-gradient(rgb(0, 0, 0), rgb(17, 17, 0), rgb(51, 34, 0));
  --daymode: linear-gradient(rgb(0, 153, 255), rgb(0, 102, 153), rgb(0, 51, 102));
}

* {
  margin: 0;
  padding: 0;
}

body {
  height: 100hv;
  width: 100%;
  font-family: 'Ubuntu', sans-serif;
  color: floralwhite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--floralwhite);
  text-align: center;
}

.logo {
  margin-top: 20px;
  font-size: 48px;
}

.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 40px;
  margin: 20px 0;
}

.search-container.active {
  border-color: #900;
  background-color: #fdd;
  animation: shake 0.5s ease-in-out;
  animation-fill-mode: both;
}


#search {
  background-color: var(--floralwhite);
  appearance: none;
  outline: none;
  width: 280px;
  height: 40px;
  border: none;
  border-radius: 3px;
  padding: 5px;
  font-size: 18px;
}

.submit {
  background-color: var(--floralwhite);
  border-radius: 3px;
  width: 35px;
  height: 40px;
  border: none;
  margin: -5px;
  cursor: pointer;
}

.units {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.us-units,
.metric-units {
  background-color: var(--floralwhite);
  color: #444;
  border: none;
  font-size: 18px;
  padding: 5px 10px;
  margin: 0 10px;
  border-radius: 3px;
  cursor: pointer;
}


.current-weather {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
}

.location {
  width: 100%;
  margin-top: 10px;
  font-size: 32px;
}

.time {
  color: var(--lightwhite);
}

.current-temp {
  font-size: 78px;
  margin: 15px 0;
}

.text {
  font-size: 24px;
}

.feels-like {
  font-size: 20px;
  color: var(--lightwhite);
}

.weather-details {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 75px);
  margin: 10px 0;
}

.weather-details div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.weather-details div:last-child {
  font-size: 20px;
  color: var(--floralwhite);
}

.weather-details div:first-child {
  padding-bottom: 15px;
  font-size: 16px;
  color: var(--lightwhite);
}

#moon-phase {
  font-size: 32px;
  margin-top: -12px;
}

.forecast > div {
  border-bottom: 2px solid var(--lightWhite);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  gap: 5px;
  text-align: center;
  margin-bottom: 10px;
  font-size: 20px;
}

.forecast > div > div {
  padding-bottom: 10px;
}

.forecast > div > div:first-child {
  grid-row: 1/3;
  grid-column: 1/2;
  align-self: center;
}

.forecast > div > div:last-child {
  grid-row: 1/3;
  grid-column: 3/4;
  align-self: center;
  font-size: 36px;
}

.forecast > div:last-child {
  border: none;
}

.forecast {
  width: 100%;
  padding: 25px;
}

.footer {
  width: 100%;
  font-size: 14px;
  color: var(--lightwhite);
  margin: 25px 0;
}

.footer div {
  display: inline;
}

.footer a {
  color: var(--floralwhite);
  text-decoration: none;
  cursor: pointer
}

.low-uv {
  background-color: green;
}

.mid-uv {
  background-color: orange;
}

.high-uv {
  background-color: red;
}

.very-high-uv {
  background-color: darkred;
}


.low-uv,
.mid-uv,
.high-uv,
.very-high-uv {
  border-radius: 50%;
  width: 35px;
  padding: 5px;
  margin-top: -8px;
}

.loading-spinner {
  visibility: hidden;
  position: fixed;
  top: 40%;
  border: 25px solid rgba(255, 255, 255, 0.25);
  border-top: 25px solid var(--floralwhite);
  border-radius: 50%;
  width: 200px; 
  height: 200px;
  animation: spin 0.5s linear infinite;
}

.loading-spinner.active {
  visibility: visible;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-10px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(10px);
  }
}`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n:root {\n  --lightwhite: rgb(255,255,255, 75%);\n  --floralwhite: floralwhite;\n  --nightmode: linear-gradient(rgb(0, 0, 0), rgb(17, 17, 0), rgb(51, 34, 0));\n  --daymode: linear-gradient(rgb(0, 153, 255), rgb(0, 102, 153), rgb(0, 51, 102));\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  height: 100hv;\n  width: 100%;\n  font-family: 'Ubuntu', sans-serif;\n  color: floralwhite;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: var(--floralwhite);\n  text-align: center;\n}\n\n.logo {\n  margin-top: 20px;\n  font-size: 48px;\n}\n\n.search-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 280px;\n  height: 40px;\n  margin: 20px 0;\n}\n\n.search-container.active {\n  border-color: #900;\n  background-color: #fdd;\n  animation: shake 0.5s ease-in-out;\n  animation-fill-mode: both;\n}\n\n\n#search {\n  background-color: var(--floralwhite);\n  appearance: none;\n  outline: none;\n  width: 280px;\n  height: 40px;\n  border: none;\n  border-radius: 3px;\n  padding: 5px;\n  font-size: 18px;\n}\n\n.submit {\n  background-color: var(--floralwhite);\n  border-radius: 3px;\n  width: 35px;\n  height: 40px;\n  border: none;\n  margin: -5px;\n  cursor: pointer;\n}\n\n.units {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.us-units,\n.metric-units {\n  background-color: var(--floralwhite);\n  color: #444;\n  border: none;\n  font-size: 18px;\n  padding: 5px 10px;\n  margin: 0 10px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\n\n.current-weather {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 15px 0;\n}\n\n.location {\n  width: 100%;\n  margin-top: 10px;\n  font-size: 32px;\n}\n\n.time {\n  color: var(--lightwhite);\n}\n\n.current-temp {\n  font-size: 78px;\n  margin: 15px 0;\n}\n\n.text {\n  font-size: 24px;\n}\n\n.feels-like {\n  font-size: 20px;\n  color: var(--lightwhite);\n}\n\n.weather-details {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 75px);\n  margin: 10px 0;\n}\n\n.weather-details div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.weather-details div:last-child {\n  font-size: 20px;\n  color: var(--floralwhite);\n}\n\n.weather-details div:first-child {\n  padding-bottom: 15px;\n  font-size: 16px;\n  color: var(--lightwhite);\n}\n\n#moon-phase {\n  font-size: 32px;\n  margin-top: -12px;\n}\n\n.forecast > div {\n  border-bottom: 2px solid var(--lightWhite);\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  justify-items: center;\n  gap: 5px;\n  text-align: center;\n  margin-bottom: 10px;\n  font-size: 20px;\n}\n\n.forecast > div > div {\n  padding-bottom: 10px;\n}\n\n.forecast > div > div:first-child {\n  grid-row: 1/3;\n  grid-column: 1/2;\n  align-self: center;\n}\n\n.forecast > div > div:last-child {\n  grid-row: 1/3;\n  grid-column: 3/4;\n  align-self: center;\n  font-size: 36px;\n}\n\n.forecast > div:last-child {\n  border: none;\n}\n\n.forecast {\n  width: 100%;\n  padding: 25px;\n}\n\n.footer {\n  width: 100%;\n  font-size: 14px;\n  color: var(--lightwhite);\n  margin: 25px 0;\n}\n\n.footer div {\n  display: inline;\n}\n\n.footer a {\n  color: var(--floralwhite);\n  text-decoration: none;\n  cursor: pointer\n}\n\n.low-uv {\n  background-color: green;\n}\n\n.mid-uv {\n  background-color: orange;\n}\n\n.high-uv {\n  background-color: red;\n}\n\n.very-high-uv {\n  background-color: darkred;\n}\n\n\n.low-uv,\n.mid-uv,\n.high-uv,\n.very-high-uv {\n  border-radius: 50%;\n  width: 35px;\n  padding: 5px;\n  margin-top: -8px;\n}\n\n.loading-spinner {\n  visibility: hidden;\n  position: fixed;\n  top: 40%;\n  border: 25px solid rgba(255, 255, 255, 0.25);\n  border-top: 25px solid var(--floralwhite);\n  border-radius: 50%;\n  width: 200px; \n  height: 200px;\n  animation: spin 0.5s linear infinite;\n}\n\n.loading-spinner.active {\n  visibility: visible;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n@keyframes shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  10%, 30%, 50%, 70%, 90% {\n    transform: translateX(-10px);\n  }\n  20%, 40%, 60%, 80% {\n    transform: translateX(10px);\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearCachedWeatherData: () => (/* binding */ clearCachedWeatherData),
/* harmony export */   fetchWeatherData: () => (/* binding */ fetchWeatherData)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");

let weatherData = null;

async function fetchWeatherData(currentLocation) {
  if (!weatherData || weatherData.location !== currentLocation) {
    try {
      _dom_js__WEBPACK_IMPORTED_MODULE_0__.searchContainerDiv.classList.remove('active');
      _dom_js__WEBPACK_IMPORTED_MODULE_0__.loadingSpinner.classList.add('active');
      
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=449114a6155e494f9e6101536232908&q=${currentLocation}&days=3`, { mode: 'cors' });
      _dom_js__WEBPACK_IMPORTED_MODULE_0__.loadingSpinner.classList.remove('active');
      const fetchedData = await response.json();
      weatherData = processWeatherData(fetchedData, currentLocation);
    } catch (error) {
      _dom_js__WEBPACK_IMPORTED_MODULE_0__.searchContainerDiv.classList.add('active');
      _dom_js__WEBPACK_IMPORTED_MODULE_0__.loadingSpinner.classList.remove('active');

      throw error;
    }
  }
  return weatherData;
}

function clearCachedWeatherData() {
  weatherData = null;
}

function processWeatherData(data) {
  const { current, forecast, location } = data;
  const [forecast1, forecast2, forecast3] = forecast.forecastday;
  const [day1, day2, day3] = [forecast1, forecast2, forecast3].map((forecast) => forecast.day);
  const [astro1, astro2, astro3] = [forecast1, forecast2, forecast3].map((forecast) => forecast.astro);
  
  return {
    current,
    forecast,
    location,
    forecast1,
    forecast2,
    forecast3,
    day1,
    day2,
    day3,
    astro1,
    astro2,
    astro3,
  };
}



/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContent: () => (/* binding */ createContent),
/* harmony export */   loadingSpinner: () => (/* binding */ loadingSpinner),
/* harmony export */   searchContainerDiv: () => (/* binding */ searchContainerDiv)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.js */ "./src/style.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");




let units = 'Metric';
let currentLocation = 'Tokyo';

const logoDiv = document.createElement('div');
logoDiv.className = 'logo';
logoDiv.textContent = 'WeatherApp';

const searchContainerDiv = document.createElement('div');
searchContainerDiv.className = 'search-container';

const searchInput = document.createElement('input');

searchInput.type = 'search';
searchInput.id = 'search';
searchInput.placeholder = 'Search...';

const searchButton = document.createElement('button');
searchButton.className = 'submit';
searchButton.textContent = '🔍';

searchContainerDiv.appendChild(searchInput);
searchContainerDiv.appendChild(searchButton);

const unitsDiv = document.createElement('div');
unitsDiv.className = 'units';

const metricUnitsButton = document.createElement('button');
metricUnitsButton.className = 'metric-units';
metricUnitsButton.textContent = '°C, m/s';

const usUnitsButton = document.createElement('button');
usUnitsButton.className = 'us-units';
usUnitsButton.textContent = '°F, mph';

unitsDiv.appendChild(metricUnitsButton);
unitsDiv.appendChild(usUnitsButton);

const currentWeatherDiv = document.createElement('div');
currentWeatherDiv.className = 'current-weather';

const locationDiv = document.createElement('div');
locationDiv.className = 'location';

const timeDiv = document.createElement('div');
timeDiv.className = 'time';

const currentTempDiv = document.createElement('div');
currentTempDiv.className = 'current-temp';

const textDiv = document.createElement('div');
textDiv.className = 'text';

const feelsLikeDiv = document.createElement('div');
feelsLikeDiv.className = 'feels-like';



currentWeatherDiv.appendChild(locationDiv);
currentWeatherDiv.appendChild(timeDiv);
currentWeatherDiv.appendChild(currentTempDiv);
currentWeatherDiv.appendChild(textDiv);
currentWeatherDiv.appendChild(feelsLikeDiv);

const weatherDetailsDiv = document.createElement('div');

weatherDetailsDiv.className = 'weather-details';

const windDiv = document.createElement('div');
windDiv.className = 'wind';
const windTitle = document.createElement('div');
windTitle.textContent = 'Wind';
const windValue = document.createElement('div');
windDiv.appendChild(windTitle);
windDiv.appendChild(windValue);

const humidityDiv = document.createElement('div');
const humidityTitle = document.createElement('div');
humidityTitle.textContent = 'Humidity';
const humidityValue = document.createElement('div');

humidityDiv.appendChild(humidityTitle);
humidityDiv.appendChild(humidityValue);

const uvIndexDiv = document.createElement('div');
const uvIndexTitle = document.createElement('div');
uvIndexTitle.textContent = 'UV index';
const uvIndexValue = document.createElement('div');

uvIndexDiv.appendChild(uvIndexTitle);
uvIndexDiv.appendChild(uvIndexValue);

const visibilityDiv = document.createElement('div');
const visibilityTitle = document.createElement('div');
visibilityTitle.textContent = 'Visibility';
const visibilityValue = document.createElement('div');
visibilityDiv.appendChild(visibilityTitle);
visibilityDiv.appendChild(visibilityValue);

const cloudinessDiv = document.createElement('div');
const cloudinessTitle = document.createElement('div');
cloudinessTitle.textContent = 'Cloudiness';
const cloudinessValue = document.createElement('div');
cloudinessDiv.appendChild(cloudinessTitle);
cloudinessDiv.appendChild(cloudinessValue);

const chanceOfRainDiv = document.createElement('div');
const chanceOfRainTitle = document.createElement('div');
chanceOfRainTitle.textContent = 'Chance of rain';
const chanceOfRainValue = document.createElement('div');
chanceOfRainDiv.appendChild(chanceOfRainTitle);
chanceOfRainDiv.appendChild(chanceOfRainValue);

const sunriseDiv = document.createElement('div');
const sunriseTitle = document.createElement('div');
sunriseTitle.textContent = 'Sunrise';
const sunriseValue = document.createElement('div');
sunriseDiv.appendChild(sunriseTitle);
sunriseDiv.appendChild(sunriseValue);

const sunsetDiv = document.createElement('div');
const sunsetTitle = document.createElement('div');
sunsetTitle.textContent = 'Sunset';
const sunsetValue = document.createElement('div');
sunsetDiv.appendChild(sunsetTitle);
sunsetDiv.appendChild(sunsetValue);

const moonPhaseDiv = document.createElement('div');
const moonPhaseTitle = document.createElement('div');
moonPhaseTitle.textContent = 'Moon phase';
const moonPhaseValue = document.createElement('div');
moonPhaseValue.id = 'moon-phase';
moonPhaseDiv.appendChild(moonPhaseTitle);
moonPhaseDiv.appendChild(moonPhaseValue);

weatherDetailsDiv.appendChild(windDiv);
weatherDetailsDiv.appendChild(humidityDiv);
weatherDetailsDiv.appendChild(uvIndexDiv);
weatherDetailsDiv.appendChild(visibilityDiv);
weatherDetailsDiv.appendChild(cloudinessDiv);
weatherDetailsDiv.appendChild(chanceOfRainDiv);
weatherDetailsDiv.appendChild(moonPhaseDiv);
weatherDetailsDiv.appendChild(sunriseDiv);
weatherDetailsDiv.appendChild(sunsetDiv);

document.body.appendChild(weatherDetailsDiv);

const forecastDiv = document.createElement('div');
forecastDiv.className = 'forecast';

const day1Div = document.createElement('div');

const day1NameDiv = document.createElement('div');

const day1MaxTempDiv = document.createElement('div');

const day1MinTempDiv = document.createElement('div');

const day1IconDiv = document.createElement('div');

day1Div.appendChild(day1NameDiv);
day1Div.appendChild(day1MaxTempDiv);
day1Div.appendChild(day1MinTempDiv);
day1Div.appendChild(day1IconDiv);

const day2Div = document.createElement('div');

const day2NameDiv = document.createElement('div');

const day2MaxTempDiv = document.createElement('div');

const day2MinTempDiv = document.createElement('div');

const day2IconDiv = document.createElement('div');

day2Div.appendChild(day2NameDiv);
day2Div.appendChild(day2MaxTempDiv);
day2Div.appendChild(day2MinTempDiv);
day2Div.appendChild(day2IconDiv);

const day3Div = document.createElement('div');

const day3NameDiv = document.createElement('div');

const day3MaxTempDiv = document.createElement('div');

const day3MinTempDiv = document.createElement('div');

const day3IconDiv = document.createElement('div');

day3Div.appendChild(day3NameDiv);
day3Div.appendChild(day3MaxTempDiv);
day3Div.appendChild(day3MinTempDiv);
day3Div.appendChild(day3IconDiv);

forecastDiv.appendChild(day1Div);
forecastDiv.appendChild(day2Div);
forecastDiv.appendChild(day3Div);

const footerDiv = document.createElement('div');
footerDiv.className = 'footer';

const usernameLink = document.createElement('a');
usernameLink.href = 'https://github.com/laythalqadhi/';
usernameLink.textContent = 'LaythAlqadhi';

const sourceCodeLink = document.createElement('a');
sourceCodeLink.href = 'https://github.com/Username/weather-app';
sourceCodeLink.textContent = 'Source code';

const separatorDiv = document.createElement('div');
separatorDiv.textContent = ' | ';

footerDiv.textContent = 'Built by ';
footerDiv.appendChild(usernameLink);
footerDiv.appendChild(separatorDiv);
footerDiv.appendChild(sourceCodeLink);

const loadingSpinner = document.createElement('div');
loadingSpinner.className = 'loading-spinner';

document.body.appendChild(logoDiv);
document.body.appendChild(searchContainerDiv);
document.body.appendChild(unitsDiv);
document.body.appendChild(currentWeatherDiv);
document.body.appendChild(weatherDetailsDiv);
document.body.appendChild(forecastDiv);
document.body.appendChild(footerDiv);
document.body.appendChild(loadingSpinner);

async function createContent(givenLocation) {
  if (givenLocation) {
    currentLocation = givenLocation;
  }

  let weather = await (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherData)(currentLocation);
  
  const currentDayCode = weather.current.condition.code;
  const day1Code = weather.day1.condition.code;
  const day2Code = weather.day2.condition.code;
  const day3Code = weather.day3.condition.code;

  (0,_style_js__WEBPACK_IMPORTED_MODULE_1__.nightMode)(weather.astro1.sunset, weather.astro1.sunrise);

  appendData(locationDiv, `${weather.location.name}, ${weather.location.country}`);
  appendData(textDiv, weather.current.condition.text);
  appendData(timeDiv, weather.location.localtime);
  appendData(currentTempDiv, `${(0,_style_js__WEBPACK_IMPORTED_MODULE_1__.getIcon)(currentDayCode)} ${weather.current.temp_c}°C`);
  appendData(feelsLikeDiv, `${weather.current.feelslike_c}°C`);
  appendData(windValue, `${weather.current.wind_kph}kph`);
  appendData(humidityValue, `${weather.current.humidity}%`);
  appendData(uvIndexValue, weather.current.uv);
  appendData(visibilityValue, `${weather.current.vis_km}km`);
  appendData(cloudinessValue, `${weather.current.cloud}%`);
  appendData(chanceOfRainValue, `${weather.current.precip_in}%`);
  appendData(sunriseValue, weather.astro1.sunrise);
  appendData(sunsetValue, weather.astro1.sunset);
  appendData(moonPhaseValue, (0,_style_js__WEBPACK_IMPORTED_MODULE_1__.getMoonIcon)(weather.astro1.moon_phase));
  appendData(day1MaxTempDiv, `${weather.day1.maxtemp_c}°C`);
  appendData(day2MaxTempDiv, `${weather.day2.maxtemp_c}°C`);
  appendData(day3MaxTempDiv, `${weather.day3.maxtemp_c}°C`);
  appendData(day1MinTempDiv, `${weather.day1.mintemp_c}°C`);
  appendData(day2MinTempDiv, `${weather.day2.mintemp_c}°C`);
  appendData(day3MinTempDiv, `${weather.day3.mintemp_c}°C`);
  appendData(day1NameDiv, getDayNameFromDate(weather.forecast1.date));
  appendData(day2NameDiv, getDayNameFromDate(weather.forecast2.date));
  appendData(day3NameDiv, getDayNameFromDate(weather.forecast3.date));
  appendData(day1IconDiv, (0,_style_js__WEBPACK_IMPORTED_MODULE_1__.getIcon)(day1Code));
  appendData(day2IconDiv, (0,_style_js__WEBPACK_IMPORTED_MODULE_1__.getIcon)(day2Code));
  appendData(day3IconDiv, (0,_style_js__WEBPACK_IMPORTED_MODULE_1__.getIcon)(day3Code));

  if (units === 'US') {
    appendData(currentTempDiv, `${(0,_style_js__WEBPACK_IMPORTED_MODULE_1__.getIcon)(day1Code, (0,_style_js__WEBPACK_IMPORTED_MODULE_1__.getMoonIcon)(weather.astro1.moon_phase))} ${weather.current.temp_f}°F`);
    appendData(feelsLikeDiv, `${weather.current.feelslike_f}°F`);
    appendData(windValue, `${weather.current.wind_mph}mph`);
    appendData(visibilityValue, `${weather.current.vis_miles}miles`);
    appendData(day1MaxTempDiv, `${weather.day1.maxtemp_f}°F`);
    appendData(day2MaxTempDiv, `${weather.day2.maxtemp_f}°F`);
    appendData(day3MaxTempDiv, `${weather.day3.maxtemp_f}°F`);
    appendData(day1MinTempDiv, `${weather.day1.mintemp_f}°F`);
    appendData(day2MinTempDiv, `${weather.day2.mintemp_f}°F`);
    appendData(day3MinTempDiv, `${weather.day3.mintemp_f}°F`);
  }

  if (uvIndexValue.textContent < 3) {
    uvIndexValue.classList = 'low-uv';
  } else if (uvIndexValue.textContent < 6) {
    uvIndexValue.classList = 'mid-uv';
  } else if (uvIndexValue.textContent < 8) {
    uvIndexValue.classList = 'high-uv';
  } else if (uvIndexValue.textContent >= 8) {
    uvIndexValue.classList = 'very-high-uv';
  }
}
createContent();

searchButton.addEventListener('click', () => {
  (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.clearCachedWeatherData)();
  createContent(searchInput.value);
  searchInput.value = '';
});

searchInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    searchButton.click();
  }
});

usUnitsButton.addEventListener('click', () => {
  units = 'US';
  createContent();
});

metricUnitsButton.addEventListener('click', () => {
  units = 'Metric';
  createContent();
});

function appendData(element, dataLocation) {
  let data = dataLocation;
  element.textContent = data;
}

function getDayNameFromDate(date) {
  const options = { weekday: 'long' };

  const dayName = new Intl.DateTimeFormat('en-US', options).format(new Date(date));
  return dayName;
}



/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getIcon: () => (/* binding */ getIcon),
/* harmony export */   getMoonIcon: () => (/* binding */ getMoonIcon),
/* harmony export */   nightMode: () => (/* binding */ nightMode)
/* harmony export */ });
const iconMapping = {
    1000: "☀️",
    1003: "🌤️",
    1006: "☁️",
    1009: "🌫️",
    1030: "🌫️",
    1063: "🌦️",
    1066: "🌨️",
    1069: "🌧️",
    1072: "🌧️",
    1087: "⛈️",
    1114: "🌨️",
    1117: "🌨️",
    1135: "🌫️",
    1147: "🌫️",
    1150: "🌧️",
    1153: "🌧️",
    1168: "🌧️",
    1171: "🌧️",
    1180: "🌧️",
    1183: "🌧️",
    1186: "🌧️",
    1189: "🌧️",
    1192: "🌧️",
    1195: "🌧️",
    1198: "🌧️",
    1201: "🌧️",
    1204: "🌨️",
    1207: "🌨️",
    1210: "🌨️",
    1213: "🌨️",
    1216: "🌨️",
    1219: "🌨️",
    1222: "🌨️",
    1225: "🌨️",
    1237: "🌨️",
    1240: "🌧️",
    1243: "🌧️",
    1246: "🌧️",
    1249: "🌨️",
    1252: "🌨️",
    1255: "🌨️",
    1258: "🌨️",
    1261: "🌨️",
    1264: "🌨️",
    1273: "⛈️",
    1276: "⛈️",
    1279: "🌨️",
    1282: "🌨️",
};

const moonIcons = {
  'Waning Gibbous': '🌖',
  'Waxing Gibbous': '🌔',
  'Full Moon': '🌕',
  'Last Quarter': '🌗',
  'First Quarter': '🌓',
  'New Moon': '🌑',
  'Waning Crescent': '🌘',
  'Waxing Crescent': '🌒',
};

function getMoonIcon(type) {
  return moonIcons[type] || '🌕';
}

function getIcon(code) {
  return iconMapping[code];
}

function nightMode(sunsetTime, sunriseTime) {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedHours = hours % 12 || 12;
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const currentTime = `${String(formattedHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${ampm}`;

  const parseTime = (timeStr) => {
    const match = timeStr.match(/(\d+):(\d+) (AM|PM)/i);
    if (match) {
      let hours = parseInt(match[1]);
      const minutes = parseInt(match[2]);
      const ampm = match[3].toUpperCase();
      if (ampm === 'PM' && hours !== 12) {
        hours += 12;
      } else if (ampm === 'AM' && hours === 12) {
        hours = 0;
      }
      return { hours, minutes };
    }
    return null;
  };

  const sunsetParts = parseTime(sunsetTime);
  const sunriseParts = parseTime(sunriseTime);

  if (sunsetParts && sunriseParts) {
    const { hours: sunsetHour, minutes: sunsetMinute } = sunsetParts;
    const { hours: sunriseHour, minutes: sunriseMinute } = sunriseParts;

    const isNight =
      (hours > sunsetHour || (hours === sunsetHour && minutes >= sunsetMinute)) ||
      (hours < sunriseHour || (hours === sunriseHour && minutes < sunriseMinute));
    iconMapping[1000] = isNight ? '🌕' : '☀️';
    document.body.style.background = isNight ? 'var(--nightmode)' : 'var(--daymode)';
  }
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/dom.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG9IQUFvSDtBQUNwSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FB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QUFjO0FBQ3BCO0FBQ0E7QUFDQSxNQUFNO0FBQ04sTUFBTSx1REFBa0I7QUFDeEIsTUFBTSxtREFBYzs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLDhCQUE4QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNtQjtBQUtDO0FBR0E7O0FBRXBCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNB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MkNBQTJDO0FBQ3ZELFlBQVksNkNBQTZDOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVVidW50dSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdCB7XG4gIC0tbGlnaHR3aGl0ZTogcmdiKDI1NSwyNTUsMjU1LCA3NSUpO1xuICAtLWZsb3JhbHdoaXRlOiBmbG9yYWx3aGl0ZTtcbiAgLS1uaWdodG1vZGU6IGxpbmVhci1ncmFkaWVudChyZ2IoMCwgMCwgMCksIHJnYigxNywgMTcsIDApLCByZ2IoNTEsIDM0LCAwKSk7XG4gIC0tZGF5bW9kZTogbGluZWFyLWdyYWRpZW50KHJnYigwLCAxNTMsIDI1NSksIHJnYigwLCAxMDIsIDE1MyksIHJnYigwLCA1MSwgMTAyKSk7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMGh2O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogZmxvcmFsd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tZmxvcmFsd2hpdGUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiA0OHB4O1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMjgwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi5zZWFyY2gtY29udGFpbmVyLmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogIzkwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZDtcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG5cbiNzZWFyY2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mbG9yYWx3aGl0ZSk7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiAyODBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zdWJtaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mbG9yYWx3aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IC01cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnVuaXRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udXMtdW5pdHMsXG4ubWV0cmljLXVuaXRzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmxvcmFsd2hpdGUpO1xuICBjb2xvcjogIzQ0NDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBtYXJnaW46IDAgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLmN1cnJlbnQtd2VhdGhlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDE1cHggMDtcbn1cblxuLmxvY2F0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLnRpbWUge1xuICBjb2xvcjogdmFyKC0tbGlnaHR3aGl0ZSk7XG59XG5cbi5jdXJyZW50LXRlbXAge1xuICBmb250LXNpemU6IDc4cHg7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmZlZWxzLWxpa2Uge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS1saWdodHdoaXRlKTtcbn1cblxuLndlYXRoZXItZGV0YWlscyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCA3NXB4KTtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi53ZWF0aGVyLWRldGFpbHMgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLndlYXRoZXItZGV0YWlscyBkaXY6bGFzdC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHZhcigtLWZsb3JhbHdoaXRlKTtcbn1cblxuLndlYXRoZXItZGV0YWlscyBkaXY6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0tbGlnaHR3aGl0ZSk7XG59XG5cbiNtb29uLXBoYXNlIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBtYXJnaW4tdG9wOiAtMTJweDtcbn1cblxuLmZvcmVjYXN0ID4gZGl2IHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWxpZ2h0V2hpdGUpO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmZvcmVjYXN0ID4gZGl2ID4gZGl2IHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5mb3JlY2FzdCA+IGRpdiA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gIGdyaWQtcm93OiAxLzM7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmZvcmVjYXN0ID4gZGl2ID4gZGl2Omxhc3QtY2hpbGQge1xuICBncmlkLXJvdzogMS8zO1xuICBncmlkLWNvbHVtbjogMy80O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cblxuLmZvcmVjYXN0ID4gZGl2Omxhc3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5mb3JlY2FzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyNXB4O1xufVxuXG4uZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWxpZ2h0d2hpdGUpO1xuICBtYXJnaW46IDI1cHggMDtcbn1cblxuLmZvb3RlciBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5mb290ZXIgYSB7XG4gIGNvbG9yOiB2YXIoLS1mbG9yYWx3aGl0ZSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyXG59XG5cbi5sb3ctdXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLm1pZC11diB7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuLmhpZ2gtdXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi52ZXJ5LWhpZ2gtdXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xufVxuXG5cbi5sb3ctdXYsXG4ubWlkLXV2LFxuLmhpZ2gtdXYsXG4udmVyeS1oaWdoLXV2IHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMzVweDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tdG9wOiAtOHB4O1xufVxuXG4ubG9hZGluZy1zcGlubmVyIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNDAlO1xuICBib3JkZXI6IDI1cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgYm9yZGVyLXRvcDogMjVweCBzb2xpZCB2YXIoLS1mbG9yYWx3aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDIwMHB4OyBcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYW5pbWF0aW9uOiBzcGluIDAuNXMgbGluZWFyIGluZmluaXRlO1xufVxuXG4ubG9hZGluZy1zcGlubmVyLmFjdGl2ZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuQGtleWZyYW1lcyBzaGFrZSB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgMTAlLCAzMCUsIDUwJSwgNzAlLCA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7XG4gIH1cbiAgMjAlLCA0MCUsIDYwJSwgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsMEJBQTBCO0VBQzFCLDBFQUEwRTtFQUMxRSwrRUFBK0U7QUFDakY7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxh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XCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVVidW50dSZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tbGlnaHR3aGl0ZTogcmdiKDI1NSwyNTUsMjU1LCA3NSUpO1xcbiAgLS1mbG9yYWx3aGl0ZTogZmxvcmFsd2hpdGU7XFxuICAtLW5pZ2h0bW9kZTogbGluZWFyLWdyYWRpZW50KHJnYigwLCAwLCAwKSwgcmdiKDE3LCAxNywgMCksIHJnYig1MSwgMzQsIDApKTtcXG4gIC0tZGF5bW9kZTogbGluZWFyLWdyYWRpZW50KHJnYigwLCAxNTMsIDI1NSksIHJnYigwLCAxMDIsIDE1MyksIHJnYigwLCA1MSwgMTAyKSk7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMGh2O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogZmxvcmFsd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1mbG9yYWx3aGl0ZSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5sb2dvIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBmb250LXNpemU6IDQ4cHg7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMjgwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIuYWN0aXZlIHtcXG4gIGJvcmRlci1jb2xvcjogIzkwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGQ7XFxuICBhbmltYXRpb246IHNoYWtlIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbn1cXG5cXG5cXG4jc2VhcmNoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZsb3JhbHdoaXRlKTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgd2lkdGg6IDI4MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZsb3JhbHdoaXRlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luOiAtNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udW5pdHMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udXMtdW5pdHMsXFxuLm1ldHJpYy11bml0cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mbG9yYWx3aGl0ZSk7XFxuICBjb2xvcjogIzQ0NDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5jdXJyZW50LXdlYXRoZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDE1cHggMDtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuXFxuLnRpbWUge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0d2hpdGUpO1xcbn1cXG5cXG4uY3VycmVudC10ZW1wIHtcXG4gIGZvbnQtc2l6ZTogNzhweDtcXG4gIG1hcmdpbjogMTVweCAwO1xcbn1cXG5cXG4udGV4dCB7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5mZWVscy1saWtlIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiB2YXIoLS1saWdodHdoaXRlKTtcXG59XFxuXFxuLndlYXRoZXItZGV0YWlscyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgNzVweCk7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuLndlYXRoZXItZGV0YWlscyBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ud2VhdGhlci1kZXRhaWxzIGRpdjpsYXN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiB2YXIoLS1mbG9yYWx3aGl0ZSk7XFxufVxcblxcbi53ZWF0aGVyLWRldGFpbHMgZGl2OmZpcnN0LWNoaWxkIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0d2hpdGUpO1xcbn1cXG5cXG4jbW9vbi1waGFzZSB7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBtYXJnaW4tdG9wOiAtMTJweDtcXG59XFxuXFxuLmZvcmVjYXN0ID4gZGl2IHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1saWdodFdoaXRlKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmZvcmVjYXN0ID4gZGl2ID4gZGl2IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uZm9yZWNhc3QgPiBkaXYgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgZ3JpZC1yb3c6IDEvMztcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdCA+IGRpdiA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gIGdyaWQtcm93OiAxLzM7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbn1cXG5cXG4uZm9yZWNhc3QgPiBkaXY6bGFzdC1jaGlsZCB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDI1cHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogdmFyKC0tbGlnaHR3aGl0ZSk7XFxuICBtYXJnaW46IDI1cHggMDtcXG59XFxuXFxuLmZvb3RlciBkaXYge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcbiAgY29sb3I6IHZhcigtLWZsb3JhbHdoaXRlKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlclxcbn1cXG5cXG4ubG93LXV2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ubWlkLXV2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLmhpZ2gtdXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4udmVyeS1oaWdoLXV2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XFxufVxcblxcblxcbi5sb3ctdXYsXFxuLm1pZC11dixcXG4uaGlnaC11dixcXG4udmVyeS1oaWdoLXV2IHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luLXRvcDogLThweDtcXG59XFxuXFxuLmxvYWRpbmctc3Bpbm5lciB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDQwJTtcXG4gIGJvcmRlcjogMjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xcbiAgYm9yZGVyLXRvcDogMjVweCBzb2xpZCB2YXIoLS1mbG9yYWx3aGl0ZSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMjAwcHg7IFxcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGFuaW1hdGlvbjogc3BpbiAwLjVzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLmxvYWRpbmctc3Bpbm5lci5hY3RpdmUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2hha2Uge1xcbiAgMCUsIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxuICAxMCUsIDMwJSwgNTAlLCA3MCUsIDkwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7XFxuICB9XFxuICAyMCUsIDQwJSwgNjAlLCA4MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBsb2FkaW5nU3Bpbm5lciwgc2VhcmNoQ29udGFpbmVyRGl2IH0gZnJvbSAnLi9kb20uanMnXG5sZXQgd2VhdGhlckRhdGEgPSBudWxsO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGF0YShjdXJyZW50TG9jYXRpb24pIHtcbiAgaWYgKCF3ZWF0aGVyRGF0YSB8fCB3ZWF0aGVyRGF0YS5sb2NhdGlvbiAhPT0gY3VycmVudExvY2F0aW9uKSB7XG4gICAgdHJ5IHtcbiAgICAgIHNlYXJjaENvbnRhaW5lckRpdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGxvYWRpbmdTcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT00NDkxMTRhNjE1NWU0OTRmOWU2MTAxNTM2MjMyOTA4JnE9JHtjdXJyZW50TG9jYXRpb259JmRheXM9M2AsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgbG9hZGluZ1NwaW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBjb25zdCBmZXRjaGVkRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHdlYXRoZXJEYXRhID0gcHJvY2Vzc1dlYXRoZXJEYXRhKGZldGNoZWREYXRhLCBjdXJyZW50TG9jYXRpb24pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZWFyY2hDb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBsb2FkaW5nU3Bpbm5lci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG4gIHJldHVybiB3ZWF0aGVyRGF0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ2FjaGVkV2VhdGhlckRhdGEoKSB7XG4gIHdlYXRoZXJEYXRhID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc1dlYXRoZXJEYXRhKGRhdGEpIHtcbiAgY29uc3QgeyBjdXJyZW50LCBmb3JlY2FzdCwgbG9jYXRpb24gfSA9IGRhdGE7XG4gIGNvbnN0IFtmb3JlY2FzdDEsIGZvcmVjYXN0MiwgZm9yZWNhc3QzXSA9IGZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xuICBjb25zdCBbZGF5MSwgZGF5MiwgZGF5M10gPSBbZm9yZWNhc3QxLCBmb3JlY2FzdDIsIGZvcmVjYXN0M10ubWFwKChmb3JlY2FzdCkgPT4gZm9yZWNhc3QuZGF5KTtcbiAgY29uc3QgW2FzdHJvMSwgYXN0cm8yLCBhc3RybzNdID0gW2ZvcmVjYXN0MSwgZm9yZWNhc3QyLCBmb3JlY2FzdDNdLm1hcCgoZm9yZWNhc3QpID0+IGZvcmVjYXN0LmFzdHJvKTtcbiAgXG4gIHJldHVybiB7XG4gICAgY3VycmVudCxcbiAgICBmb3JlY2FzdCxcbiAgICBsb2NhdGlvbixcbiAgICBmb3JlY2FzdDEsXG4gICAgZm9yZWNhc3QyLFxuICAgIGZvcmVjYXN0MyxcbiAgICBkYXkxLFxuICAgIGRheTIsXG4gICAgZGF5MyxcbiAgICBhc3RybzEsXG4gICAgYXN0cm8yLFxuICAgIGFzdHJvMyxcbiAgfTtcbn1cblxuIiwiaW1wb3J0IHtcbiAgZmV0Y2hXZWF0aGVyRGF0YSxcbiAgY2xlYXJDYWNoZWRXZWF0aGVyRGF0YVxufSBmcm9tICcuL2RhdGEuanMnO1xuaW1wb3J0IHtcbiAgZ2V0SWNvbixcbiAgZ2V0TW9vbkljb24sXG4gIG5pZ2h0TW9kZVxufSBmcm9tICcuL3N0eWxlLmpzJztcbmltcG9ydCB7XG4gICAgU3R5bGVcbn0gZnJvbSAnLi9pbmRleC5jc3MnXG5cbmxldCB1bml0cyA9ICdNZXRyaWMnO1xubGV0IGN1cnJlbnRMb2NhdGlvbiA9ICdUb2t5byc7XG5cbmNvbnN0IGxvZ29EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmxvZ29EaXYuY2xhc3NOYW1lID0gJ2xvZ28nO1xubG9nb0Rpdi50ZXh0Q29udGVudCA9ICdXZWF0aGVyQXBwJztcblxuY29uc3Qgc2VhcmNoQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zZWFyY2hDb250YWluZXJEaXYuY2xhc3NOYW1lID0gJ3NlYXJjaC1jb250YWluZXInO1xuXG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbnNlYXJjaElucHV0LnR5cGUgPSAnc2VhcmNoJztcbnNlYXJjaElucHV0LmlkID0gJ3NlYXJjaCc7XG5zZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9ICdTZWFyY2guLi4nO1xuXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbnNlYXJjaEJ1dHRvbi5jbGFzc05hbWUgPSAnc3VibWl0JztcbnNlYXJjaEJ1dHRvbi50ZXh0Q29udGVudCA9ICfwn5SNJztcblxuc2VhcmNoQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcbnNlYXJjaENvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChzZWFyY2hCdXR0b24pO1xuXG5jb25zdCB1bml0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudW5pdHNEaXYuY2xhc3NOYW1lID0gJ3VuaXRzJztcblxuY29uc3QgbWV0cmljVW5pdHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbm1ldHJpY1VuaXRzQnV0dG9uLmNsYXNzTmFtZSA9ICdtZXRyaWMtdW5pdHMnO1xubWV0cmljVW5pdHNCdXR0b24udGV4dENvbnRlbnQgPSAnwrBDLCBtL3MnO1xuXG5jb25zdCB1c1VuaXRzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG51c1VuaXRzQnV0dG9uLmNsYXNzTmFtZSA9ICd1cy11bml0cyc7XG51c1VuaXRzQnV0dG9uLnRleHRDb250ZW50ID0gJ8KwRiwgbXBoJztcblxudW5pdHNEaXYuYXBwZW5kQ2hpbGQobWV0cmljVW5pdHNCdXR0b24pO1xudW5pdHNEaXYuYXBwZW5kQ2hpbGQodXNVbml0c0J1dHRvbik7XG5cbmNvbnN0IGN1cnJlbnRXZWF0aGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jdXJyZW50V2VhdGhlckRpdi5jbGFzc05hbWUgPSAnY3VycmVudC13ZWF0aGVyJztcblxuY29uc3QgbG9jYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmxvY2F0aW9uRGl2LmNsYXNzTmFtZSA9ICdsb2NhdGlvbic7XG5cbmNvbnN0IHRpbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRpbWVEaXYuY2xhc3NOYW1lID0gJ3RpbWUnO1xuXG5jb25zdCBjdXJyZW50VGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY3VycmVudFRlbXBEaXYuY2xhc3NOYW1lID0gJ2N1cnJlbnQtdGVtcCc7XG5cbmNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRleHREaXYuY2xhc3NOYW1lID0gJ3RleHQnO1xuXG5jb25zdCBmZWVsc0xpa2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmZlZWxzTGlrZURpdi5jbGFzc05hbWUgPSAnZmVlbHMtbGlrZSc7XG5cblxuXG5jdXJyZW50V2VhdGhlckRpdi5hcHBlbmRDaGlsZChsb2NhdGlvbkRpdik7XG5jdXJyZW50V2VhdGhlckRpdi5hcHBlbmRDaGlsZCh0aW1lRGl2KTtcbmN1cnJlbnRXZWF0aGVyRGl2LmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wRGl2KTtcbmN1cnJlbnRXZWF0aGVyRGl2LmFwcGVuZENoaWxkKHRleHREaXYpO1xuY3VycmVudFdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlRGl2KTtcblxuY29uc3Qgd2VhdGhlckRldGFpbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxud2VhdGhlckRldGFpbHNEaXYuY2xhc3NOYW1lID0gJ3dlYXRoZXItZGV0YWlscyc7XG5cbmNvbnN0IHdpbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbndpbmREaXYuY2xhc3NOYW1lID0gJ3dpbmQnO1xuY29uc3Qgd2luZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG53aW5kVGl0bGUudGV4dENvbnRlbnQgPSAnV2luZCc7XG5jb25zdCB3aW5kVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbndpbmREaXYuYXBwZW5kQ2hpbGQod2luZFRpdGxlKTtcbndpbmREaXYuYXBwZW5kQ2hpbGQod2luZFZhbHVlKTtcblxuY29uc3QgaHVtaWRpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGh1bWlkaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmh1bWlkaXR5VGl0bGUudGV4dENvbnRlbnQgPSAnSHVtaWRpdHknO1xuY29uc3QgaHVtaWRpdHlWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5odW1pZGl0eURpdi5hcHBlbmRDaGlsZChodW1pZGl0eVRpdGxlKTtcbmh1bWlkaXR5RGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5VmFsdWUpO1xuXG5jb25zdCB1dkluZGV4RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCB1dkluZGV4VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnV2SW5kZXhUaXRsZS50ZXh0Q29udGVudCA9ICdVViBpbmRleCc7XG5jb25zdCB1dkluZGV4VmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxudXZJbmRleERpdi5hcHBlbmRDaGlsZCh1dkluZGV4VGl0bGUpO1xudXZJbmRleERpdi5hcHBlbmRDaGlsZCh1dkluZGV4VmFsdWUpO1xuXG5jb25zdCB2aXNpYmlsaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCB2aXNpYmlsaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnZpc2liaWxpdHlUaXRsZS50ZXh0Q29udGVudCA9ICdWaXNpYmlsaXR5JztcbmNvbnN0IHZpc2liaWxpdHlWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudmlzaWJpbGl0eURpdi5hcHBlbmRDaGlsZCh2aXNpYmlsaXR5VGl0bGUpO1xudmlzaWJpbGl0eURpdi5hcHBlbmRDaGlsZCh2aXNpYmlsaXR5VmFsdWUpO1xuXG5jb25zdCBjbG91ZGluZXNzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBjbG91ZGluZXNzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNsb3VkaW5lc3NUaXRsZS50ZXh0Q29udGVudCA9ICdDbG91ZGluZXNzJztcbmNvbnN0IGNsb3VkaW5lc3NWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY2xvdWRpbmVzc0Rpdi5hcHBlbmRDaGlsZChjbG91ZGluZXNzVGl0bGUpO1xuY2xvdWRpbmVzc0Rpdi5hcHBlbmRDaGlsZChjbG91ZGluZXNzVmFsdWUpO1xuXG5jb25zdCBjaGFuY2VPZlJhaW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGNoYW5jZU9mUmFpblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jaGFuY2VPZlJhaW5UaXRsZS50ZXh0Q29udGVudCA9ICdDaGFuY2Ugb2YgcmFpbic7XG5jb25zdCBjaGFuY2VPZlJhaW5WYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY2hhbmNlT2ZSYWluRGl2LmFwcGVuZENoaWxkKGNoYW5jZU9mUmFpblRpdGxlKTtcbmNoYW5jZU9mUmFpbkRpdi5hcHBlbmRDaGlsZChjaGFuY2VPZlJhaW5WYWx1ZSk7XG5cbmNvbnN0IHN1bnJpc2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHN1bnJpc2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc3VucmlzZVRpdGxlLnRleHRDb250ZW50ID0gJ1N1bnJpc2UnO1xuY29uc3Qgc3VucmlzZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zdW5yaXNlRGl2LmFwcGVuZENoaWxkKHN1bnJpc2VUaXRsZSk7XG5zdW5yaXNlRGl2LmFwcGVuZENoaWxkKHN1bnJpc2VWYWx1ZSk7XG5cbmNvbnN0IHN1bnNldERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3Qgc3Vuc2V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnN1bnNldFRpdGxlLnRleHRDb250ZW50ID0gJ1N1bnNldCc7XG5jb25zdCBzdW5zZXRWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc3Vuc2V0RGl2LmFwcGVuZENoaWxkKHN1bnNldFRpdGxlKTtcbnN1bnNldERpdi5hcHBlbmRDaGlsZChzdW5zZXRWYWx1ZSk7XG5cbmNvbnN0IG1vb25QaGFzZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgbW9vblBoYXNlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1vb25QaGFzZVRpdGxlLnRleHRDb250ZW50ID0gJ01vb24gcGhhc2UnO1xuY29uc3QgbW9vblBoYXNlVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1vb25QaGFzZVZhbHVlLmlkID0gJ21vb24tcGhhc2UnO1xubW9vblBoYXNlRGl2LmFwcGVuZENoaWxkKG1vb25QaGFzZVRpdGxlKTtcbm1vb25QaGFzZURpdi5hcHBlbmRDaGlsZChtb29uUGhhc2VWYWx1ZSk7XG5cbndlYXRoZXJEZXRhaWxzRGl2LmFwcGVuZENoaWxkKHdpbmREaXYpO1xud2VhdGhlckRldGFpbHNEaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlEaXYpO1xud2VhdGhlckRldGFpbHNEaXYuYXBwZW5kQ2hpbGQodXZJbmRleERpdik7XG53ZWF0aGVyRGV0YWlsc0Rpdi5hcHBlbmRDaGlsZCh2aXNpYmlsaXR5RGl2KTtcbndlYXRoZXJEZXRhaWxzRGl2LmFwcGVuZENoaWxkKGNsb3VkaW5lc3NEaXYpO1xud2VhdGhlckRldGFpbHNEaXYuYXBwZW5kQ2hpbGQoY2hhbmNlT2ZSYWluRGl2KTtcbndlYXRoZXJEZXRhaWxzRGl2LmFwcGVuZENoaWxkKG1vb25QaGFzZURpdik7XG53ZWF0aGVyRGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChzdW5yaXNlRGl2KTtcbndlYXRoZXJEZXRhaWxzRGl2LmFwcGVuZENoaWxkKHN1bnNldERpdik7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQod2VhdGhlckRldGFpbHNEaXYpO1xuXG5jb25zdCBmb3JlY2FzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZm9yZWNhc3REaXYuY2xhc3NOYW1lID0gJ2ZvcmVjYXN0JztcblxuY29uc3QgZGF5MURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5jb25zdCBkYXkxTmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5jb25zdCBkYXkxTWF4VGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5jb25zdCBkYXkxTWluVGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5jb25zdCBkYXkxSWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5kYXkxRGl2LmFwcGVuZENoaWxkKGRheTFOYW1lRGl2KTtcbmRheTFEaXYuYXBwZW5kQ2hpbGQoZGF5MU1heFRlbXBEaXYpO1xuZGF5MURpdi5hcHBlbmRDaGlsZChkYXkxTWluVGVtcERpdik7XG5kYXkxRGl2LmFwcGVuZENoaWxkKGRheTFJY29uRGl2KTtcblxuY29uc3QgZGF5MkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5jb25zdCBkYXkyTmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5jb25zdCBkYXkyTWF4VGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5jb25zdCBkYXkyTWluVGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5jb25zdCBkYXkySWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5kYXkyRGl2LmFwcGVuZENoaWxkKGRheTJOYW1lRGl2KTtcbmRheTJEaXYuYXBwZW5kQ2hpbGQoZGF5Mk1heFRlbXBEaXYpO1xuZGF5MkRpdi5hcHBlbmRDaGlsZChkYXkyTWluVGVtcERpdik7XG5kYXkyRGl2LmFwcGVuZENoaWxkKGRheTJJY29uRGl2KTtcblxuY29uc3QgZGF5M0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5jb25zdCBkYXkzTmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5jb25zdCBkYXkzTWF4VGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5jb25zdCBkYXkzTWluVGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5jb25zdCBkYXkzSWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5kYXkzRGl2LmFwcGVuZENoaWxkKGRheTNOYW1lRGl2KTtcbmRheTNEaXYuYXBwZW5kQ2hpbGQoZGF5M01heFRlbXBEaXYpO1xuZGF5M0Rpdi5hcHBlbmRDaGlsZChkYXkzTWluVGVtcERpdik7XG5kYXkzRGl2LmFwcGVuZENoaWxkKGRheTNJY29uRGl2KTtcblxuZm9yZWNhc3REaXYuYXBwZW5kQ2hpbGQoZGF5MURpdik7XG5mb3JlY2FzdERpdi5hcHBlbmRDaGlsZChkYXkyRGl2KTtcbmZvcmVjYXN0RGl2LmFwcGVuZENoaWxkKGRheTNEaXYpO1xuXG5jb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmZvb3RlckRpdi5jbGFzc05hbWUgPSAnZm9vdGVyJztcblxuY29uc3QgdXNlcm5hbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xudXNlcm5hbWVMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL2xheXRoYWxxYWRoaS8nO1xudXNlcm5hbWVMaW5rLnRleHRDb250ZW50ID0gJ0xheXRoQWxxYWRoaSc7XG5cbmNvbnN0IHNvdXJjZUNvZGVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuc291cmNlQ29kZUxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vVXNlcm5hbWUvd2VhdGhlci1hcHAnO1xuc291cmNlQ29kZUxpbmsudGV4dENvbnRlbnQgPSAnU291cmNlIGNvZGUnO1xuXG5jb25zdCBzZXBhcmF0b3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNlcGFyYXRvckRpdi50ZXh0Q29udGVudCA9ICcgfCAnO1xuXG5mb290ZXJEaXYudGV4dENvbnRlbnQgPSAnQnVpbHQgYnkgJztcbmZvb3RlckRpdi5hcHBlbmRDaGlsZCh1c2VybmFtZUxpbmspO1xuZm9vdGVyRGl2LmFwcGVuZENoaWxkKHNlcGFyYXRvckRpdik7XG5mb290ZXJEaXYuYXBwZW5kQ2hpbGQoc291cmNlQ29kZUxpbmspO1xuXG5jb25zdCBsb2FkaW5nU3Bpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubG9hZGluZ1NwaW5uZXIuY2xhc3NOYW1lID0gJ2xvYWRpbmctc3Bpbm5lcic7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9nb0Rpdik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlYXJjaENvbnRhaW5lckRpdik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHVuaXRzRGl2KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJEaXYpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh3ZWF0aGVyRGV0YWlsc0Rpdik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcmVjYXN0RGl2KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyRGl2KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9hZGluZ1NwaW5uZXIpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29udGVudChnaXZlbkxvY2F0aW9uKSB7XG4gIGlmIChnaXZlbkxvY2F0aW9uKSB7XG4gICAgY3VycmVudExvY2F0aW9uID0gZ2l2ZW5Mb2NhdGlvbjtcbiAgfVxuXG4gIGxldCB3ZWF0aGVyID0gYXdhaXQgZmV0Y2hXZWF0aGVyRGF0YShjdXJyZW50TG9jYXRpb24pO1xuICBcbiAgY29uc3QgY3VycmVudERheUNvZGUgPSB3ZWF0aGVyLmN1cnJlbnQuY29uZGl0aW9uLmNvZGU7XG4gIGNvbnN0IGRheTFDb2RlID0gd2VhdGhlci5kYXkxLmNvbmRpdGlvbi5jb2RlO1xuICBjb25zdCBkYXkyQ29kZSA9IHdlYXRoZXIuZGF5Mi5jb25kaXRpb24uY29kZTtcbiAgY29uc3QgZGF5M0NvZGUgPSB3ZWF0aGVyLmRheTMuY29uZGl0aW9uLmNvZGU7XG5cbiAgbmlnaHRNb2RlKHdlYXRoZXIuYXN0cm8xLnN1bnNldCwgd2VhdGhlci5hc3RybzEuc3VucmlzZSk7XG5cbiAgYXBwZW5kRGF0YShsb2NhdGlvbkRpdiwgYCR7d2VhdGhlci5sb2NhdGlvbi5uYW1lfSwgJHt3ZWF0aGVyLmxvY2F0aW9uLmNvdW50cnl9YCk7XG4gIGFwcGVuZERhdGEodGV4dERpdiwgd2VhdGhlci5jdXJyZW50LmNvbmRpdGlvbi50ZXh0KTtcbiAgYXBwZW5kRGF0YSh0aW1lRGl2LCB3ZWF0aGVyLmxvY2F0aW9uLmxvY2FsdGltZSk7XG4gIGFwcGVuZERhdGEoY3VycmVudFRlbXBEaXYsIGAke2dldEljb24oY3VycmVudERheUNvZGUpfSAke3dlYXRoZXIuY3VycmVudC50ZW1wX2N9wrBDYCk7XG4gIGFwcGVuZERhdGEoZmVlbHNMaWtlRGl2LCBgJHt3ZWF0aGVyLmN1cnJlbnQuZmVlbHNsaWtlX2N9wrBDYCk7XG4gIGFwcGVuZERhdGEod2luZFZhbHVlLCBgJHt3ZWF0aGVyLmN1cnJlbnQud2luZF9rcGh9a3BoYCk7XG4gIGFwcGVuZERhdGEoaHVtaWRpdHlWYWx1ZSwgYCR7d2VhdGhlci5jdXJyZW50Lmh1bWlkaXR5fSVgKTtcbiAgYXBwZW5kRGF0YSh1dkluZGV4VmFsdWUsIHdlYXRoZXIuY3VycmVudC51dik7XG4gIGFwcGVuZERhdGEodmlzaWJpbGl0eVZhbHVlLCBgJHt3ZWF0aGVyLmN1cnJlbnQudmlzX2ttfWttYCk7XG4gIGFwcGVuZERhdGEoY2xvdWRpbmVzc1ZhbHVlLCBgJHt3ZWF0aGVyLmN1cnJlbnQuY2xvdWR9JWApO1xuICBhcHBlbmREYXRhKGNoYW5jZU9mUmFpblZhbHVlLCBgJHt3ZWF0aGVyLmN1cnJlbnQucHJlY2lwX2lufSVgKTtcbiAgYXBwZW5kRGF0YShzdW5yaXNlVmFsdWUsIHdlYXRoZXIuYXN0cm8xLnN1bnJpc2UpO1xuICBhcHBlbmREYXRhKHN1bnNldFZhbHVlLCB3ZWF0aGVyLmFzdHJvMS5zdW5zZXQpO1xuICBhcHBlbmREYXRhKG1vb25QaGFzZVZhbHVlLCBnZXRNb29uSWNvbih3ZWF0aGVyLmFzdHJvMS5tb29uX3BoYXNlKSk7XG4gIGFwcGVuZERhdGEoZGF5MU1heFRlbXBEaXYsIGAke3dlYXRoZXIuZGF5MS5tYXh0ZW1wX2N9wrBDYCk7XG4gIGFwcGVuZERhdGEoZGF5Mk1heFRlbXBEaXYsIGAke3dlYXRoZXIuZGF5Mi5tYXh0ZW1wX2N9wrBDYCk7XG4gIGFwcGVuZERhdGEoZGF5M01heFRlbXBEaXYsIGAke3dlYXRoZXIuZGF5My5tYXh0ZW1wX2N9wrBDYCk7XG4gIGFwcGVuZERhdGEoZGF5MU1pblRlbXBEaXYsIGAke3dlYXRoZXIuZGF5MS5taW50ZW1wX2N9wrBDYCk7XG4gIGFwcGVuZERhdGEoZGF5Mk1pblRlbXBEaXYsIGAke3dlYXRoZXIuZGF5Mi5taW50ZW1wX2N9wrBDYCk7XG4gIGFwcGVuZERhdGEoZGF5M01pblRlbXBEaXYsIGAke3dlYXRoZXIuZGF5My5taW50ZW1wX2N9wrBDYCk7XG4gIGFwcGVuZERhdGEoZGF5MU5hbWVEaXYsIGdldERheU5hbWVGcm9tRGF0ZSh3ZWF0aGVyLmZvcmVjYXN0MS5kYXRlKSk7XG4gIGFwcGVuZERhdGEoZGF5Mk5hbWVEaXYsIGdldERheU5hbWVGcm9tRGF0ZSh3ZWF0aGVyLmZvcmVjYXN0Mi5kYXRlKSk7XG4gIGFwcGVuZERhdGEoZGF5M05hbWVEaXYsIGdldERheU5hbWVGcm9tRGF0ZSh3ZWF0aGVyLmZvcmVjYXN0My5kYXRlKSk7XG4gIGFwcGVuZERhdGEoZGF5MUljb25EaXYsIGdldEljb24oZGF5MUNvZGUpKTtcbiAgYXBwZW5kRGF0YShkYXkySWNvbkRpdiwgZ2V0SWNvbihkYXkyQ29kZSkpO1xuICBhcHBlbmREYXRhKGRheTNJY29uRGl2LCBnZXRJY29uKGRheTNDb2RlKSk7XG5cbiAgaWYgKHVuaXRzID09PSAnVVMnKSB7XG4gICAgYXBwZW5kRGF0YShjdXJyZW50VGVtcERpdiwgYCR7Z2V0SWNvbihkYXkxQ29kZSwgZ2V0TW9vbkljb24od2VhdGhlci5hc3RybzEubW9vbl9waGFzZSkpfSAke3dlYXRoZXIuY3VycmVudC50ZW1wX2Z9wrBGYCk7XG4gICAgYXBwZW5kRGF0YShmZWVsc0xpa2VEaXYsIGAke3dlYXRoZXIuY3VycmVudC5mZWVsc2xpa2VfZn3CsEZgKTtcbiAgICBhcHBlbmREYXRhKHdpbmRWYWx1ZSwgYCR7d2VhdGhlci5jdXJyZW50LndpbmRfbXBofW1waGApO1xuICAgIGFwcGVuZERhdGEodmlzaWJpbGl0eVZhbHVlLCBgJHt3ZWF0aGVyLmN1cnJlbnQudmlzX21pbGVzfW1pbGVzYCk7XG4gICAgYXBwZW5kRGF0YShkYXkxTWF4VGVtcERpdiwgYCR7d2VhdGhlci5kYXkxLm1heHRlbXBfZn3CsEZgKTtcbiAgICBhcHBlbmREYXRhKGRheTJNYXhUZW1wRGl2LCBgJHt3ZWF0aGVyLmRheTIubWF4dGVtcF9mfcKwRmApO1xuICAgIGFwcGVuZERhdGEoZGF5M01heFRlbXBEaXYsIGAke3dlYXRoZXIuZGF5My5tYXh0ZW1wX2Z9wrBGYCk7XG4gICAgYXBwZW5kRGF0YShkYXkxTWluVGVtcERpdiwgYCR7d2VhdGhlci5kYXkxLm1pbnRlbXBfZn3CsEZgKTtcbiAgICBhcHBlbmREYXRhKGRheTJNaW5UZW1wRGl2LCBgJHt3ZWF0aGVyLmRheTIubWludGVtcF9mfcKwRmApO1xuICAgIGFwcGVuZERhdGEoZGF5M01pblRlbXBEaXYsIGAke3dlYXRoZXIuZGF5My5taW50ZW1wX2Z9wrBGYCk7XG4gIH1cblxuICBpZiAodXZJbmRleFZhbHVlLnRleHRDb250ZW50IDwgMykge1xuICAgIHV2SW5kZXhWYWx1ZS5jbGFzc0xpc3QgPSAnbG93LXV2JztcbiAgfSBlbHNlIGlmICh1dkluZGV4VmFsdWUudGV4dENvbnRlbnQgPCA2KSB7XG4gICAgdXZJbmRleFZhbHVlLmNsYXNzTGlzdCA9ICdtaWQtdXYnO1xuICB9IGVsc2UgaWYgKHV2SW5kZXhWYWx1ZS50ZXh0Q29udGVudCA8IDgpIHtcbiAgICB1dkluZGV4VmFsdWUuY2xhc3NMaXN0ID0gJ2hpZ2gtdXYnO1xuICB9IGVsc2UgaWYgKHV2SW5kZXhWYWx1ZS50ZXh0Q29udGVudCA+PSA4KSB7XG4gICAgdXZJbmRleFZhbHVlLmNsYXNzTGlzdCA9ICd2ZXJ5LWhpZ2gtdXYnO1xuICB9XG59XG5jcmVhdGVDb250ZW50KCk7XG5cbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY2xlYXJDYWNoZWRXZWF0aGVyRGF0YSgpO1xuICBjcmVhdGVDb250ZW50KHNlYXJjaElucHV0LnZhbHVlKTtcbiAgc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcbn0pO1xuXG5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgIHNlYXJjaEJ1dHRvbi5jbGljaygpO1xuICB9XG59KTtcblxudXNVbml0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgdW5pdHMgPSAnVVMnO1xuICBjcmVhdGVDb250ZW50KCk7XG59KTtcblxubWV0cmljVW5pdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHVuaXRzID0gJ01ldHJpYyc7XG4gIGNyZWF0ZUNvbnRlbnQoKTtcbn0pO1xuXG5mdW5jdGlvbiBhcHBlbmREYXRhKGVsZW1lbnQsIGRhdGFMb2NhdGlvbikge1xuICBsZXQgZGF0YSA9IGRhdGFMb2NhdGlvbjtcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IGRhdGE7XG59XG5cbmZ1bmN0aW9uIGdldERheU5hbWVGcm9tRGF0ZShkYXRlKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7IHdlZWtkYXk6ICdsb25nJyB9O1xuXG4gIGNvbnN0IGRheU5hbWUgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tVVMnLCBvcHRpb25zKS5mb3JtYXQobmV3IERhdGUoZGF0ZSkpO1xuICByZXR1cm4gZGF5TmFtZTtcbn1cblxuZXhwb3J0IHsgbG9hZGluZ1NwaW5uZXIsIHNlYXJjaENvbnRhaW5lckRpdiB9OyIsImNvbnN0IGljb25NYXBwaW5nID0ge1xuICAgIDEwMDA6IFwi4piA77iPXCIsXG4gICAgMTAwMzogXCLwn4yk77iPXCIsXG4gICAgMTAwNjogXCLimIHvuI9cIixcbiAgICAxMDA5OiBcIvCfjKvvuI9cIixcbiAgICAxMDMwOiBcIvCfjKvvuI9cIixcbiAgICAxMDYzOiBcIvCfjKbvuI9cIixcbiAgICAxMDY2OiBcIvCfjKjvuI9cIixcbiAgICAxMDY5OiBcIvCfjKfvuI9cIixcbiAgICAxMDcyOiBcIvCfjKfvuI9cIixcbiAgICAxMDg3OiBcIuKbiO+4j1wiLFxuICAgIDExMTQ6IFwi8J+MqO+4j1wiLFxuICAgIDExMTc6IFwi8J+MqO+4j1wiLFxuICAgIDExMzU6IFwi8J+Mq++4j1wiLFxuICAgIDExNDc6IFwi8J+Mq++4j1wiLFxuICAgIDExNTA6IFwi8J+Mp++4j1wiLFxuICAgIDExNTM6IFwi8J+Mp++4j1wiLFxuICAgIDExNjg6IFwi8J+Mp++4j1wiLFxuICAgIDExNzE6IFwi8J+Mp++4j1wiLFxuICAgIDExODA6IFwi8J+Mp++4j1wiLFxuICAgIDExODM6IFwi8J+Mp++4j1wiLFxuICAgIDExODY6IFwi8J+Mp++4j1wiLFxuICAgIDExODk6IFwi8J+Mp++4j1wiLFxuICAgIDExOTI6IFwi8J+Mp++4j1wiLFxuICAgIDExOTU6IFwi8J+Mp++4j1wiLFxuICAgIDExOTg6IFwi8J+Mp++4j1wiLFxuICAgIDEyMDE6IFwi8J+Mp++4j1wiLFxuICAgIDEyMDQ6IFwi8J+MqO+4j1wiLFxuICAgIDEyMDc6IFwi8J+MqO+4j1wiLFxuICAgIDEyMTA6IFwi8J+MqO+4j1wiLFxuICAgIDEyMTM6IFwi8J+MqO+4j1wiLFxuICAgIDEyMTY6IFwi8J+MqO+4j1wiLFxuICAgIDEyMTk6IFwi8J+MqO+4j1wiLFxuICAgIDEyMjI6IFwi8J+MqO+4j1wiLFxuICAgIDEyMjU6IFwi8J+MqO+4j1wiLFxuICAgIDEyMzc6IFwi8J+MqO+4j1wiLFxuICAgIDEyNDA6IFwi8J+Mp++4j1wiLFxuICAgIDEyNDM6IFwi8J+Mp++4j1wiLFxuICAgIDEyNDY6IFwi8J+Mp++4j1wiLFxuICAgIDEyNDk6IFwi8J+MqO+4j1wiLFxuICAgIDEyNTI6IFwi8J+MqO+4j1wiLFxuICAgIDEyNTU6IFwi8J+MqO+4j1wiLFxuICAgIDEyNTg6IFwi8J+MqO+4j1wiLFxuICAgIDEyNjE6IFwi8J+MqO+4j1wiLFxuICAgIDEyNjQ6IFwi8J+MqO+4j1wiLFxuICAgIDEyNzM6IFwi4puI77iPXCIsXG4gICAgMTI3NjogXCLim4jvuI9cIixcbiAgICAxMjc5OiBcIvCfjKjvuI9cIixcbiAgICAxMjgyOiBcIvCfjKjvuI9cIixcbn07XG5cbmNvbnN0IG1vb25JY29ucyA9IHtcbiAgJ1dhbmluZyBHaWJib3VzJzogJ/CfjJYnLFxuICAnV2F4aW5nIEdpYmJvdXMnOiAn8J+MlCcsXG4gICdGdWxsIE1vb24nOiAn8J+MlScsXG4gICdMYXN0IFF1YXJ0ZXInOiAn8J+MlycsXG4gICdGaXJzdCBRdWFydGVyJzogJ/CfjJMnLFxuICAnTmV3IE1vb24nOiAn8J+MkScsXG4gICdXYW5pbmcgQ3Jlc2NlbnQnOiAn8J+MmCcsXG4gICdXYXhpbmcgQ3Jlc2NlbnQnOiAn8J+MkicsXG59O1xuXG5mdW5jdGlvbiBnZXRNb29uSWNvbih0eXBlKSB7XG4gIHJldHVybiBtb29uSWNvbnNbdHlwZV0gfHwgJ/CfjJUnO1xufVxuXG5mdW5jdGlvbiBnZXRJY29uKGNvZGUpIHtcbiAgcmV0dXJuIGljb25NYXBwaW5nW2NvZGVdO1xufVxuXG5mdW5jdGlvbiBuaWdodE1vZGUoc3Vuc2V0VGltZSwgc3VucmlzZVRpbWUpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICBjb25zdCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XG5cbiAgY29uc3QgZm9ybWF0dGVkSG91cnMgPSBob3VycyAlIDEyIHx8IDEyO1xuICBjb25zdCBhbXBtID0gaG91cnMgPj0gMTIgPyAnUE0nIDogJ0FNJztcblxuICBjb25zdCBjdXJyZW50VGltZSA9IGAke1N0cmluZyhmb3JtYXR0ZWRIb3VycykucGFkU3RhcnQoMiwgJzAnKX06JHtTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwgJzAnKX0gJHthbXBtfWA7XG5cbiAgY29uc3QgcGFyc2VUaW1lID0gKHRpbWVTdHIpID0+IHtcbiAgICBjb25zdCBtYXRjaCA9IHRpbWVTdHIubWF0Y2goLyhcXGQrKTooXFxkKykgKEFNfFBNKS9pKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGxldCBob3VycyA9IHBhcnNlSW50KG1hdGNoWzFdKTtcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBwYXJzZUludChtYXRjaFsyXSk7XG4gICAgICBjb25zdCBhbXBtID0gbWF0Y2hbM10udG9VcHBlckNhc2UoKTtcbiAgICAgIGlmIChhbXBtID09PSAnUE0nICYmIGhvdXJzICE9PSAxMikge1xuICAgICAgICBob3VycyArPSAxMjtcbiAgICAgIH0gZWxzZSBpZiAoYW1wbSA9PT0gJ0FNJyAmJiBob3VycyA9PT0gMTIpIHtcbiAgICAgICAgaG91cnMgPSAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgaG91cnMsIG1pbnV0ZXMgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgY29uc3Qgc3Vuc2V0UGFydHMgPSBwYXJzZVRpbWUoc3Vuc2V0VGltZSk7XG4gIGNvbnN0IHN1bnJpc2VQYXJ0cyA9IHBhcnNlVGltZShzdW5yaXNlVGltZSk7XG5cbiAgaWYgKHN1bnNldFBhcnRzICYmIHN1bnJpc2VQYXJ0cykge1xuICAgIGNvbnN0IHsgaG91cnM6IHN1bnNldEhvdXIsIG1pbnV0ZXM6IHN1bnNldE1pbnV0ZSB9ID0gc3Vuc2V0UGFydHM7XG4gICAgY29uc3QgeyBob3Vyczogc3VucmlzZUhvdXIsIG1pbnV0ZXM6IHN1bnJpc2VNaW51dGUgfSA9IHN1bnJpc2VQYXJ0cztcblxuICAgIGNvbnN0IGlzTmlnaHQgPVxuICAgICAgKGhvdXJzID4gc3Vuc2V0SG91ciB8fCAoaG91cnMgPT09IHN1bnNldEhvdXIgJiYgbWludXRlcyA+PSBzdW5zZXRNaW51dGUpKSB8fFxuICAgICAgKGhvdXJzIDwgc3VucmlzZUhvdXIgfHwgKGhvdXJzID09PSBzdW5yaXNlSG91ciAmJiBtaW51dGVzIDwgc3VucmlzZU1pbnV0ZSkpO1xuICAgIGljb25NYXBwaW5nWzEwMDBdID0gaXNOaWdodCA/ICfwn4yVJyA6ICfimIDvuI8nO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGlzTmlnaHQgPyAndmFyKC0tbmlnaHRtb2RlKScgOiAndmFyKC0tZGF5bW9kZSknO1xuICB9XG59XG5cbmV4cG9ydCB7IGdldEljb24sIGdldE1vb25JY29uLCBuaWdodE1vZGUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==