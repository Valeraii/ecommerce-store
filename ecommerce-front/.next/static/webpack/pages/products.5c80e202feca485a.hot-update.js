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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ ProductsPage; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Center__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Center */ \"./components/Center.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Header */ \"./components/Header.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_ProductsGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ProductsGrid */ \"./components/ProductsGrid.js\");\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Title */ \"./components/Title.js\");\n/* harmony import */ var _components_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/icons/SearchIcon */ \"./components/icons/SearchIcon.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    align-items: center;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    padding: 5px;\\n    border: 1px solid #ccc;\\n    border-radius: 5px;\\n    margin-left: auto;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    color: white;\\n    border: 1px solid #5542F6;\\n    background-color: #5542F6;\\n    padding: 4px 15px;\\n    border-radius: 5px;\\n    cursor: pointer;\\n    text-decoration: none;\\n    svg {\\n        height: 15px;\\n        margin-right: 5px;\\n    }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\n\n\nconst StyledSearch = styled_components__WEBPACK_IMPORTED_MODULE_8__.styled.div(_templateObject());\n_c = StyledSearch;\nconst SearchBar = styled_components__WEBPACK_IMPORTED_MODULE_8__.styled.input(_templateObject1());\n_c1 = SearchBar;\nconst SearchBtn = styled_components__WEBPACK_IMPORTED_MODULE_8__.styled.button(_templateObject2());\n_c2 = SearchBtn;\nvar __N_SSP = true;\nfunction ProductsPage(param) {\n    let { products  } = param;\n    var _s = $RefreshSig$();\n    function search() {\n        _s();\n        const input = react__WEBPACK_IMPORTED_MODULE_7___default().useRef(null);\n        console.log(input);\n        let searchResult = [];\n        for(p in products){\n            if (products[p].name.includes(input)) {\n                searchResult.push(products[p]);\n            }\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ProductsGrid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            products: searchResult\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n            lineNumber: 49,\n            columnNumber: 17\n        }, this);\n    }\n    _s(search, \"nlIcl0voJvDyuV7TOciSdgd9B4g=\");\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Center__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledSearch, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                children: \"All products\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SearchBar, {\n                                type: \"text\",\n                                id: \"searchBar\",\n                                placeholder: \"Search..\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SearchBtn, {\n                                onClick: search(),\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 52\n                                    }, this),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ProductsGrid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        products: products\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c3 = ProductsPage;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"StyledSearch\");\n$RefreshReg$(_c1, \"SearchBar\");\n$RefreshReg$(_c2, \"SearchBtn\");\n$RefreshReg$(_c3, \"ProductsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDQTtBQUdFO0FBQ1U7QUFDZDtBQUNnQjtBQUM3QjtBQUUxQixNQUFNTyxlQUFlTCxxREFBTUEsQ0FBQ007S0FBdEJEO0FBS04sTUFBTUUsWUFBWVAscURBQU1BLENBQUNRO01BQW5CRDtBQVFOLE1BQU1FLFlBQVlULHFEQUFNQSxDQUFDVTtNQUFuQkQ7O0FBZVMsU0FBU0UsYUFBYSxLQUFVO1FBQVYsRUFBQ0MsU0FBUSxFQUFDLEdBQVY7O0lBQ2pDLFNBQVNDOztRQUNMLE1BQU1MLFFBQVFKLG1EQUFZVSxDQUFDO1FBQzNCQyxRQUFRQyxJQUFJUjtRQUNYLElBQUlTLGVBQWUsRUFBRTtRQUNyQixJQUFJQyxLQUFLTixTQUFVO1lBQ2YsSUFBR0EsUUFBUSxDQUFDTSxFQUFFLENBQUNDLEtBQUtDLFNBQVNaLFFBQVE7Z0JBQ2pDUyxhQUFhSSxLQUFLVCxRQUFRLENBQUNNLEVBQUU7WUFDakM7UUFDSjtRQUNBLHFCQUFPLDhEQUFDakIsZ0VBQVlBO1lBQUNXLFVBQVVLOzs7Ozs7SUFDcEM7T0FWU0o7O0lBWVQscUJBQ0k7OzBCQUNJLDhEQUFDZCwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDRCwwREFBTUE7O2tDQUNILDhEQUFDTzs7MENBQ0csOERBQUNILHlEQUFLQTswQ0FBQzs7Ozs7OzBDQUNQLDhEQUFDSztnQ0FBVWUsTUFBSztnQ0FBT0MsSUFBRztnQ0FBWUMsYUFBWTs7Ozs7OzBDQUNsRCw4REFBQ2Y7Z0NBQVVnQixTQUFTWjs7b0NBQVU7a0RBQUMsOERBQUNWLG9FQUFVQTs7Ozs7b0NBQUc7Ozs7Ozs7Ozs7Ozs7a0NBRWpELDhEQUFDRixnRUFBWUE7d0JBQUNXLFVBQVVBOzs7Ozs7Ozs7Ozs7OztBQUl4QztNQTFCd0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3RzLmpzPzMxNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENlbnRlciBmcm9tIFwiQC9jb21wb25lbnRzL0NlbnRlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCB7IG1vbmdvb3NlQ29ubmVjdCB9IGZyb20gXCJAL2xpYi9tb25nb29zZVwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIkAvbW9kZWxzL1Byb2R1Y3RcIjtcclxuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBQcm9kdWN0c0dyaWQgZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9kdWN0c0dyaWRcIjtcclxuaW1wb3J0IFRpdGxlIGZyb20gXCJAL2NvbXBvbmVudHMvVGl0bGVcIjtcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSBcIkAvY29tcG9uZW50cy9pY29ucy9TZWFyY2hJY29uXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFN0eWxlZFNlYXJjaCA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IFNlYXJjaEJhciA9IHN0eWxlZC5pbnB1dGBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbmA7XHJcblxyXG5jb25zdCBTZWFyY2hCdG4gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU1NDJGNjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTQyRjY7XHJcbiAgICBwYWRkaW5nOiA0cHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzUGFnZSh7cHJvZHVjdHN9KSB7XHJcbiAgICBmdW5jdGlvbiBzZWFyY2goKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coaW5wdXQpO1xyXG4gICAgICAgICBsZXQgc2VhcmNoUmVzdWx0ID0gW107XHJcbiAgICAgICAgIGZvcihwIGluIHByb2R1Y3RzKSB7XHJcbiAgICAgICAgICAgICBpZihwcm9kdWN0c1twXS5uYW1lLmluY2x1ZGVzKGlucHV0KSkge1xyXG4gICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdC5wdXNoKHByb2R1Y3RzW3BdKTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICAgICByZXR1cm4gPFByb2R1Y3RzR3JpZCBwcm9kdWN0cz17c2VhcmNoUmVzdWx0fS8+XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8Q2VudGVyPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZFNlYXJjaD4gXHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlPkFsbCBwcm9kdWN0czwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEJhciB0eXBlPVwidGV4dFwiIGlkPVwic2VhcmNoQmFyXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoQnRuIG9uQ2xpY2s9e3NlYXJjaCgpfT4gPFNlYXJjaEljb24gLz4gPC9TZWFyY2hCdG4+XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZFNlYXJjaD5cclxuICAgICAgICAgICAgICAgIDxQcm9kdWN0c0dyaWQgcHJvZHVjdHM9e3Byb2R1Y3RzfS8+XHJcbiAgICAgICAgICAgIDwvQ2VudGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gICAgYXdhaXQgbW9uZ29vc2VDb25uZWN0KCk7IFxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBQcm9kdWN0LmZpbmQoe30sIG51bGwsIHtzb3J0OnsnX2lkJzogLTF9fSk7XHJcbiAgICByZXR1cm4ge3Byb3BzOntcclxuICAgICAgICBwcm9kdWN0czogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwcm9kdWN0cykpXHJcbiAgICB9fTtcclxufSJdLCJuYW1lcyI6WyJDZW50ZXIiLCJIZWFkZXIiLCJzdHlsZWQiLCJQcm9kdWN0c0dyaWQiLCJUaXRsZSIsIlNlYXJjaEljb24iLCJSZWFjdCIsIlN0eWxlZFNlYXJjaCIsImRpdiIsIlNlYXJjaEJhciIsImlucHV0IiwiU2VhcmNoQnRuIiwiYnV0dG9uIiwiUHJvZHVjdHNQYWdlIiwicHJvZHVjdHMiLCJzZWFyY2giLCJ1c2VSZWYiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoUmVzdWx0IiwicCIsIm5hbWUiLCJpbmNsdWRlcyIsInB1c2giLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products.js\n"));

/***/ })

});