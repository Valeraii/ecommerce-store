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

/***/ "@next-auth/mongodb-adapter":
/*!*********************************************!*\
  !*** external "@next-auth/mongodb-adapter" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/mongodb-adapter");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrR0FBa0c7QUFDNUQ7QUFFdEMsSUFBSSxDQUFDQyxRQUFRQyxJQUFJQyxhQUFhO0lBQzVCLE1BQU0sSUFBSUMsTUFBTTtBQUNsQjtBQUVBLE1BQU1DLE1BQU1KLFFBQVFDLElBQUlDO0FBQ3hCLE1BQU1HLFVBQVUsQ0FBQztBQUVqQixJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSVAsSUFBc0MsRUFBRTtJQUMxQywrREFBK0Q7SUFDL0QsNkVBQTZFO0lBQzdFLElBQUksQ0FBQ1EsT0FBT0MscUJBQXFCO1FBQy9CSCxTQUFTLElBQUlQLGdEQUFXQSxDQUFDSyxLQUFLQztRQUM5QkcsT0FBT0Msc0JBQXNCSCxPQUFPSTtJQUN0QztJQUNBSCxnQkFBZ0JDLE9BQU9DO0FBQ3pCLE9BQU8sRUFJTjtBQUVELGlFQUFpRTtBQUNqRSw4REFBOEQ7QUFDOUQsaUVBQWVGLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtYWRtaW4vLi9saWIvbW9uZ29kYi5qcz9kOTIwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgYXBwcm9hY2ggaXMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvdHJlZS9jYW5hcnkvZXhhbXBsZXMvd2l0aC1tb25nb2RiXHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQvTWlzc2luZyBlbnZpcm9ubWVudCB2YXJpYWJsZTogXCJNT05HT0RCX1VSSVwiJyk7XHJcbn1cclxuXHJcbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xyXG5jb25zdCBvcHRpb25zID0ge307XHJcblxyXG5sZXQgY2xpZW50O1xyXG5sZXQgY2xpZW50UHJvbWlzZTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXHJcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cclxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XHJcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlO1xyXG59IGVsc2Uge1xyXG4gIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXHJcbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XHJcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XHJcbn1cclxuXHJcbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXHJcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2U7Il0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJ1cmkiLCJvcHRpb25zIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Product\": () => (/* binding */ Product)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProductSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    description: String,\n    price: {\n        type: Number,\n        require: true\n    },\n    images: [\n        {\n            type: String\n        }\n    ],\n    category: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId),\n        ref: \"Category\"\n    },\n    properties: {\n        type: Object\n    }\n}, {\n    timestamps: true\n});\nconst Product = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Product || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Product\", ProductSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUQ7QUFFekQsTUFBTUksZ0JBQWdCLElBQUlILDRDQUFNQSxDQUFDO0lBQzdCSSxPQUFPO1FBQUNDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSTtJQUNwQ0MsYUFBYUY7SUFDYkcsT0FBTztRQUFDSixNQUFNSztRQUFRQyxTQUFRO0lBQUk7SUFDbENDLFFBQVE7UUFBQztZQUFDUCxNQUFNQztRQUFNO0tBQUU7SUFDeEJPLFVBQVU7UUFBQ1IsTUFBTU4sZ0VBQXVCZ0I7UUFBRUMsS0FBSztJQUFVO0lBQ3pEQyxZQUFZO1FBQUNaLE1BQUthO0lBQU07QUFDNUIsR0FBRztJQUNDQyxZQUFZO0FBQ2hCO0FBRU8sTUFBTUMsVUFBVWxCLG9EQUFja0IsSUFBSW5CLCtDQUFLQSxDQUFDLFdBQVdFLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtYWRtaW4vLi9tb2RlbHMvUHJvZHVjdC5qcz8wOWM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwge1NjaGVtYSwgbW9kZWwsIG1vZGVsc30gZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgUHJvZHVjdFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gICAgdGl0bGU6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcclxuICAgIGRlc2NyaXB0aW9uOiBTdHJpbmcsXHJcbiAgICBwcmljZToge3R5cGU6IE51bWJlciwgcmVxdWlyZTp0cnVlfSxcclxuICAgIGltYWdlczogW3t0eXBlOiBTdHJpbmd9XSxcclxuICAgIGNhdGVnb3J5OiB7dHlwZTogbW9uZ29vc2UuVHlwZXMuT2JqZWN0SWQsIHJlZjogJ0NhdGVnb3J5J30sXHJcbiAgICBwcm9wZXJ0aWVzOiB7dHlwZTpPYmplY3R9LFxyXG59LCB7XHJcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0ID0gbW9kZWxzLlByb2R1Y3QgfHwgbW9kZWwoJ1Byb2R1Y3QnLCBQcm9kdWN0U2NoZW1hKTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJtb2RlbCIsIm1vZGVscyIsIlByb2R1Y3RTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJOdW1iZXIiLCJyZXF1aXJlIiwiaW1hZ2VzIiwiY2F0ZWdvcnkiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwicHJvcGVydGllcyIsIk9iamVjdCIsInRpbWVzdGFtcHMiLCJQcm9kdWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Product.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"isAdminRequest\": () => (/* binding */ isAdminRequest)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/mongodb-adapter */ \"@next-auth/mongodb-adapter\");\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/mongodb */ \"(api)/./lib/mongodb.js\");\n\n\n\n\nconst adminEmails = [\n    \"valerietan000@gmail.com\"\n];\nconst authOptions = {\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        })\n    ],\n    adapter: (0,_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__.MongoDBAdapter)(_lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    callbacks: {\n        session: ({ session , token , user  })=>{\n            if (adminEmails.includes(session?.user?.email)) {\n                return session;\n            } else {\n                return false;\n            }\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\nasync function isAdminRequest(req, res) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(req, res, authOptions);\n    if (!adminEmails.includes(session?.user?.email)) {\n        res.status(401);\n        res.end();\n        throw \"not an admin\";\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFDQztBQUNJO0FBQ2xCO0FBRXpDLE1BQU1LLGNBQWM7SUFBQztDQUEwQjtBQUV4QyxNQUFNQyxjQUFjO0lBQ3pCQyxXQUFXO1FBQ1RMLGlFQUFjQSxDQUFDO1lBQ2JNLFVBQVVDLFFBQVFDLElBQUlDO1lBQ3RCQyxjQUFjSCxRQUFRQyxJQUFJRztRQUM1QjtLQUNEO0lBQ0RDLFNBQVNYLDBFQUFjQSxDQUFDQyxvREFBYUE7SUFDckNXLFdBQVc7UUFDVEMsU0FBUyxDQUFDLEVBQUNBLFFBQU8sRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUM7WUFDOUIsSUFBR2IsWUFBWWMsU0FBU0gsU0FBU0UsTUFBTUUsUUFBUTtnQkFDN0MsT0FBT0o7WUFDVCxPQUFPO2dCQUNMLE9BQU87WUFDVDtRQUNGO0lBQ0Y7QUFDRixFQUFFO0FBRUYsaUVBQWVoQixnREFBUUEsQ0FBQ00sWUFBWUEsRUFBQTtBQUU3QixlQUFlZSxlQUFlQyxHQUFHLEVBQUVDLEdBQUc7SUFDM0MsTUFBTVAsVUFBVSxNQUFNZiwyREFBZ0JBLENBQUNxQixLQUFLQyxLQUFLakI7SUFDakQsSUFBSSxDQUFDRCxZQUFZYyxTQUFTSCxTQUFTRSxNQUFNRSxRQUFRO1FBQy9DRyxJQUFJQyxPQUFPO1FBQ1hELElBQUlFO1FBQ0osTUFBTTtJQUNSO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtYWRtaW4vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoLCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCJcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJ1xyXG5pbXBvcnQgeyBNb25nb0RCQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL21vbmdvZGItYWRhcHRlclwiXHJcbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gJ0AvbGliL21vbmdvZGInXHJcblxyXG5jb25zdCBhZG1pbkVtYWlscyA9IFsndmFsZXJpZXRhbjAwMEBnbWFpbC5jb20nXTtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdvb2dsZVByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVUXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGFkYXB0ZXI6IE1vbmdvREJBZGFwdGVyKGNsaWVudFByb21pc2UpLFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgc2Vzc2lvbjogKHtzZXNzaW9uLCB0b2tlbiwgdXNlcn0pID0+IHtcclxuICAgICAgaWYoYWRtaW5FbWFpbHMuaW5jbHVkZXMoc2Vzc2lvbj8udXNlcj8uZW1haWwpKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucylcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0FkbWluUmVxdWVzdChyZXEsIHJlcykge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKHJlcSwgcmVzLCBhdXRoT3B0aW9ucyk7XHJcbiAgaWYgKCFhZG1pbkVtYWlscy5pbmNsdWRlcyhzZXNzaW9uPy51c2VyPy5lbWFpbCkpIHtcclxuICAgIHJlcy5zdGF0dXMoNDAxKTtcclxuICAgIHJlcy5lbmQoKTtcclxuICAgIHRocm93ICdub3QgYW4gYWRtaW4nO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsImdldFNlcnZlclNlc3Npb24iLCJHb29nbGVQcm92aWRlciIsIk1vbmdvREJBZGFwdGVyIiwiY2xpZW50UHJvbWlzZSIsImFkbWluRW1haWxzIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfU0VDUkVUIiwiYWRhcHRlciIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ0b2tlbiIsInVzZXIiLCJpbmNsdWRlcyIsImVtYWlsIiwiaXNBZG1pblJlcXVlc3QiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./pages/api/products.js":
/*!*******************************!*\
  !*** ./pages/api/products.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Product */ \"(api)/./models/Product.js\");\n/* harmony import */ var _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/pages/api/auth/[...nextauth] */ \"(api)/./pages/api/auth/[...nextauth].js\");\n\n\n\nasync function handle(req, res) {\n    const { method  } = req;\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_0__.mongooseConnect)();\n    await (0,_pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_2__.isAdminRequest)(req, res);\n    if (method == \"GET\") {\n        if (req.query?.id) {\n            res.json(await _models_Product__WEBPACK_IMPORTED_MODULE_1__.Product.findOne({\n                _id: req.query.id\n            }));\n        } else {\n            res.json(await _models_Product__WEBPACK_IMPORTED_MODULE_1__.Product.find());\n        }\n    }\n    if (method == \"POST\") {\n        const { title , description , price , images , category , properties  } = req.body;\n        const productDoc = await _models_Product__WEBPACK_IMPORTED_MODULE_1__.Product.create({\n            title,\n            description,\n            price,\n            images,\n            category,\n            properties\n        });\n        res.json(productDoc);\n    }\n    if (method == \"PUT\") {\n        const { title , description , price , images , category , properties , _id  } = req.body;\n        await _models_Product__WEBPACK_IMPORTED_MODULE_1__.Product.updateOne({\n            _id\n        }, {\n            title,\n            description,\n            price,\n            images,\n            category,\n            properties\n        });\n        res.json(true);\n    }\n    if (method == \"DELETE\") {\n        if (req.query?.id) {\n            await _models_Product__WEBPACK_IMPORTED_MODULE_1__.Product.deleteOne({\n                _id: req.query?.id\n            });\n            res.json(true);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpRDtBQUNOO0FBQ3FCO0FBRWpELGVBQWVHLE9BQU9DLEdBQUcsRUFBRUMsR0FBRztJQUN6QyxNQUFNLEVBQUNDLE9BQU0sRUFBQyxHQUFHRjtJQUNqQixNQUFNSiw4REFBZUE7SUFDckIsTUFBTUUseUVBQWNBLENBQUNFLEtBQUtDO0lBRTFCLElBQUdDLFVBQVUsT0FBTztRQUNoQixJQUFHRixJQUFJRyxPQUFPQyxJQUFJO1lBQ2RILElBQUlJLEtBQUssTUFBTVIsNERBQWVTLENBQUM7Z0JBQUNDLEtBQUtQLElBQUlHLE1BQU1DO1lBQUU7UUFDckQsT0FBTztZQUNISCxJQUFJSSxLQUFLLE1BQU1SLHlEQUFZVztRQUMvQjtJQUNKO0lBRUEsSUFBR04sVUFBVSxRQUFRO1FBQ2pCLE1BQU0sRUFBQ08sTUFBSyxFQUFFQyxZQUFXLEVBQUVDLE1BQUssRUFBRUMsT0FBTSxFQUFFQyxTQUFRLEVBQUVDLFdBQVUsRUFBQyxHQUFHZCxJQUFJZTtRQUN0RSxNQUFNQyxhQUFhLE1BQU1uQiwyREFBY29CLENBQUM7WUFDcENSO1lBQU9DO1lBQWFDO1lBQU9DO1lBQVFDO1lBQVVDO1FBQ2pEO1FBQ0FiLElBQUlJLEtBQUtXO0lBQ2I7SUFFQSxJQUFHZCxVQUFVLE9BQU87UUFDaEIsTUFBTSxFQUFDTyxNQUFLLEVBQUVDLFlBQVcsRUFBRUMsTUFBSyxFQUFFQyxPQUFNLEVBQUVDLFNBQVEsRUFBRUMsV0FBVSxFQUFFUCxJQUFHLEVBQUMsR0FBR1AsSUFBSWU7UUFDM0UsTUFBTWxCLDhEQUFpQnFCLENBQUM7WUFBQ1g7UUFBRyxHQUFHO1lBQUNFO1lBQU9DO1lBQWFDO1lBQU9DO1lBQVFDO1lBQVVDO1FBQVU7UUFDdkZiLElBQUlJLEtBQUs7SUFDYjtJQUVBLElBQUdILFVBQVUsVUFBVTtRQUNuQixJQUFHRixJQUFJRyxPQUFPQyxJQUFJO1lBQ2QsTUFBTVAsOERBQWlCc0IsQ0FBQztnQkFBQ1osS0FBS1AsSUFBSUcsT0FBT0M7WUFBRTtZQUMzQ0gsSUFBSUksS0FBSztRQUNiO0lBQ0o7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1hZG1pbi8uL3BhZ2VzL2FwaS9wcm9kdWN0cy5qcz80OWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vbmdvb3NlQ29ubmVjdCB9IGZyb20gXCJAL2xpYi9tb25nb29zZVwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIkAvbW9kZWxzL1Byb2R1Y3RcIjtcclxuaW1wb3J0IHsgaXNBZG1pblJlcXVlc3QgfSBmcm9tIFwiQC9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGUocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHttZXRob2R9ID0gcmVxO1xyXG4gICAgYXdhaXQgbW9uZ29vc2VDb25uZWN0KCk7XHJcbiAgICBhd2FpdCBpc0FkbWluUmVxdWVzdChyZXEsIHJlcyk7XHJcblxyXG4gICAgaWYobWV0aG9kID09ICdHRVQnKSB7XHJcbiAgICAgICAgaWYocmVxLnF1ZXJ5Py5pZCkge1xyXG4gICAgICAgICAgICByZXMuanNvbihhd2FpdCBQcm9kdWN0LmZpbmRPbmUoe19pZDogcmVxLnF1ZXJ5LmlkfSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5qc29uKGF3YWl0IFByb2R1Y3QuZmluZCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYobWV0aG9kID09ICdQT1NUJykge1xyXG4gICAgICAgIGNvbnN0IHt0aXRsZSwgZGVzY3JpcHRpb24sIHByaWNlLCBpbWFnZXMsIGNhdGVnb3J5LCBwcm9wZXJ0aWVzfSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3REb2MgPSBhd2FpdCBQcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpY2UsIGltYWdlcywgY2F0ZWdvcnksIHByb3BlcnRpZXMsXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXMuanNvbihwcm9kdWN0RG9jKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihtZXRob2QgPT0gJ1BVVCcpIHtcclxuICAgICAgICBjb25zdCB7dGl0bGUsIGRlc2NyaXB0aW9uLCBwcmljZSwgaW1hZ2VzLCBjYXRlZ29yeSwgcHJvcGVydGllcywgX2lkfSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIGF3YWl0IFByb2R1Y3QudXBkYXRlT25lKHtfaWR9LCB7dGl0bGUsIGRlc2NyaXB0aW9uLCBwcmljZSwgaW1hZ2VzLCBjYXRlZ29yeSwgcHJvcGVydGllc30pO1xyXG4gICAgICAgIHJlcy5qc29uKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKG1ldGhvZCA9PSBcIkRFTEVURVwiKSB7XHJcbiAgICAgICAgaWYocmVxLnF1ZXJ5Py5pZCkge1xyXG4gICAgICAgICAgICBhd2FpdCBQcm9kdWN0LmRlbGV0ZU9uZSh7X2lkOiByZXEucXVlcnk/LmlkfSk7XHJcbiAgICAgICAgICAgIHJlcy5qc29uKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJtb25nb29zZUNvbm5lY3QiLCJQcm9kdWN0IiwiaXNBZG1pblJlcXVlc3QiLCJoYW5kbGUiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJxdWVyeSIsImlkIiwianNvbiIsImZpbmRPbmUiLCJfaWQiLCJmaW5kIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiaW1hZ2VzIiwiY2F0ZWdvcnkiLCJwcm9wZXJ0aWVzIiwiYm9keSIsInByb2R1Y3REb2MiLCJjcmVhdGUiLCJ1cGRhdGVPbmUiLCJkZWxldGVPbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/products.js\n");

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