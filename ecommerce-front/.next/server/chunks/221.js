"use strict";
exports.id = 221;
exports.ids = [221];
exports.modules = {

/***/ 2758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Center)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-1c8a5dad-0"
})`
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
`;
function Center({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledDiv, {
        children: children
    });
}


/***/ }),

/***/ 5221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Center__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2758);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CartContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8551);






const StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default().header.withConfig({
    componentId: "sc-19b6f83c-0"
})`
    background-color: #222;
`;
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_2___default()((next_link__WEBPACK_IMPORTED_MODULE_1___default())).withConfig({
    componentId: "sc-19b6f83c-1"
})`
    color: #fff;
    text-decoration: none;
`;
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-19b6f83c-2"
})`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`;
const StyledNav = styled_components__WEBPACK_IMPORTED_MODULE_2___default().nav.withConfig({
    componentId: "sc-19b6f83c-3"
})`
    display: flex;
    gap: 15px;
`;
const NavLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default()((next_link__WEBPACK_IMPORTED_MODULE_1___default())).withConfig({
    componentId: "sc-19b6f83c-4"
})`
    color: #aaa;
    text-decoration: none;
`;
function Header() {
    const { cartProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_CartContext__WEBPACK_IMPORTED_MODULE_5__/* .CartContext */ .A);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledHeader, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Center__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Logo, {
                        href: "/",
                        children: "Ecommerce"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledNav, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavLink, {
                                href: "/",
                                children: "Home"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavLink, {
                                href: "/products",
                                children: "All products"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(NavLink, {
                                href: "/cart",
                                children: [
                                    "Cart (",
                                    cartProducts.length,
                                    ")"
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}


/***/ })

};
;