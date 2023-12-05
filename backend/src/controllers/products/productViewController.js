import productController from "./productController.js";

const getLastProducts = async (req, res) => {

    try {
        const products = await productController.getLastProducts();
        return products;
    }
    catch(e){
        console.log(e)
    }
}

export {
    getLastProducts,
}

export default {
    getLastProducts,
}