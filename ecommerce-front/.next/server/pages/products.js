"use strict";
(() => {
var exports = {};
exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 3520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fproducts_absolutePagePath_private_next_pages_2Fproducts_js_preferredRegion_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2Fproducts_absolutePagePath_private_next_pages_2Fproducts_js_preferredRegion_getServerSideProps),
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

// NAMESPACE OBJECT: ./pages/products.js
var products_namespaceObject = {};
__webpack_require__.r(products_namespaceObject);
__webpack_require__.d(products_namespaceObject, {
  "default": () => (ProductsPage),
  getServerSideProps: () => (getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./components/Center.js
var Center = __webpack_require__(2758);
// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(5221);
// EXTERNAL MODULE: ./lib/mongoose.js
var mongoose = __webpack_require__(2336);
// EXTERNAL MODULE: ./models/Product.js
var Product = __webpack_require__(6219);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
// EXTERNAL MODULE: ./components/ProductsGrid.js + 1 modules
var ProductsGrid = __webpack_require__(4705);
// EXTERNAL MODULE: ./components/Title.js
var Title = __webpack_require__(9889);
;// CONCATENATED MODULE: ./components/icons/SearchIcon.js

function SearchIcon({ className ="w-6 h-6"  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        class: className,
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        })
    });
}

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./pages/products.js











const StyledSearch = external_styled_components_.styled.div`
    display: flex;
    align-items: center;
`;
const SearchBar = external_styled_components_.styled.input`
    display: flex;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-left: auto;
`;
const SearchBtn = external_styled_components_.styled.button`
    color: white;
    border: 1px solid #5542F6;
    background-color: #5542F6;
    padding: 4px 15px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    svg {
        height: 15px;
        margin-right: 5px;
    }
`;
function ProductsPage({ products  }) {
    const searchBar = external_react_default().useRef(null);
    const [searchResult, setSearchResult] = (0,external_react_.useState)(products);
    const Search = ()=>{
        let searchResult = [];
        if (searchBar.current.value === "") {
            return setSearchResult(products);
        }
        for(let i = 0; i < products.length; i++){
            if (products[i].title.toLowerCase().includes(searchBar.current.value.toLowerCase())) {
                searchResult.push(products[i]);
            }
        }
        console.log(searchResult);
        return setSearchResult(searchResult);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Center/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(StyledSearch, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(Title/* default */.Z, {
                                children: "All products"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(SearchBar, {
                                type: "text",
                                ref: searchBar,
                                placeholder: "Search.."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(SearchBtn, {
                                onClick: Search,
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime.jsx(SearchIcon, {}),
                                    " "
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(ProductsGrid/* default */.Z, {
                        products: searchResult
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps() {
    await (0,mongoose/* mongooseConnect */.I)();
    const products = await Product/* Product */.x.find({}, null, {
        sort: {
            "_id": -1
        }
    });
    return {
        props: {
            products: JSON.parse(JSON.stringify(products))
        }
    };
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fproducts&absolutePagePath=private-next-pages%2Fproducts.js&preferredRegion=!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fproducts_absolutePagePath_private_next_pages_2Fproducts_js_preferredRegion_ = ((0,helpers/* hoist */.l)(products_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(products_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(products_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2Fproducts_absolutePagePath_private_next_pages_2Fproducts_js_preferredRegion_getServerSideProps = (0,helpers/* hoist */.l)(products_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(products_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(products_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(products_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(products_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(products_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(products_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(products_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/products","pathname":"/products","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: products_namespaceObject })
        
        
    

/***/ }),

/***/ 9889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1.withConfig({
    componentId: "sc-3a09c442-0"
})`
    font-size: 1.5em;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);


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
var __webpack_exports__ = __webpack_require__.X(0, [812,664,551,221,759,97,705], () => (__webpack_exec__(3520)));
module.exports = __webpack_exports__;

})();