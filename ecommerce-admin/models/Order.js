const { Schema, model, models } = require("mongoose");

const OrderSchema = new Schema({
    line_items:Object,
    name:String,
    email:String,
    phone:String,
    pickupLocation:String,
    paymentMethod:String,
    paid:Boolean,
}, {
    timestamps: true,
});

export const Order = models?.Order || model('Order', OrderSchema);