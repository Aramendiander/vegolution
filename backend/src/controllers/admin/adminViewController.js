import adminController from "./adminController.js";

// product crud
const createProduct = async (req, res) => {
    try {
        const { name, shortdescription, longdescription, picture, price, category } = req.body;
        const product = await adminController.createProduct(name, shortdescription, longdescription, picture, price, category);
        res.json({ product });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const editProduct = async (req, res) => {
    try {
        const product = await adminController.editProduct(req.body);
        res.json({ product });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export default {
    createProduct,
    editProduct,
};