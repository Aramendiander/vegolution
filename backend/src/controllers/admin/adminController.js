import productModel from "../../models/productModel.js";

// product crud
const createProduct = async (req, res) => {
    try {
        const { name, price, description, category, image } = req.body;
        const product = new productModel({
            name,
            price,
            description,
            category,
            image
        });
        await product.save();
        return res.json({ product });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const editProduct = async (req, res) => {
    try {
        const { name, price, description, category, image } = req.body;
        const product = await productModel.findByIdAndUpdate(req.params.id, {
            name,
            price,
            description,
            category,
            image
        });
        await product.save();
        return res.json({ product });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export default adminController;