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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

  eval("function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nwindow.onload = function () {\n  var storageSupported = typeof Storage !== \"undefined\" ? true : false,\n      themeSwitch = document.querySelector('#theme-switch'),\n      htmlElement = document.querySelector('html'),\n      dateTime = document.querySelector('#date-time'),\n      infoSection = document.querySelectorAll('.info-section'),\n      themeBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-1');\n  metaTheme = document.querySelector('meta[name=\"theme-color\"]');\n  metaTheme.setAttribute('content', themeBackgroundColor);\n\n  var setThemeToLocalSession = function setThemeToLocalSession(theme) {\n    if (storageSupported) {\n      window.localStorage.setItem('theme', theme);\n    }\n  };\n\n  var setTheme = function setTheme(theme) {\n    htmlElement.setAttribute('theme', theme);\n    themeBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-1');\n    metaTheme = document.querySelector('meta[name=\"theme-color\"]');\n    metaTheme.setAttribute('content', themeBackgroundColor);\n    setThemeToLocalSession(theme);\n  };\n\n  if (themeSwitch) {\n    themeSwitch.addEventListener('click', function (event) {\n      currentTheme = htmlElement.getAttribute('theme');\n\n      if (currentTheme === 'light') {\n        setTheme('dark');\n      } else {\n        setTheme('light');\n      }\n    });\n  }\n\n  if (infoSection) {\n    var _iterator = _createForOfIteratorHelper(infoSection.entries()),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var _step$value = _slicedToArray(_step.value, 2),\n            index = _step$value[0],\n            element = _step$value[1];\n\n        element.addEventListener('scroll', function (event) {\n          event.preventDefault();\n          console.log('event');\n        });\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  }\n\n  if (dateTime) {\n    setInterval(function () {\n      var dateTimeObject = new Date();\n      dateTime.innerHTML = dateTimeObject;\n    }, 1000);\n  }\n\n  if (storageSupported) {\n    var storedTheme = window.localStorage.getItem('theme');\n\n    if (storedTheme) {\n      setTheme(storedTheme);\n    } else {\n      setTheme('dark');\n    }\n  }\n  /* ---- particles.js config ---- */\n\n\n  particlesJS(\"particles\", {\n    \"particles\": {\n      \"number\": {\n        \"value\": 50,\n        \"density\": {\n          \"enable\": true,\n          \"value_area\": 800\n        }\n      },\n      \"color\": {\n        \"value\": \"#3d7fc5\"\n      },\n      \"shape\": {\n        \"type\": \"circle\",\n        \"stroke\": {\n          \"width\": 0,\n          \"color\": \"#000000\"\n        },\n        \"polygon\": {\n          \"nb_sides\": 5\n        },\n        \"image\": {\n          \"src\": \"img/github.svg\",\n          \"width\": 100,\n          \"height\": 100\n        }\n      },\n      \"opacity\": {\n        \"value\": 0.5,\n        \"random\": false,\n        \"anim\": {\n          \"enable\": false,\n          \"speed\": 1,\n          \"opacity_min\": 0.1,\n          \"sync\": false\n        }\n      },\n      \"size\": {\n        \"value\": 5,\n        \"random\": true,\n        \"anim\": {\n          \"enable\": false,\n          \"speed\": 10,\n          \"size_min\": 0.1,\n          \"sync\": false\n        }\n      },\n      \"line_linked\": {\n        \"enable\": true,\n        \"distance\": 150,\n        \"color\": \"#888888\",\n        \"opacity\": 0.4,\n        \"width\": 1\n      },\n      \"move\": {\n        \"enable\": true,\n        \"speed\": 4,\n        \"direction\": \"none\",\n        \"random\": false,\n        \"straight\": false,\n        \"out_mode\": \"out\",\n        \"bounce\": false,\n        \"attract\": {\n          \"enable\": false,\n          \"rotateX\": 600,\n          \"rotateY\": 1200\n        }\n      }\n    },\n    \"interactivity\": {\n      \"detect_on\": \"canvas\",\n      \"events\": {\n        \"onhover\": {\n          \"enable\": true,\n          \"mode\": \"grab\"\n        },\n        \"onclick\": {\n          \"enable\": true,\n          \"mode\": \"push\"\n        },\n        \"resize\": true\n      },\n      \"modes\": {\n        \"grab\": {\n          \"distance\": 140,\n          \"line_linked\": {\n            \"opacity\": 1\n          }\n        },\n        \"bubble\": {\n          \"distance\": 600,\n          \"size\": 40,\n          \"duration\": 2,\n          \"opacity\": 8,\n          \"speed\": 3\n        },\n        \"repulse\": {\n          \"distance\": 200,\n          \"duration\": 0.4\n        },\n        \"push\": {\n          \"particles_nb\": 4\n        },\n        \"remove\": {\n          \"particles_nb\": 2\n        }\n      }\n    },\n    \"retina_detect\": true\n  });\n};\n\n//# sourceURL=webpack://WebProfiler/./src/js/index.js?");

  /***/ }),
  
  /***/ "./src/css/main.scss":
  /*!***************************!*\
    !*** ./src/css/main.scss ***!
    \***************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"css/main.css\");\n\n//# sourceURL=webpack://WebProfiler/./src/css/main.scss?");
  
  /***/ })
  
  /******/ 	});
  /************************************************************************/
  /******/ 	// The require scope
  /******/ 	var __webpack_require__ = {};
  /******/ 	
  /************************************************************************/
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
  /******/ 		__webpack_require__.p = scriptUrl + "../";
  /******/ 	})();
  /******/ 	
  /************************************************************************/
  /******/ 	
  /******/ 	// startup
  /******/ 	// Load entry module and return exports
  /******/ 	// This entry module can't be inlined because the eval devtool is used.
  /******/ 	__webpack_modules__["./src/js/index.js"](0, {}, __webpack_require__);
  /******/ 	var __webpack_exports__ = {};
  /******/ 	__webpack_modules__["./src/css/main.scss"](0, __webpack_exports__, __webpack_require__);
  /******/ 	
  /******/ })()
  ;