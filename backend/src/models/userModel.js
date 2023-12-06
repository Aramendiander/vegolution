import mongoose from "mongoose";
/**
 * @module models/userModel
 */

/**
 * Modelo de usuario para loguearse y poder hacer scraping
 * @typedef {Object} UserModel
 * @property {String} email email único para cada usuario
 * @property {String} password hash de la contraseña del usuario
 */

const userSchema = new mongoose.Schema({
    email:String,
    username: String,
    password:String,
    reset: String,
    role: String,
    carts: { type: mongoose.Schema.Types.ObjectId, ref: 'carts' },
});

const userModel = mongoose.model("users",userSchema);

export default userModel;