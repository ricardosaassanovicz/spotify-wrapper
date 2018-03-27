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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\r\n\tif (!originalModule.webpackPolyfill) {\r\n\t\tvar module = Object.create(originalModule);\r\n\t\t// module.parent = undefined by default\r\n\t\tif (!module.children) module.children = [];\r\n\t\tObject.defineProperty(module, \"loaded\", {\r\n\t\t\tenumerable: true,\r\n\t\t\tget: function() {\r\n\t\t\t\treturn module.l;\r\n\t\t\t}\r\n\t\t});\r\n\t\tObject.defineProperty(module, \"id\", {\r\n\t\t\tenumerable: true,\r\n\t\t\tget: function() {\r\n\t\t\t\treturn module.i;\r\n\t\t\t}\r\n\t\t});\r\n\t\tObject.defineProperty(module, \"exports\", {\r\n\t\t\tenumerable: true\r\n\t\t});\r\n\t\tmodule.webpackPolyfill = 1;\r\n\t}\r\n\treturn module;\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzPzgyYjAiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xyXG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWVcclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/webpack/buildin/harmony-module.js\n");

/***/ }),

/***/ "./src/album.js":
/*!**********************!*\
  !*** ./src/album.js ***!
  \**********************/
/*! exports provided: getAlbum, getAlbums, getAlbumTracks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAlbum\", function() { return getAlbum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAlbums\", function() { return getAlbums; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAlbumTracks\", function() { return getAlbumTracks; });\n/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/config */ \"./src/config.js\");\n/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/utils */ \"./src/utils.js\");\n\n\n\nconst getAlbum = (id) => \n  fetch(`${_src_config__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"]}/albums/${id}`).then(_src_utils__WEBPACK_IMPORTED_MODULE_1__[\"toJSON\"]);\n\nconst getAlbums = (ids) => \n  fetch(`${_src_config__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"]}/albums?ids=${ids}`).then(_src_utils__WEBPACK_IMPORTED_MODULE_1__[\"toJSON\"]);\n\nconst getAlbumTracks = (id) => \n  fetch(`${_src_config__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"]}/albums/${id}/track`).then(_src_utils__WEBPACK_IMPORTED_MODULE_1__[\"toJSON\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWxidW0uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWxidW0uanM/ZmRhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi4vc3JjL2NvbmZpZyc7XG5pbXBvcnQgeyB0b0pTT04gfSBmcm9tICcuLi9zcmMvdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgZ2V0QWxidW0gPSAoaWQpID0+IFxuICBmZXRjaChgJHtBUElfVVJMfS9hbGJ1bXMvJHtpZH1gKS50aGVuKHRvSlNPTik7XG5cbmV4cG9ydCBjb25zdCBnZXRBbGJ1bXMgPSAoaWRzKSA9PiBcbiAgZmV0Y2goYCR7QVBJX1VSTH0vYWxidW1zP2lkcz0ke2lkc31gKS50aGVuKHRvSlNPTik7XG5cbmV4cG9ydCBjb25zdCBnZXRBbGJ1bVRyYWNrcyA9IChpZCkgPT4gXG4gIGZldGNoKGAke0FQSV9VUkx9L2FsYnVtcy8ke2lkfS90cmFja2ApLnRoZW4odG9KU09OKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/album.js\n");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL\", function() { return API_URL; });\nconst API_URL = 'https://api.spotify.com/v1';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcz9kYjQ5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBUElfVVJMID0gJ2h0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxJzsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _src_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/search */ \"./src/search.js\");\n/* harmony import */ var _src_album__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/album */ \"./src/album.js\");\n\n\n\n\nmodule.exports = {\n  search: _src_search__WEBPACK_IMPORTED_MODULE_0__[\"search\"],\n  searchAlbums: _src_search__WEBPACK_IMPORTED_MODULE_0__[\"searchAlbums\"],\n  searchArtists: _src_search__WEBPACK_IMPORTED_MODULE_0__[\"searchArtists\"],\n  searchPlaylists: _src_search__WEBPACK_IMPORTED_MODULE_0__[\"searchPlaylists\"],\n  searchTracks: _src_search__WEBPACK_IMPORTED_MODULE_0__[\"searchTracks\"],\n  getAlbum: _src_album__WEBPACK_IMPORTED_MODULE_1__[\"getAlbum\"],\n  getAlbums: _src_album__WEBPACK_IMPORTED_MODULE_1__[\"getAlbums\"],\n  getAlbumTracks: _src_album__WEBPACK_IMPORTED_MODULE_1__[\"getAlbumTracks\"],\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBzZWFyY2gsXG4gIHNlYXJjaEFsYnVtcyxcbiAgc2VhcmNoQXJ0aXN0cyxcbiAgc2VhcmNoUGxheWxpc3RzLFxuICBzZWFyY2hUcmFja3MsXG59IGZyb20gJy4uL3NyYy9zZWFyY2gnO1xuXG5pbXBvcnQge1xuICBnZXRBbGJ1bSxcbiAgZ2V0QWxidW1zLFxuICBnZXRBbGJ1bVRyYWNrcyxcbn0gZnJvbSAnLi4vc3JjL2FsYnVtJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNlYXJjaCxcbiAgc2VhcmNoQWxidW1zLFxuICBzZWFyY2hBcnRpc3RzLFxuICBzZWFyY2hQbGF5bGlzdHMsXG4gIHNlYXJjaFRyYWNrcyxcbiAgZ2V0QWxidW0sXG4gIGdldEFsYnVtcyxcbiAgZ2V0QWxidW1UcmFja3MsXG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/*! exports provided: search, searchAlbums, searchArtists, searchTracks, searchPlaylists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"search\", function() { return search; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchAlbums\", function() { return searchAlbums; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchArtists\", function() { return searchArtists; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchTracks\", function() { return searchTracks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchPlaylists\", function() { return searchPlaylists; });\n/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/config */ \"./src/config.js\");\n/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/utils */ \"./src/utils.js\");\n\n\n\nconst token = 'BQD8JyQaNnhT5xA2LJRUtyENxTqtfzRiSoCTdAgDYNB_M6PPXCyE1A_XfTjyK1lAQvtz1frZVbBSkegsmqC82QR6jugsvWiGvSYRWPoZRpcCYd4eGFm99st7KYI-mHEhMhv9DWWtp7-PLUFZe-Pb1Pe4fw';\n\nconst search = (query, type) => \n  fetch(`${_src_config__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"]}/search?q=${query}&type=${type}`, {\n    method: 'GET',\n    headers: {\n        Accept: 'application/json',\n        Authorization : 'Bearer ' + token\n    }\n  }).then(_src_utils__WEBPACK_IMPORTED_MODULE_1__[\"toJSON\"]);\n\nconst searchAlbums = (query) => \n  search(query, 'album');\n\nconst searchArtists = (query) => \n  search(query, 'artist');\n\nconst searchTracks = (query) => \n  search(query, 'track');\n\nconst searchPlaylists = (query) => \n  search(query, 'playlist');\n\n //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VhcmNoLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NlYXJjaC5qcz8zMjU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuLi9zcmMvY29uZmlnJztcbmltcG9ydCB7IHRvSlNPTiB9IGZyb20gJy4uL3NyYy91dGlscyc7XG5cbmNvbnN0IHRva2VuID0gJ0JRRDhKeVFhTm5oVDV4QTJMSlJVdHlFTnhUcXRmelJpU29DVGRBZ0RZTkJfTTZQUFhDeUUxQV9YZlRqeUsxbEFRdnR6MWZyWlZiQlNrZWdzbXFDODJRUjZqdWdzdldpR3ZTWVJXUG9aUnBjQ1lkNGVHRm05OXN0N0tZSS1tSEVoTWh2OURXV3RwNy1QTFVGWmUtUGIxUGU0ZncnO1xuXG5leHBvcnQgY29uc3Qgc2VhcmNoID0gKHF1ZXJ5LCB0eXBlKSA9PiBcbiAgZmV0Y2goYCR7QVBJX1VSTH0vc2VhcmNoP3E9JHtxdWVyeX0mdHlwZT0ke3R5cGV9YCwge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgQXV0aG9yaXphdGlvbiA6ICdCZWFyZXIgJyArIHRva2VuXG4gICAgfVxuICB9KS50aGVuKHRvSlNPTik7XG5cbmV4cG9ydCBjb25zdCBzZWFyY2hBbGJ1bXMgPSAocXVlcnkpID0+IFxuICBzZWFyY2gocXVlcnksICdhbGJ1bScpO1xuXG5leHBvcnQgY29uc3Qgc2VhcmNoQXJ0aXN0cyA9IChxdWVyeSkgPT4gXG4gIHNlYXJjaChxdWVyeSwgJ2FydGlzdCcpO1xuXG5leHBvcnQgY29uc3Qgc2VhcmNoVHJhY2tzID0gKHF1ZXJ5KSA9PiBcbiAgc2VhcmNoKHF1ZXJ5LCAndHJhY2snKTtcblxuZXhwb3J0IGNvbnN0IHNlYXJjaFBsYXlsaXN0cyA9IChxdWVyeSkgPT4gXG4gIHNlYXJjaChxdWVyeSwgJ3BsYXlsaXN0Jyk7XG5cbiAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/search.js\n");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: toJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toJSON\", function() { return toJSON; });\nconst toJSON = (data) => data.json();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanM/MDI1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdG9KU09OID0gKGRhdGEpID0+IGRhdGEuanNvbigpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils.js\n");

/***/ })

/******/ });