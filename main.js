/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\nh1,\r\np {\r\n    text-shadow: 2px 2px 1px black;\r\n}\r\n\r\nbody {\r\n    font-family: \"Raleway\";\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10em;\r\n    padding: 1em;\r\n    margin-bottom: 2em;\r\n\r\n    color: white;\r\n}\r\n\r\n.header img {\r\n    width: 7.5em;\r\n    stroke: black 10px solid;\r\n}\r\n\r\n.title-container {\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    gap: 1em;\r\n}\r\n\r\n.title-container h1 {\r\n    font-size: 2em;\r\n}\r\n\r\n.header input {\r\n    height: 2em;\r\n    border-radius: 2em;\r\n    padding: 1em;\r\n}\r\n\r\n.primary-content-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 1em;\r\n    gap: 2em;\r\n    margin-right: 3em;\r\n}\r\n\r\n.primary-content-container h1 {\r\n    font-size: 3em;\r\n    text-shadow: none;\r\n}\r\n\r\n.weather-display {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(24vh, 1fr));\r\n    gap: 2em;\r\n}\r\n\r\n.weather-card {\r\n    border: 0.2em solid grey;\r\n    box-shadow: 10px 10px 10px grey;\r\n\r\n    color: white;\r\n\r\n    transition-duration: 1s;\r\n}\r\n\r\n.weather-card:hover {\r\n    transform: scale(1.2);\r\n    transition: 1s;\r\n}\r\n\r\n.inner-weather-card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    gap: 3em;\r\n    padding: 2em;\r\n\r\n    background-color: rgba(230,230,230, 0.2);\r\n}\r\n\r\n.weather-card img {\r\n    width: 4em;\r\n}\r\n\r\n.weather-card h1 {\r\n    font-size: 3em;\r\n}\r\n\r\n.secondary-content-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    gap: 2em;\r\n    padding-bottom: 4em;\r\n}\r\n\r\n.hour-display {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(8vh, 1fr));\r\n    gap: 1em;\r\n}\r\n\r\n.hour-card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: left;\r\n    gap: 3em;\r\n    padding: 1em;\r\n    padding-top: 4em;\r\n    padding-bottom: 4em;\r\n\r\n    background-color: rgba(230,230,230, 0.2);\r\n}\r\n\r\n.hour-card img {\r\n    width: 2em;\r\n}\r\n\r\n.hour-card h1 {\r\n    font-size: 1.5em;\r\n    text-shadow: none;\r\n}\r\n\r\n.hour-card p {\r\n    text-shadow: none;\r\n}\r\n\r\n.footer {\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    color: white;\r\n    text-align: center;\r\n\r\n    padding: 1.5em;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_partly_cloudy_day_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/partly-cloudy-day.png */ \"./src/images/partly-cloudy-day.png\");\n/* harmony import */ var _images_rain_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/rain.png */ \"./src/images/rain.png\");\n/* harmony import */ var _images_sunny_rain_cloudy_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/sunny-rain-cloudy.png */ \"./src/images/sunny-rain-cloudy.png\");\n/* harmony import */ var _images_sun_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/sun.png */ \"./src/images/sun.png\");\n/* harmony import */ var _images_rain_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/rain.gif */ \"./src/images/rain.gif\");\n/* harmony import */ var _images_sunny_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/sunny.gif */ \"./src/images/sunny.gif\");\n/* harmony import */ var _images_partlycloudyday_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/partlycloudyday.gif */ \"./src/images/partlycloudyday.gif\");\n/* harmony import */ var _weather_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./weather-api */ \"./src/weather-api.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet finalLocationData;\r\n\r\nfunction createHomePage() {\r\n    const main = document.getElementById(\"main\");\r\n    main.textContent = \"\";\r\n    main.appendChild(createHeader());\r\n    main.appendChild(createPrimaryContent(\"Gorsenion\"));\r\n    main.appendChild(createFooter());\r\n}\r\n\r\nfunction createHeader() {\r\n    const header = document.createElement(\"div\");\r\n    header.classList.add(\"header\");\r\n    header.style.backgroundImage = \"url(\" + _images_sunny_gif__WEBPACK_IMPORTED_MODULE_6__ + \")\";\r\n    header.style.backgroundRepeat = \"no-repeat\";\r\n    header.style.backgroundSize = \"cover\";\r\n    header.style.backgroundPositionY = \"50%\";\r\n    \r\n    const titleContainer = document.createElement(\"div\");\r\n    titleContainer.classList.add(\"title-container\");\r\n\r\n    const logo = document.createElement(\"img\");\r\n    logo.src = _images_partly_cloudy_day_png__WEBPACK_IMPORTED_MODULE_1__;\r\n    const title = document.createElement(\"h1\");\r\n    title.textContent = \"What's The Weather\";\r\n\r\n    titleContainer.appendChild(logo);\r\n    titleContainer.appendChild(title);\r\n\r\n    const searchBar = document.createElement(\"input\");\r\n    searchBar.type = \"search\";\r\n    searchBar.placeholder = \"location\";\r\n\r\n    searchBar.addEventListener('keydown', (event) => {\r\n        if (event.key == 'Enter') {\r\n            const main = document.getElementById(\"main\");\r\n            const oldMainContent = main.getElementsByClassName(\"primary-content-container\");\r\n            main.removeChild(oldMainContent[0]);\r\n            main.appendChild(createPrimaryContent(searchBar.value));\r\n            updateHeaderBackgroundImage();\r\n\r\n\r\n        }\r\n    }, false);\r\n\r\n    header.appendChild(titleContainer);\r\n    header.appendChild(searchBar);\r\n\r\n    return header;\r\n}\r\n\r\nfunction createPrimaryContent(chosenWeatherLocation) {\r\n\r\n    const locationData = (0,_weather_api__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(chosenWeatherLocation);\r\n    let secondaryContainer;\r\n    let currentDay = -1;\r\n\r\n    locationData.then(function(data) {\r\n        finalLocationData = data;\r\n        data.days.forEach(element => {\r\n            currentDay++;\r\n            const date = new Date(element.datetime);\r\n            const dayName = date.toLocaleDateString('en-US', {weekday: 'long'});\r\n\r\n            const weatherCard = createWeatherCard(element.icon, dayName, element.temp, element.description);\r\n            weatherCard.value = currentDay;\r\n            weatherCard.addEventListener(\"mouseenter\", () => {\r\n                secondaryContainer.textContent = \"\";\r\n                secondaryContainer.appendChild(createSecondaryContent(weatherCard.value));\r\n            }, false);\r\n            weatherDisplay.appendChild(weatherCard);\r\n        });\r\n\r\n        secondaryContainer = createSecondaryContent(0);\r\n        primaryContentContainer.appendChild(secondaryContainer);\r\n    })\r\n    const primaryContentContainer = document.createElement(\"div\");\r\n    primaryContentContainer.classList.add(\"primary-content-container\");\r\n\r\n    const weatherLocation = document.createElement(\"h1\");\r\n    weatherLocation.textContent = chosenWeatherLocation;\r\n\r\n    const weatherDisplay = document.createElement(\"div\");\r\n    weatherDisplay.classList.add(\"weather-display\");\r\n\r\n    primaryContentContainer.appendChild(weatherLocation);\r\n    primaryContentContainer.appendChild(weatherDisplay);\r\n\r\n    updateHeaderBackgroundImage();\r\n\r\n    return primaryContentContainer;\r\n}\r\n\r\nfunction createSecondaryContent(indexPos) {\r\n    const secondaryContentContainer = document.createElement(\"div\");\r\n    secondaryContentContainer.classList.add(\"secondary-content-container\");\r\n\r\n    const contentContainerTitle = document.createElement(\"h1\");\r\n    contentContainerTitle.textContent = \"Hour-by-Hour\";\r\n\r\n    const hourDisplay = document.createElement(\"div\");\r\n    hourDisplay.classList.add(\"hour-display\");\r\n\r\n    secondaryContentContainer.appendChild(contentContainerTitle);\r\n\r\n    const currentDate = new Date();\r\n    let currentHour;\r\n    if (indexPos != 0) {\r\n        currentHour = 9;\r\n    } else {\r\n        currentHour = currentDate.getHours();\r\n    }\r\n\r\n    for (let i=currentHour; i<24 && i<currentHour + 14; i++) {\r\n        const day = finalLocationData.days[indexPos].hours[i];\r\n        hourDisplay.appendChild(createHourCard(day.datetime, day.icon, day.temp, day.feelslike, day.precipprob, day.windspeed));\r\n    }\r\n\r\n    /*\r\n    locationData.days[0].hours.forEach(day => {\r\n        hourDisplay.appendChild(createHourCard(day.datetime, day.icon, day.temp, day.feelslike, day.tempmax, \r\n            day.tempmin, day.precipprob, day.windspeed));\r\n    });\r\n    */\r\n\r\n    secondaryContentContainer.appendChild(hourDisplay);\r\n    return secondaryContentContainer;\r\n}\r\n\r\nfunction createWeatherCard(weatherIcon, weatherDisplay, temperature, desc) {\r\n    const weatherCard = document.createElement(\"div\");\r\n    weatherCard.classList.add(\"weather-card\");\r\n    weatherCard.style.backgroundImage = \"url(\" + assignWeatherBackground(weatherIcon) + \")\";\r\n    weatherCard.style.backgroundPositionY = \"50%\";\r\n    weatherCard.style.backgroundRepeat = \"no-repeat\";\r\n    weatherCard.style.backgroundSize = \"cover\";\r\n\r\n    const innerWeatherCard = document.createElement(\"div\");\r\n    innerWeatherCard.classList.add(\"inner-weather-card\");\r\n\r\n    const weatherIconDisplay = document.createElement(\"img\");\r\n    weatherIconDisplay.src = assignWeatherIcon(weatherIcon);\r\n\r\n    const weatherDayDisplay = document.createElement(\"p\");\r\n    weatherDayDisplay.textContent = weatherDisplay;\r\n\r\n    const temperatureDisplay = document.createElement(\"h1\");\r\n    temperatureDisplay.textContent = temperature + \"°C\";\r\n\r\n    const weatherDescDisplay = document.createElement(\"p\");\r\n    weatherDescDisplay.textContent = desc;\r\n\r\n    innerWeatherCard.appendChild(weatherIconDisplay);\r\n    innerWeatherCard.appendChild(weatherDayDisplay);\r\n    innerWeatherCard.appendChild(temperatureDisplay);\r\n    innerWeatherCard.appendChild(weatherDescDisplay);\r\n\r\n    weatherCard.appendChild(innerWeatherCard);\r\n\r\n    return weatherCard;\r\n}\r\n\r\nfunction assignWeatherIcon(weatherDesc) {\r\n    switch(weatherDesc) {\r\n        case \"partly-cloudy-day\": return _images_partly_cloudy_day_png__WEBPACK_IMPORTED_MODULE_1__;\r\n        case \"rain\": return _images_rain_png__WEBPACK_IMPORTED_MODULE_2__;\r\n        default: return _images_sun_png__WEBPACK_IMPORTED_MODULE_4__;\r\n    }\r\n}\r\n\r\nfunction assignWeatherBackground(weatherDesc) {\r\n    switch(weatherDesc) {\r\n        case \"partly-cloudy-day\": return _images_partlycloudyday_gif__WEBPACK_IMPORTED_MODULE_7__;\r\n        case \"rain\": return _images_rain_gif__WEBPACK_IMPORTED_MODULE_5__;\r\n        case \"sunny\": return _images_sunny_gif__WEBPACK_IMPORTED_MODULE_6__;\r\n        case \"clear-day\": return _images_sunny_gif__WEBPACK_IMPORTED_MODULE_6__;\r\n    }\r\n}\r\n\r\nfunction createHourCard(time, weatherIcon, temperature, feelsLikeTemp, precipatationPercentage, windSpeed) {\r\n    const hourCard = document.createElement(\"div\");\r\n    hourCard.classList.add(\"hour-card\");\r\n\r\n    const timeDisplay = document.createElement(\"h1\");\r\n    timeDisplay.textContent = time;\r\n\r\n    const weatherIconDisplay = document.createElement(\"img\");\r\n    weatherIconDisplay.src = assignWeatherIcon(weatherIcon);\r\n\r\n    const infoSection = document.createElement(\"div\");\r\n    infoSection.classList.add(\"info-section\");\r\n\r\n    const temperatureDisplay = document.createElement(\"p\");\r\n    temperatureDisplay.textContent = \"Temperature: \" + temperature + \"°C\";\r\n\r\n    const feelsLikeTempDisplay = document.createElement(\"p\");\r\n    feelsLikeTempDisplay.textContent = \"Feels Like Temp: \" + feelsLikeTemp + \"°C\";\r\n\r\n    /*\r\n    const maxTempDisplay = document.createElement(\"p\");\r\n    maxTempDisplay.textContent = \"Max Temp: \" + maxTemp;\r\n\r\n    const minTempDisplay = document.createElement(\"p\");\r\n    minTempDisplay.textContent = \"Min Temp: \" + minTemp;\r\n    */\r\n\r\n    const precipatationPercentageDisplay = document.createElement(\"p\");\r\n    precipatationPercentageDisplay.textContent = \"Precipatation: \" + precipatationPercentage + \"%\";\r\n\r\n    const windSpeedDisplay = document.createElement(\"p\");\r\n    windSpeedDisplay.textContent = \"Wind Speed: \" + windSpeed + \"mph\";\r\n\r\n    infoSection.append(temperatureDisplay, feelsLikeTempDisplay,\r\n        precipatationPercentageDisplay, windSpeedDisplay);\r\n    \r\n    hourCard.append(timeDisplay, weatherIconDisplay, infoSection);\r\n\r\n    return hourCard;\r\n\r\n}\r\n\r\nfunction updateHeaderBackgroundImage() {\r\n    const header = document.getElementsByClassName(\"header\");\r\n    const weatherCards = document.getElementsByClassName(\"weather-card\");\r\n    header[0].style.backgroundImage = weatherCards[0];\r\n    console.log(\"Update Header\");\r\n}\r\n\r\nfunction createFooter() {  \r\n    const footer = document.createElement(\"div\");\r\n    footer.classList.add(\"footer\");\r\n    footer.style.backgroundImage = \"url(\" + _images_sunny_gif__WEBPACK_IMPORTED_MODULE_6__ + \")\";\r\n    footer.style.backgroundRepeat = \"no-repeat\";\r\n    footer.style.backgroundSize = \"cover\";\r\n    footer.style.backgroundPositionY = \"100%\";\r\n\r\n    const footerPara = document.createElement(\"p\");\r\n    footerPara.textContent = \"© Samuel Davies 2024\";\r\n\r\n    footer.appendChild(footerPara);\r\n    return footer;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);\n\n//# sourceURL=webpack://weather-app/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-api */ \"./src/weather-api.js\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n\r\n\r\n\r\n(0,_weather_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Gorsenion\");\r\n\r\n(0,_homepage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weather-api.js":
/*!****************************!*\
  !*** ./src/weather-api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function getLocationData(locationName) {\r\n    const currentDate = new Date();\r\n\r\n    const fullDate = currentDate.getFullYear() + \"-\" + (currentDate.getMonth() + 1) + \"-\" + currentDate.getDate();\r\n    currentDate.setDate(currentDate.getDate() + 6);\r\n\r\n    const nextDate = currentDate.getFullYear() + \"-\" + (currentDate.getMonth() + 1) + \"-\" + currentDate.getDate();\r\n    const locationResponse = await fetch(\"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/\" + locationName + \"/\" + fullDate + \"/\" + nextDate + \"?unitGroup=uk&key=UJVP6Z9DLEQQ25GKMYZWUYW2T\", {mode: \"cors\"});\r\n    return locationResponse.json();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLocationData);\n\n//# sourceURL=webpack://weather-app/./src/weather-api.js?");

/***/ }),

/***/ "./src/images/partly-cloudy-day.png":
/*!******************************************!*\
  !*** ./src/images/partly-cloudy-day.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a6d0b7d87d2022baaf47.png\";\n\n//# sourceURL=webpack://weather-app/./src/images/partly-cloudy-day.png?");

/***/ }),

/***/ "./src/images/partlycloudyday.gif":
/*!****************************************!*\
  !*** ./src/images/partlycloudyday.gif ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"15621d256da84055d00a.gif\";\n\n//# sourceURL=webpack://weather-app/./src/images/partlycloudyday.gif?");

/***/ }),

/***/ "./src/images/rain.gif":
/*!*****************************!*\
  !*** ./src/images/rain.gif ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9d8fcb1a62cd2c442456.gif\";\n\n//# sourceURL=webpack://weather-app/./src/images/rain.gif?");

/***/ }),

/***/ "./src/images/rain.png":
/*!*****************************!*\
  !*** ./src/images/rain.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cfc1c8ddf2b3bcb98cec.png\";\n\n//# sourceURL=webpack://weather-app/./src/images/rain.png?");

/***/ }),

/***/ "./src/images/sun.png":
/*!****************************!*\
  !*** ./src/images/sun.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b972dcf61eb381f03551.png\";\n\n//# sourceURL=webpack://weather-app/./src/images/sun.png?");

/***/ }),

/***/ "./src/images/sunny-rain-cloudy.png":
/*!******************************************!*\
  !*** ./src/images/sunny-rain-cloudy.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f009e441a604361a2783.png\";\n\n//# sourceURL=webpack://weather-app/./src/images/sunny-rain-cloudy.png?");

/***/ }),

/***/ "./src/images/sunny.gif":
/*!******************************!*\
  !*** ./src/images/sunny.gif ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f3a0fa43b78581207ba5.gif\";\n\n//# sourceURL=webpack://weather-app/./src/images/sunny.gif?");

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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