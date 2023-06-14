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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ ProductsPage; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Center__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Center */ \"./components/Center.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Header */ \"./components/Header.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_ProductsGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ProductsGrid */ \"./components/ProductsGrid.js\");\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Title */ \"./components/Title.js\");\n/* harmony import */ var _components_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/icons/SearchIcon */ \"./components/icons/SearchIcon.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    align-items: center;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    padding: 5px;\\n    border: 1px solid #ccc;\\n    border-radius: 5px;\\n    margin-left: auto;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    color: white;\\n    border: 1px solid #5542F6;\\n    background-color: #5542F6;\\n    padding: 4px 15px;\\n    border-radius: 5px;\\n    cursor: pointer;\\n    text-decoration: none;\\n    svg {\\n        height: 15px;\\n        margin-right: 5px;\\n    }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst StyledSearch = styled_components__WEBPACK_IMPORTED_MODULE_8__.styled.div(_templateObject());\n_c = StyledSearch;\nconst SearchBar = styled_components__WEBPACK_IMPORTED_MODULE_8__.styled.input(_templateObject1());\n_c1 = SearchBar;\nconst SearchBtn = styled_components__WEBPACK_IMPORTED_MODULE_8__.styled.button(_templateObject2());\n_c2 = SearchBtn;\nvar __N_SSP = true;\nfunction ProductsPage(param) {\n    let { products  } = param;\n    _s();\n    const searchBar = react__WEBPACK_IMPORTED_MODULE_7___default().useRef(null);\n    const Search = ()=>{\n        let searchResult = [];\n        for(let i = 0; i < products.length; i++){\n            if (products[i].title.toLowerCase().includes(searchBar.current.value.toLowerCase())) {\n                searchResult.push(products[i]);\n            }\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ProductsGrid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            products: searchResult\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n            lineNumber: 50,\n            columnNumber: 16\n        }, this);\n    };\n    //set products \n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Center__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledSearch, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                children: \"All products\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SearchBar, {\n                                type: \"text\",\n                                ref: searchBar,\n                                placeholder: \"Search..\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                                lineNumber: 61,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SearchBtn, {\n                                onClick: Search,\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 50\n                                    }, this),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                                lineNumber: 62,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ProductsGrid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        products: setProduct(products)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(ProductsPage, \"6DB4TMsWC9TvePll5pTjJrEY10k=\");\n_c3 = ProductsPage;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"StyledSearch\");\n$RefreshReg$(_c1, \"SearchBar\");\n$RefreshReg$(_c2, \"SearchBtn\");\n$RefreshReg$(_c3, \"ProductsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0E7QUFHRTtBQUNVO0FBQ2Q7QUFDZ0I7QUFDN0I7QUFDTztBQUVqQyxNQUFNUSxlQUFlTixxREFBTUEsQ0FBQ087S0FBdEJEO0FBS04sTUFBTUUsWUFBWVIscURBQU1BLENBQUNTO01BQW5CRDtBQVFOLE1BQU1FLFlBQVlWLHFEQUFNQSxDQUFDVztNQUFuQkQ7O0FBZVMsU0FBU0UsYUFBYSxLQUFVO1FBQVYsRUFBQ0MsU0FBUSxFQUFDLEdBQVY7O0lBQ2pDLE1BQU1DLFlBQVlWLG1EQUFZVyxDQUFDO0lBRS9CLE1BQU1DLFNBQVM7UUFDWCxJQUFJQyxlQUFlLEVBQUU7UUFDckIsSUFBSSxJQUFJQyxJQUFJLEdBQUdBLElBQUlMLFNBQVNNLFFBQVFELElBQUs7WUFDckMsSUFBR0wsUUFBUSxDQUFDSyxFQUFFLENBQUNFLE1BQU1DLGNBQWNDLFNBQVNSLFVBQVVTLFFBQVFDLE1BQU1ILGdCQUFnQjtnQkFDaEZKLGFBQWFRLEtBQUtaLFFBQVEsQ0FBQ0ssRUFBRTtZQUNqQztRQUNKO1FBQ0EscUJBQU8sOERBQUNqQixnRUFBWUE7WUFBQ1ksVUFBVUk7Ozs7OztJQUNuQztJQUVBLGVBQWU7SUFFZixxQkFDSTs7MEJBQ0ksOERBQUNsQiwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDRCwwREFBTUE7O2tDQUNILDhEQUFDUTs7MENBQ0csOERBQUNKLHlEQUFLQTswQ0FBQzs7Ozs7OzBDQUNQLDhEQUFDTTtnQ0FBVWtCLE1BQUs7Z0NBQU9DLEtBQUtiO2dDQUFXYyxhQUFZOzs7Ozs7MENBQ25ELDhEQUFDbEI7Z0NBQVVtQixTQUFTYjs7b0NBQVE7a0RBQUMsOERBQUNiLG9FQUFVQTs7Ozs7b0NBQUc7Ozs7Ozs7Ozs7Ozs7a0NBRS9DLDhEQUFDRixnRUFBWUE7d0JBQUNZLFVBQVVpQixXQUFXakI7Ozs7Ozs7Ozs7Ozs7O0FBSW5EO0dBNUJ3QkQ7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMuanM/MzE2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2VudGVyIGZyb20gXCJAL2NvbXBvbmVudHMvQ2VudGVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IHsgbW9uZ29vc2VDb25uZWN0IH0gZnJvbSBcIkAvbGliL21vbmdvb3NlXCI7XHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiQC9tb2RlbHMvUHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFByb2R1Y3RzR3JpZCBmcm9tIFwiQC9jb21wb25lbnRzL1Byb2R1Y3RzR3JpZFwiO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSBcIkAvY29tcG9uZW50cy9UaXRsZVwiO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiQC9jb21wb25lbnRzL2ljb25zL1NlYXJjaEljb25cIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgU3R5bGVkU2VhcmNoID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgU2VhcmNoQmFyID0gc3R5bGVkLmlucHV0YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuYDtcclxuXHJcbmNvbnN0IFNlYXJjaEJ0biA9IHN0eWxlZC5idXR0b25gXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTU0MkY2O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NDJGNjtcclxuICAgIHBhZGRpbmc6IDRweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgc3ZnIHtcclxuICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHNQYWdlKHtwcm9kdWN0c30pIHtcclxuICAgIGNvbnN0IHNlYXJjaEJhciA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuXHJcbiAgICBjb25zdCBTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHNlYXJjaFJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9kdWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihwcm9kdWN0c1tpXS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaEJhci5jdXJyZW50LnZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHQucHVzaChwcm9kdWN0c1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDxQcm9kdWN0c0dyaWQgcHJvZHVjdHM9e3NlYXJjaFJlc3VsdH0vPlxyXG4gICAgfTtcclxuXHJcbiAgICAvL3NldCBwcm9kdWN0cyBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPENlbnRlcj5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWRTZWFyY2g+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZT5BbGwgcHJvZHVjdHM8L1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hCYXIgdHlwZT1cInRleHRcIiByZWY9e3NlYXJjaEJhcn0gcGxhY2Vob2xkZXI9XCJTZWFyY2guLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoQnRuIG9uQ2xpY2s9e1NlYXJjaH0+IDxTZWFyY2hJY29uIC8+IDwvU2VhcmNoQnRuPlxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWRTZWFyY2g+XHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdHNHcmlkIHByb2R1Y3RzPXtzZXRQcm9kdWN0KHByb2R1Y3RzKX0vPlxyXG4gICAgICAgICAgICA8L0NlbnRlcj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGF3YWl0IG1vbmdvb3NlQ29ubmVjdCgpOyBcclxuICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgUHJvZHVjdC5maW5kKHt9LCBudWxsLCB7c29ydDp7J19pZCc6IC0xfX0pO1xyXG4gICAgcmV0dXJuIHtwcm9wczp7XHJcbiAgICAgICAgcHJvZHVjdHM6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocHJvZHVjdHMpKVxyXG4gICAgfX07XHJcbn0iXSwibmFtZXMiOlsiQ2VudGVyIiwiSGVhZGVyIiwic3R5bGVkIiwiUHJvZHVjdHNHcmlkIiwiVGl0bGUiLCJTZWFyY2hJY29uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIlN0eWxlZFNlYXJjaCIsImRpdiIsIlNlYXJjaEJhciIsImlucHV0IiwiU2VhcmNoQnRuIiwiYnV0dG9uIiwiUHJvZHVjdHNQYWdlIiwicHJvZHVjdHMiLCJzZWFyY2hCYXIiLCJ1c2VSZWYiLCJTZWFyY2giLCJzZWFyY2hSZXN1bHQiLCJpIiwibGVuZ3RoIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiY3VycmVudCIsInZhbHVlIiwicHVzaCIsInR5cGUiLCJyZWYiLCJwbGFjZWhvbGRlciIsIm9uQ2xpY2siLCJzZXRQcm9kdWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products.js\n"));

/***/ })

});