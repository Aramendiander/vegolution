import mongoose from "mongoose";
/**
 * @module models/cartModel
 */

/**
 * Cart model for MongoDB Cart collection
 * @typedef {Object} cartModel
 * @property {String} users email del usuario
 * @property {String} products hash de la contraseña del usuario
 */

const cartSchema = new mongoose.Schema({
    users: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'products' }],
    active: Boolean,
    date: Date,
  });


const cartModel = mongoose.model("carts",cartSchema);

export default cartModel;