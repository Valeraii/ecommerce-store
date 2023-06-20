"use strict";
(() => {
var exports = {};
exports.id = 756;
exports.ids = [756];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ mongooseConnect)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

function mongooseConnect() {
    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState === 1) {
        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();
    } else {
        const uri = process.env.MONGODB_URI;
        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);
    }
}


/***/ }),

/***/ 8721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const ProductSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true
    },
    images: [
        {
            type: String
        }
    ],
    category: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types).ObjectId,
        ref: "Category"
    },
    properties: {
        type: Object
    }
}, {
    timestamps: true
});
const Product = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Product || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Product", ProductSchema);


/***/ }),

/***/ 7115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handle)
});

// EXTERNAL MODULE: ./lib/mongoose.js
var mongoose = __webpack_require__(5946);
;// CONCATENATED MODULE: ./models/Order.js
const { Schema , model , models  } = __webpack_require__(1185);
const OrderSchema = new Schema({
    line_items: Object,
    name: String,
    email: String,
    phone: String,
    pickupLocation: String,
    paymentMethod: String,
    paid: Boolean
}, {
    timestamps: true
});
const Order = models?.Order || model("Order", OrderSchema);

// EXTERNAL MODULE: ./models/Product.js
var Product = __webpack_require__(8721);
;// CONCATENATED MODULE: ./pages/api/checkout.js



async function handle(req, res) {
    if (req.method !== "POST") {
        res.json("should be a POST request");
        return;
    }
    await (0,mongoose/* mongooseConnect */.I)();
    const { name , email , phone , pickupLocation , paymentMethod , cartProducts  } = req.body;
    const productIds = cartProducts;
    const uniqueIds = [
        ...new Set(productIds)
    ];
    const productsInfo = Product/* Product */.x.find({
        _id: uniqueIds
    });
    async function getProductInfo(productId) {
        try {
            const productInfo = await Product/* Product */.x.findOne({
                _id: productId
            });
            if (productInfo) {
                // Found the product information
                return productInfo;
            } else {
                throw new Error("Product information not found");
            }
        } catch (error) {
            // Handle the error
            console.error(error);
            throw error;
        }
    }
    let line_items = [];
    for (const id of uniqueIds){
        let info;
        try {
            info = await getProductInfo(id);
        } catch (error) {
            console.log(error);
        }
        const quantity = productIds.filter((q)=>q === id)?.length || 0;
        if (quantity > 0 && info) {
            line_items.push({
                quantity,
                price_data: {
                    currency: "CAD",
                    product_data: {
                        name: info.title
                    },
                    unit_amount: quantity * info.price
                }
            });
        }
    }
    const orderDoc = await Order.create({
        line_items,
        name,
        email,
        phone,
        pickupLocation,
        paymentMethod,
        paid: false
    });
    res.json(orderDoc);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7115));
module.exports = __webpack_exports__;

})();