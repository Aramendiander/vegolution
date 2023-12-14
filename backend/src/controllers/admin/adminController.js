import productModel from "../../models/productModel.js";

// product crud
const createProduct = async (name, shortdescription, longdescription, picture, price, category) => {
    try {
        const product = await productModel.create({
            name: name,
            shortdescription: shortdescription,
            longdescription: longdescription,
            picture: picture,
            price: price,
            category: category // if category is a single value and you want to store it as an array
        });
        return product
    } catch (error) {
        console.log(error)
        /* return res.status(500).json({ error: error.message }); */
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
        /* return res.status(500).json({ error: error.message }); */
    }
};

const removeProduct = async (id) => {
    try {
        const product = await productModel.deleteOne({_id: id});
        return product
    } catch (error) {
        console.log(error)
        /* return res.status(500).json({ error: error.message }); */
    }
};

export default {
    createProduct,
    editProduct,
    removeProduct,
};