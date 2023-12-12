import cartController from "./cartController.js";

const addToCart = async (req, res) => {

    try {   
        const products = await cartController.addToCart(req,res);
        return products;
    }
    catch(e){
        console.log(e)
    }
}

const deleteFromCart = async (req, res) => {
    try {
        const name = req.params.name
        const products = await cartController.deleteFromCart(req, res);
        return products;
    }
    catch(e){
        console.log(e)
    }
}


const getCart = async (req, res) => {
    console.log('hola')
    try {
        const products = await cartController.getCart(req, res);
        return products;
    }
    catch(e){
        console.log(e)
    }
}

const purchase = async (req, res) => {
    try {
        const products = await cartController.purchase(req, res);
        return products;
    }
    catch(e){
        console.log(e)
    }
}

const history = async (req, res) => {
    try {
        const products = await cartController.history(req, res);
        return products;
    }
    catch(e){
        console.log(e)
    }
}

export {
    addToCart,
    deleteFromCart,
    getCart,
    purchase,
    history,
}

export default {
    addToCart,
    deleteFromCart,
    getCart,
    purchase,
    history,
}