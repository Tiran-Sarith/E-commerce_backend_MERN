const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    stockQuantity: {
        type: Number,
        required: true
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
// This code defines a Mongoose schema and model for a product in an e-commerce application.