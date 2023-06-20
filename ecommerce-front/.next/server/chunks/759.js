"use strict";
exports.id = 759;
exports.ids = [759];
exports.modules = {

/***/ 4759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ Button),
/* harmony export */   Z: () => (/* binding */ ButtonStyle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const ButtonStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
    border: 0;
    color: #fff;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    svg {
        height: 16px;
        margin-right: 5px;
    }
    ${(props)=>props.white && !props.outline && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
        background-color: #fff;
        color: #000;
    `}
    ${(props)=>props.white && props.outline && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
    `}
    ${(props)=>props.primary && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
        background-color: #5542F6;
        color: #fff;
        border: 1px solid #5542F6;
    `}
    ${(props)=>props.size === "l" && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
        font-size:1.2rem;
        padding: 10px 20px;
        svg{
            height: 20px;
        }
    `}
    ${(props)=>props.block && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
        display: block;
        width: 100%;
    `}
`;
const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default().button.withConfig({
    componentId: "sc-5935a2f0-0"
})`
   ${ButtonStyle}
`;
function Button({ children , ...rest }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledButton, {
        ...rest,
        children: children
    });
}


/***/ })

};
;