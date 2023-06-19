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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ OrdersPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction OrdersPage() {\n    _s();\n    const [orders, setOrders] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [editableCell, setEditableCell] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        row: null,\n        col: null\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/orders\").then((res)=>{\n            setOrders(res.data);\n        });\n    }, []);\n    const handleCellClick = (row, col)=>{\n        setEditableCell({\n            row,\n            col\n        });\n    };\n    const handleCellChange = (row, col, value)=>{\n        const newData = [\n            ...tableData\n        ];\n        newData[row][col] = value.target.value;\n        setTableData(newData);\n    };\n    const renderTableCell = (row, col, value)=>{\n        if (editableCell.row === row && editableCell.col === col) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: value,\n                onChange: (event)=>handleCellChange(event, row, col),\n                onBlur: ()=>setEditableCell({\n                        row: null,\n                        col: null\n                    }),\n                autoFocus: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this);\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            onClick: ()=>handleCellClick(row, col),\n            children: value\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n            lineNumber: 38,\n            columnNumber: 11\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Orders\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"basic\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Date\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Recipient\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Products\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Details\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Paid\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: orders.length > 0 && orders.map((order)=>{\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: new Date(order.createdAt).toLocaleString()\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            order.name,\n                                            \" \",\n                                            order.email,\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 60\n                                            }, this),\n                                            order.phone\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: order.line_items.map((line)=>{\n                                            var _line_price_data;\n                                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                                children: [\n                                                    (_line_price_data = line.price_data) === null || _line_price_data === void 0 ? void 0 : _line_price_data.product_data.name,\n                                                    \" x \",\n                                                    line.quantity,\n                                                    \" \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                                                        lineNumber: 65,\n                                                        columnNumber: 92\n                                                    }, this)\n                                                ]\n                                            }, void 0, true);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            order.pickupLocation,\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 56\n                                            }, this),\n                                            order.paymentMethod\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        contenteditable: \"true\",\n                                        children: order.paid ? \"Yes\" : \"No\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                                lineNumber: 57,\n                                columnNumber: 25\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\orders.js\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, this);\n}\n_s(OrdersPage, \"CgYSlQAYsqOiA6OZ+MaYJ0OtgxM=\");\n_c = OrdersPage;\nvar _c;\n$RefreshReg$(_c, \"OrdersPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9vcmRlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0c7QUFDbEI7QUFFWCxTQUFTSTs7SUFDcEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFDdkMsTUFBTSxDQUFDSyxjQUFjQyxnQkFBZ0IsR0FBR04sK0NBQVFBLENBQUM7UUFBQ08sS0FBSztRQUFNQyxLQUFLO0lBQUk7SUFFdEVULGdEQUFTQSxDQUFDO1FBQ05FLGlEQUFTUSxDQUFDLGVBQWVDLEtBQUtDLENBQUFBO1lBQzFCUCxVQUFVTyxJQUFJQztRQUNsQjtJQUNKLEdBQUcsRUFBRTtJQUVMLE1BQU1DLGtCQUFrQixDQUFDTixLQUFLQztRQUMxQkYsZ0JBQWdCO1lBQUNDO1lBQUtDO1FBQUc7SUFDN0I7SUFFQSxNQUFNTSxtQkFBbUIsQ0FBQ1AsS0FBS0MsS0FBS087UUFDaEMsTUFBTUMsVUFBVTtlQUFJQztTQUFVO1FBQzlCRCxPQUFPLENBQUNULElBQUksQ0FBQ0MsSUFBSSxHQUFHTyxNQUFNRyxPQUFPSDtRQUNqQ0ksYUFBYUg7SUFDakI7SUFFQSxNQUFNSSxrQkFBa0IsQ0FBQ2IsS0FBS0MsS0FBS087UUFDL0IsSUFBSVYsYUFBYUUsUUFBUUEsT0FBT0YsYUFBYUcsUUFBUUEsS0FBSztZQUN4RCxxQkFDRSw4REFBQ2E7Z0JBQ0NDLE1BQUs7Z0JBQ0xQLE9BQU9BO2dCQUNQUSxVQUFVLENBQUNDLFFBQVVWLGlCQUFpQlUsT0FBT2pCLEtBQUtDO2dCQUNsRGlCLFFBQVEsSUFBTW5CLGdCQUFnQjt3QkFBRUMsS0FBSzt3QkFBTUMsS0FBSztvQkFBSztnQkFDckRrQixTQUFTOzs7Ozs7UUFHZjtRQUNBLHFCQUNFLDhEQUFDQztZQUFJQyxTQUFTLElBQU1mLGdCQUFnQk4sS0FBS0M7c0JBQU9POzs7Ozs7SUFFdEQ7SUFFQSxxQkFDSSw4REFBQ2pCLDBEQUFNQTs7MEJBQ0gsOERBQUMrQjswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBTUMsV0FBVTs7a0NBQ2IsOERBQUNDO2tDQUNHLDRFQUFDQzs7OENBQ0csOERBQUNDOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHWiw4REFBQ0M7a0NBQ0loQyxPQUFPaUMsU0FBUyxLQUFLakMsT0FBT2tDLElBQUlDLENBQUFBOzBDQUM3QixxRUFBQ0w7O2tEQUNHLDhEQUFDTTtrREFBSSxJQUFLQyxLQUFLRixNQUFNRyxXQUFZQzs7Ozs7O2tEQUNqQyw4REFBQ0g7OzRDQUFJRCxNQUFNSzs0Q0FBSzs0Q0FBRUwsTUFBTU07NENBQU07MERBQUMsOERBQUNDOzs7Ozs0Q0FDM0JQLE1BQU1ROzs7Ozs7O2tEQUVYLDhEQUFDUDtrREFDSUQsTUFBTVMsV0FBV1YsSUFBSVcsQ0FBQUE7Z0RBRWpCQTswREFERDs7b0RBQ0NBLENBQUFBLG1CQUFBQSxLQUFLQyx3QkFBTEQsOEJBQUFBLEtBQUFBLElBQUFBLGlCQUFpQkUsYUFBYVA7b0RBQUs7b0RBQUlLLEtBQUtHO29EQUFTO2tFQUFDLDhEQUFDTjs7Ozs7Ozs7Ozs7OztrREFJaEUsOERBQUNOOzs0Q0FDSUQsTUFBTWM7NENBQWU7MERBQUMsOERBQUNQOzs7Ozs0Q0FDdkJQLE1BQU1lOzs7Ozs7O2tEQUVYLDhEQUFDZDt3Q0FBR2UsaUJBQWdCO2tEQUNmaEIsTUFBTWlCLE9BQU8sUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXREO0dBN0V3QnJEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL29yZGVycy5qcz80NmUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcmRlcnNQYWdlKCkge1xyXG4gICAgY29uc3QgW29yZGVycywgc2V0T3JkZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtlZGl0YWJsZUNlbGwsIHNldEVkaXRhYmxlQ2VsbF0gPSB1c2VTdGF0ZSh7cm93OiBudWxsLCBjb2w6IG51bGx9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS9vcmRlcnMnKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHNldE9yZGVycyhyZXMuZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2VsbENsaWNrID0gKHJvdywgY29sKSA9PiB7XHJcbiAgICAgICAgc2V0RWRpdGFibGVDZWxsKHtyb3csIGNvbH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDZWxsQ2hhbmdlID0gKHJvdywgY29sLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBbLi4udGFibGVEYXRhXTtcclxuICAgICAgICBuZXdEYXRhW3Jvd11bY29sXSA9IHZhbHVlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRUYWJsZURhdGEobmV3RGF0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlbmRlclRhYmxlQ2VsbCA9IChyb3csIGNvbCwgdmFsdWUpID0+IHtcclxuICAgICAgICBpZiAoZWRpdGFibGVDZWxsLnJvdyA9PT0gcm93ICYmIGVkaXRhYmxlQ2VsbC5jb2wgPT09IGNvbCkge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDZWxsQ2hhbmdlKGV2ZW50LCByb3csIGNvbCl9XHJcbiAgICAgICAgICAgICAgb25CbHVyPXsoKSA9PiBzZXRFZGl0YWJsZUNlbGwoeyByb3c6IG51bGwsIGNvbDogbnVsbCB9KX1cclxuICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNlbGxDbGljayhyb3csIGNvbCl9Pnt2YWx1ZX08L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8aDE+T3JkZXJzPC9oMT5cclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImJhc2ljXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZWNpcGllbnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJvZHVjdHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGV0YWlsczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QYWlkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7b3JkZXJzLmxlbmd0aCA+IDAgJiYgb3JkZXJzLm1hcChvcmRlciA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57KG5ldyBEYXRlKG9yZGVyLmNyZWF0ZWRBdCkpLnRvTG9jYWxlU3RyaW5nKCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57b3JkZXIubmFtZX0ge29yZGVyLmVtYWlsfSA8YnIvID4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29yZGVyLnBob25lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29yZGVyLmxpbmVfaXRlbXMubWFwKGxpbmUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGluZS5wcmljZV9kYXRhPy5wcm9kdWN0X2RhdGEubmFtZX0geCB7bGluZS5xdWFudGl0eX0gPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcmRlci5waWNrdXBMb2NhdGlvbn0gPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3JkZXIucGF5bWVudE1ldGhvZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29udGVudGVkaXRhYmxlPSd0cnVlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3JkZXIucGFpZCA/ICdZZXMnIDogJ05vJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIkxheW91dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJPcmRlcnNQYWdlIiwib3JkZXJzIiwic2V0T3JkZXJzIiwiZWRpdGFibGVDZWxsIiwic2V0RWRpdGFibGVDZWxsIiwicm93IiwiY29sIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJoYW5kbGVDZWxsQ2xpY2siLCJoYW5kbGVDZWxsQ2hhbmdlIiwidmFsdWUiLCJuZXdEYXRhIiwidGFibGVEYXRhIiwidGFyZ2V0Iiwic2V0VGFibGVEYXRhIiwicmVuZGVyVGFibGVDZWxsIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJldmVudCIsIm9uQmx1ciIsImF1dG9Gb2N1cyIsImRpdiIsIm9uQ2xpY2siLCJoMSIsInRhYmxlIiwiY2xhc3NOYW1lIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJsZW5ndGgiLCJtYXAiLCJvcmRlciIsInRkIiwiRGF0ZSIsImNyZWF0ZWRBdCIsInRvTG9jYWxlU3RyaW5nIiwibmFtZSIsImVtYWlsIiwiYnIiLCJwaG9uZSIsImxpbmVfaXRlbXMiLCJsaW5lIiwicHJpY2VfZGF0YSIsInByb2R1Y3RfZGF0YSIsInF1YW50aXR5IiwicGlja3VwTG9jYXRpb24iLCJwYXltZW50TWV0aG9kIiwiY29udGVudGVkaXRhYmxlIiwicGFpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/orders.js\n"));

/***/ })

});