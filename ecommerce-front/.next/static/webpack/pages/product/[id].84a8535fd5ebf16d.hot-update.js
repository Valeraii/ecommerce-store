"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[id]",{

/***/ "./components/ProductImages.js":
/*!*************************************!*\
  !*** ./components/ProductImages.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductImages; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"   \\nmax-width: 100%;\\nmax-height: 100%;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\ndisplay: flex;\\ngap: 10px;\\nflex-grow: 0;\\nmargin-top: 10px;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\nborder: 2px solid #ccc;\\nheight: 50px;\\npadding: 2px;\\ncursor: pointer;\\nborder-radius: 5px;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\nconst Image = styled_components__WEBPACK_IMPORTED_MODULE_3__.styled.img(_templateObject());\n_c = Image;\nconst ImageButtons = styled_components__WEBPACK_IMPORTED_MODULE_3__.styled.div(_templateObject1());\n_c1 = ImageButtons;\nconst ImageButton = styled_components__WEBPACK_IMPORTED_MODULE_3__.styled.div(_templateObject2());\n_c2 = ImageButton;\nfunction ProductImages(param) {\n    let { images  } = param;\n    _s();\n    const [activeImage, setActiveImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(images === null || images === void 0 ? void 0 : images[0]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Image, {\n                src: activeImage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\components\\\\ProductImages.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ImageButtons, {\n                children: images.map((image)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ImageButton, {\n                        onClick: ()=>setActiveImage(image),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Image, {\n                            src: image,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\components\\\\ProductImages.js\",\n                            lineNumber: 32,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\components\\\\ProductImages.js\",\n                        lineNumber: 31,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\components\\\\ProductImages.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(ProductImages, \"J4LmiVzHe3u0TzseqV4bR3fsckw=\");\n_c3 = ProductImages;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Image\");\n$RefreshReg$(_c1, \"ImageButtons\");\n$RefreshReg$(_c2, \"ImageButton\");\n$RefreshReg$(_c3, \"ProductImages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RJbWFnZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNUO0FBRWpDLE1BQU1FLFFBQVFGLHFEQUFNQSxDQUFDRztLQUFmRDtBQUtOLE1BQU1FLGVBQWVKLHFEQUFNQSxDQUFDSztNQUF0QkQ7QUFPTixNQUFNRSxjQUFjTixxREFBTUEsQ0FBQ0s7TUFBckJDO0FBUVMsU0FBU0MsY0FBYyxLQUFRO1FBQVIsRUFBQ0MsT0FBTSxFQUFDLEdBQVI7O0lBQ2xDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBQ08sbUJBQUFBLG9CQUFBQSxLQUFBQSxJQUFBQSxNQUFRLENBQUMsRUFBRTtJQUMxRCxxQkFDSTs7MEJBQ0ksOERBQUNOO2dCQUFNUyxLQUFLRjs7Ozs7OzBCQUNaLDhEQUFDTDswQkFDSUksT0FBT0ksSUFBSUMsQ0FBQUEsc0JBQ1IsOERBQUNQO3dCQUFZUSxTQUFTLElBQU1KLGVBQWVHO2tDQUN2Qyw0RUFBQ1g7NEJBQU1TLEtBQUtFOzRCQUFPRSxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNL0M7R0Fkd0JSO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdEltYWdlcy5qcz9jYjVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgICAgXHJcbm1heC13aWR0aDogMTAwJTtcclxubWF4LWhlaWdodDogMTAwJTtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlQnV0dG9ucyA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6IGZsZXg7XHJcbmdhcDogMTBweDtcclxuZmxleC1ncm93OiAwO1xyXG5tYXJnaW4tdG9wOiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VCdXR0b24gPSBzdHlsZWQuZGl2YFxyXG5ib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xyXG5oZWlnaHQ6IDUwcHg7XHJcbnBhZGRpbmc6IDJweDtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG5ib3JkZXItcmFkaXVzOiA1cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0SW1hZ2VzKHtpbWFnZXN9KSB7XHJcbiAgICBjb25zdCBbYWN0aXZlSW1hZ2UsIHNldEFjdGl2ZUltYWdlXSA9IHVzZVN0YXRlKGltYWdlcz8uWzBdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17YWN0aXZlSW1hZ2V9Lz4gIFxyXG4gICAgICAgICAgICA8SW1hZ2VCdXR0b25zPlxyXG4gICAgICAgICAgICAgICAge2ltYWdlcy5tYXAoaW1hZ2UgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVJbWFnZShpbWFnZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW1hZ2VCdXR0b24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9JbWFnZUJ1dHRvbnM+ICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJzdHlsZWQiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiaW1nIiwiSW1hZ2VCdXR0b25zIiwiZGl2IiwiSW1hZ2VCdXR0b24iLCJQcm9kdWN0SW1hZ2VzIiwiaW1hZ2VzIiwiYWN0aXZlSW1hZ2UiLCJzZXRBY3RpdmVJbWFnZSIsInNyYyIsIm1hcCIsImltYWdlIiwib25DbGljayIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductImages.js\n"));

/***/ })

});