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
        const {id, name, shortdescription, longdescription, picture, price, category } = req.body;
        const product = await adminController.editProduct(id, name, shortdescription, longdescription, picture, price, category);
        res.json({ product });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const removeProduct = async (req, res) => {
    try {
        const { id } = req.body;
        const product = await adminController.removeProduct(id);
        res.json({ product });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export default {
    createProduct,
    editProduct,
    removeProduct,
};