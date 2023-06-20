"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_js_preferredRegion_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_js_preferredRegion_getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/index.js
var pages_namespaceObject = {};
__webpack_require__.r(pages_namespaceObject);
__webpack_require__.d(pages_namespaceObject, {
  "default": () => (HomePage),
  getServerSideProps: () => (getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(5221);
// EXTERNAL MODULE: ./components/Center.js
var Center = __webpack_require__(2758);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/Button.js
var Button = __webpack_require__(4759);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/ButtonLink.js




const StyledLink = external_styled_components_default()((link_default())).withConfig({
    componentId: "sc-a0f896cc-0"
})`
    ${Button/* ButtonStyle */.Z}
`;
function ButtonLink(props) {
    return /*#__PURE__*/ jsx_runtime.jsx(StyledLink, {
        ...props
    });
}

// EXTERNAL MODULE: ./components/icons/CartIcon.js
var CartIcon = __webpack_require__(8777);
// EXTERNAL MODULE: ./components/CartContext.js
var CartContext = __webpack_require__(8551);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Featured.js








const Bg = external_styled_components_default().div.withConfig({
    componentId: "sc-48768a57-0"
})`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
`;
const Title = external_styled_components_default().h1.withConfig({
    componentId: "sc-48768a57-1"
})`
    margin: 0;
    font-weight: normal;
    font-size: 3rem;
`;
const Desc = external_styled_components_default().p.withConfig({
    componentId: "sc-48768a57-2"
})`
    color: #aaa;
    font-size: 0.8rem;
`;
const Wrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-48768a57-3"
})`
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 40px;
    img{
        max-width: 100%;
    }
`;
const Column = external_styled_components_default().div.withConfig({
    componentId: "sc-48768a57-4"
})`
    display: flex;
    align-items: center;
`;
const ButtonsWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-48768a57-5"
})`
    display: flex;
    gap: 10px;
    margin-top: 25px;
`;
function Featured({ product  }) {
    const { addProduct  } = (0,external_react_.useContext)(CartContext/* CartContext */.A);
    function addToCart() {
        addProduct(product._id);
    }
    return /*#__PURE__*/ jsx_runtime.jsx(Bg, {
        children: /*#__PURE__*/ jsx_runtime.jsx(Center/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Wrapper, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Column, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(Title, {
                                    children: product.title
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(Desc, {
                                    children: product.description
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(ButtonsWrapper, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(ButtonLink, {
                                            href: "/products/" + product._id,
                                            outline: 1,
                                            white: 1,
                                            children: "Read more"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.C, {
                                            primary: true,
                                            onClick: addToCart,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(CartIcon/* default */.Z, {}),
                                                "Add to cart"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Column, {
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png",
                            alt: ""
                        })
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./models/Product.js
var Product = __webpack_require__(6219);
// EXTERNAL MODULE: ./lib/mongoose.js
var mongoose = __webpack_require__(2336);
// EXTERNAL MODULE: ./components/ProductsGrid.js + 1 modules
var ProductsGrid = __webpack_require__(4705);
;// CONCATENATED MODULE: ./components/NewProducts.js




const NewProducts_Title = external_styled_components_.styled.h2`
    font-size: 2rem;
    margin: 30px 0 20px;
    font-weight: normal;
`;
function NewProducts({ products  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Center/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(NewProducts_Title, {
                children: "New Arrivals"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(ProductsGrid/* default */.Z, {
                products: products
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/index.js






function HomePage({ featuredProduct , newProducts  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Featured, {
                product: featuredProduct
            }),
            /*#__PURE__*/ jsx_runtime.jsx(NewProducts, {
                products: newProducts
            })
        ]
    });
}
async function getServerSideProps() {
    const featuredProductId = "64861079d8a99543beef0579";
    await (0,mongoose/* mongooseConnect */.I)();
    const featuredProduct = await Product/* Product */.x.findById(featuredProductId);
    const newProducts = await Product/* Product */.x.find({}, null, {
        sort: {
            "_id": -1
        },
        limit: 10
    });
    return {
        props: {
            featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
            newProducts: JSON.parse(JSON.stringify(newProducts))
        }
    };
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F&absolutePagePath=private-next-pages%2Findex.js&preferredRegion=!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_js_preferredRegion_ = ((0,helpers/* hoist */.l)(pages_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_js_preferredRegion_getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(pages_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(pages_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/index","pathname":"/","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: pages_namespaceObject })
        
        
    

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [812,664,551,221,759,97,705], () => (__webpack_exec__(2872)));
module.exports = __webpack_exports__;

})();