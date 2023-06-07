"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/categories",{

/***/ "./pages/categories.js":
/*!*****************************!*\
  !*** ./pages/categories.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-sweetalert2 */ \"./node_modules/react-sweetalert2/build/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Categories(param) {\n    let { swal  } = param;\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [parentCategory, setParentCategory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [editedCategory, setEditedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchCategories();\n    }, []);\n    function fetchCategories() {\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/categories\").then((result)=>{\n            setCategories(result.data);\n        });\n    }\n    async function saveCategory(ev) {\n        ev.preventDefault();\n        const data = {\n            name,\n            parentCategory\n        };\n        if (editedCategory) {\n            data._id = editedCategory._id;\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].put(\"/api/categories\", data);\n            setEditedCategory(null);\n        } else {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/api/categories\", data);\n        }\n        setName(\"\");\n        fetchCategories();\n    }\n    function editCategory(category) {\n        var _category_parent;\n        setEditedCategory(category);\n        setName(category.name);\n        setParentCategory(category === null || category === void 0 ? void 0 : (_category_parent = category.parent) === null || _category_parent === void 0 ? void 0 : _category_parent._id);\n    }\n    function deleteCategory(category) {\n        swal.fire({\n            title: \"Are you sure?\",\n            text: \"Do you want to delete\"\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Categories\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: editedCategory ? \"Edit Category \".concat(editedCategory.name) : \"Create New Category\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: saveCategory,\n                className: \"flex gap-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"mb-0\",\n                        type: \"text\",\n                        placeholder: \"Category name\",\n                        value: name,\n                        onChange: (ev)=>setName(ev.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        className: \"mb-0\",\n                        value: parentCategory,\n                        onChange: (ev)=>setParentCategory(ev.target.value),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"0\",\n                                children: \"No parent category\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, this),\n                            categories.length > 0 && categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: category._id,\n                                    children: category.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 25\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"btn-primary py-1\",\n                        children: \"Save\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"basic mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Category Name\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Parent Category\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: categories.length > 0 && categories.map((category)=>{\n                            var _category_parent;\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: category.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: category === null || category === void 0 ? void 0 : (_category_parent = category.parent) === null || _category_parent === void 0 ? void 0 : _category_parent.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>editCategory(category),\n                                                className: \"btn-primary mr-1\",\n                                                children: \"Edit\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                                lineNumber: 80,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>deleteCategory(category),\n                                                className: \"btn-primary mr-1\",\n                                                children: \"Delete\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                                lineNumber: 83,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                lineNumber: 76,\n                                columnNumber: 25\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, this);\n}\n_s(Categories, \"jl0ksnDULDGXlD6A+bx1oz/x5gU=\");\n_c = Categories;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = (0,react_sweetalert2__WEBPACK_IMPORTED_MODULE_3__.withSwal)(_c1 = (param, ref)=>/*#__PURE__*/ {\n    let { swal  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Categories, {\n        swal: swal\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, undefined);\n}));\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Categories\");\n$RefreshReg$(_c1, \"%default%$withSwal\");\n$RefreshReg$(_c2, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBVkQsOEJBQUFBLEtBQUFBLElBQUFBLGlCQUFrQnBCOzs7Ozs7a0RBQ3ZCLDhEQUFDNkM7OzBEQUNHLDhEQUFDSjtnREFBT00sU0FBUyxJQUFNNUIsYUFBYUM7Z0RBQVdVLFdBQVU7MERBQW1COzs7Ozs7MERBRzVFLDhEQUFDVztnREFBT00sU0FBUyxJQUFNekIsZUFBZUY7Z0RBQVdVLFdBQVU7MERBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXOUc7R0F4RlNoQztLQUFBQTtBQTBGVCwrREFBZSxNQUFBRCwyREFBUUEsT0FBRSxRQUFTbUQ7UUFBUixFQUFDakQsS0FBSSxFQUFDO1dBQzVCLDhEQUFDRDtRQUFXQyxNQUFNQTs7Ozs7O0FBQU0sSUFDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0ZWdvcmllcy5qcz9hN2JkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgd2l0aFN3YWwgfSBmcm9tICdyZWFjdC1zd2VldGFsZXJ0MidcclxuXHJcbmZ1bmN0aW9uIENhdGVnb3JpZXMoe3N3YWx9KSB7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcGFyZW50Q2F0ZWdvcnksIHNldFBhcmVudENhdGVnb3J5XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtlZGl0ZWRDYXRlZ29yeSwgc2V0RWRpdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaENhdGVnb3JpZXMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBmZXRjaENhdGVnb3JpZXMoKSB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2NhdGVnb3JpZXMnKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHNldENhdGVnb3JpZXMocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNhdmVDYXRlZ29yeShldikge1xyXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtuYW1lLCBwYXJlbnRDYXRlZ29yeX07XHJcbiAgICAgICAgaWYoZWRpdGVkQ2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgZGF0YS5faWQgPSBlZGl0ZWRDYXRlZ29yeS5faWQ7XHJcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLnB1dCgnL2FwaS9jYXRlZ29yaWVzJywgZGF0YSk7XHJcbiAgICAgICAgICAgIHNldEVkaXRlZENhdGVnb3J5KG51bGwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvY2F0ZWdvcmllcycsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXROYW1lKCcnKTtcclxuICAgICAgICBmZXRjaENhdGVnb3JpZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlZGl0Q2F0ZWdvcnkoY2F0ZWdvcnkpIHtcclxuICAgICAgICBzZXRFZGl0ZWRDYXRlZ29yeShjYXRlZ29yeSk7XHJcbiAgICAgICAgc2V0TmFtZShjYXRlZ29yeS5uYW1lKTtcclxuICAgICAgICBzZXRQYXJlbnRDYXRlZ29yeShjYXRlZ29yeT8ucGFyZW50Py5faWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZUNhdGVnb3J5KGNhdGVnb3J5KSB7XHJcbiAgICAgICAgc3dhbC5maXJlKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdBcmUgeW91IHN1cmU/JyxcclxuICAgICAgICAgICAgdGV4dDogYERvIHlvdSB3YW50IHRvIGRlbGV0ZWBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGgxPkNhdGVnb3JpZXM8L2gxPlxyXG4gICAgICAgICAgICA8bGFiZWw+e2VkaXRlZENhdGVnb3J5ID8gYEVkaXQgQ2F0ZWdvcnkgJHtlZGl0ZWRDYXRlZ29yeS5uYW1lfWAgOiAnQ3JlYXRlIE5ldyBDYXRlZ29yeSd9PC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzYXZlQ2F0ZWdvcnl9IGNsYXNzTmFtZT1cImZsZXggZ2FwLTFcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJtYi0wXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj17J0NhdGVnb3J5IG5hbWUnfSBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9e2V2ID0+IHNldE5hbWUoZXYudGFyZ2V0LnZhbHVlKX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwibWItMFwiIHZhbHVlPXtwYXJlbnRDYXRlZ29yeX0gb25DaGFuZ2U9e2V2ID0+IHNldFBhcmVudENhdGVnb3J5KGV2LnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCI+Tm8gcGFyZW50IGNhdGVnb3J5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubGVuZ3RoID4gMCAmJiBjYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2NhdGVnb3J5Ll9pZH0+e2NhdGVnb3J5Lm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5IHB5LTFcIj5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJiYXNpYyBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Q2F0ZWdvcnkgTmFtZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5QYXJlbnQgQ2F0ZWdvcnk8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5sZW5ndGggPiAwICYmIGNhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntjYXRlZ29yeS5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2NhdGVnb3J5Py5wYXJlbnQ/Lm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGVkaXRDYXRlZ29yeShjYXRlZ29yeSl9IGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5IG1yLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlQ2F0ZWdvcnkoY2F0ZWdvcnkpfSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeSBtci0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcblxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3dhbCAoKHtzd2FsfSwgcmVmKSA9PiAoXHJcbiAgICA8Q2F0ZWdvcmllcyBzd2FsPXtzd2FsfS8+XHJcbikpOyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwid2l0aFN3YWwiLCJDYXRlZ29yaWVzIiwic3dhbCIsIm5hbWUiLCJzZXROYW1lIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJwYXJlbnRDYXRlZ29yeSIsInNldFBhcmVudENhdGVnb3J5IiwiZWRpdGVkQ2F0ZWdvcnkiLCJzZXRFZGl0ZWRDYXRlZ29yeSIsImZldGNoQ2F0ZWdvcmllcyIsImdldCIsInRoZW4iLCJyZXN1bHQiLCJkYXRhIiwic2F2ZUNhdGVnb3J5IiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsIl9pZCIsInB1dCIsInBvc3QiLCJlZGl0Q2F0ZWdvcnkiLCJjYXRlZ29yeSIsInBhcmVudCIsImRlbGV0ZUNhdGVnb3J5IiwiZmlyZSIsInRpdGxlIiwidGV4dCIsImgxIiwibGFiZWwiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJzZWxlY3QiLCJvcHRpb24iLCJsZW5ndGgiLCJtYXAiLCJidXR0b24iLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0ZCIsInRib2R5Iiwib25DbGljayIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/categories.js\n"));

/***/ })

});