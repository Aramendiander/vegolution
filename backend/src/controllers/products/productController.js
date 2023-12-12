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

const getByCategory = async (category) => {
    
    try {
        const products = await productModel.find({category: category});
        return products
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