"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cart",{

/***/ "./components/Email.js":
/*!*****************************!*\
  !*** ./components/Email.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendEmail: function() { return /* binding */ sendEmail; }\n/* harmony export */ });\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emailjs/browser */ \"./node_modules/@emailjs/browser/es/index.js\");\n\n(function() {\n    _emailjs_browser__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init(\"kVPiWt2jPqDAaEXsb\");\n})();\nconst sendEmail = (templateParams)=>{\n    _emailjs_browser__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send(\"service_hol146a\", \"template_tlf37dw\", templateParams).then((result)=>{\n        console.log(result.text);\n    }, (error)=>{\n        console.log(error.text);\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0VtYWlsLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXNDO0FBRXJDO0lBQ0dBLDZEQUFZQyxDQUFDO0FBQ2hCO0FBRU0sTUFBTUMsWUFBWSxDQUFDQztJQUN0QkgsNkRBQ1NJLENBQ0QsbUJBQ0Esb0JBQ0FELGdCQUVIRSxLQUNHLENBQUNDO1FBQ0dDLFFBQVFDLElBQUlGLE9BQU9HO0lBQ3ZCLEdBQ0EsQ0FBQ0M7UUFDR0gsUUFBUUMsSUFBSUUsTUFBTUQ7SUFDdEI7QUFFWixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRW1haWwuanM/OTk0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZW1haWxqcyBmcm9tIFwiQGVtYWlsanMvYnJvd3NlclwiXHJcblxyXG4oZnVuY3Rpb24oKXtcclxuICAgIGVtYWlsanMuaW5pdChcImtWUGlXdDJqUHFEQWFFWHNiXCIpO1xyXG4gfSkoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZW5kRW1haWwgPSAodGVtcGxhdGVQYXJhbXMpID0+IHtcclxuICAgIGVtYWlsanNcclxuICAgICAgICAuc2VuZChcclxuICAgICAgICAgICAgXCJzZXJ2aWNlX2hvbDE0NmFcIixcclxuICAgICAgICAgICAgXCJ0ZW1wbGF0ZV90bGYzN2R3XCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlUGFyYW1zXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQudGV4dClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci50ZXh0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG59Il0sIm5hbWVzIjpbImVtYWlsanMiLCJpbml0Iiwic2VuZEVtYWlsIiwidGVtcGxhdGVQYXJhbXMiLCJzZW5kIiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Email.js\n"));

/***/ })

});