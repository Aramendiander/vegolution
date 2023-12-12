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

const getByCategory = async (req, res) => {

    try {
        const category = req.params.category
        const products = await productController.getByCategory(category);
        return products;
    }
    catch(e){
        console.log(e)
    }
}

export {
    getLastProducts,
    getSingleProduct,
    getByCategory,
}

export default {
    getLastProducts,
    getSingleProduct,
    getByCategory,
}