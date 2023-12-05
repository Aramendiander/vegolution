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

const getSingleProduct = async (req, res) => {
    try {
        const name = req.params.name
        const products = await productController.getSingleProduct(name);
        console.log(products)
        return products;
    }
    catch(e){
        console.log(e)
    }
}

export {
    getLastProducts,
    getSingleProduct,
}

export default {
    getLastProducts,
    getSingleProduct,
}