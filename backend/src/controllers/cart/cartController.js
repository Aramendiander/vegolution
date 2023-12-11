import userModel from "../../models/userModel.js";
import productModel from "../../models/productModel.js";
import cartModel from "../../models/cartModel.js";

const cartController = {

    async getCart(req, res) {
        const email = req.body.email;
        try {
            const user = await userModel.findOne({ email: email }).populate('cart.product');
            if (!user) {
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }
            const userCart = user.cart
            return res.json({ userCart });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },


    async addToCart(req, res) {
        try {
            const { email, productId, quantity } = req.body;

            const product = await productModel.findOne({ _id: productId });
            if (!product) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }

            const user = await userModel.findOne({ email: email });
            if (!user) {
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }

            const isInCart = user.cart.some(item => String(item.product) === String(productId));

            if (isInCart) {
                user.cart.forEach(item => {
                    if (String(item.product) === String(productId)) {
                        item.quantity += parseInt(quantity);
                    }
                });
            } else {
                user.cart.push({
                    product: productId,
                    quantity: quantity,
                });
            }

            await user.save();


            return res.json(user.cart);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async deleteFromCart(req, res) {
        try {
            const { userId, productId } = req.query;

            console.log(userId)
            const user = await userModel.findById(userId);
            if (!user) {
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }

            const isInCart = user.cart.some(item => String(item.product) === String(productId));

            if (!isInCart) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            } else {
                const product = user.cart.find(item => String(item.product._id) === String(productId));
                if (product) {
                    user.cart.pull(product);
                    await user.save();
                    return res.json(product);
                } else {
                    return res.status(404).json({ error: 'Product not found in cart' });
                }
            }

        } catch (error) {
            console.log(error)
            return res.status(400).json({ error: error.message });
        }
    },
};

export default cartController;