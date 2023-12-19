import userModel from "../../models/userModel.js";
import productModel from "../../models/productModel.js";
import cartModel from "../../models/cartModel.js";
import jwt from "jsonwebtoken";

const cartController = {

    async getCart(req, res) {
        const cookie = req.headers.cookie;
        const token = cookie.split("=")[1];
        const { id } = jwt.verify(token, process.env.JWT_SECRET);
        try {
            const user = await userModel.findOne({ _id: id }).populate('cart.product');
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
            const { productId } = req.body;
            const cookie = req.headers.cookie;
            const token = cookie.split("=")[1];
            const { id } = jwt.verify(token, process.env.JWT_SECRET);

            console.log(id)
            const user = await userModel.findById(id);
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

    async purchase(req, res) {
        try {
            const cookie = req.headers.cookie;
            const token = cookie.split("=")[1];
            const { id } = jwt.verify(token, process.env.JWT_SECRET);
            const user = await userModel.findOne({ _id: id });
            if (!user) {
                return res.status(404).json({ error: 'Cart not found' });
            }
            const products = user.cart;
            const historyCart = await cartModel.create({
                user: user._id,
                products: products,
                active: false,
                date: Date.now()
            });
            historyCart.save();
            user.cart = [];
            user.save()
            res.json({ message: "Purchase completed" })

        }
        catch (e) {
            console.log(e)
            res.json({ message: "Error" })
        }
    },

    async history(req, res) {
        const cookie = req.headers.cookie;
        const token = cookie.split("=")[1];
        const { id } = jwt.verify(token, process.env.JWT_SECRET);

        try {
            const userId = req.query.userId;
            const user = await userModel.findOne({ _id: id });
            if (!user) {
                return res.status(404).json({ error: 'Cart not found' });
            }
            const history = await cartModel.find({ user: user._id }).populate({
                path: 'products.product',
                model: 'products'
            });
            res.json(history)
        }
        catch (e) {
            console.log(e)
            res.json({ message: "Error" })
        }
    }
};

export default cartController;