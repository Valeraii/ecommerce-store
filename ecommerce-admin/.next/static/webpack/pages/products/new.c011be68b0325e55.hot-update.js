"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products/new",{

/***/ "./components/ProductForm.js":
/*!***********************************!*\
  !*** ./components/ProductForm.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ProductForm(param) {\n    let { _id , title: existingTitle , description: existingDescription , price: existingPrice , images  } = param;\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(existingTitle || \"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(existingDescription || \"\");\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(existingPrice || \"\");\n    const [goToProducts, setGoToProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    async function saveProduct(ev) {\n        ev.preventDefault();\n        const data = {\n            title,\n            description,\n            price\n        };\n        if (_id) {\n            //update\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].put(\"/api/products\", {\n                ...data,\n                _id\n            });\n        } else {\n            //create\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/products\", data);\n        }\n        setGoToProducts(true);\n    }\n    if (goToProducts) {\n        router.push(\"/products\");\n    }\n    async function uploadImages(ev) {\n        var _ev_target;\n        const files = (_ev_target = ev.target) === null || _ev_target === void 0 ? void 0 : _ev_target.files;\n        if ((files === null || files === void 0 ? void 0 : files.length) > 0) {\n            const data = new FormData();\n            for (const file of files){\n                data.append(\"file\", file);\n            }\n            const res = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/upload\", data);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: saveProduct,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Product Name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-admin\\\\components\\\\ProductForm.js\",\n                lineNumber: 47,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Product name\",\n                value: title,\n                onChange: (ev)=>setTitle(ev.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-admin\\\\components\\\\ProductForm.js\",\n                lineNumber: 48,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Photos\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-admin\\\\components\\\\ProductForm.js\",\n                lineNumber: 53,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"w-24 h-24 cursor-pointer border text-center flex flex-col items-center justify-center rounded-lg bg-gray-200\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                strokeWidth: 1.5,\n                                stroke: \"currentColor\",\n                                className: \"w-6 h-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    d: \"M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-admin\\\\components\\\\ProductForm.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-admin\\\\components\\\\ProductForm.js\",\n                                lineNumber: 56,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Upload\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-admin\\\\components\\\\ProductForm.js\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                onChange: uploadImages,\n                                className: \"hidden\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-admin\\\\components\\\\ProductForm.js\",\n                                lineNumber: 62,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-admin\\\\components\\\\ProductForm.js\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, this),\n                    !(images === null || images === void 0 ? void 0 : images.length) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"No photos uploaded yet.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-admin\\\\components\\\\ProductForm.js\",\n                        lineNumber: 65,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-admin\\\\components\\\\ProductForm.js\",\n                lineNumber: 54,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Description\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-admin\\\\components\\\\ProductForm.js\",\n                lineNumber: 71,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                placeholder: \"description\",\n                value: description,\n                onChange: (ev)=>setDescription(ev.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-admin\\\\components\\\\ProductForm.js\",\n                lineNumber: 72,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Price (CAD)\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-admin\\\\components\\\\ProductForm.js\",\n                lineNumber: 77,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Price\",\n                value: price,\n                onChange: (ev)=>setPrice(ev.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-admin\\\\components\\\\ProductForm.js\",\n                lineNumber: 78,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"btn-primary\",\n                children: \"Save\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-admin\\\\components\\\\ProductForm.js\",\n                lineNumber: 83,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-admin\\\\components\\\\ProductForm.js\",\n        lineNumber: 46,\n        columnNumber: 13\n    }, this);\n}\n_s(ProductForm, \"5EO2HfW4c2OjpBQkAbTVDneTjRc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ProductForm;\nvar _c;\n$RefreshReg$(_c, \"ProductForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUwsU0FBU0ssR0FBR1EsT0FBT1k7Ozs7OzswQkFFdkMsOERBQUNlO2dCQUFPakIsTUFBSztnQkFBU0ssV0FBVTswQkFBYzs7Ozs7Ozs7Ozs7O0FBSzlEO0dBbkZ3QnZDOztRQVdMRixrREFBU0E7OztLQVhKRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3RGb3JtLmpzP2Y0OWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0Rm9ybSh7XHJcbiAgICAgICAgX2lkLFxyXG4gICAgICAgIHRpdGxlOmV4aXN0aW5nVGl0bGUsIFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOmV4aXN0aW5nRGVzY3JpcHRpb24sIFxyXG4gICAgICAgIHByaWNlOmV4aXN0aW5nUHJpY2UsXHJcbiAgICAgICAgaW1hZ2VzLFxyXG4gICAgfSkge1xyXG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShleGlzdGluZ1RpdGxlIHx8ICcnKTtcclxuICAgIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoZXhpc3RpbmdEZXNjcmlwdGlvbiB8fCAnJyk7XHJcbiAgICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKGV4aXN0aW5nUHJpY2UgfHwgJycpO1xyXG4gICAgY29uc3QgW2dvVG9Qcm9kdWN0cywgc2V0R29Ub1Byb2R1Y3RzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNhdmVQcm9kdWN0KGV2KSB7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBkYXRhID0ge3RpdGxlLCBkZXNjcmlwdGlvbiwgcHJpY2V9O1xyXG4gICAgICAgIGlmKF9pZCkge1xyXG4gICAgICAgICAgICAvL3VwZGF0ZVxyXG4gICAgICAgICAgICBhd2FpdCBheGlvcy5wdXQoJy9hcGkvcHJvZHVjdHMnICwgey4uLmRhdGEsIF9pZH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vY3JlYXRlXHJcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvcHJvZHVjdHMnLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0R29Ub1Byb2R1Y3RzKHRydWUpO1xyXG4gICAgfVxyXG4gICAgaWYoZ29Ub1Byb2R1Y3RzKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9wcm9kdWN0cycpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gdXBsb2FkSW1hZ2VzKGV2KSB7XHJcbiAgICAgICAgY29uc3QgZmlsZXMgPSBldi50YXJnZXQ/LmZpbGVzO1xyXG4gICAgICAgIGlmKGZpbGVzPy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgZm9yKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS91cGxvYWQnLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3NhdmVQcm9kdWN0fT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Qcm9kdWN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcm9kdWN0IG5hbWVcIiBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldiA9PiBzZXRUaXRsZShldi50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxsYWJlbD5QaG90b3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInctMjQgaC0yNCBjdXJzb3ItcG9pbnRlciBib3JkZXIgdGV4dC1jZW50ZXIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1sZyBiZy1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2VXaWR0aD17MS41fSBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjbGFzc05hbWU9XCJ3LTYgaC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk05IDguMjVINy41YTIuMjUgMi4yNSAwIDAwLTIuMjUgMi4yNXY5YTIuMjUgMi4yNSAwIDAwMi4yNSAyLjI1aDlhMi4yNSAyLjI1IDAgMDAyLjI1LTIuMjV2LTlhMi4yNSAyLjI1IDAgMDAtMi4yNS0yLjI1SDE1bTAtM2wtMy0zbTAgMGwtMyAzbTMtM1YxNVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17dXBsb2FkSW1hZ2VzfSBjbGFzc05hbWU9XCJoaWRkZW5cIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgeyFpbWFnZXM/Lmxlbmd0aCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBObyBwaG90b3MgdXBsb2FkZWQgeWV0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ID0+IHNldERlc2NyaXB0aW9uKGV2LnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+UHJpY2UgKENBRCk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldiA9PiBzZXRQcmljZShldi50YXJnZXQudmFsdWUpfS8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPSdidG4tcHJpbWFyeSc+XHJcbiAgICAgICAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImF4aW9zIiwiUHJvZHVjdEZvcm0iLCJfaWQiLCJ0aXRsZSIsImV4aXN0aW5nVGl0bGUiLCJkZXNjcmlwdGlvbiIsImV4aXN0aW5nRGVzY3JpcHRpb24iLCJwcmljZSIsImV4aXN0aW5nUHJpY2UiLCJpbWFnZXMiLCJzZXRUaXRsZSIsInNldERlc2NyaXB0aW9uIiwic2V0UHJpY2UiLCJnb1RvUHJvZHVjdHMiLCJzZXRHb1RvUHJvZHVjdHMiLCJyb3V0ZXIiLCJzYXZlUHJvZHVjdCIsImV2IiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwicHV0IiwicG9zdCIsInB1c2giLCJ1cGxvYWRJbWFnZXMiLCJmaWxlcyIsInRhcmdldCIsImxlbmd0aCIsIkZvcm1EYXRhIiwiZmlsZSIsImFwcGVuZCIsInJlcyIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZVdpZHRoIiwic3Ryb2tlIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsImQiLCJ0ZXh0YXJlYSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductForm.js\n"));

/***/ })

});