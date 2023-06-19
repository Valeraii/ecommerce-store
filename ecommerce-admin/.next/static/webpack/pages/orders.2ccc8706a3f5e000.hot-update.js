"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/orders",{

/***/ "./pages/orders.js":
/*!*************************!*\
  !*** ./pages/orders.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ OrdersPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction OrdersPage() {\n    _s();\n    const [orders, setOrders] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [paid, setPaid] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/orders\").then((res)=>{\n            setOrders(res.data);\n        });\n    }, []);\n    const setPaidStatus = async (e)=>{\n        console.log(e.target.value);\n        setPaid(e.target.value === \"Yes\" ? true : false);\n        const id = e._id;\n        const data = {\n            id,\n            paid\n        };\n        console.log(data);\n    //await axios.put('/api/orders', data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Orders\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"basic\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Date\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Recipient\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Products\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Details\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Paid\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: orders.length > 0 && orders.map((order)=>{\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: new Date(order.createdAt).toLocaleString()\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            order.name,\n                                            \" \",\n                                            order.email,\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 60\n                                            }, this),\n                                            order.phone\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: order.line_items.map((line)=>{\n                                            var _line_price_data;\n                                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                                children: [\n                                                    (_line_price_data = line.price_data) === null || _line_price_data === void 0 ? void 0 : _line_price_data.product_data.name,\n                                                    \" x \",\n                                                    line.quantity,\n                                                    \" \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                                                        lineNumber: 47,\n                                                        columnNumber: 92\n                                                    }, this)\n                                                ]\n                                            }, void 0, true);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            order.pickupLocation,\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                                                lineNumber: 52,\n                                                columnNumber: 56\n                                            }, this),\n                                            order.paymentMethod\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        contenteditable: \"true\",\n                                        onBlur: setPaidStatus,\n                                        children: order.paid ? \"Yes\" : \"No\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                                lineNumber: 39,\n                                columnNumber: 25\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_s(OrdersPage, \"GfERuizRpk9tv6MpAFE7pFoyM+c=\");\n_c = OrdersPage;\nvar _c;\n$RefreshReg$(_c, \"OrdersPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9vcmRlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0c7QUFDbEI7QUFFWCxTQUFTSTs7SUFDcEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFDdkMsTUFBTSxDQUFDSyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBRWpDRCxnREFBU0EsQ0FBQztRQUNORSxpREFBU00sQ0FBQyxlQUFlQyxLQUFLQyxDQUFBQTtZQUMxQkwsVUFBVUssSUFBSUM7UUFDbEI7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNQyxnQkFBZ0IsT0FBT0M7UUFDekJDLFFBQVFDLElBQUlGLEVBQUVHLE9BQU9DO1FBQ3JCVixRQUFRTSxFQUFFRyxPQUFPQyxVQUFVLFFBQVEsT0FBTztRQUMxQyxNQUFNQyxLQUFLTCxFQUFFTTtRQUNiLE1BQU1SLE9BQU87WUFBQ087WUFBSVo7UUFBSTtRQUN0QlEsUUFBUUMsSUFBSUo7SUFDWix1Q0FBdUM7SUFDM0M7SUFFQSxxQkFDSSw4REFBQ1osMERBQU1BOzswQkFDSCw4REFBQ3FCOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFNQyxXQUFVOztrQ0FDYiw4REFBQ0M7a0NBQ0csNEVBQUNDOzs4Q0FDRyw4REFBQ0M7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDQztrQ0FDSXRCLE9BQU91QixTQUFTLEtBQUt2QixPQUFPd0IsSUFBSUMsQ0FBQUE7MENBQzdCLHFFQUFDTDs7a0RBQ0csOERBQUNNO2tEQUFJLElBQUtDLEtBQUtGLE1BQU1HLFdBQVlDOzs7Ozs7a0RBQ2pDLDhEQUFDSDs7NENBQUlELE1BQU1LOzRDQUFLOzRDQUFFTCxNQUFNTTs0Q0FBTTswREFBQyw4REFBQ0M7Ozs7OzRDQUMzQlAsTUFBTVE7Ozs7Ozs7a0RBRVgsOERBQUNQO2tEQUNJRCxNQUFNUyxXQUFXVixJQUFJVyxDQUFBQTtnREFFakJBOzBEQUREOztvREFDQ0EsQ0FBQUEsbUJBQUFBLEtBQUtDLHdCQUFMRCw4QkFBQUEsS0FBQUEsSUFBQUEsaUJBQWlCRSxhQUFhUDtvREFBSztvREFBSUssS0FBS0c7b0RBQVM7a0VBQUMsOERBQUNOOzs7Ozs7Ozs7Ozs7O2tEQUloRSw4REFBQ047OzRDQUNJRCxNQUFNYzs0Q0FBZTswREFBQyw4REFBQ1A7Ozs7OzRDQUN2QlAsTUFBTWU7Ozs7Ozs7a0RBRVgsOERBQUNkO3dDQUFHZSxpQkFBZ0I7d0NBQU9DLFFBQVFsQztrREFDOUJpQixNQUFNdkIsT0FBTyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdEQ7R0EzRHdCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9vcmRlcnMuanM/NDZlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3JkZXJzUGFnZSgpIHtcclxuICAgIGNvbnN0IFtvcmRlcnMsIHNldE9yZGVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcGFpZCwgc2V0UGFpZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBheGlvcy5nZXQoJy9hcGkvb3JkZXJzJykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBzZXRPcmRlcnMocmVzLmRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IHNldFBhaWRTdGF0dXMgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBzZXRQYWlkKGUudGFyZ2V0LnZhbHVlID09PSAnWWVzJyA/IHRydWUgOiBmYWxzZSk7XHJcbiAgICAgICAgY29uc3QgaWQgPSBlLl9pZDtcclxuICAgICAgICBjb25zdCBkYXRhID0ge2lkLCBwYWlkfTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAvL2F3YWl0IGF4aW9zLnB1dCgnL2FwaS9vcmRlcnMnLCBkYXRhKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8aDE+T3JkZXJzPC9oMT5cclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImJhc2ljXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZWNpcGllbnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJvZHVjdHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGV0YWlsczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QYWlkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7b3JkZXJzLmxlbmd0aCA+IDAgJiYgb3JkZXJzLm1hcChvcmRlciA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57KG5ldyBEYXRlKG9yZGVyLmNyZWF0ZWRBdCkpLnRvTG9jYWxlU3RyaW5nKCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57b3JkZXIubmFtZX0ge29yZGVyLmVtYWlsfSA8YnIvID4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29yZGVyLnBob25lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29yZGVyLmxpbmVfaXRlbXMubWFwKGxpbmUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGluZS5wcmljZV9kYXRhPy5wcm9kdWN0X2RhdGEubmFtZX0geCB7bGluZS5xdWFudGl0eX0gPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcmRlci5waWNrdXBMb2NhdGlvbn0gPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3JkZXIucGF5bWVudE1ldGhvZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29udGVudGVkaXRhYmxlPSd0cnVlJyBvbkJsdXI9e3NldFBhaWRTdGF0dXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcmRlci5wYWlkID8gJ1llcycgOiAnTm8nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiTGF5b3V0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIk9yZGVyc1BhZ2UiLCJvcmRlcnMiLCJzZXRPcmRlcnMiLCJwYWlkIiwic2V0UGFpZCIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwic2V0UGFpZFN0YXR1cyIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJpZCIsIl9pZCIsImgxIiwidGFibGUiLCJjbGFzc05hbWUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsImxlbmd0aCIsIm1hcCIsIm9yZGVyIiwidGQiLCJEYXRlIiwiY3JlYXRlZEF0IiwidG9Mb2NhbGVTdHJpbmciLCJuYW1lIiwiZW1haWwiLCJiciIsInBob25lIiwibGluZV9pdGVtcyIsImxpbmUiLCJwcmljZV9kYXRhIiwicHJvZHVjdF9kYXRhIiwicXVhbnRpdHkiLCJwaWNrdXBMb2NhdGlvbiIsInBheW1lbnRNZXRob2QiLCJjb250ZW50ZWRpdGFibGUiLCJvbkJsdXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/orders.js\n"));

/***/ })

});