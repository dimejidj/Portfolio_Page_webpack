/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fortawesome/fontawesome-free/js/all.js":
/*!**************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/js/all.js ***!
  \**************************************************************/
/***/ (() => {


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --color-lightblue: lightblue;\\n  --color-grey: #3c3c3c;\\n  --color-pinky: #cf045e;\\n}\\n\\nhtml {\\n  scroll-behavior: smooth;\\n  box-sizing: border-box;\\n  font-family: monospace;\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  text-decoration: none;\\n  font-family: Montserrat, sans-serif, ariel;\\n}\\n\\n#navbar {\\n  height: 80px;\\n  width: 100%;\\n  text-align: right;\\n  background-color: #808080;\\n  position: fixed;\\n  opacity: 0.9;\\n  border-bottom: var(--color-lightblue) solid;\\n}\\n\\n#navbar li {\\n  display: inline-block;\\n  margin: 30px 25px 15px 15px;\\n  font-size: 20px;\\n  font-weight: 600;\\n  color: var(--color-lightblue);\\n}\\n\\n#navbar a {\\n  color: black;\\n  cursor: pointer;\\n  font-family: monospace;\\n}\\n\\n#navbar a:hover {\\n  color: var(--color-pinky);\\n}\\n\\n#toppage {\\n  height: 100vh;\\n  width: 100%;\\n}\\n\\n#welcome-section {\\n  width: 100%;\\n  height: 100vh;\\n  text-align: center;\\n  background-color: black;\\n  background-image: radial-gradient(\\n      white,\\n      rgba(255, 255, 255, 0.2) 2px,\\n      transparent 40px\\n    ),\\n    radial-gradient(white, rgba(255, 255, 255, 0.15) 1px, transparent 30px),\\n    radial-gradient(white, rgba(255, 255, 255, 0.1) 2px, transparent 40px),\\n    radial-gradient(\\n      rgba(255, 255, 255, 0.4),\\n      rgba(255, 255, 255, 0.1) 2px,\\n      transparent 30px\\n    );\\n  background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;\\n  background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;\\n}\\n\\n#welcome-section h1 {\\n  padding-top: 40vh;\\n  font-size: 60px;\\n  color: var(--color-lightblue);\\n}\\n\\n#welcome-section h3 {\\n  padding-top: 7px;\\n  font-size: 30px;\\n  color: #cf045e;\\n  font-style: italic;\\n}\\n\\n#welcome-section h2 {\\n  padding-top: 7px;\\n  font-size: 15px;\\n  color: #cf045e;\\n  font-style: italic;\\n}\\n\\n#projects {\\n  background-color: var(--color-lightblue);\\n  height: auto;\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n}\\n\\n#projects h3 {\\n  font-size: 40px;\\n  text-align: center;\\n  padding-top: 90px;\\n  text-decoration: underline;\\n  margin-bottom: 10px;\\n}\\n\\n.project-tile {\\n  display: grid;\\n  grid-template-columns: auto auto auto auto;\\n  grid-gap: 15px;\\n  padding: 50px 0px 50px 20px;\\n  max-width: 1240px;\\n}\\n\\n#work {\\n  flex-direction: row;\\n  display: flex;\\n  max-width: 1000px;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  box-sizing: border-box;\\n  margin: 0 auto;\\n}\\n\\n.project-tile p {\\n  text-align: center;\\n  background-color: black;\\n  color: var(--color-lightblue);\\n  height: 40px;\\n  font-size: 23px;\\n  padding-top: 20px;\\n  padding-bottom: 10px;\\n}\\n\\n.project-tile img {\\n  width: 400px;\\n  height: 330px;\\n  object-fit: cover;\\n  border-radius: 5px;\\n}\\n\\n.project-tile:hover p {\\n  background-color: var(--color-grey);\\n  box-shadow: 2px 4px 10px black;\\n}\\n\\na {\\n  cursor: pointer;\\n}\\n\\n.otherbtn {\\n  width: 120px;\\n  height: 40px;\\n  border-radius: 7px;\\n  margin-bottom: 45px;\\n  background-color: black;\\n  padding: 10px;\\n  color: var(--color-lightblue);\\n}\\n\\n.otherbtn:hover {\\n  background-color: var(--color-grey);\\n  box-shadow: 2px 4px 10px black;\\n  cursor: pointer;\\n}\\n\\n#contact {\\n  width: 100%;\\n  height: 700px;\\n  text-align: center;\\n  background-color: black;\\n  background-image: radial-gradient(\\n      white,\\n      rgba(255, 255, 255, 0.2) 2px,\\n      transparent 40px\\n    ),\\n    radial-gradient(white, rgba(255, 255, 255, 0.15) 1px, transparent 30px),\\n    radial-gradient(white, rgba(255, 255, 255, 0.1) 2px, transparent 40px),\\n    radial-gradient(\\n      rgba(255, 255, 255, 0.4),\\n      rgba(255, 255, 255, 0.1) 2px,\\n      transparent 30px\\n    );\\n  background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;\\n  background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;\\n}\\n\\n#details {\\n  padding-top: 300px;\\n}\\n\\n#details h3 {\\n  font-size: 70px;\\n  color: var(--color-lightblue);\\n}\\n\\n#details p {\\n  font-size: 25px;\\n  color: #cf045e;\\n  font-weight: 600;\\n}\\n\\n#socials {\\n  text-align: center;\\n}\\n\\n#socials li {\\n  margin-top: 50px;\\n  display: inline-block;\\n  font-size: 25px;\\n  margin-right: 60px;\\n  color: var(--color-lightblue);\\n}\\n\\n#socials a {\\n  color: var(--color-lightblue);\\n}\\n\\n#socials a:hover {\\n  color: var(--color-lightblue);\\n  text-decoration: underline;\\n}\\n\\n.icons {\\n  margin-right: 7px;\\n}\\n\\n#footer {\\n  width: 100%;\\n  height: 100px;\\n  border-top: var(--color-lightblue) solid 10px;\\n  text-align: center;\\n  background-color: var(--color-grey);\\n}\\n\\n#footer p {\\n  padding-top: 40px;\\n  font-size: 17px;\\n  letter-spacing: 0.1rem;\\n  color: var(--color-lightblue);\\n}\\n\\n@media (max-width: 500px) {\\n  #work {\\n    position: relative;\\n    height: auto;\\n    min-height: 100%;\\n  }\\n  #details {\\n    padding-top: -100px;\\n  }\\n}\\n\\n#top_other_pg {\\n  height: 70px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: black;\\n  background-image: radial-gradient(\\n      white,\\n      rgba(255, 255, 255, 0.2) 2px,\\n      transparent 40px\\n    ),\\n    radial-gradient(white, rgba(255, 255, 255, 0.15) 1px, transparent 30px),\\n    radial-gradient(white, rgba(255, 255, 255, 0.1) 2px, transparent 40px),\\n    radial-gradient(\\n      rgba(255, 255, 255, 0.4),\\n      rgba(255, 255, 255, 0.1) 2px,\\n      transparent 30px\\n    );\\n  background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;\\n  background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;\\n}\\n\\n.home_icon {\\n  font-size: 40px;\\n  color: var(--color-pinky);\\n}\\n\\n.home_icon:hover {\\n  font-size: 42px;\\n  color: lightblue;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://portfolio_page_webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://portfolio_page_webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://portfolio_page_webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://portfolio_page_webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://portfolio_page_webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://portfolio_page_webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://portfolio_page_webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://portfolio_page_webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://portfolio_page_webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://portfolio_page_webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _dist_calculator_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dist/calculator.png */ \"./dist/calculator.png\");\n/* harmony import */ var _dist_tik_tak_toe_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dist/tik-tak-toe.png */ \"./dist/tik-tak-toe.png\");\n/* harmony import */ var _dist_restaurant_pg_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dist/restaurant-pg.png */ \"./dist/restaurant-pg.png\");\n/* harmony import */ var _dist_weather_app_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dist/weather-app.png */ \"./dist/weather-app.png\");\n/* harmony import */ var _dist_etch_a_sketch_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dist/etch-a-sketch.png */ \"./dist/etch-a-sketch.png\");\n/* harmony import */ var _dist_library_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dist/library.png */ \"./dist/library.png\");\n/* harmony import */ var _dist_tip_calculator_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dist/tip-calculator.png */ \"./dist/tip-calculator.png\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all */ \"./node_modules/@fortawesome/fontawesome-free/js/all.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\nfunction component() {\n  let mainPageDiv = document.createElement(\"div\");\n  const btn = document.createElement(\"button\");\n  btn.innerHTML = \"click me and check console\";\n\n  const totalDiv = document.createElement(\"div\");\n  const firstMainPage = document.createElement(\"first_full_page\");\n  firstMainPage.innerHTML = `<div id=\"toppage\"> \n  <nav id=\"navbar\">\n   <ul> \n   <li><a class=\"nav-link\" href=\"#welcome-section\">About<a></li> \n   <li><a class=\"nav-link\" href=\"#projects\">Work</a></li> \n   <li><a class=\"nav-link\" href=\"#socials\">Contact</a></li> \n   </ul> \n   </nav> \n\n\n   <section id=\"welcome-section\"> \n   <h1>Hey, My name is Dimeji</h1> \n   <h3>An avid Programmer</h3> \n   <h2>With projects in JavaScript <i class=\"fa-brands fa-js\"></i>, Python <i class=\"fa-brands fa-python\"></i>, HTML <i class=\"fa-brands fa-html5\"></i>, CSS <i class=\"fa-brands fa-css3\"></i></h2> \n   </section>\n   </div> `;\n\n  const projectsHTML = document.createElement(\"projects_html\");\n  projectsHTML.innerHTML = `<h3>These are some of my projects</h3> \n   \n   <div id=\"work\"> \n   <div class=\"project-tile\"> <a target=\"_blank\" href=\"https://dimejidj.github.io/calculator_vanilla_js/\"> <img src=${_dist_calculator_png__WEBPACK_IMPORTED_MODULE_2__} alt=\"tributpg\" class=\"project-sq\"> <p>Calculator</p></a> </div>\n    <div class=\"project-tile\"> <a target=\"_blank\" href=\"https://dimejidj.github.io/tic_tac_toe/\"> <img src=${_dist_tik_tak_toe_png__WEBPACK_IMPORTED_MODULE_3__} alt=\"tributpg\" class=\"project-sq\"> <p>Tik Tac Toe</p></a> </div> \n    <div class=\"project-tile\"> <a target=\"_blank\" href=\"https://dimejidj.github.io/restaurant/\"> <img src=${_dist_restaurant_pg_png__WEBPACK_IMPORTED_MODULE_4__} alt=\"tributpg\" class=\"project-sq\"> <p>Restaurant Page</p></a> </div> \n    <div class=\"project-tile\"> <a target=\"_blank\" href=\"https://dimejidj.github.io/weather_app/\"> <img src=${_dist_weather_app_png__WEBPACK_IMPORTED_MODULE_5__} alt=\"tributpg\" class=\"project-sq\"> <p>Weather App</p></a> </div> \n    </div>`;\n\n  totalDiv.append(firstMainPage);\n\n  const projectsSection = document.createElement(\"section\");\n  projectsSection.setAttribute(\"id\", \"projects\");\n  projectsSection.append(projectsHTML);\n\n  const otherbtn = document.createElement(\"button\");\n  otherbtn.textContent = \"More Projects\";\n  otherbtn.classList.add(\"otherbtn\");\n  projectsSection.append(otherbtn);\n\n  totalDiv.append(projectsSection);\n\n  const secondMainPage = document.createElement(\"second_full_page\");\n  secondMainPage.innerHTML = `<section id=\"contact\"> \n    <div id=\"details\"> <h3>Let\\'s work together...</h3> \n    <p><i>Feel free to contact me on the details below</i></p> \n    </div> \n\n    <div id=\"socials\"> \n    <ul> \n    <li><a id=\"profile-link\" href=\"https://github.com/dimejidj\" target=\"_blank\"><i class=\"fab fa-github icons\" ></i>Github</a></li> \n    <li><a href=\"mailto:dimeji_09@hotmail.co.uk\" target=\"_blank\"><i class=\"fas fa-envelope icons\"></i>Send an email</a></li> \n    <li><a href=\"https://www.linkedin.com/in/dimeji-olatunde-5248031a7/\" target=\"_blank\"><i class=\"fab fa-linkedin icons\"></i>Linkedin</a></li> \n    <li><a href=\"tel:+447531510785\" target=\"_blank\"><i class=\"fas fa-mobile-alt icons\"></i>Call me</a></li> \n    </ul> \n    </div> \n    </section> \n    \n    <footer id=\"footer\"> \n    <p>*All projects on this page was designed and produced entirely by myself (Dimeji)*</p> \n    </footer>`;\n\n  totalDiv.append(secondMainPage);\n  mainPageDiv.append(totalDiv);\n\n  const otherPage = document.createElement(\"other_page\");\n  const topOtherPage = document.createElement(\"div\");\n  topOtherPage.setAttribute(\"id\", \"top_other_pg\");\n  const topPageLink = document.createElement(\"a\");\n  topPageLink.innerHTML = `<i class=\"fa-solid fa-house-user home_icon\"></i>`;\n\n  topOtherPage.append(topPageLink);\n\n  const bottomOtherPage = document.createElement(\"bottom_other_page\");\n  bottomOtherPage.innerHTML = `</div>\n    <section id=\"projects\">\n        <h3>Here are some of my other projects</h3>\n        <div id=\"work\">\n    <div class=\"project-tile\">\n        <a target=\"_blank\" href=\"https://dimejidj.github.io/etch_a_sketch/\">\n        <img src=${_dist_etch_a_sketch_png__WEBPACK_IMPORTED_MODULE_6__} alt=\"tributpg\" class=\"project-sq\">\n        <p>Etch a Sketch</p></a>\n        </div>\n        <div class=\"project-tile\">\n        <a target=\"_blank\" href=\"https://dimejidj.github.io/library/\"><img src=${_dist_library_png__WEBPACK_IMPORTED_MODULE_7__} alt=\"tributpg\" class=\"project-sq\">\n            <p>Book Library</p></a>\n        </div>\n        <div class=\"project-tile\">\n        <a target=\"_blank\" href=\"https://dimejidj.github.io/TipCalculator/\">\n        <img src=${_dist_tip_calculator_png__WEBPACK_IMPORTED_MODULE_8__} alt=\"tributpg\" class=\"project-sq\">\n        <p>Tip Calculator</p></a>\n        </div>\n        <div class=\"project-tile\">\n        <a target=\"_blank\" href=\"https://codepen.io/dimejidj/full/zYwJNJy\"><img src=\"https://miro.medium.com/max/700/0*KLSVTspaz94tq9XC.png\" alt=\"tributpg\" class=\"project-sq\">\n            <p>Survey Page</p>\n        </a>\n        </div>\n    </section>`;\n\n  otherPage.append(topOtherPage);\n  otherPage.append(bottomOtherPage);\n\n  otherbtn.addEventListener(\"click\", function (e) {\n    while (mainPageDiv.firstChild) {\n      mainPageDiv.removeChild(mainPageDiv.firstChild);\n    }\n    mainPageDiv.append(otherPage);\n  });\n\n  topPageLink.addEventListener(\"click\", function (e) {\n    while (mainPageDiv.firstChild) {\n      mainPageDiv.removeChild(mainPageDiv.firstChild);\n    }\n    mainPageDiv.append(totalDiv);\n  });\n\n  return mainPageDiv;\n}\n\ndocument.body.appendChild(component());\n\n\n//# sourceURL=webpack://portfolio_page_webpack/./src/index.js?");

/***/ }),

/***/ "./dist/calculator.png":
/*!*****************************!*\
  !*** ./dist/calculator.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"15fdad72a56945799fbe.png\";\n\n//# sourceURL=webpack://portfolio_page_webpack/./dist/calculator.png?");

/***/ }),

/***/ "./dist/etch-a-sketch.png":
/*!********************************!*\
  !*** ./dist/etch-a-sketch.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"07c2e404fd7783d45127.png\";\n\n//# sourceURL=webpack://portfolio_page_webpack/./dist/etch-a-sketch.png?");

/***/ }),

/***/ "./dist/library.png":
/*!**************************!*\
  !*** ./dist/library.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9d86b786ba8053ed8b9c.png\";\n\n//# sourceURL=webpack://portfolio_page_webpack/./dist/library.png?");

/***/ }),

/***/ "./dist/restaurant-pg.png":
/*!********************************!*\
  !*** ./dist/restaurant-pg.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"12b830fc6ff98c6d7e22.png\";\n\n//# sourceURL=webpack://portfolio_page_webpack/./dist/restaurant-pg.png?");

/***/ }),

/***/ "./dist/tik-tak-toe.png":
/*!******************************!*\
  !*** ./dist/tik-tak-toe.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"13d315f267d32c286808.png\";\n\n//# sourceURL=webpack://portfolio_page_webpack/./dist/tik-tak-toe.png?");

/***/ }),

/***/ "./dist/tip-calculator.png":
/*!*********************************!*\
  !*** ./dist/tip-calculator.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8298d376a76506cd5f1f.png\";\n\n//# sourceURL=webpack://portfolio_page_webpack/./dist/tip-calculator.png?");

/***/ }),

/***/ "./dist/weather-app.png":
/*!******************************!*\
  !*** ./dist/weather-app.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3b17a26d9c7c64abe61d.png\";\n\n//# sourceURL=webpack://portfolio_page_webpack/./dist/weather-app.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;