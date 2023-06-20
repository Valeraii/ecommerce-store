"use strict";
exports.id = 705;
exports.ids = [705];
exports.modules = {

/***/ 4705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ ProductsGrid)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./next.config.js
var next_config = __webpack_require__(3868);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/Button.js
var Button = __webpack_require__(4759);
// EXTERNAL MODULE: ./components/icons/CartIcon.js
var CartIcon = __webpack_require__(8777);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/CartContext.js
var CartContext = __webpack_require__(8551);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/ProductBox.js








const ProductWrapper = external_styled_components_.styled.div`

`;
const Box = (0,external_styled_components_.styled)((link_default()))`
    background-color: #fff;
    padding: 20px;
    height: 150px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    img {
        max-width: 100%;
        max-height: 150px;
    }
`;
const Title = (0,external_styled_components_.styled)((link_default()))`
    font-weight: normal;
    font-size: 1rem;
    margin: 0;
    color: inherit;
    text-decoration: none;
`;
const ProductInfoBox = external_styled_components_.styled.div`
    margin-top: 5px;
`;
const PriceRow = external_styled_components_.styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2px;
`;
const Price = external_styled_components_.styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`;
function ProductBox({ _id , title , description , price , images  }) {
    const { addProduct  } = (0,external_react_.useContext)(CartContext/* CartContext */.A);
    const url = "/product/" + _id;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ProductWrapper, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Box, {
                href: url,
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: images?.[0],
                        alt: ""
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ProductInfoBox, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Title, {
                        href: url,
                        children: [
                            " ",
                            title,
                            " "
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(PriceRow, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Price, {
                                children: [
                                    " $",
                                    price,
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.C, {
                                primary: true,
                                onClick: ()=>addProduct(_id),
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime.jsx(CartIcon/* default */.Z, {}),
                                    " Add "
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/ProductsGrid.js



const StyledProductsGrid = external_styled_components_default().div.withConfig({
    componentId: "sc-3e7ff08a-0"
})`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    padding-top: 30px;
    padding-bottom: 30px;
`;
function ProductsGrid({ products  }) {
    return /*#__PURE__*/ jsx_runtime.jsx(StyledProductsGrid, {
        children: products?.length > 0 && products.map((product)=>/*#__PURE__*/ jsx_runtime.jsx(ProductBox, {
                ...product
            }, product._id))
    });
}


/***/ }),

/***/ 3868:
/***/ ((module) => {

/** @type {import('next').NextConfig} */ 
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true
    }
};
module.exports = nextConfig;


/***/ })

};
;