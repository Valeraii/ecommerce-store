"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ProductsGrid.js":
/*!************************************!*\
  !*** ./components/ProductsGrid.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductsGrid; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProductBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductBox */ \"./components/ProductBox.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: grid;\\n    grid-template-columns: 1fr 1fr 1fr;\\n    gap: 30px;\\n    padding-top: 30px;\\n    padding-bottom: 30px;\\n    @media screen and (min-width: 768px) {\\n        \\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\nconst StyledProductsGrid = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"ProductsGrid__StyledProductsGrid\",\n    componentId: \"sc-c1f74a7-0\"\n})(_templateObject());\n_c = StyledProductsGrid;\nfunction ProductsGrid(param) {\n    let { products  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledProductsGrid, {\n        children: (products === null || products === void 0 ? void 0 : products.length) > 0 && products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ProductBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                ...product\n            }, product._id, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\components\\\\ProductsGrid.js\",\n                lineNumber: 19,\n                columnNumber: 17\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\components\\\\ProductsGrid.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n_c1 = ProductsGrid;\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledProductsGrid\");\n$RefreshReg$(_c1, \"ProductsGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RzR3JpZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNDO0FBRXZDLE1BQU1FLHFCQUFxQkQsNkRBQVVFOzs7O0tBQS9CRDtBQVdTLFNBQVNFLGFBQWEsS0FBVTtRQUFWLEVBQUNDLFNBQVEsRUFBQyxHQUFWO0lBQ2pDLHFCQUNJLDhEQUFDSDtrQkFDSUcsQ0FBQUEscUJBQUFBLHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVQyxNQUFLLElBQUksS0FBS0QsU0FBU0UsSUFBSUMsQ0FBQUEsd0JBQ2xDLDhEQUFDUixtREFBVUE7Z0JBQW1CLEdBQUdRLE9BQU87ZUFBdkJBLFFBQVFDOzs7Ozs7Ozs7O0FBSXpDO01BUndCTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3RzR3JpZC5qcz9jYjBhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0Qm94IGZyb20gXCIuL1Byb2R1Y3RCb3hcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBTdHlsZWRQcm9kdWN0c0dyaWQgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgICBnYXA6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzR3JpZCh7cHJvZHVjdHN9KXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZFByb2R1Y3RzR3JpZD5cclxuICAgICAgICAgICAge3Byb2R1Y3RzPy5sZW5ndGggPiAwICYmIHByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcclxuICAgICAgICAgICAgICAgIDxQcm9kdWN0Qm94IGtleT17cHJvZHVjdC5faWR9ey4uLnByb2R1Y3R9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU3R5bGVkUHJvZHVjdHNHcmlkPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlByb2R1Y3RCb3giLCJzdHlsZWQiLCJTdHlsZWRQcm9kdWN0c0dyaWQiLCJkaXYiLCJQcm9kdWN0c0dyaWQiLCJwcm9kdWN0cyIsImxlbmd0aCIsIm1hcCIsInByb2R1Y3QiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProductsGrid.js\n"));

/***/ })

});