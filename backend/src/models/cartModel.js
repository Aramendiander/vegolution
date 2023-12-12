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
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      },
      quantity: Number,
    }
  ],
  active: Boolean,
  date: Date
});


const cartModel = mongoose.model("carts", cartSchema);

export default cartModel;