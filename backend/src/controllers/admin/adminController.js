import productModel from "../../models/productModel.js";


const createProduct = async (name, shortdescription, longdescription, picture, price, category) => {
    try {
        const product = await productModel.create({
            name: name,
            shortdescription: shortdescription,
            longdescription: longdescription,
            picture: picture,
            price: price,
            category: category
        });
        return product
    } catch (error) {
        console.log(error)
        return
    }
};


const editProduct = async (id, name, shortdescription, longdescription, picture, price, category) => {
    try {
        const product = await productModel.findOneAndUpdate({_id: id}, {
            name: name,
            shortdescription: shortdescription,
            longdescription: longdescription,
            picture: picture,
            price: price,
            category: category,
        }, { new: true });
        await product.save();
        return product
    } catch (error) {
        console.log(error)
        return
    }
};

const removeProduct = async (id) => {
    try {
        const product = await productModel.deleteOne({_id: id});
        return product
    } catch (error) {
        console.log(error)
        return
    }
};

export default {
    createProduct,
    editProduct,
    removeProduct,
};