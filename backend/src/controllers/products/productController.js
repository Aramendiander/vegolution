import productModel from "../../models/productModel.js";

const getLastProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        
        return products
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