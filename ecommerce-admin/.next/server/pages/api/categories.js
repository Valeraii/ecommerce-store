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
exports.id = "pages/api/categories";
exports.ids = ["pages/api/categories"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./lib/mongoose.js":
/*!*************************!*\
  !*** ./lib/mongoose.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mongooseConnect\": () => (/* binding */ mongooseConnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction mongooseConnect() {\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) === 1) {\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();\n    } else {\n        const uri = process.env.MONGODB_URI;\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29vc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLFNBQVNDO0lBQ1osSUFBSUQsdUVBQThCRyxLQUFLLEdBQUc7UUFDdEMsT0FBT0gsb0VBQTZCSTtJQUN4QyxPQUFPO1FBQ0gsTUFBTUMsTUFBTUMsUUFBUUMsSUFBSUM7UUFDeEIsT0FBT1IsdURBQWdCUyxDQUFDSjtJQUM1QjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLWFkbWluLy4vbGliL21vbmdvb3NlLmpzPzE2M2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vbmdvb3NlQ29ubmVjdCgpIHtcclxuICAgIGlmIChtb25nb29zZS5jb25uZWN0aW9uLnJlYWR5U3RhdGUgPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdGlvbi5hc1Byb21pc2UoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XHJcbiAgICAgICAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3QodXJpKTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJtb25nb29zZSIsIm1vbmdvb3NlQ29ubmVjdCIsImNvbm5lY3Rpb24iLCJyZWFkeVN0YXRlIiwiYXNQcm9taXNlIiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/mongoose.js\n");

/***/ }),

/***/ "(api)/./models/Category.js":
/*!****************************!*\
  !*** ./models/Category.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Category\": () => (/* binding */ Category)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CategorySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    parent: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId),\n        ref: \"Category\"\n    }\n});\nconst Category = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.Category || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Category\", CategorySchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvQ2F0ZWdvcnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJEO0FBRTNELE1BQU1JLGlCQUFpQixJQUFJSCw0Q0FBTUEsQ0FBQztJQUM5QkksTUFBTTtRQUFDQyxNQUFNQztRQUFRQyxVQUFVO0lBQUk7SUFDbkNDLFFBQVE7UUFBQ0gsTUFBTU4sZ0VBQXVCVztRQUFFQyxLQUFLO0lBQVU7QUFDM0Q7QUFFTyxNQUFNQyxXQUFXViw0Q0FBTUEsRUFBRVUsWUFBWVgsK0NBQUtBLENBQUMsWUFBWUUsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLWFkbWluLy4vbW9kZWxzL0NhdGVnb3J5LmpzPzRjODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSwgbW9kZWwsIG1vZGVscyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgQ2F0ZWdvcnlTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICAgIG5hbWU6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcclxuICAgIHBhcmVudDoge3R5cGU6IG1vbmdvb3NlLlR5cGVzLk9iamVjdElkLCByZWY6ICdDYXRlZ29yeSd9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhdGVnb3J5ID0gbW9kZWxzPy5DYXRlZ29yeSB8fCBtb2RlbCgnQ2F0ZWdvcnknLCBDYXRlZ29yeVNjaGVtYSk7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwibW9kZWwiLCJtb2RlbHMiLCJDYXRlZ29yeVNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJwYXJlbnQiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwiQ2F0ZWdvcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/Category.js\n");

/***/ }),

/***/ "(api)/./pages/api/categories.js":
/*!*********************************!*\
  !*** ./pages/api/categories.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _models_Category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/Category */ \"(api)/./models/Category.js\");\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n\n\nasync function handle(req, res) {\n    const method = req.method;\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_1__.mongooseConnect)();\n    if (method == \"POST\") {\n        const { name , parentCategory  } = req.body;\n        const categoryDoc = await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.create({\n            name,\n            parent: parentCategory\n        });\n        res.json(categoryDoc);\n    }\n    if (method == \"GET\") {\n        res.json(await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.find().populate(\"parent\"));\n    }\n    if (method == \"PUT\") {\n        const { name , parentCategory , _id  } = req.body;\n        const categoryDoc = await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.updateOne({\n            _id\n        }, {\n            name,\n            parent: parentCategory\n        });\n        res.json(categoryDoc);\n    }\n    if (method == \"DELETE\") {\n        const { _id  } = req.query;\n        await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.deleteOne({\n            _id\n        });\n        res.json(\"ok\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFDSTtBQUVsQyxlQUFlRSxPQUFPQyxHQUFHLEVBQUVDLEdBQUc7SUFDekMsTUFBTUMsU0FBU0YsSUFBSUU7SUFDbkIsTUFBTUosOERBQWVBO0lBRXJCLElBQUlJLFVBQVUsUUFBUTtRQUNsQixNQUFNLEVBQUNDLEtBQUksRUFBRUMsZUFBYyxFQUFDLEdBQUdKLElBQUlLO1FBQ25DLE1BQU1DLGNBQWMsTUFBTVQsNkRBQWVVLENBQUM7WUFBQ0o7WUFBTUssUUFBT0o7UUFBYztRQUN0RUgsSUFBSVEsS0FBS0g7SUFDYjtJQUVBLElBQUlKLFVBQVUsT0FBTztRQUNqQkQsSUFBSVEsS0FBSyxNQUFNWiwyREFBYWEsR0FBR0MsU0FBUztJQUM1QztJQUVBLElBQUlULFVBQVUsT0FBTztRQUNqQixNQUFNLEVBQUNDLEtBQUksRUFBRUMsZUFBYyxFQUFFUSxJQUFHLEVBQUMsR0FBR1osSUFBSUs7UUFDeEMsTUFBTUMsY0FBYyxNQUFNVCxnRUFBa0JnQixDQUFDO1lBQUNEO1FBQUcsR0FBRztZQUFDVDtZQUFNSyxRQUFPSjtRQUFjO1FBQ2hGSCxJQUFJUSxLQUFLSDtJQUNiO0lBRUEsSUFBSUosVUFBVSxVQUFVO1FBQ3BCLE1BQU0sRUFBQ1UsSUFBRyxFQUFDLEdBQUdaLElBQUljO1FBQ2xCLE1BQU1qQixnRUFBa0JrQixDQUFDO1lBQUNIO1FBQUc7UUFDN0JYLElBQUlRLEtBQUs7SUFDYjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLWFkbWluLy4vcGFnZXMvYXBpL2NhdGVnb3JpZXMuanM/NjhkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gXCJAL21vZGVscy9DYXRlZ29yeVwiO1xyXG5pbXBvcnQgeyBtb25nb29zZUNvbm5lY3QgfSBmcm9tIFwiQC9saWIvbW9uZ29vc2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEsIHJlcykge1xyXG4gICAgY29uc3QgbWV0aG9kID0gcmVxLm1ldGhvZDtcclxuICAgIGF3YWl0IG1vbmdvb3NlQ29ubmVjdCgpO1xyXG5cclxuICAgIGlmIChtZXRob2QgPT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgY29uc3Qge25hbWUsIHBhcmVudENhdGVnb3J5fSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5RG9jID0gYXdhaXQgQ2F0ZWdvcnkuY3JlYXRlKHtuYW1lLCBwYXJlbnQ6cGFyZW50Q2F0ZWdvcnl9KTtcclxuICAgICAgICByZXMuanNvbihjYXRlZ29yeURvYyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1ldGhvZCA9PSAnR0VUJykge1xyXG4gICAgICAgIHJlcy5qc29uKGF3YWl0IENhdGVnb3J5LmZpbmQoKS5wb3B1bGF0ZSgncGFyZW50JykpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtZXRob2QgPT0gJ1BVVCcpIHtcclxuICAgICAgICBjb25zdCB7bmFtZSwgcGFyZW50Q2F0ZWdvcnksIF9pZH0gPSByZXEuYm9keTtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeURvYyA9IGF3YWl0IENhdGVnb3J5LnVwZGF0ZU9uZSh7X2lkfSwge25hbWUsIHBhcmVudDpwYXJlbnRDYXRlZ29yeX0pO1xyXG4gICAgICAgIHJlcy5qc29uKGNhdGVnb3J5RG9jKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWV0aG9kID09ICdERUxFVEUnKSB7XHJcbiAgICAgICAgY29uc3Qge19pZH0gPSByZXEucXVlcnk7XHJcbiAgICAgICAgYXdhaXQgQ2F0ZWdvcnkuZGVsZXRlT25lKHtfaWR9KTtcclxuICAgICAgICByZXMuanNvbignb2snKTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJDYXRlZ29yeSIsIm1vbmdvb3NlQ29ubmVjdCIsImhhbmRsZSIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm5hbWUiLCJwYXJlbnRDYXRlZ29yeSIsImJvZHkiLCJjYXRlZ29yeURvYyIsImNyZWF0ZSIsInBhcmVudCIsImpzb24iLCJmaW5kIiwicG9wdWxhdGUiLCJfaWQiLCJ1cGRhdGVPbmUiLCJxdWVyeSIsImRlbGV0ZU9uZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/categories.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/categories.js"));
module.exports = __webpack_exports__;

})();