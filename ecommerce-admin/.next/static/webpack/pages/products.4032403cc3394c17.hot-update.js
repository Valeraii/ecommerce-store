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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Products; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout.js */ \"./components/Layout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Products() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/products\").then((response)=>{\n            setProducts(response.data);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                className: \"btn-primary\",\n                href: \"/products/new\",\n                children: \" Add new product\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                id: \"myTable\",\n                className: \"basic mt-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Product Name\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                            lineNumber: 19,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: product.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"/products/edit/\" + product._id,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                                        fill: \"none\",\n                                                        viewBox: \"0 0 24 24\",\n                                                        \"stroke-width\": \"1.5\",\n                                                        stroke: \"currentColor\",\n                                                        class: \"w-4 h-4\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                            \"stroke-linecap\": \"round\",\n                                                            \"stroke-linejoin\": \"round\",\n                                                            d: \"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                                                            lineNumber: 31,\n                                                            columnNumber: 41\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                                                        lineNumber: 30,\n                                                        columnNumber: 37\n                                                    }, this),\n                                                    \"Edit\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                                                lineNumber: 29,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"/products/delete/\" + product._id,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                                        fill: \"none\",\n                                                        viewBox: \"0 0 24 24\",\n                                                        \"stroke-width\": \"1.5\",\n                                                        stroke: \"currentColor\",\n                                                        class: \"w-4 h-4\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                            \"stroke-linecap\": \"round\",\n                                                            \"stroke-linejoin\": \"round\",\n                                                            d: \"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                                                            lineNumber: 37,\n                                                            columnNumber: 41\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                                                        lineNumber: 36,\n                                                        columnNumber: 37\n                                                    }, this),\n                                                    \"Delete\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                                                lineNumber: 35,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, product._id, true, {\n                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                                lineNumber: 26,\n                                columnNumber: 25\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n}\n_s(Products, \"f86L6rLANGURv6GE6gupp7+oOp4=\");\n_c = Products;\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNmO0FBQ0g7QUFDa0I7QUFFN0IsU0FBU0s7O0lBQ3BCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTNDRCxnREFBU0EsQ0FBQztRQUNORCxpREFBU00sQ0FBQyxpQkFBaUJDLEtBQUtDLENBQUFBO1lBQzVCSCxZQUFZRyxTQUFTQztRQUN6QjtJQUNKLEdBQUcsRUFBRTtJQUNMLHFCQUNJLDhEQUFDWCw2REFBTUE7OzBCQUNILDhEQUFDQyxrREFBSUE7Z0JBQUNXLFdBQVU7Z0JBQWNDLE1BQUs7MEJBQWdCOzs7Ozs7MEJBQ25ELDhEQUFDQztnQkFBTUMsSUFBRztnQkFBVUgsV0FBVTs7a0NBQzFCLDhEQUFDSTtrQ0FDRyw0RUFBQ0M7OzhDQUNHLDhEQUFDQzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHVCw4REFBQ0M7a0NBQ0liLFNBQVNjLElBQUlDLENBQUFBLHdCQUNWLDhEQUFDSjs7a0RBQ0csOERBQUNDO2tEQUFJRyxRQUFRQzs7Ozs7O2tEQUNiLDhEQUFDSjs7MERBQ0csOERBQUNqQixrREFBSUE7Z0RBQUNZLE1BQU0sb0JBQW9CUSxRQUFRRTs7a0VBQ3BDLDhEQUFDQzt3REFBSUMsT0FBTTt3REFBNkJDLE1BQUs7d0RBQU9DLFNBQVE7d0RBQVlDLGdCQUFhO3dEQUFNQyxRQUFPO3dEQUFlQyxPQUFNO2tFQUNuSCw0RUFBQ0M7NERBQUtDLGtCQUFlOzREQUFRQyxtQkFBZ0I7NERBQVFDLEdBQUU7Ozs7Ozs7Ozs7O29EQUNyRDs7Ozs7OzswREFHViw4REFBQ2pDLGtEQUFJQTtnREFBQ1ksTUFBTSxzQkFBc0JRLFFBQVFFOztrRUFDdEMsOERBQUNDO3dEQUFJQyxPQUFNO3dEQUE2QkMsTUFBSzt3REFBT0MsU0FBUTt3REFBWUMsZ0JBQWE7d0RBQU1DLFFBQU87d0RBQWVDLE9BQU07a0VBQ25ILDRFQUFDQzs0REFBS0Msa0JBQWU7NERBQVFDLG1CQUFnQjs0REFBUUMsR0FBRTs7Ozs7Ozs7Ozs7b0RBQ3JEOzs7Ozs7Ozs7Ozs7OzsrQkFaVGIsUUFBUUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQnpDO0dBMUN3QmxCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3RzLmpzPzMxNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvTGF5b3V0LmpzJztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0cygpIHtcclxuICAgIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3Byb2R1Y3RzJykudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHNldFByb2R1Y3RzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiIGhyZWY9XCIvcHJvZHVjdHMvbmV3XCI+IEFkZCBuZXcgcHJvZHVjdDwvTGluaz5cclxuICAgICAgICAgICAgPHRhYmxlIGlkPVwibXlUYWJsZVwiIGNsYXNzTmFtZT1cImJhc2ljIG10LTJcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm9kdWN0IE5hbWU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtwcm9kdWN0Ll9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb2R1Y3QudGl0bGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9wcm9kdWN0cy9lZGl0LycgKyBwcm9kdWN0Ll9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwidy00IGgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgZD1cIk0xNi44NjIgNC40ODdsMS42ODctMS42ODhhMS44NzUgMS44NzUgMCAxMTIuNjUyIDIuNjUyTDEwLjU4MiAxNi4wN2E0LjUgNC41IDAgMDEtMS44OTcgMS4xM0w2IDE4bC44LTIuNjg1YTQuNSA0LjUgMCAwMTEuMTMtMS44OTdsOC45MzItOC45MzF6bTAgMEwxOS41IDcuMTI1TTE4IDE0djQuNzVBMi4yNSAyLjI1IDAgMDExNS43NSAyMUg1LjI1QTIuMjUgMi4yNSAwIDAxMyAxOC43NVY4LjI1QTIuMjUgMi4yNSAwIDAxNS4yNSA2SDEwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9wcm9kdWN0cy9kZWxldGUvJyArIHByb2R1Y3QuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJ3LTQgaC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBkPVwiTTE0Ljc0IDlsLS4zNDYgOW0tNC43ODggMEw5LjI2IDltOS45NjgtMy4yMWMuMzQyLjA1Mi42ODIuMTA3IDEuMDIyLjE2Nm0tMS4wMjItLjE2NUwxOC4xNiAxOS42NzNhMi4yNSAyLjI1IDAgMDEtMi4yNDQgMi4wNzdIOC4wODRhMi4yNSAyLjI1IDAgMDEtMi4yNDQtMi4wNzdMNC43NzIgNS43OW0xNC40NTYgMGE0OC4xMDggNDguMTA4IDAgMDAtMy40NzgtLjM5N20tMTIgLjU2MmMuMzQtLjA1OS42OC0uMTE0IDEuMDIyLS4xNjVtMCAwYTQ4LjExIDQ4LjExIDAgMDEzLjQ3OC0uMzk3bTcuNSAwdi0uOTE2YzAtMS4xOC0uOTEtMi4xNjQtMi4wOS0yLjIwMWE1MS45NjQgNTEuOTY0IDAgMDAtMy4zMiAwYy0xLjE4LjAzNy0yLjA5IDEuMDIyLTIuMDkgMi4yMDF2LjkxNm03LjUgMGE0OC42NjcgNDguNjY3IDAgMDAtNy41IDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiTGF5b3V0IiwiTGluayIsImF4aW9zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcm9kdWN0cyIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2xhc3NOYW1lIiwiaHJlZiIsInRhYmxlIiwiaWQiLCJ0aGVhZCIsInRyIiwidGQiLCJ0Ym9keSIsIm1hcCIsInByb2R1Y3QiLCJ0aXRsZSIsIl9pZCIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2Utd2lkdGgiLCJzdHJva2UiLCJjbGFzcyIsInBhdGgiLCJzdHJva2UtbGluZWNhcCIsInN0cm9rZS1saW5lam9pbiIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products.js\n"));

/***/ })

});