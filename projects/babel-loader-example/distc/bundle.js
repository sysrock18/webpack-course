/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./babel-loader-example/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./babel-loader-example/estilos.css":
/*!******************************************!*\
  !*** ./babel-loader-example/estilos.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./babel-loader-example/estilos.css?");

/***/ }),

/***/ "./babel-loader-example/index.js":
/*!***************************************!*\
  !*** ./babel-loader-example/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./estilos.css */ \"./babel-loader-example/estilos.css\");\n\nvar _message = __webpack_require__(/*! ./message.js */ \"./babel-loader-example/message.js\");\n\ndocument.write(_message.firstMessage);\n(0, _message.delayedMessage)();\n\nconsole.log('Hola desde el config external');\n\n//# sourceURL=webpack:///./babel-loader-example/index.js?");

/***/ }),

/***/ "./babel-loader-example/make-message.js":
/*!**********************************************!*\
  !*** ./babel-loader-example/make-message.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction makeMessage(message) {\n  var element = document.createElement('p');\n  element.textContent = message;\n\n  return element;\n}\n\nexports.default = makeMessage;\n\n//# sourceURL=webpack:///./babel-loader-example/make-message.js?");

/***/ }),

/***/ "./babel-loader-example/message.js":
/*!*****************************************!*\
  !*** ./babel-loader-example/message.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _renderToDom = __webpack_require__(/*! ./render-to-dom */ \"./babel-loader-example/render-to-dom.js\");\n\nvar _renderToDom2 = _interopRequireDefault(_renderToDom);\n\nvar _makeMessage = __webpack_require__(/*! ./make-message */ \"./babel-loader-example/make-message.js\");\n\nvar _makeMessage2 = _interopRequireDefault(_makeMessage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// new Promise(Funcion todoOK, Funcion todoMal)\nvar waitTime = new Promise(function (todoOK, todoMal) {\n  setTimeout(function () {\n    todoOK('han pasado 3 segundos');\n  }, 3000);\n});\n\nmodule.exports = {\n  firstMessage: 'Hola mundo desde un modulo',\n  delayedMessage: async function delayedMessage() {\n    var message = await waitTime;\n    console.log('Hola este es un mensaje tardado');\n\n    (0, _renderToDom2.default)((0, _makeMessage2.default)(message));\n  }\n};\n\n//# sourceURL=webpack:///./babel-loader-example/message.js?");

/***/ }),

/***/ "./babel-loader-example/render-to-dom.js":
/*!***********************************************!*\
  !*** ./babel-loader-example/render-to-dom.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function renderToDom(el) {\n  document.body.append(el);\n};\n\n//# sourceURL=webpack:///./babel-loader-example/render-to-dom.js?");

/***/ })

/******/ });