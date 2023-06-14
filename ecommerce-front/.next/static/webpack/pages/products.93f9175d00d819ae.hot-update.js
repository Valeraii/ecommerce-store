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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ ProductsPage; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Center__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Center */ \"./components/Center.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Header */ \"./components/Header.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_ProductsGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ProductsGrid */ \"./components/ProductsGrid.js\");\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Title */ \"./components/Title.js\");\n/* harmony import */ var _components_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/icons/SearchIcon */ \"./components/icons/SearchIcon.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    align-items: center;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    padding: 5px;\\n    border: 1px solid #ccc;\\n    border-radius: 5px;\\n    margin-left: auto;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    color: white;\\n    border: 1px solid #5542F6;\\n    background-color: #5542F6;\\n    padding: 4px 15px;\\n    border-radius: 5px;\\n    cursor: pointer;\\n    text-decoration: none;\\n    svg {\\n        height: 15px;\\n        margin-right: 5px;\\n    }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst StyledSearch = styled_components__WEBPACK_IMPORTED_MODULE_8__.styled.div(_templateObject());\n_c = StyledSearch;\nconst SearchBar = styled_components__WEBPACK_IMPORTED_MODULE_8__.styled.input(_templateObject1());\n_c1 = SearchBar;\nconst SearchBtn = styled_components__WEBPACK_IMPORTED_MODULE_8__.styled.button(_templateObject2());\n_c2 = SearchBtn;\nvar __N_SSP = true;\nfunction ProductsPage(param) {\n    let { products  } = param;\n    _s();\n    const searchBar = react__WEBPACK_IMPORTED_MODULE_7___default().useRef(null);\n    const [searchResult, setSearchResult] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(products);\n    const Search = ()=>{\n        let searchResult = [];\n        if (searchBar.current.value === \"\") {\n            return;\n        }\n        for(let i = 0; i < products.length; i++){\n            if (products[i].title.toLowerCase().includes(searchBar.current.value.toLowerCase())) {\n                searchResult.push(products[i]);\n            }\n        }\n        console.log(searchResult);\n        return setSearchResult(searchResult);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Center__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledSearch, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                children: \"All products\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SearchBar, {\n                                type: \"text\",\n                                ref: searchBar,\n                                placeholder: \"Search..\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                                lineNumber: 64,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SearchBtn, {\n                                onClick: Search,\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 50\n                                    }, this),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                                lineNumber: 65,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ProductsGrid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        products: searchResult\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\pages\\\\products.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(ProductsPage, \"30UTViNtboc6Om2RK4ykrBy2sxc=\");\n_c3 = ProductsPage;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"StyledSearch\");\n$RefreshReg$(_c1, \"SearchBar\");\n$RefreshReg$(_c2, \"SearchBtn\");\n$RefreshReg$(_c3, \"ProductsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0E7QUFHRTtBQUNVO0FBQ2Q7QUFDZ0I7QUFDN0I7QUFDTztBQUVqQyxNQUFNUSxlQUFlTixxREFBTUEsQ0FBQ087S0FBdEJEO0FBS04sTUFBTUUsWUFBWVIscURBQU1BLENBQUNTO01BQW5CRDtBQVFOLE1BQU1FLFlBQVlWLHFEQUFNQSxDQUFDVztNQUFuQkQ7O0FBZVMsU0FBU0UsYUFBYSxLQUFVO1FBQVYsRUFBQ0MsU0FBUSxFQUFDLEdBQVY7O0lBQ2pDLE1BQU1DLFlBQVlWLG1EQUFZVyxDQUFDO0lBQy9CLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdaLCtDQUFRQSxDQUFDUTtJQUVqRCxNQUFNSyxTQUFTO1FBQ1gsSUFBSUYsZUFBZSxFQUFFO1FBQ3JCLElBQUdGLFVBQVVLLFFBQVFDLFVBQVUsSUFBSTtZQUMvQjtRQUNKO1FBQ0EsSUFBSSxJQUFJQyxJQUFJLEdBQUdBLElBQUlSLFNBQVNTLFFBQVFELElBQUs7WUFDckMsSUFBR1IsUUFBUSxDQUFDUSxFQUFFLENBQUNFLE1BQU1DLGNBQWNDLFNBQVNYLFVBQVVLLFFBQVFDLE1BQU1JLGdCQUFnQjtnQkFDaEZSLGFBQWFVLEtBQUtiLFFBQVEsQ0FBQ1EsRUFBRTtZQUNqQztRQUNKO1FBQ0FNLFFBQVFDLElBQUlaO1FBQ1osT0FBT0MsZ0JBQWdCRDtJQUMzQjtJQUVBLHFCQUNJOzswQkFDSSw4REFBQ2pCLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNELDBEQUFNQTs7a0NBQ0gsOERBQUNROzswQ0FDRyw4REFBQ0oseURBQUtBOzBDQUFDOzs7Ozs7MENBQ1AsOERBQUNNO2dDQUFVcUIsTUFBSztnQ0FBT0MsS0FBS2hCO2dDQUFXaUIsYUFBWTs7Ozs7OzBDQUNuRCw4REFBQ3JCO2dDQUFVc0IsU0FBU2Q7O29DQUFRO2tEQUFDLDhEQUFDZixvRUFBVUE7Ozs7O29DQUFHOzs7Ozs7Ozs7Ozs7O2tDQUUvQyw4REFBQ0YsZ0VBQVlBO3dCQUFDWSxVQUFVRzs7Ozs7Ozs7Ozs7Ozs7QUFJeEM7R0EvQndCSjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0cy5qcz8zMTY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDZW50ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9DZW50ZXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBtb25nb29zZUNvbm5lY3QgfSBmcm9tIFwiQC9saWIvbW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCJAL21vZGVscy9Qcm9kdWN0XCI7XHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUHJvZHVjdHNHcmlkIGZyb20gXCJAL2NvbXBvbmVudHMvUHJvZHVjdHNHcmlkXCI7XHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiQC9jb21wb25lbnRzL1RpdGxlXCI7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gXCJAL2NvbXBvbmVudHMvaWNvbnMvU2VhcmNoSWNvblwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBTdHlsZWRTZWFyY2ggPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBTZWFyY2hCYXIgPSBzdHlsZWQuaW5wdXRgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5gO1xyXG5cclxuY29uc3QgU2VhcmNoQnRuID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NTQyRjY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU0MkY2O1xyXG4gICAgcGFkZGluZzogNHB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBzdmcge1xyXG4gICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuYDtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0c1BhZ2Uoe3Byb2R1Y3RzfSkge1xyXG4gICAgY29uc3Qgc2VhcmNoQmFyID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW3NlYXJjaFJlc3VsdCwgc2V0U2VhcmNoUmVzdWx0XSA9IHVzZVN0YXRlKHByb2R1Y3RzKTtcclxuXHJcbiAgICBjb25zdCBTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHNlYXJjaFJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGlmKHNlYXJjaEJhci5jdXJyZW50LnZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2R1Y3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKHByb2R1Y3RzW2ldLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoQmFyLmN1cnJlbnQudmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdC5wdXNoKHByb2R1Y3RzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhzZWFyY2hSZXN1bHQpO1xyXG4gICAgICAgIHJldHVybiBzZXRTZWFyY2hSZXN1bHQoc2VhcmNoUmVzdWx0KTtcclxuICAgIH07IFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8Q2VudGVyPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZFNlYXJjaD4gXHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlPkFsbCBwcm9kdWN0czwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEJhciB0eXBlPVwidGV4dFwiIHJlZj17c2VhcmNoQmFyfSBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hCdG4gb25DbGljaz17U2VhcmNofT4gPFNlYXJjaEljb24gLz4gPC9TZWFyY2hCdG4+XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZFNlYXJjaD5cclxuICAgICAgICAgICAgICAgIDxQcm9kdWN0c0dyaWQgcHJvZHVjdHM9e3NlYXJjaFJlc3VsdH0vPlxyXG4gICAgICAgICAgICA8L0NlbnRlcj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGF3YWl0IG1vbmdvb3NlQ29ubmVjdCgpOyBcclxuICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgUHJvZHVjdC5maW5kKHt9LCBudWxsLCB7c29ydDp7J19pZCc6IC0xfX0pO1xyXG4gICAgcmV0dXJuIHtwcm9wczp7XHJcbiAgICAgICAgcHJvZHVjdHM6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocHJvZHVjdHMpKVxyXG4gICAgfX07XHJcbn0iXSwibmFtZXMiOlsiQ2VudGVyIiwiSGVhZGVyIiwic3R5bGVkIiwiUHJvZHVjdHNHcmlkIiwiVGl0bGUiLCJTZWFyY2hJY29uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIlN0eWxlZFNlYXJjaCIsImRpdiIsIlNlYXJjaEJhciIsImlucHV0IiwiU2VhcmNoQnRuIiwiYnV0dG9uIiwiUHJvZHVjdHNQYWdlIiwicHJvZHVjdHMiLCJzZWFyY2hCYXIiLCJ1c2VSZWYiLCJzZWFyY2hSZXN1bHQiLCJzZXRTZWFyY2hSZXN1bHQiLCJTZWFyY2giLCJjdXJyZW50IiwidmFsdWUiLCJpIiwibGVuZ3RoIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwicmVmIiwicGxhY2Vob2xkZXIiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products.js\n"));

/***/ })

});