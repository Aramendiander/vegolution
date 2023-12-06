import mongoose from "mongoose";
/**
 * @module models/userModel
 */

/**
 * User model for MongoDB User collection
 * @typedef {Object} UserModel
 * @property {String} email Unique user identifier
 * @property {String} password User password that will be hashed through bcrypt
 * @property {String} username User's name (not unique, non-identifying)
 * @property {String} reset Reset token for password reset
 * @property {String} role User role (admin, user)
 * @property {Object} carts User cart (array of products)
 */

const userSchema = new mongoose.Schema({
    email:String,
    username: String,
    password:String,
    reset: String,
    role: String,
    cart: Array
});

const userModel = mongoose.model("users",userSchema);

export default userModel;