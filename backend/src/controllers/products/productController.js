import productModel from "../../models/productModel.js";

const getLastProducts = async () => {
    try {
        const products = await productModel.find();
        
        return products
    }
    catch(e){
        console.log(e)
    }
}

const getSingleProduct = async (name) => {
    try {
        const products = await productModel.findOne({name: name});

        return products
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