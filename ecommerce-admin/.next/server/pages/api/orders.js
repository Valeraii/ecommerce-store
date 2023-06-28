"use strict";
(() => {
var exports = {};
exports.id = 722;
exports.ids = [722];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ mongooseConnect)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

function mongooseConnect() {
    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) === 1) {
        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();
    } else {
        const uri = process.env.MONGODB_URI;
        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);
    }
}


/***/ }),

/***/ 8499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
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

;// CONCATENATED MODULE: ./pages/api/orders.js


async function handler(req, res) {
    await (0,mongoose/* mongooseConnect */.I)();
    const { method  } = req;
    if (method == "GET") {
        res.json(await Order.find().sort({
            createdAt: -1
        }));
    }
    if (method == "PUT") {
        console.log(req.body);
        const { id , paidStatus  } = req.body;
        await Order.findOneAndUpdate({
            _id: id
        }, {
            paid: paidStatus
        }, {
            new: true
        });
        res.json(true);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8499));
module.exports = __webpack_exports__;

})();