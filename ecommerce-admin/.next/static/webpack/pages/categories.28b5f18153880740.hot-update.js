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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-sweetalert2 */ \"./node_modules/react-sweetalert2/build/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Categories(param) {\n    let { swal  } = param;\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [parentCategory, setParentCategory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [editedCategory, setEditedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchCategories();\n    }, []);\n    function fetchCategories() {\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/categories\").then((result)=>{\n            setCategories(result.data);\n        });\n    }\n    async function saveCategory(ev) {\n        ev.preventDefault();\n        const data = {\n            name,\n            parentCategory\n        };\n        if (editedCategory) {\n            data._id = editedCategory._id;\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].put(\"/api/categories\", data);\n            setEditedCategory(null);\n        } else {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/api/categories\", data);\n        }\n        setName(\"\");\n        fetchCategories();\n    }\n    function editCategory(category) {\n        var _category_parent;\n        setEditedCategory(category);\n        setName(category.name);\n        setParentCategory(category === null || category === void 0 ? void 0 : (_category_parent = category.parent) === null || _category_parent === void 0 ? void 0 : _category_parent._id);\n    }\n    function deleteCategory(category) {\n        swal.fire({\n            title: \"Are you sure?\",\n            text: \"Do you want to delete \".concat(category.name, \"?\"),\n            showCancelButton: true,\n            cancelButtonText: \"Cancel\",\n            confirmButtonText: \"Yes, Delete!\",\n            confirmButtonColor: \"#d55\",\n            reverseButtons: true\n        }).then((result)=>{\n            if (result.isConfirmed) {}\n        }).catch((error)=>{});\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Categories\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: editedCategory ? \"Edit Category \".concat(editedCategory.name) : \"Create New Category\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: saveCategory,\n                className: \"flex gap-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"mb-0\",\n                        type: \"text\",\n                        placeholder: \"Category name\",\n                        value: name,\n                        onChange: (ev)=>setName(ev.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        className: \"mb-0\",\n                        value: parentCategory,\n                        onChange: (ev)=>setParentCategory(ev.target.value),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"0\",\n                                children: \"No parent category\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                lineNumber: 69,\n                                columnNumber: 21\n                            }, this),\n                            categories.length > 0 && categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: category._id,\n                                    children: category.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 25\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"btn-primary py-1\",\n                        children: \"Save\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"basic mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Category Name\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Parent Category\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                            lineNumber: 79,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: categories.length > 0 && categories.map((category)=>{\n                            var _category_parent;\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: category.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: category === null || category === void 0 ? void 0 : (_category_parent = category.parent) === null || _category_parent === void 0 ? void 0 : _category_parent.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>editCategory(category),\n                                                className: \"btn-primary mr-1\",\n                                                children: \"Edit\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                                lineNumber: 91,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>deleteCategory(category),\n                                                className: \"btn-primary mr-1\",\n                                                children: \"Delete\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                                lineNumber: 94,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                                lineNumber: 87,\n                                columnNumber: 25\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n        lineNumber: 61,\n        columnNumber: 9\n    }, this);\n}\n_s(Categories, \"jl0ksnDULDGXlD6A+bx1oz/x5gU=\");\n_c = Categories;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = (0,react_sweetalert2__WEBPACK_IMPORTED_MODULE_3__.withSwal)(_c1 = (param, ref)=>/*#__PURE__*/ {\n    let { swal  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Categories, {\n        swal: swal\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-admin\\\\pages\\\\categories.js\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, undefined);\n}));\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Categories\");\n$RefreshReg$(_c1, \"%default%$withSwal\");\n$RefreshReg$(_c2, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0M7a0NBQ0lwRCxXQUFXNkMsU0FBUyxLQUFLN0MsV0FBVzhDLElBQUk1QixDQUFBQTtnQ0FHNUJBOzBDQUZULHFFQUFDZ0M7O2tEQUNHLDhEQUFDQztrREFBSWpDLFNBQVNwQjs7Ozs7O2tEQUNkLDhEQUFDcUQ7a0RBQUlqQyxxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLENBQUFBLG1CQUFBQSxTQUFVQyxvQkFBVkQsOEJBQUFBLEtBQUFBLElBQUFBLGlCQUFrQnBCOzs7Ozs7a0RBQ3ZCLDhEQUFDcUQ7OzBEQUNHLDhEQUFDSjtnREFBT00sU0FBUyxJQUFNcEMsYUFBYUM7Z0RBQVdrQixXQUFVOzBEQUFtQjs7Ozs7OzBEQUc1RSw4REFBQ1c7Z0RBQU9NLFNBQVMsSUFBTWpDLGVBQWVGO2dEQUFXa0IsV0FBVTswREFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVc5RztHQW5HU3hDO0tBQUFBO0FBcUdULCtEQUFlLE1BQUFELDJEQUFRQSxPQUFFLFFBQVMyRDtRQUFSLEVBQUN6RCxLQUFJLEVBQUM7V0FDNUIsOERBQUNEO1FBQVdDLE1BQU1BOzs7Ozs7QUFBTSxJQUN6QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYXRlZ29yaWVzLmpzP2E3YmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB3aXRoU3dhbCB9IGZyb20gJ3JlYWN0LXN3ZWV0YWxlcnQyJ1xyXG5cclxuZnVuY3Rpb24gQ2F0ZWdvcmllcyh7c3dhbH0pIHtcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtwYXJlbnRDYXRlZ29yeSwgc2V0UGFyZW50Q2F0ZWdvcnldID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2VkaXRlZENhdGVnb3J5LCBzZXRFZGl0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoQ2F0ZWdvcmllcygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGZldGNoQ2F0ZWdvcmllcygpIHtcclxuICAgICAgICBheGlvcy5nZXQoJy9hcGkvY2F0ZWdvcmllcycpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgc2V0Q2F0ZWdvcmllcyhyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2F2ZUNhdGVnb3J5KGV2KSB7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBkYXRhID0ge25hbWUsIHBhcmVudENhdGVnb3J5fTtcclxuICAgICAgICBpZihlZGl0ZWRDYXRlZ29yeSkge1xyXG4gICAgICAgICAgICBkYXRhLl9pZCA9IGVkaXRlZENhdGVnb3J5Ll9pZDtcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MucHV0KCcvYXBpL2NhdGVnb3JpZXMnLCBkYXRhKTtcclxuICAgICAgICAgICAgc2V0RWRpdGVkQ2F0ZWdvcnkobnVsbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9jYXRlZ29yaWVzJywgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldE5hbWUoJycpO1xyXG4gICAgICAgIGZldGNoQ2F0ZWdvcmllcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVkaXRDYXRlZ29yeShjYXRlZ29yeSkge1xyXG4gICAgICAgIHNldEVkaXRlZENhdGVnb3J5KGNhdGVnb3J5KTtcclxuICAgICAgICBzZXROYW1lKGNhdGVnb3J5Lm5hbWUpO1xyXG4gICAgICAgIHNldFBhcmVudENhdGVnb3J5KGNhdGVnb3J5Py5wYXJlbnQ/Ll9pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcclxuICAgICAgICBzd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0FyZSB5b3Ugc3VyZT8nLFxyXG4gICAgICAgICAgICB0ZXh0OiBgRG8geW91IHdhbnQgdG8gZGVsZXRlICR7Y2F0ZWdvcnkubmFtZX0/YCxcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnWWVzLCBEZWxldGUhJyxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnI2Q1NScsXHJcbiAgICAgICAgICAgIHJldmVyc2VCdXR0b25zOiB0cnVlLFxyXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgaWYocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxoMT5DYXRlZ29yaWVzPC9oMT5cclxuICAgICAgICAgICAgPGxhYmVsPntlZGl0ZWRDYXRlZ29yeSA/IGBFZGl0IENhdGVnb3J5ICR7ZWRpdGVkQ2F0ZWdvcnkubmFtZX1gIDogJ0NyZWF0ZSBOZXcgQ2F0ZWdvcnknfTwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c2F2ZUNhdGVnb3J5fSBjbGFzc05hbWU9XCJmbGV4IGdhcC0xXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibWItMFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9eydDYXRlZ29yeSBuYW1lJ30gXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXtldiA9PiBzZXROYW1lKGV2LnRhcmdldC52YWx1ZSl9PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cIm1iLTBcIiB2YWx1ZT17cGFyZW50Q2F0ZWdvcnl9IG9uQ2hhbmdlPXtldiA9PiBzZXRQYXJlbnRDYXRlZ29yeShldi50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMFwiPk5vIHBhcmVudCBjYXRlZ29yeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLmxlbmd0aCA+IDAgJiYgY2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtjYXRlZ29yeS5faWR9PntjYXRlZ29yeS5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4tcHJpbWFyeSBweS0xXCI+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiYmFzaWMgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkNhdGVnb3J5IE5hbWU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UGFyZW50IENhdGVnb3J5PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubGVuZ3RoID4gMCAmJiBjYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Y2F0ZWdvcnkubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntjYXRlZ29yeT8ucGFyZW50Py5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBlZGl0Q2F0ZWdvcnkoY2F0ZWdvcnkpfSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeSBtci0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUNhdGVnb3J5KGNhdGVnb3J5KX0gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgbXItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN3YWwgKCh7c3dhbH0sIHJlZikgPT4gKFxyXG4gICAgPENhdGVnb3JpZXMgc3dhbD17c3dhbH0vPlxyXG4pKTsiXSwibmFtZXMiOlsiTGF5b3V0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIndpdGhTd2FsIiwiQ2F0ZWdvcmllcyIsInN3YWwiLCJuYW1lIiwic2V0TmFtZSIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwicGFyZW50Q2F0ZWdvcnkiLCJzZXRQYXJlbnRDYXRlZ29yeSIsImVkaXRlZENhdGVnb3J5Iiwic2V0RWRpdGVkQ2F0ZWdvcnkiLCJmZXRjaENhdGVnb3JpZXMiLCJnZXQiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsInNhdmVDYXRlZ29yeSIsImV2IiwicHJldmVudERlZmF1bHQiLCJfaWQiLCJwdXQiLCJwb3N0IiwiZWRpdENhdGVnb3J5IiwiY2F0ZWdvcnkiLCJwYXJlbnQiLCJkZWxldGVDYXRlZ29yeSIsImZpcmUiLCJ0aXRsZSIsInRleHQiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY2FuY2VsQnV0dG9uVGV4dCIsImNvbmZpcm1CdXR0b25UZXh0IiwiY29uZmlybUJ1dHRvbkNvbG9yIiwicmV2ZXJzZUJ1dHRvbnMiLCJpc0NvbmZpcm1lZCIsImNhdGNoIiwiZXJyb3IiLCJoMSIsImxhYmVsIiwiZm9ybSIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0Iiwic2VsZWN0Iiwib3B0aW9uIiwibGVuZ3RoIiwibWFwIiwiYnV0dG9uIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGQiLCJ0Ym9keSIsIm9uQ2xpY2siLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/categories.js\n"));

/***/ })

});