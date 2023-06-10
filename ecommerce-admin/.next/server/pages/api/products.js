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
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
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

/***/ "(api)/./models/Product.js":
/*!***************************!*\
  !*** ./models/Product.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Product\": () => (/* binding */ Product)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProductSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    description: String,\n    price: {\n        type: Number,\n        require: true\n    },\n    images: [\n        {\n            type: String\n        }\n    ],\n    category: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId),\n        ref: \"Category\"\n    },\n    properties: {\n        type: Object\n    }\n});\nconst Product = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Product || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Product\", ProductSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUQ7QUFFekQsTUFBTUksZ0JBQWdCLElBQUlILDRDQUFNQSxDQUFDO0lBQzdCSSxPQUFPO1FBQUNDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSTtJQUNwQ0MsYUFBYUY7SUFDYkcsT0FBTztRQUFDSixNQUFNSztRQUFRQyxTQUFRO0lBQUk7SUFDbENDLFFBQVE7UUFBQztZQUFDUCxNQUFNQztRQUFNO0tBQUU7SUFDeEJPLFVBQVU7UUFBQ1IsTUFBTU4sZ0VBQXVCZ0I7UUFBRUMsS0FBSztJQUFVO0lBQ3pEQyxZQUFZO1FBQUNaLE1BQUthO0lBQU07QUFDNUI7QUFFTyxNQUFNQyxVQUFVakIsb0RBQWNpQixJQUFJbEIsK0NBQUtBLENBQUMsV0FBV0UsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1hZG1pbi8uL21vZGVscy9Qcm9kdWN0LmpzPzA5YzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7U2NoZW1hLCBtb2RlbCwgbW9kZWxzfSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBQcm9kdWN0U2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgICB0aXRsZToge3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWV9LFxyXG4gICAgZGVzY3JpcHRpb246IFN0cmluZyxcclxuICAgIHByaWNlOiB7dHlwZTogTnVtYmVyLCByZXF1aXJlOnRydWV9LFxyXG4gICAgaW1hZ2VzOiBbe3R5cGU6IFN0cmluZ31dLFxyXG4gICAgY2F0ZWdvcnk6IHt0eXBlOiBtb25nb29zZS5UeXBlcy5PYmplY3RJZCwgcmVmOiAnQ2F0ZWdvcnknfSxcclxuICAgIHByb3BlcnRpZXM6IHt0eXBlOk9iamVjdH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3QgPSBtb2RlbHMuUHJvZHVjdCB8fCBtb2RlbCgnUHJvZHVjdCcsIFByb2R1Y3RTY2hlbWEpOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsIm1vZGVsIiwibW9kZWxzIiwiUHJvZHVjdFNjaGVtYSIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsIk51bWJlciIsInJlcXVpcmUiLCJpbWFnZXMiLCJjYXRlZ29yeSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJwcm9wZXJ0aWVzIiwiT2JqZWN0IiwiUHJvZHVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/Product.js\n");

/***/ }),

/***/ "(api)/./pages/api/products.js":
/*!*******************************!*\
  !*** ./pages/api/products.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Product */ \"(api)/./models/Product.js\");\n\n\nasync function handle(req, res) {\n    const { method  } = req;\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_0__.mongooseConnect)();\n    if (method == \"GET\") {\n        if (req.query?.id) {\n            res.json(await _models_Product__WEBPACK_IMPORTED_MODULE_1__.Product.findOne({\n                _id: req.query.id\n            }));\n        } else {\n            res.json(await _models_Product__WEBPACK_IMPORTED_MODULE_1__.Product.find());\n        }\n    }\n    if (method == \"POST\") {\n        const { title , description , price , images , category , properties  } = req.body;\n        const productDoc = await _models_Product__WEBPACK_IMPORTED_MODULE_1__.Product.create({\n            title,\n            description,\n            price,\n            images,\n            category,\n            properties\n        });\n        res.json(productDoc);\n    }\n    if (method == \"PUT\") {\n        const { title , description , price , images , category , properties , _id  } = req.body;\n        await _models_Product__WEBPACK_IMPORTED_MODULE_1__.Product.updateOne({\n            _id\n        }, {\n            title,\n            description,\n            price,\n            images,\n            category,\n            properties\n        });\n        res.json(true);\n    }\n    if (method == \"DELETE\") {\n        if (req.query?.id) {\n            await _models_Product__WEBPACK_IMPORTED_MODULE_1__.Product.deleteOne({\n                _id: req.query?.id\n            });\n            res.json(true);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBQ047QUFFNUIsZUFBZUUsT0FBT0MsR0FBRyxFQUFFQyxHQUFHO0lBQ3pDLE1BQU0sRUFBQ0MsT0FBTSxFQUFDLEdBQUdGO0lBQ2pCLE1BQU1ILDhEQUFlQTtJQUVyQixJQUFHSyxVQUFVLE9BQU87UUFDaEIsSUFBR0YsSUFBSUcsT0FBT0MsSUFBSTtZQUNkSCxJQUFJSSxLQUFLLE1BQU1QLDREQUFlUSxDQUFDO2dCQUFDQyxLQUFLUCxJQUFJRyxNQUFNQztZQUFFO1FBQ3JELE9BQU87WUFDSEgsSUFBSUksS0FBSyxNQUFNUCx5REFBWVU7UUFDL0I7SUFDSjtJQUVBLElBQUdOLFVBQVUsUUFBUTtRQUNqQixNQUFNLEVBQUNPLE1BQUssRUFBRUMsWUFBVyxFQUFFQyxNQUFLLEVBQUVDLE9BQU0sRUFBRUMsU0FBUSxFQUFFQyxXQUFVLEVBQUMsR0FBR2QsSUFBSWU7UUFDdEUsTUFBTUMsYUFBYSxNQUFNbEIsMkRBQWNtQixDQUFDO1lBQ3BDUjtZQUFPQztZQUFhQztZQUFPQztZQUFRQztZQUFVQztRQUNqRDtRQUNBYixJQUFJSSxLQUFLVztJQUNiO0lBRUEsSUFBR2QsVUFBVSxPQUFPO1FBQ2hCLE1BQU0sRUFBQ08sTUFBSyxFQUFFQyxZQUFXLEVBQUVDLE1BQUssRUFBRUMsT0FBTSxFQUFFQyxTQUFRLEVBQUVDLFdBQVUsRUFBRVAsSUFBRyxFQUFDLEdBQUdQLElBQUllO1FBQzNFLE1BQU1qQiw4REFBaUJvQixDQUFDO1lBQUNYO1FBQUcsR0FBRztZQUFDRTtZQUFPQztZQUFhQztZQUFPQztZQUFRQztZQUFVQztRQUFVO1FBQ3ZGYixJQUFJSSxLQUFLO0lBQ2I7SUFFQSxJQUFHSCxVQUFVLFVBQVU7UUFDbkIsSUFBR0YsSUFBSUcsT0FBT0MsSUFBSTtZQUNkLE1BQU1OLDhEQUFpQnFCLENBQUM7Z0JBQUNaLEtBQUtQLElBQUlHLE9BQU9DO1lBQUU7WUFDM0NILElBQUlJLEtBQUs7UUFDYjtJQUNKO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtYWRtaW4vLi9wYWdlcy9hcGkvcHJvZHVjdHMuanM/NDljYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb25nb29zZUNvbm5lY3QgfSBmcm9tIFwiQC9saWIvbW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCJAL21vZGVscy9Qcm9kdWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGUocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHttZXRob2R9ID0gcmVxO1xyXG4gICAgYXdhaXQgbW9uZ29vc2VDb25uZWN0KCk7XHJcblxyXG4gICAgaWYobWV0aG9kID09ICdHRVQnKSB7XHJcbiAgICAgICAgaWYocmVxLnF1ZXJ5Py5pZCkge1xyXG4gICAgICAgICAgICByZXMuanNvbihhd2FpdCBQcm9kdWN0LmZpbmRPbmUoe19pZDogcmVxLnF1ZXJ5LmlkfSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5qc29uKGF3YWl0IFByb2R1Y3QuZmluZCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYobWV0aG9kID09ICdQT1NUJykge1xyXG4gICAgICAgIGNvbnN0IHt0aXRsZSwgZGVzY3JpcHRpb24sIHByaWNlLCBpbWFnZXMsIGNhdGVnb3J5LCBwcm9wZXJ0aWVzfSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3REb2MgPSBhd2FpdCBQcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpY2UsIGltYWdlcywgY2F0ZWdvcnksIHByb3BlcnRpZXMsXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXMuanNvbihwcm9kdWN0RG9jKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihtZXRob2QgPT0gJ1BVVCcpIHtcclxuICAgICAgICBjb25zdCB7dGl0bGUsIGRlc2NyaXB0aW9uLCBwcmljZSwgaW1hZ2VzLCBjYXRlZ29yeSwgcHJvcGVydGllcywgX2lkfSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIGF3YWl0IFByb2R1Y3QudXBkYXRlT25lKHtfaWR9LCB7dGl0bGUsIGRlc2NyaXB0aW9uLCBwcmljZSwgaW1hZ2VzLCBjYXRlZ29yeSwgcHJvcGVydGllc30pO1xyXG4gICAgICAgIHJlcy5qc29uKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKG1ldGhvZCA9PSBcIkRFTEVURVwiKSB7XHJcbiAgICAgICAgaWYocmVxLnF1ZXJ5Py5pZCkge1xyXG4gICAgICAgICAgICBhd2FpdCBQcm9kdWN0LmRlbGV0ZU9uZSh7X2lkOiByZXEucXVlcnk/LmlkfSk7XHJcbiAgICAgICAgICAgIHJlcy5qc29uKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJtb25nb29zZUNvbm5lY3QiLCJQcm9kdWN0IiwiaGFuZGxlIiwicmVxIiwicmVzIiwibWV0aG9kIiwicXVlcnkiLCJpZCIsImpzb24iLCJmaW5kT25lIiwiX2lkIiwiZmluZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImltYWdlcyIsImNhdGVnb3J5IiwicHJvcGVydGllcyIsImJvZHkiLCJwcm9kdWN0RG9jIiwiY3JlYXRlIiwidXBkYXRlT25lIiwiZGVsZXRlT25lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/products.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products.js"));
module.exports = __webpack_exports__;

})();