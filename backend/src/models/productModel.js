import mongoose from "mongoose";

/**
 * @module models/productModel
 */

/**
 * Product model for ecommerce products on MongoDB Product collection
 * @typedef {Object} productModel
 * @property {String} name Name of the product
 * @property {String} shortdescription Short description of the product
 * @property {String} longdescription Long description of the product
 * @property {String} picture URL of the product picture
 * @property {Number} price Price of the product
 */

const productSchema = new mongoose.Schema({
    name: String,
    shortdescription: String,
    longdescription: String,
    picture: String,
    price: Number,
});

const productModel = mongoose.model("products", productSchema);

export default productModel;