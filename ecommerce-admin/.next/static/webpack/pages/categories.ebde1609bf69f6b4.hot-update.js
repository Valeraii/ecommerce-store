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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-sweetalert2 */ \"./node_modules/react-sweetalert2/build/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Categories(param) {\n    let { swal  } = param;\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [parentCategory, setParentCategory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [editedCategory, setEditedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchCategories();\n    }, []);\n    function fetchCategories() {\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/categories\").then((result)=>{\n            setCategories(result.data);\n        });\n    }\n    async function saveCategory(ev) {\n        ev.preventDefault();\n        const data = {\n            name,\n            parentCategory\n        };\n        if (editedCategory) {\n            data._id = editedCategory._id;\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].put(\"/api/categories\", data);\n            setEditedCategory(null);\n        } else {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/api/categories\", data);\n        }\n        setName(\"\");\n        fetchCategories();\n    }\n    function editCategory(category) {\n        var _category_parent;\n        setEditedCategory(category);\n        setName(category.name);\n        setParentCategory(category === null || category === void 0 ? void 0 : (_category_parent = category.parent) === null || _category_parent === void 0 ? void 0 : _category_parent._id);\n    }\n    function deleteCategory(category) {\n        swal.fire({\n            title: \"Are you sure?\",\n            text: \"Do you want to delete \".concat(category.name, \"?\"),\n            showCancelButton: true,\n            cancelButtonText: \"Cancel\",\n            confirmButtonText: \"Yes, Delete!\",\n            confirmButtonColor: \"#d55\",\n            reverseButtons: true\n        }).then((result)=>{\n            if (result.isConfirmed) {\n                const { _id  } = category;\n                axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"][\"delete\"](\"/api/categories?_id=\", {\n                    _id\n                });\n            }\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Categories\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: editedCategory ? \"Edit Category \".concat(editedCategory.name) : \"Create New Category\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: saveCategory,\n                className: \"flex gap-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"mb-0\",\n                        type: \"text\",\n                        placeholder: \"Category name\",\n                        value: name,\n                        onChange: (ev)=>setName(ev.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        className: \"mb-0\",\n                        value: parentCategory,\n                        onChange: (ev)=>setParentCategory(ev.target.value),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"0\",\n                                children: \"No parent category\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                lineNumber: 68,\n                                columnNumber: 21\n                            }, this),\n                            categories.length > 0 && categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: category._id,\n                                    children: category.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 25\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"btn-primary py-1\",\n                        children: \"Save\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"basic mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Category Name\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Parent Category\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: categories.length > 0 && categories.map((category)=>{\n                            var _category_parent;\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: category.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: category === null || category === void 0 ? void 0 : (_category_parent = category.parent) === null || _category_parent === void 0 ? void 0 : _category_parent.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>editCategory(category),\n                                                className: \"btn-primary mr-1\",\n                                                children: \"Edit\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                                lineNumber: 90,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>deleteCategory(category),\n                                                className: \"btn-primary mr-1\",\n                                                children: \"Delete\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                                lineNumber: 93,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                lineNumber: 86,\n                                columnNumber: 25\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, this);\n}\n_s(Categories, \"jl0ksnDULDGXlD6A+bx1oz/x5gU=\");\n_c = Categories;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = (0,react_sweetalert2__WEBPACK_IMPORTED_MODULE_3__.withSwal)(_c1 = (param, ref)=>/*#__PURE__*/ {\n    let { swal  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Categories, {\n        swal: swal\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n        lineNumber: 107,\n        columnNumber: 5\n    }, undefined);\n}));\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Categories\");\n$RefreshReg$(_c1, \"%default%$withSwal\");\n$RefreshReg$(_c2, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUdULDhEQUFDQztrQ0FDSW5ELFdBQVc0QyxTQUFTLEtBQUs1QyxXQUFXNkMsSUFBSTNCLENBQUFBO2dDQUc1QkE7MENBRlQscUVBQUMrQjs7a0RBQ0csOERBQUNDO2tEQUFJaEMsU0FBU3BCOzs7Ozs7a0RBQ2QsOERBQUNvRDtrREFBSWhDLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsbUJBQUFBLFNBQVVDLG9CQUFWRCw4QkFBQUEsS0FBQUEsSUFBQUEsaUJBQWtCcEI7Ozs7OztrREFDdkIsOERBQUNvRDs7MERBQ0csOERBQUNKO2dEQUFPTSxTQUFTLElBQU1uQyxhQUFhQztnREFBV2lCLFdBQVU7MERBQW1COzs7Ozs7MERBRzVFLDhEQUFDVztnREFBT00sU0FBUyxJQUFNaEMsZUFBZUY7Z0RBQVdpQixXQUFVOzBEQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVzlHO0dBbEdTdkM7S0FBQUE7QUFvR1QsK0RBQWUsTUFBQUQsMkRBQVFBLE9BQUUsUUFBUzBEO1FBQVIsRUFBQ3hELEtBQUksRUFBQztXQUM1Qiw4REFBQ0Q7UUFBV0MsTUFBTUE7Ozs7OztBQUFNLElBQ3pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhdGVnb3JpZXMuanM/YTdiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHdpdGhTd2FsIH0gZnJvbSAncmVhY3Qtc3dlZXRhbGVydDInXHJcblxyXG5mdW5jdGlvbiBDYXRlZ29yaWVzKHtzd2FsfSkge1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3BhcmVudENhdGVnb3J5LCBzZXRQYXJlbnRDYXRlZ29yeV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZWRpdGVkQ2F0ZWdvcnksIHNldEVkaXRlZENhdGVnb3J5XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hDYXRlZ29yaWVzKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZmV0Y2hDYXRlZ29yaWVzKCkge1xyXG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS9jYXRlZ29yaWVzJykudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBzZXRDYXRlZ29yaWVzKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBzYXZlQ2F0ZWdvcnkoZXYpIHtcclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7bmFtZSwgcGFyZW50Q2F0ZWdvcnl9O1xyXG4gICAgICAgIGlmKGVkaXRlZENhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgIGRhdGEuX2lkID0gZWRpdGVkQ2F0ZWdvcnkuX2lkO1xyXG4gICAgICAgICAgICBhd2FpdCBheGlvcy5wdXQoJy9hcGkvY2F0ZWdvcmllcycsIGRhdGEpO1xyXG4gICAgICAgICAgICBzZXRFZGl0ZWRDYXRlZ29yeShudWxsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2NhdGVnb3JpZXMnLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TmFtZSgnJyk7XHJcbiAgICAgICAgZmV0Y2hDYXRlZ29yaWVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZWRpdENhdGVnb3J5KGNhdGVnb3J5KSB7XHJcbiAgICAgICAgc2V0RWRpdGVkQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xyXG4gICAgICAgIHNldE5hbWUoY2F0ZWdvcnkubmFtZSk7XHJcbiAgICAgICAgc2V0UGFyZW50Q2F0ZWdvcnkoY2F0ZWdvcnk/LnBhcmVudD8uX2lkKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVDYXRlZ29yeShjYXRlZ29yeSkge1xyXG4gICAgICAgIHN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQXJlIHlvdSBzdXJlPycsXHJcbiAgICAgICAgICAgIHRleHQ6IGBEbyB5b3Ugd2FudCB0byBkZWxldGUgJHtjYXRlZ29yeS5uYW1lfT9gLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdZZXMsIERlbGV0ZSEnLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjZDU1JyxcclxuICAgICAgICAgICAgcmV2ZXJzZUJ1dHRvbnM6IHRydWUsXHJcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtfaWR9ID0gY2F0ZWdvcnk7XHJcbiAgICAgICAgICAgICAgICBheGlvcy5kZWxldGUoJy9hcGkvY2F0ZWdvcmllcz9faWQ9Jywge19pZH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8aDE+Q2F0ZWdvcmllczwvaDE+XHJcbiAgICAgICAgICAgIDxsYWJlbD57ZWRpdGVkQ2F0ZWdvcnkgPyBgRWRpdCBDYXRlZ29yeSAke2VkaXRlZENhdGVnb3J5Lm5hbWV9YCA6ICdDcmVhdGUgTmV3IENhdGVnb3J5J308L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3NhdmVDYXRlZ29yeX0gY2xhc3NOYW1lPVwiZmxleCBnYXAtMVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm1iLTBcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPXsnQ2F0ZWdvcnkgbmFtZSd9IFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17ZXYgPT4gc2V0TmFtZShldi50YXJnZXQudmFsdWUpfT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJtYi0wXCIgdmFsdWU9e3BhcmVudENhdGVnb3J5fSBvbkNoYW5nZT17ZXYgPT4gc2V0UGFyZW50Q2F0ZWdvcnkoZXYudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjBcIj5ObyBwYXJlbnQgY2F0ZWdvcnk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5sZW5ndGggPiAwICYmIGNhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Y2F0ZWdvcnkuX2lkfT57Y2F0ZWdvcnkubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgcHktMVwiPlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImJhc2ljIG10LTRcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5DYXRlZ29yeSBOYW1lPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlBhcmVudCBDYXRlZ29yeTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLmxlbmd0aCA+IDAgJiYgY2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2NhdGVnb3J5Lm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Y2F0ZWdvcnk/LnBhcmVudD8ubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZWRpdENhdGVnb3J5KGNhdGVnb3J5KX0gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgbXItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVDYXRlZ29yeShjYXRlZ29yeSl9IGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5IG1yLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuXHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTd2FsICgoe3N3YWx9LCByZWYpID0+IChcclxuICAgIDxDYXRlZ29yaWVzIHN3YWw9e3N3YWx9Lz5cclxuKSk7Il0sIm5hbWVzIjpbIkxheW91dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJ3aXRoU3dhbCIsIkNhdGVnb3JpZXMiLCJzd2FsIiwibmFtZSIsInNldE5hbWUiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsInBhcmVudENhdGVnb3J5Iiwic2V0UGFyZW50Q2F0ZWdvcnkiLCJlZGl0ZWRDYXRlZ29yeSIsInNldEVkaXRlZENhdGVnb3J5IiwiZmV0Y2hDYXRlZ29yaWVzIiwiZ2V0IiwidGhlbiIsInJlc3VsdCIsImRhdGEiLCJzYXZlQ2F0ZWdvcnkiLCJldiIsInByZXZlbnREZWZhdWx0IiwiX2lkIiwicHV0IiwicG9zdCIsImVkaXRDYXRlZ29yeSIsImNhdGVnb3J5IiwicGFyZW50IiwiZGVsZXRlQ2F0ZWdvcnkiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0Iiwic2hvd0NhbmNlbEJ1dHRvbiIsImNhbmNlbEJ1dHRvblRleHQiLCJjb25maXJtQnV0dG9uVGV4dCIsImNvbmZpcm1CdXR0b25Db2xvciIsInJldmVyc2VCdXR0b25zIiwiaXNDb25maXJtZWQiLCJkZWxldGUiLCJoMSIsImxhYmVsIiwiZm9ybSIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0Iiwic2VsZWN0Iiwib3B0aW9uIiwibGVuZ3RoIiwibWFwIiwiYnV0dG9uIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGQiLCJ0Ym9keSIsIm9uQ2xpY2siLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/categories.js\n"));

/***/ })

});