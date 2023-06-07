import {Schema, model, models} from 'mongoose';

const ProductSchema = new Schema({
    title: {type: String, required: true},
    description: String,
    price: {type: Number, require:true},
});

export const Product = models.Product || model('Product', ProductSchema);