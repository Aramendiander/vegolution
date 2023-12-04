import mongoose from "mongoose";
/**
 * @module models/cartModel
 */

/**
 * Modelo de usuario para loguearse y poder hacer scraping
 * @typedef {Object} cartModel
 * @property {String} users email único para cada usuario
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