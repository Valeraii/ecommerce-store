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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductImages; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"   \\n    max-width: 100%;\\n    max-height: 100%;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    max-width: 100%;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    gap: 10px;\\n    flex-grow: 0;\\n    margin-top: 10px;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    border: 2px solid #ccc;\\n    height: 50px;\\n    padding: 2px;\\n    cursor: pointer;\\n    border-radius: 5px;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\nconst Image = styled_components__WEBPACK_IMPORTED_MODULE_3__.styled.img(_templateObject());\n_c = Image;\nconst BigImage = styled_components__WEBPACK_IMPORTED_MODULE_3__.styled.img(_templateObject1());\nconst ImageButtons = styled_components__WEBPACK_IMPORTED_MODULE_3__.styled.div(_templateObject2());\n_c1 = ImageButtons;\nconst ImageButton = styled_components__WEBPACK_IMPORTED_MODULE_3__.styled.div(_templateObject3());\n_c2 = ImageButton;\nfunction ProductImages(param) {\n    let { images  } = param;\n    _s();\n    const [activeImage, setActiveImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(images === null || images === void 0 ? void 0 : images[0]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Image, {\n                src: activeImage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\components\\\\ProductImages.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ImageButtons, {\n                children: images.map((image)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ImageButton, {\n                        onClick: ()=>setActiveImage(image),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Image, {\n                            src: image,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\components\\\\ProductImages.js\",\n                            lineNumber: 35,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\components\\\\ProductImages.js\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\valer\\\\Desktop\\\\ecommerce\\\\ecommerce-store\\\\ecommerce-front\\\\components\\\\ProductImages.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(ProductImages, \"J4LmiVzHe3u0TzseqV4bR3fsckw=\");\n_c3 = ProductImages;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Image\");\n$RefreshReg$(_c1, \"ImageButtons\");\n$RefreshReg$(_c2, \"ImageButton\");\n$RefreshReg$(_c3, \"ProductImages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RJbWFnZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNUO0FBRWpDLE1BQU1FLFFBQVFGLHFEQUFNQSxDQUFDRztLQUFmRDtBQUtOLE1BQU1FLFdBQVdKLHFEQUFNQSxDQUFDRztBQUd4QixNQUFNRSxlQUFlTCxxREFBTUEsQ0FBQ007TUFBdEJEO0FBT04sTUFBTUUsY0FBY1AscURBQU1BLENBQUNNO01BQXJCQztBQVFTLFNBQVNDLGNBQWMsS0FBUTtRQUFSLEVBQUNDLE9BQU0sRUFBQyxHQUFSOztJQUNsQyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1YsK0NBQVFBLENBQUNRLG1CQUFBQSxvQkFBQUEsS0FBQUEsSUFBQUEsTUFBUSxDQUFDLEVBQUU7SUFDMUQscUJBQ0k7OzBCQUNJLDhEQUFDUDtnQkFBTVUsS0FBS0Y7Ozs7OzswQkFDWiw4REFBQ0w7MEJBQ0lJLE9BQU9JLElBQUlDLENBQUFBLHNCQUNSLDhEQUFDUDt3QkFBWVEsU0FBUyxJQUFNSixlQUFlRztrQ0FDdkMsNEVBQUNaOzRCQUFNVSxLQUFLRTs0QkFBT0UsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTS9DO0dBZHdCUjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3RJbWFnZXMuanM/Y2I1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSW1hZ2UgPSBzdHlsZWQuaW1nYCAgIFxyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuYDtcclxuXHJcbmNvbnN0IEJpZ0ltYWdlID0gc3R5bGVkLmltZ2BcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuYDtcclxuY29uc3QgSW1hZ2VCdXR0b25zID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VCdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RJbWFnZXMoe2ltYWdlc30pIHtcclxuICAgIGNvbnN0IFthY3RpdmVJbWFnZSwgc2V0QWN0aXZlSW1hZ2VdID0gdXNlU3RhdGUoaW1hZ2VzPy5bMF0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXthY3RpdmVJbWFnZX0vPiAgXHJcbiAgICAgICAgICAgIDxJbWFnZUJ1dHRvbnM+XHJcbiAgICAgICAgICAgICAgICB7aW1hZ2VzLm1hcChpbWFnZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlQnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZUltYWdlKGltYWdlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbWFnZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0ltYWdlQnV0dG9ucz4gIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInN0eWxlZCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJpbWciLCJCaWdJbWFnZSIsIkltYWdlQnV0dG9ucyIsImRpdiIsIkltYWdlQnV0dG9uIiwiUHJvZHVjdEltYWdlcyIsImltYWdlcyIsImFjdGl2ZUltYWdlIiwic2V0QWN0aXZlSW1hZ2UiLCJzcmMiLCJtYXAiLCJpbWFnZSIsIm9uQ2xpY2siLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProductImages.js\n"));

/***/ })

});