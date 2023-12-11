import cartController from "./cartController.js";

const addToCart = async (req, res) => {

    try {
        const products = await productController.getLastProducts();
        return products;
    }
    catch(e){
        console.log(e)
    }
}

const deleteFromCart = async (req, res) => {
    try {
        const name = req.params.name
        const products = await cartController.deleteFromCart(name);
        console.log(products)
        return products;
    }
    catch(e){
        console.log(e)
    }
}

export {
    addToCart,
    deleteFromCart,
}

export default {
    addToCart,
    deleteFromCart,
}