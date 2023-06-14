"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./pages/products.js":
/*!***************************!*\
  !*** ./pages/products.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ ProductsPage; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Center__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Center */ \"./components/Center.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Header */ \"./components/Header.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_ProductsGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ProductsGrid */ \"./components/ProductsGrid.js\");\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Title */ \"./components/Title.js\");\n/* harmony import */ var _components_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/icons/SearchIcon */ \"./components/icons/SearchIcon.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    align-items: center;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    padding: 5px;\\n    border: 1px solid #ccc;\\n    border-radius: 5px;\\n    margin-left: auto;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    color: white;\\n    border: 1px solid #5542F6;\\n    background-color: #5542F6;\\n    padding: 4px 15px;\\n    border-radius: 5px;\\n    cursor: pointer;\\n    text-decoration: none;\\n    svg {\\n        height: 15px;\\n        margin-right: 5px;\\n    }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\n\nconst StyledSearch = styled_components__WEBPACK_IMPORTED_MODULE_7__.styled.div(_templateObject());\n_c = StyledSearch;\nconst SearchBar = styled_components__WEBPACK_IMPORTED_MODULE_7__.styled.input(_templateObject1());\n_c1 = SearchBar;\nconst SearchBtn = styled_components__WEBPACK_IMPORTED_MODULE_7__.styled.button(_templateObject2());\n_c2 = SearchBtn;\nvar __N_SSP = true;\nfunction ProductsPage(param) {\n    let { products  } = param;\n    function search() {\n    //     var input = document.getElementById(\"searchBar\").value;\n    //     let searchResult = [];\n    //     for(p in products) {\n    //         if(products[p].name.includes(input)) {\n    //             searchResult.push(products[p]);\n    //         }\n    //     }\n    //     return <ProductsGrid products={searchResult}/>\n    }\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Center__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledSearch, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                children: \"All products\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                                lineNumber: 55,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SearchBar, {\n                                type: \"text\",\n                                id: \"searchBar\",\n                                placeholder: \"Search..\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                                lineNumber: 56,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SearchBtn, {\n                                onClick: search(),\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 52\n                                    }, this),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ProductsGrid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        products: products\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c3 = ProductsPage;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"StyledSearch\");\n$RefreshReg$(_c1, \"SearchBar\");\n$RefreshReg$(_c2, \"SearchBtn\");\n$RefreshReg$(_c3, \"ProductsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0E7QUFHRTtBQUNVO0FBQ2Q7QUFDZ0I7QUFFdkQsTUFBTU0sZUFBZUoscURBQU1BLENBQUNLO0tBQXRCRDtBQUtOLE1BQU1FLFlBQVlOLHFEQUFNQSxDQUFDTztNQUFuQkQ7QUFRTixNQUFNRSxZQUFZUixxREFBTUEsQ0FBQ1M7TUFBbkJEOztBQWVTLFNBQVNFLGFBQWEsS0FBVTtRQUFWLEVBQUNDLFNBQVEsRUFBQyxHQUFWO0lBQ2pDLFNBQVNDO0lBQ1QsOERBQThEO0lBQzlELDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0IsaURBQWlEO0lBQ2pELDhDQUE4QztJQUM5QyxZQUFZO0lBQ1osUUFBUTtJQUNSLHFEQUFxRDtJQUNyRDs7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUNiLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNELDBEQUFNQTs7a0NBQ0gsOERBQUNNOzswQ0FDRyw4REFBQ0YseURBQUtBOzBDQUFDOzs7Ozs7MENBQ1AsOERBQUNJO2dDQUFVTyxNQUFLO2dDQUFPQyxJQUFHO2dDQUFZQyxhQUFZOzs7Ozs7MENBQ2xELDhEQUFDUDtnQ0FBVVEsU0FBU0o7O29DQUFVO2tEQUFDLDhEQUFDVCxvRUFBVUE7Ozs7O29DQUFHOzs7Ozs7Ozs7Ozs7O2tDQUVqRCw4REFBQ0YsZ0VBQVlBO3dCQUFDVSxVQUFVQTs7Ozs7Ozs7Ozs7Ozs7QUFJeEM7TUF6QndCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0cy5qcz8zMTY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDZW50ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9DZW50ZXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBtb25nb29zZUNvbm5lY3QgfSBmcm9tIFwiQC9saWIvbW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCJAL21vZGVscy9Qcm9kdWN0XCI7XHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUHJvZHVjdHNHcmlkIGZyb20gXCJAL2NvbXBvbmVudHMvUHJvZHVjdHNHcmlkXCI7XHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiQC9jb21wb25lbnRzL1RpdGxlXCI7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gXCJAL2NvbXBvbmVudHMvaWNvbnMvU2VhcmNoSWNvblwiO1xyXG5cclxuY29uc3QgU3R5bGVkU2VhcmNoID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgU2VhcmNoQmFyID0gc3R5bGVkLmlucHV0YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuYDtcclxuXHJcbmNvbnN0IFNlYXJjaEJ0biA9IHN0eWxlZC5idXR0b25gXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTU0MkY2O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NDJGNjtcclxuICAgIHBhZGRpbmc6IDRweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgc3ZnIHtcclxuICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHNQYWdlKHtwcm9kdWN0c30pIHtcclxuICAgIGZ1bmN0aW9uIHNlYXJjaCgpIHtcclxuICAgIC8vICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJhclwiKS52YWx1ZTtcclxuICAgIC8vICAgICBsZXQgc2VhcmNoUmVzdWx0ID0gW107XHJcbiAgICAvLyAgICAgZm9yKHAgaW4gcHJvZHVjdHMpIHtcclxuICAgIC8vICAgICAgICAgaWYocHJvZHVjdHNbcF0ubmFtZS5pbmNsdWRlcyhpbnB1dCkpIHtcclxuICAgIC8vICAgICAgICAgICAgIHNlYXJjaFJlc3VsdC5wdXNoKHByb2R1Y3RzW3BdKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gPFByb2R1Y3RzR3JpZCBwcm9kdWN0cz17c2VhcmNoUmVzdWx0fS8+XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8Q2VudGVyPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZFNlYXJjaD4gXHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlPkFsbCBwcm9kdWN0czwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEJhciB0eXBlPVwidGV4dFwiIGlkPVwic2VhcmNoQmFyXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoQnRuIG9uQ2xpY2s9e3NlYXJjaCgpfT4gPFNlYXJjaEljb24gLz4gPC9TZWFyY2hCdG4+XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZFNlYXJjaD5cclxuICAgICAgICAgICAgICAgIDxQcm9kdWN0c0dyaWQgcHJvZHVjdHM9e3Byb2R1Y3RzfS8+XHJcbiAgICAgICAgICAgIDwvQ2VudGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gICAgYXdhaXQgbW9uZ29vc2VDb25uZWN0KCk7IFxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBQcm9kdWN0LmZpbmQoe30sIG51bGwsIHtzb3J0OnsnX2lkJzogLTF9fSk7XHJcbiAgICByZXR1cm4ge3Byb3BzOntcclxuICAgICAgICBwcm9kdWN0czogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwcm9kdWN0cykpXHJcbiAgICB9fTtcclxufSJdLCJuYW1lcyI6WyJDZW50ZXIiLCJIZWFkZXIiLCJzdHlsZWQiLCJQcm9kdWN0c0dyaWQiLCJUaXRsZSIsIlNlYXJjaEljb24iLCJTdHlsZWRTZWFyY2giLCJkaXYiLCJTZWFyY2hCYXIiLCJpbnB1dCIsIlNlYXJjaEJ0biIsImJ1dHRvbiIsIlByb2R1Y3RzUGFnZSIsInByb2R1Y3RzIiwic2VhcmNoIiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products.js\n"));

/***/ })

});