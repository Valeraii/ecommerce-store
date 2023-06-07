"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/upload";
exports.ids = ["pages/api/upload"];
exports.modules = {

/***/ "multiparty":
/*!*****************************!*\
  !*** external "multiparty" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("multiparty");

/***/ }),

/***/ "(api)/./pages/api/upload.js":
/*!*****************************!*\
  !*** ./pages/api/upload.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiparty */ \"multiparty\");\n/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multiparty__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handle(req, res) {\n    const form = new (multiparty__WEBPACK_IMPORTED_MODULE_0___default().Form)();\n    const { fields , files  } = await new Promise((resolve, reject)=>{\n        form.parse(req, (err, fields, files)=>{\n            if (err) reject(err);\n            resolve({\n                fields,\n                files\n            });\n        });\n    });\n    console.log(\"length\", files.file.length);\n    return res.json(\"ok\");\n}\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBb0M7QUFFckIsZUFBZUMsT0FBT0MsR0FBRyxFQUFFQyxHQUFHO0lBQ3pDLE1BQU1DLE9BQU8sSUFBSUosd0RBQWVLO0lBQ2hDLE1BQU0sRUFBQ0MsT0FBTSxFQUFFQyxNQUFLLEVBQUMsR0FBRyxNQUFNLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0M7UUFDaEROLEtBQUtPLE1BQU1ULEtBQUssQ0FBQ1UsS0FBS04sUUFBUUM7WUFDMUIsSUFBSUssS0FBS0YsT0FBT0U7WUFDaEJILFFBQVE7Z0JBQUNIO2dCQUFRQztZQUFLO1FBQzFCO0lBQ0o7SUFDQU0sUUFBUUMsSUFBSSxVQUFVUCxNQUFNUSxLQUFLQztJQUNqQyxPQUFPYixJQUFJYyxLQUFLO0FBQ3BCO0FBRU8sTUFBTUMsU0FBUztJQUNsQkMsS0FBSztRQUFDQyxZQUFZO0lBQUs7QUFDM0IsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1hZG1pbi8uL3BhZ2VzL2FwaS91cGxvYWQuanM/NTU3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXVsdGlwYXJ0eSBmcm9tICdtdWx0aXBhcnR5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEsIHJlcykge1xyXG4gICAgY29uc3QgZm9ybSA9IG5ldyBtdWx0aXBhcnR5LkZvcm0oKTtcclxuICAgIGNvbnN0IHtmaWVsZHMsIGZpbGVzfSA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBmb3JtLnBhcnNlKHJlcSwgKGVyciwgZmllbGRzLCBmaWxlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7ZmllbGRzLCBmaWxlc30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZygnbGVuZ3RoJywgZmlsZXMuZmlsZS5sZW5ndGgpO1xyXG4gICAgcmV0dXJuIHJlcy5qc29uKCdvaycpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gICAgYXBpOiB7Ym9keVBhcnNlcjogZmFsc2V9LFxyXG59OyJdLCJuYW1lcyI6WyJtdWx0aXBhcnR5IiwiaGFuZGxlIiwicmVxIiwicmVzIiwiZm9ybSIsIkZvcm0iLCJmaWVsZHMiLCJmaWxlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicGFyc2UiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZmlsZSIsImxlbmd0aCIsImpzb24iLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/upload.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/upload.js"));
module.exports = __webpack_exports__;

})();