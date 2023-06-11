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

/***/ "@aws-sdk/client-s3":
/*!*************************************!*\
  !*** external "@aws-sdk/client-s3" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ "@next-auth/mongodb-adapter":
/*!*********************************************!*\
  !*** external "@next-auth/mongodb-adapter" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/mongodb-adapter");

/***/ }),

/***/ "mime-types":
/*!*****************************!*\
  !*** external "mime-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("mime-types");

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

/***/ "multiparty":
/*!*****************************!*\
  !*** external "multiparty" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("multiparty");

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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

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

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"isAdminRequest\": () => (/* binding */ isAdminRequest)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/mongodb-adapter */ \"@next-auth/mongodb-adapter\");\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/mongodb */ \"(api)/./lib/mongodb.js\");\n\n\n\n\nconst adminEmails = [\n    \"valerietan000@gmail.com\"\n];\nconst authOptions = {\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        })\n    ],\n    adapter: (0,_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__.MongoDBAdapter)(_lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    callbacks: {\n        session: ({ session , token , user  })=>{\n            if (adminEmails.includes(session?.user?.email)) {\n                return session;\n            } else {\n                return false;\n            }\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\nasync function isAdminRequest(req, res) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(req, res, authOptions);\n    if (!adminEmails.includes(session?.user?.email)) {\n        res.status(401);\n        res.end();\n        throw \"not an admin\";\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFDQztBQUNJO0FBQ2xCO0FBRXpDLE1BQU1LLGNBQWM7SUFBQztDQUEwQjtBQUV4QyxNQUFNQyxjQUFjO0lBQ3pCQyxXQUFXO1FBQ1RMLGlFQUFjQSxDQUFDO1lBQ2JNLFVBQVVDLFFBQVFDLElBQUlDO1lBQ3RCQyxjQUFjSCxRQUFRQyxJQUFJRztRQUM1QjtLQUNEO0lBQ0RDLFNBQVNYLDBFQUFjQSxDQUFDQyxvREFBYUE7SUFDckNXLFdBQVc7UUFDVEMsU0FBUyxDQUFDLEVBQUNBLFFBQU8sRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUM7WUFDOUIsSUFBR2IsWUFBWWMsU0FBU0gsU0FBU0UsTUFBTUUsUUFBUTtnQkFDN0MsT0FBT0o7WUFDVCxPQUFPO2dCQUNMLE9BQU87WUFDVDtRQUNGO0lBQ0Y7QUFDRixFQUFFO0FBRUYsaUVBQWVoQixnREFBUUEsQ0FBQ00sWUFBWUEsRUFBQTtBQUU3QixlQUFlZSxlQUFlQyxHQUFHLEVBQUVDLEdBQUc7SUFDM0MsTUFBTVAsVUFBVSxNQUFNZiwyREFBZ0JBLENBQUNxQixLQUFLQyxLQUFLakI7SUFDakQsSUFBSSxDQUFDRCxZQUFZYyxTQUFTSCxTQUFTRSxNQUFNRSxRQUFRO1FBQy9DRyxJQUFJQyxPQUFPO1FBQ1hELElBQUlFO1FBQ0osTUFBTTtJQUNSO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtYWRtaW4vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoLCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCJcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJ1xyXG5pbXBvcnQgeyBNb25nb0RCQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL21vbmdvZGItYWRhcHRlclwiXHJcbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gJ0AvbGliL21vbmdvZGInXHJcblxyXG5jb25zdCBhZG1pbkVtYWlscyA9IFsndmFsZXJpZXRhbjAwMEBnbWFpbC5jb20nXTtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdvb2dsZVByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVUXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGFkYXB0ZXI6IE1vbmdvREJBZGFwdGVyKGNsaWVudFByb21pc2UpLFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgc2Vzc2lvbjogKHtzZXNzaW9uLCB0b2tlbiwgdXNlcn0pID0+IHtcclxuICAgICAgaWYoYWRtaW5FbWFpbHMuaW5jbHVkZXMoc2Vzc2lvbj8udXNlcj8uZW1haWwpKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucylcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0FkbWluUmVxdWVzdChyZXEsIHJlcykge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKHJlcSwgcmVzLCBhdXRoT3B0aW9ucyk7XHJcbiAgaWYgKCFhZG1pbkVtYWlscy5pbmNsdWRlcyhzZXNzaW9uPy51c2VyPy5lbWFpbCkpIHtcclxuICAgIHJlcy5zdGF0dXMoNDAxKTtcclxuICAgIHJlcy5lbmQoKTtcclxuICAgIHRocm93ICdub3QgYW4gYWRtaW4nO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsImdldFNlcnZlclNlc3Npb24iLCJHb29nbGVQcm92aWRlciIsIk1vbmdvREJBZGFwdGVyIiwiY2xpZW50UHJvbWlzZSIsImFkbWluRW1haWxzIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfU0VDUkVUIiwiYWRhcHRlciIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ0b2tlbiIsInVzZXIiLCJpbmNsdWRlcyIsImVtYWlsIiwiaXNBZG1pblJlcXVlc3QiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./pages/api/upload.js":
/*!*****************************!*\
  !*** ./pages/api/upload.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiparty */ \"multiparty\");\n/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multiparty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/client-s3 */ \"@aws-sdk/client-s3\");\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mime_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mime-types */ \"mime-types\");\n/* harmony import */ var mime_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mime_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/pages/api/auth/[...nextauth] */ \"(api)/./pages/api/auth/[...nextauth].js\");\n\n\n\n\n\n\nconst bucketName = \"vt-ecommerce-store\";\nasync function handle(req, res) {\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_4__.mongooseConnect)();\n    await (0,_pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_5__.isAdminRequest)(req, res);\n    const form = new (multiparty__WEBPACK_IMPORTED_MODULE_0___default().Form)();\n    const { fields , files  } = await new Promise((resolve, reject)=>{\n        form.parse(req, (err, fields, files)=>{\n            if (err) reject(err);\n            resolve({\n                fields,\n                files\n            });\n        });\n    });\n    console.log(\"length\", files.file.length);\n    const client = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__.S3Client({\n        region: \"us-west-2\",\n        credentials: {\n            accessKeyId: process.env.S3_ACCESS_KEY,\n            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY\n        }\n    });\n    const links = [];\n    for (const file of files.file){\n        const ext = file.originalFilename.split(\".\").pop();\n        const newFileName = Date.now() + \".\" + ext;\n        await client.send(new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__.PutObjectCommand({\n            Bucket: bucketName,\n            Key: newFileName,\n            Body: fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(file.path),\n            ACL: \"public-read\",\n            ContentType: mime_types__WEBPACK_IMPORTED_MODULE_3___default().lookup(file.path)\n        }));\n        const link = `https://${bucketName}.s3.amazonaws.com/${newFileName}`;\n        links.push(link);\n    }\n    return res.json({\n        links\n    });\n}\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFvQztBQUN5QjtBQUN6QztBQUNVO0FBQ21CO0FBQ2U7QUFFaEUsTUFBTU8sYUFBYTtBQUVKLGVBQWVDLE9BQU9DLEdBQUcsRUFBRUMsR0FBRztJQUN6QyxNQUFNTCw4REFBZUE7SUFDckIsTUFBTUMseUVBQWNBLENBQUNHLEtBQUtDO0lBRTFCLE1BQU1DLE9BQU8sSUFBSVgsd0RBQWVZO0lBQ2hDLE1BQU0sRUFBQ0MsT0FBTSxFQUFFQyxNQUFLLEVBQUMsR0FBRyxNQUFNLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0M7UUFDaEROLEtBQUtPLE1BQU1ULEtBQUssQ0FBQ1UsS0FBS04sUUFBUUM7WUFDMUIsSUFBSUssS0FBS0YsT0FBT0U7WUFDaEJILFFBQVE7Z0JBQUNIO2dCQUFRQztZQUFLO1FBQzFCO0lBQ0o7SUFDQU0sUUFBUUMsSUFBSSxVQUFVUCxNQUFNUSxLQUFLQztJQUVqQyxNQUFNQyxTQUFTLElBQUl2Qix3REFBUUEsQ0FBQztRQUN4QndCLFFBQVE7UUFDUkMsYUFBYTtZQUNUQyxhQUFhQyxRQUFRQyxJQUFJQztZQUN6QkMsaUJBQWlCSCxRQUFRQyxJQUFJRztRQUNqQztJQUNKO0lBRUEsTUFBTUMsUUFBUSxFQUFFO0lBQ2hCLEtBQUssTUFBTVgsUUFBUVIsTUFBTVEsS0FBTTtRQUMzQixNQUFNWSxNQUFNWixLQUFLYSxpQkFBaUJDLE1BQU0sS0FBS0M7UUFDN0MsTUFBTUMsY0FBY0MsS0FBS0MsUUFBUSxNQUFNTjtRQUN2QyxNQUFNVixPQUFPaUIsS0FBSyxJQUFJdkMsZ0VBQWdCQSxDQUFDO1lBQ25Dd0MsUUFBUW5DO1lBQ1JvQyxLQUFLTDtZQUNMTSxNQUFNekMsc0RBQWUwQyxDQUFDdkIsS0FBS3dCO1lBQzNCQyxLQUFLO1lBQ0xDLGFBQWE1Qyx3REFBVzZDLENBQUMzQixLQUFLd0I7UUFDbEM7UUFDQSxNQUFNSSxPQUFPLENBQUMsUUFBUSxFQUFFM0MsV0FBVyxrQkFBa0IsRUFBRStCLFlBQVksQ0FBQztRQUNwRUwsTUFBTWtCLEtBQUtEO0lBQ2Y7SUFDQSxPQUFPeEMsSUFBSTBDLEtBQUs7UUFBQ25CO0lBQUs7QUFDMUI7QUFFTyxNQUFNb0IsU0FBUztJQUNsQkMsS0FBSztRQUFDQyxZQUFZO0lBQUs7QUFDM0IsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1hZG1pbi8uL3BhZ2VzL2FwaS91cGxvYWQuanM/NTU3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXVsdGlwYXJ0eSBmcm9tICdtdWx0aXBhcnR5JztcclxuaW1wb3J0IHtTM0NsaWVudCwgUHV0T2JqZWN0Q29tbWFuZH0gZnJvbSAnQGF3cy1zZGsvY2xpZW50LXMzJ1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgbWltZSBmcm9tICdtaW1lLXR5cGVzJztcclxuaW1wb3J0IHsgbW9uZ29vc2VDb25uZWN0IH0gZnJvbSAnQC9saWIvbW9uZ29vc2UnO1xyXG5pbXBvcnQgeyBpc0FkbWluUmVxdWVzdCB9IGZyb20gXCJAL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIjtcclxuXHJcbmNvbnN0IGJ1Y2tldE5hbWUgPSAndnQtZWNvbW1lcmNlLXN0b3JlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEsIHJlcykge1xyXG4gICAgYXdhaXQgbW9uZ29vc2VDb25uZWN0KCk7XHJcbiAgICBhd2FpdCBpc0FkbWluUmVxdWVzdChyZXEsIHJlcyk7XHJcblxyXG4gICAgY29uc3QgZm9ybSA9IG5ldyBtdWx0aXBhcnR5LkZvcm0oKTtcclxuICAgIGNvbnN0IHtmaWVsZHMsIGZpbGVzfSA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBmb3JtLnBhcnNlKHJlcSwgKGVyciwgZmllbGRzLCBmaWxlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7ZmllbGRzLCBmaWxlc30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZygnbGVuZ3RoJywgZmlsZXMuZmlsZS5sZW5ndGgpO1xyXG5cclxuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBTM0NsaWVudCh7XHJcbiAgICAgICAgcmVnaW9uOiAndXMtd2VzdC0yJyxcclxuICAgICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgICAgICBhY2Nlc3NLZXlJZDogcHJvY2Vzcy5lbnYuUzNfQUNDRVNTX0tFWSxcclxuICAgICAgICAgICAgc2VjcmV0QWNjZXNzS2V5OiBwcm9jZXNzLmVudi5TM19TRUNSRVRfQUNDRVNTX0tFWSxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbGlua3MgPSBbXTtcclxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcy5maWxlKSB7XHJcbiAgICAgICAgY29uc3QgZXh0ID0gZmlsZS5vcmlnaW5hbEZpbGVuYW1lLnNwbGl0KCcuJykucG9wKCk7XHJcbiAgICAgICAgY29uc3QgbmV3RmlsZU5hbWUgPSBEYXRlLm5vdygpICsgJy4nICsgZXh0O1xyXG4gICAgICAgIGF3YWl0IGNsaWVudC5zZW5kKG5ldyBQdXRPYmplY3RDb21tYW5kKHtcclxuICAgICAgICAgICAgQnVja2V0OiBidWNrZXROYW1lLFxyXG4gICAgICAgICAgICBLZXk6IG5ld0ZpbGVOYW1lLFxyXG4gICAgICAgICAgICBCb2R5OiBmcy5yZWFkRmlsZVN5bmMoZmlsZS5wYXRoKSxcclxuICAgICAgICAgICAgQUNMOiAncHVibGljLXJlYWQnLFxyXG4gICAgICAgICAgICBDb250ZW50VHlwZTogbWltZS5sb29rdXAoZmlsZS5wYXRoKSxcclxuICAgICAgICB9KSk7ICAgXHJcbiAgICAgICAgY29uc3QgbGluayA9IGBodHRwczovLyR7YnVja2V0TmFtZX0uczMuYW1hem9uYXdzLmNvbS8ke25ld0ZpbGVOYW1lfWA7XHJcbiAgICAgICAgbGlua3MucHVzaChsaW5rKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXMuanNvbih7bGlua3N9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICAgIGFwaToge2JvZHlQYXJzZXI6IGZhbHNlfSxcclxufTsiXSwibmFtZXMiOlsibXVsdGlwYXJ0eSIsIlMzQ2xpZW50IiwiUHV0T2JqZWN0Q29tbWFuZCIsImZzIiwibWltZSIsIm1vbmdvb3NlQ29ubmVjdCIsImlzQWRtaW5SZXF1ZXN0IiwiYnVja2V0TmFtZSIsImhhbmRsZSIsInJlcSIsInJlcyIsImZvcm0iLCJGb3JtIiwiZmllbGRzIiwiZmlsZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBhcnNlIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImZpbGUiLCJsZW5ndGgiLCJjbGllbnQiLCJyZWdpb24iLCJjcmVkZW50aWFscyIsImFjY2Vzc0tleUlkIiwicHJvY2VzcyIsImVudiIsIlMzX0FDQ0VTU19LRVkiLCJzZWNyZXRBY2Nlc3NLZXkiLCJTM19TRUNSRVRfQUNDRVNTX0tFWSIsImxpbmtzIiwiZXh0Iiwib3JpZ2luYWxGaWxlbmFtZSIsInNwbGl0IiwicG9wIiwibmV3RmlsZU5hbWUiLCJEYXRlIiwibm93Iiwic2VuZCIsIkJ1Y2tldCIsIktleSIsIkJvZHkiLCJyZWFkRmlsZVN5bmMiLCJwYXRoIiwiQUNMIiwiQ29udGVudFR5cGUiLCJsb29rdXAiLCJsaW5rIiwicHVzaCIsImpzb24iLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/upload.js\n");

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