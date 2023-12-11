import userModel from "../../models/userModel.js";
import productModel from "../../models/userModel.js";
import cartModel from "../../models/cartModel.js";

const cartController = {
    async addToCart(req, res) {
        try {
            const { userId, productId, quantity } = req.body;

            const product = await productModel.findById(productId);
            if (!product) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }

            const user = await userModel.findById(userId);
            if (!user) {
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }

            const isInCart = user.cart.some(item => String(item.product) === String(productId));

            if (isInCart) {
                user.cart.forEach(item => {
                    if (String(item.product) === String(productId)) {
                        item.quantity += quantity;
                    }
                });
            } else {
                user.cart.push({
                    product: productId,
                    quantity: quantity,
                    price: product.price
                });
            }

            await user.save();

            let updatedCart = await cartModel.findOne({ user: userId });

            if (!updatedCart) {
                updatedCart = await cartModel.create({ //si no hay carrito, se crea
                    user: userId,
                    products: [productId],
                    active: true,
                    date: new Date()
                });
            } else {
                updatedCart.products.addToSet(productId);
                updatedCart.active = true;
                updatedCart.date = new Date();
                await updatedCart.save();
            }

            return res.json(updatedCart);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async deleteFromCart(req, res) {
        try {
            const { userId, productId } = req.params;

            const user = await userModel.findById(userId);
            if (!user) {
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }

            // Verificar si el producto está en el carrito del usuario
            const cartItemIndex = user.cart.findIndex(item => String(item.product) === String(productId));

            if (cartItemIndex !== -1) {
                user.cart.splice(cartItemIndex, 1);
                await user.save();

                const updatedCart = await cartModel.findOneAndUpdate(
                    { user: userId },
                    { $pull: { products: productId } }, // Eliminar el producto del array de productos, se utiliza el método $pull en la consulta de Mongoose para eliminar el producto del array products en el modelo cartModel
                    { new: true }
                );

                return res.json(updatedCart);
            } else {
                return res.status(404).json({ error: 'Producto no encontrado en el carrito' });
            }
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
};

export default cartController;