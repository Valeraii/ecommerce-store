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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Products; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout.js */ \"./components/Layout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Products() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    function search() {\n        // Declare variables\n        var input, filter, table, tr, td, i, txtValue;\n        input = document.getElementById(\"myInput\");\n        filter = input.value.toUpperCase();\n        table = document.getElementById(\"myTable\");\n        tr = table.getElementsByTagName(\"tr\");\n        // Loop through all table rows, and hide those who don't match the search query\n        for(i = 0; i < tr.length; i++){\n            td = tr[i].getElementsByTagName(\"td\")[0];\n            if (td) {\n                txtValue = td.textContent || td.innerText;\n                if (txtValue.toUpperCase().indexOf(filter) > -1) {\n                    tr[i].style.display = \"\";\n                } else {\n                    tr[i].style.display = \"none\";\n                }\n            }\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/products\").then((response)=>{\n            setProducts(response.data);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                className: \"btn-primary\",\n                href: \"/products/new\",\n                children: \" Add new product\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"myInput\",\n                onkeyup: \"search()\",\n                placeholder: \"Search\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"basic mt-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Product Name\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: product.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"/products/edit/\" + product._id,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                                        fill: \"none\",\n                                                        viewBox: \"0 0 24 24\",\n                                                        \"stroke-width\": \"1.5\",\n                                                        stroke: \"currentColor\",\n                                                        class: \"w-4 h-4\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                            \"stroke-linecap\": \"round\",\n                                                            \"stroke-linejoin\": \"round\",\n                                                            d: \"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                                                            lineNumber: 54,\n                                                            columnNumber: 41\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                                                        lineNumber: 53,\n                                                        columnNumber: 37\n                                                    }, this),\n                                                    \"Edit\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                                                lineNumber: 52,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"/products/delete/\" + product._id,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                                        fill: \"none\",\n                                                        viewBox: \"0 0 24 24\",\n                                                        \"stroke-width\": \"1.5\",\n                                                        stroke: \"currentColor\",\n                                                        class: \"w-4 h-4\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                            \"stroke-linecap\": \"round\",\n                                                            \"stroke-linejoin\": \"round\",\n                                                            d: \"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                                                            lineNumber: 60,\n                                                            columnNumber: 41\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                                                        lineNumber: 59,\n                                                        columnNumber: 37\n                                                    }, this),\n                                                    \"Delete\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                                                lineNumber: 58,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, product._id, true, {\n                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                                lineNumber: 49,\n                                columnNumber: 25\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\products.js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_s(Products, \"f86L6rLANGURv6GE6gupp7+oOp4=\");\n_c = Products;\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNmO0FBQ0g7QUFDa0I7QUFFN0IsU0FBU0s7O0lBQ3BCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTNDLFNBQVNJO1FBQ0wsb0JBQW9CO1FBQ3BCLElBQUlDLE9BQU9DLFFBQVFDLE9BQU9DLElBQUlDLElBQUlDLEdBQUdDO1FBQ3JDTixRQUFRTyxTQUFTQyxlQUFlO1FBQ2hDUCxTQUFTRCxNQUFNUyxNQUFNQztRQUNyQlIsUUFBUUssU0FBU0MsZUFBZTtRQUNoQ0wsS0FBS0QsTUFBTVMscUJBQXFCO1FBRWhDLCtFQUErRTtRQUMvRSxJQUFLTixJQUFJLEdBQUdBLElBQUlGLEdBQUdTLFFBQVFQLElBQUs7WUFDOUJELEtBQUtELEVBQUUsQ0FBQ0UsRUFBRSxDQUFDTSxxQkFBcUIsS0FBSyxDQUFDLEVBQUU7WUFDeEMsSUFBSVAsSUFBSTtnQkFDTkUsV0FBV0YsR0FBR1MsZUFBZVQsR0FBR1U7Z0JBQ2hDLElBQUlSLFNBQVNJLGNBQWNLLFFBQVFkLFVBQVUsQ0FBQyxHQUFHO29CQUMvQ0UsRUFBRSxDQUFDRSxFQUFFLENBQUNXLE1BQU1DLFVBQVU7Z0JBQ3hCLE9BQU87b0JBQ0xkLEVBQUUsQ0FBQ0UsRUFBRSxDQUFDVyxNQUFNQyxVQUFVO2dCQUN4QjtZQUNGO1FBQ0Y7SUFDRjtJQUVGdkIsZ0RBQVNBLENBQUM7UUFDTkQsaURBQVN5QixDQUFDLGlCQUFpQkMsS0FBS0MsQ0FBQUE7WUFDNUJ0QixZQUFZc0IsU0FBU0M7UUFDekI7SUFDSixHQUFHLEVBQUU7SUFDTCxxQkFDSSw4REFBQzlCLDZEQUFNQTs7MEJBQ0gsOERBQUNDLGtEQUFJQTtnQkFBQzhCLFdBQVU7Z0JBQWNDLE1BQUs7MEJBQWdCOzs7Ozs7MEJBQ25ELDhEQUFDdkI7Z0JBQU13QixNQUFLO2dCQUFPQyxJQUFHO2dCQUFVQyxTQUFRO2dCQUFXQyxhQUFZOzs7Ozs7MEJBQy9ELDhEQUFDekI7Z0JBQU1vQixXQUFVOztrQ0FDYiw4REFBQ007a0NBQ0csNEVBQUN6Qjs7OENBQ0csOERBQUNDOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUdULDhEQUFDeUI7a0NBQ0loQyxTQUFTaUMsSUFBSUMsQ0FBQUEsd0JBQ1YsOERBQUM1Qjs7a0RBQ0csOERBQUNDO2tEQUFJMkIsUUFBUUM7Ozs7OztrREFDYiw4REFBQzVCOzswREFDRyw4REFBQ1osa0RBQUlBO2dEQUFDK0IsTUFBTSxvQkFBb0JRLFFBQVFFOztrRUFDcEMsOERBQUNDO3dEQUFJQyxPQUFNO3dEQUE2QkMsTUFBSzt3REFBT0MsU0FBUTt3REFBWUMsZ0JBQWE7d0RBQU1DLFFBQU87d0RBQWVDLE9BQU07a0VBQ25ILDRFQUFDQzs0REFBS0Msa0JBQWU7NERBQVFDLG1CQUFnQjs0REFBUUMsR0FBRTs7Ozs7Ozs7Ozs7b0RBQ3JEOzs7Ozs7OzBEQUdWLDhEQUFDcEQsa0RBQUlBO2dEQUFDK0IsTUFBTSxzQkFBc0JRLFFBQVFFOztrRUFDdEMsOERBQUNDO3dEQUFJQyxPQUFNO3dEQUE2QkMsTUFBSzt3REFBT0MsU0FBUTt3REFBWUMsZ0JBQWE7d0RBQU1DLFFBQU87d0RBQWVDLE9BQU07a0VBQ25ILDRFQUFDQzs0REFBS0Msa0JBQWU7NERBQVFDLG1CQUFnQjs0REFBUUMsR0FBRTs7Ozs7Ozs7Ozs7b0RBQ3JEOzs7Ozs7Ozs7Ozs7OzsrQkFaVGIsUUFBUUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQnpDO0dBakV3QnJDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3RzLmpzPzMxNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvTGF5b3V0LmpzJztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0cygpIHtcclxuICAgIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNlYXJjaCgpIHtcclxuICAgICAgICAvLyBEZWNsYXJlIHZhcmlhYmxlc1xyXG4gICAgICAgIHZhciBpbnB1dCwgZmlsdGVyLCB0YWJsZSwgdHIsIHRkLCBpLCB0eHRWYWx1ZTtcclxuICAgICAgICBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlJbnB1dFwiKTtcclxuICAgICAgICBmaWx0ZXIgPSBpbnB1dC52YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVRhYmxlXCIpO1xyXG4gICAgICAgIHRyID0gdGFibGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0clwiKTtcclxuICAgICAgXHJcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCB0YWJsZSByb3dzLCBhbmQgaGlkZSB0aG9zZSB3aG8gZG9uJ3QgbWF0Y2ggdGhlIHNlYXJjaCBxdWVyeVxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgdGQgPSB0cltpXS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRkXCIpWzBdO1xyXG4gICAgICAgICAgaWYgKHRkKSB7XHJcbiAgICAgICAgICAgIHR4dFZhbHVlID0gdGQudGV4dENvbnRlbnQgfHwgdGQuaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICBpZiAodHh0VmFsdWUudG9VcHBlckNhc2UoKS5pbmRleE9mKGZpbHRlcikgPiAtMSkge1xyXG4gICAgICAgICAgICAgIHRyW2ldLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRyW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3Byb2R1Y3RzJykudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHNldFByb2R1Y3RzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiIGhyZWY9XCIvcHJvZHVjdHMvbmV3XCI+IEFkZCBuZXcgcHJvZHVjdDwvTGluaz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJteUlucHV0XCIgb25rZXl1cD1cInNlYXJjaCgpXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIj48L2lucHV0PlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiYmFzaWMgbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb2R1Y3QgTmFtZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3Byb2R1Y3QuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvZHVjdC50aXRsZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL3Byb2R1Y3RzL2VkaXQvJyArIHByb2R1Y3QuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJ3LTQgaC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBkPVwiTTE2Ljg2MiA0LjQ4N2wxLjY4Ny0xLjY4OGExLjg3NSAxLjg3NSAwIDExMi42NTIgMi42NTJMMTAuNTgyIDE2LjA3YTQuNSA0LjUgMCAwMS0xLjg5NyAxLjEzTDYgMThsLjgtMi42ODVhNC41IDQuNSAwIDAxMS4xMy0xLjg5N2w4LjkzMi04LjkzMXptMCAwTDE5LjUgNy4xMjVNMTggMTR2NC43NUEyLjI1IDIuMjUgMCAwMTE1Ljc1IDIxSDUuMjVBMi4yNSAyLjI1IDAgMDEzIDE4Ljc1VjguMjVBMi4yNSAyLjI1IDAgMDE1LjI1IDZIMTBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL3Byb2R1Y3RzL2RlbGV0ZS8nICsgcHJvZHVjdC5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cInctNCBoLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTQuNzQgOWwtLjM0NiA5bS00Ljc4OCAwTDkuMjYgOW05Ljk2OC0zLjIxYy4zNDIuMDUyLjY4Mi4xMDcgMS4wMjIuMTY2bS0xLjAyMi0uMTY1TDE4LjE2IDE5LjY3M2EyLjI1IDIuMjUgMCAwMS0yLjI0NCAyLjA3N0g4LjA4NGEyLjI1IDIuMjUgMCAwMS0yLjI0NC0yLjA3N0w0Ljc3MiA1Ljc5bTE0LjQ1NiAwYTQ4LjEwOCA0OC4xMDggMCAwMC0zLjQ3OC0uMzk3bS0xMiAuNTYyYy4zNC0uMDU5LjY4LS4xMTQgMS4wMjItLjE2NW0wIDBhNDguMTEgNDguMTEgMCAwMTMuNDc4LS4zOTdtNy41IDB2LS45MTZjMC0xLjE4LS45MS0yLjE2NC0yLjA5LTIuMjAxYTUxLjk2NCA1MS45NjQgMCAwMC0zLjMyIDBjLTEuMTguMDM3LTIuMDkgMS4wMjItMi4wOSAyLjIwMXYuOTE2bTcuNSAwYTQ4LjY2NyA0OC42NjcgMCAwMC03LjUgMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJMYXlvdXQiLCJMaW5rIiwiYXhpb3MiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb2R1Y3RzIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsInNlYXJjaCIsImlucHV0IiwiZmlsdGVyIiwidGFibGUiLCJ0ciIsInRkIiwiaSIsInR4dFZhbHVlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwidG9VcHBlckNhc2UiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxlbmd0aCIsInRleHRDb250ZW50IiwiaW5uZXJUZXh0IiwiaW5kZXhPZiIsInN0eWxlIiwiZGlzcGxheSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjbGFzc05hbWUiLCJocmVmIiwidHlwZSIsImlkIiwib25rZXl1cCIsInBsYWNlaG9sZGVyIiwidGhlYWQiLCJ0Ym9keSIsIm1hcCIsInByb2R1Y3QiLCJ0aXRsZSIsIl9pZCIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2Utd2lkdGgiLCJzdHJva2UiLCJjbGFzcyIsInBhdGgiLCJzdHJva2UtbGluZWNhcCIsInN0cm9rZS1saW5lam9pbiIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products.js\n"));

/***/ })

});