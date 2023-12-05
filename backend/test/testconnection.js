import connection from '../src/config/mongodb.js';
import productModel from '../src/models/productModel.js';


const findProducts = async () => {
    const products = await productModel.find({name: 'Heura no pollo'});
    console.log(products);
    return products;
}

findProducts();