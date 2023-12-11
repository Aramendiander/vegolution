import userModel from "../../models/userModel.js";
import productModel from "../../models/productModel.js";
import cartModel from "../../models/cartModel.js";

const cartController = {

    async getCart(req, res) {
        console.log('hola')
        const email = req.body.email;
        console.log(email)
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