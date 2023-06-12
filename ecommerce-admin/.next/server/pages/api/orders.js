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
exports.id = "pages/api/orders";
exports.ids = ["pages/api/orders"];
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

/***/ "(api)/./models/Order.js":
/*!*************************!*\
  !*** ./models/Order.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Order\": () => (/* binding */ Order)\n/* harmony export */ });\nconst { Schema , model , models  } = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst OrderSchema = new Schema({\n    line_items: Object,\n    name: String,\n    email: String,\n    phone: String,\n    pickupLocation: String,\n    paymentMethod: String,\n    paid: Boolean\n}, {\n    timestamps: true\n});\nconst Order = models?.Order || model(\"Order\", OrderSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvT3JkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU0sRUFBRUEsT0FBTSxFQUFFQyxNQUFLLEVBQUVDLE9BQU0sRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQywwQkFBVTtBQUVwRCxNQUFNQyxjQUFjLElBQUlKLE9BQU87SUFDM0JLLFlBQVdDO0lBQ1hDLE1BQUtDO0lBQ0xDLE9BQU1EO0lBQ05FLE9BQU1GO0lBQ05HLGdCQUFlSDtJQUNmSSxlQUFjSjtJQUNkSyxNQUFLQztBQUNULEdBQUc7SUFDQ0MsWUFBWTtBQUNoQjtBQUVPLE1BQU1DLFFBQVFkLFFBQVFjLFNBQVNmLE1BQU0sU0FBU0csYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1hZG1pbi8uL21vZGVscy9PcmRlci5qcz9lYjI5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgU2NoZW1hLCBtb2RlbCwgbW9kZWxzIH0gPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XHJcblxyXG5jb25zdCBPcmRlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gICAgbGluZV9pdGVtczpPYmplY3QsXHJcbiAgICBuYW1lOlN0cmluZyxcclxuICAgIGVtYWlsOlN0cmluZyxcclxuICAgIHBob25lOlN0cmluZyxcclxuICAgIHBpY2t1cExvY2F0aW9uOlN0cmluZyxcclxuICAgIHBheW1lbnRNZXRob2Q6U3RyaW5nLFxyXG4gICAgcGFpZDpCb29sZWFuLFxyXG59LCB7XHJcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBPcmRlciA9IG1vZGVscz8uT3JkZXIgfHwgbW9kZWwoJ09yZGVyJywgT3JkZXJTY2hlbWEpOyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb2RlbCIsIm1vZGVscyIsInJlcXVpcmUiLCJPcmRlclNjaGVtYSIsImxpbmVfaXRlbXMiLCJPYmplY3QiLCJuYW1lIiwiU3RyaW5nIiwiZW1haWwiLCJwaG9uZSIsInBpY2t1cExvY2F0aW9uIiwicGF5bWVudE1ldGhvZCIsInBhaWQiLCJCb29sZWFuIiwidGltZXN0YW1wcyIsIk9yZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Order.js\n");

/***/ }),

/***/ "(api)/./pages/api/orders.js":
/*!*****************************!*\
  !*** ./pages/api/orders.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Order */ \"(api)/./models/Order.js\");\n\n\nasync function handler(req, res) {\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_0__.mongooseConnect)();\n    res.json(await _models_Order__WEBPACK_IMPORTED_MODULE_1__.Order.find().sort({\n        createdAt: -1\n    }));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpRDtBQUNWO0FBRXhCLGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUMxQyxNQUFNSiw4REFBZUE7SUFDckJJLElBQUlDLEtBQUssTUFBTUoscURBQVVLLEdBQUdDLEtBQUs7UUFBQ0MsV0FBVyxDQUFDO0lBQUM7QUFDbkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtYWRtaW4vLi9wYWdlcy9hcGkvb3JkZXJzLmpzPzFhODkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9uZ29vc2VDb25uZWN0IH0gZnJvbSBcIkAvbGliL21vbmdvb3NlXCI7XHJcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSBcIkAvbW9kZWxzL09yZGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBhd2FpdCBtb25nb29zZUNvbm5lY3QoKTtcclxuICAgIHJlcy5qc29uKGF3YWl0IE9yZGVyLmZpbmQoKS5zb3J0KHtjcmVhdGVkQXQ6IC0xfSkpXHJcbn0iXSwibmFtZXMiOlsibW9uZ29vc2VDb25uZWN0IiwiT3JkZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwianNvbiIsImZpbmQiLCJzb3J0IiwiY3JlYXRlZEF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/orders.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/orders.js"));
module.exports = __webpack_exports__;

})();