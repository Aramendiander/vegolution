/* import productModel from "../src/models/productModel.js";

describe("Tests de modelo de producto",() =>{
    const name = "producto1";
    const shortdescription = "descripcion corta";
    const longdescription = 'descripcion larga';
    const picture = "foto";
    const price = 50;

    test("Crear un producto nuevo",async ()=>{
        const createProduct = async (name,shortdescription,longdescription,picture,price) => {
            const newProduct = new productModel({
                name: name,
                shortdescription: shortdescription,
                longdescription: longdescription,
                picture: picture,
                price: price,
            });
    
            return await newProduct.save();
        };

        const product = await createProduct(name, shortdescription, longdescription, picture, price);
        expect(product).toHaveProperty("name");
        expect(product.name).toBe(name);
    }) 

    test("Conseguir todos los productos",async() =>{
        const createProduct = async (name,shortdescription,longdescription,picture,price) => {
            const newProduct = new productModel({
                name: name,
                shortdescription: shortdescription,
                longdescription: longdescription,
                picture: picture,
                price: price,
            });
    
            return await newProduct.save();
        };

        // Create some products
        await createProduct(name, shortdescription, longdescription, picture, price);
        await createProduct(name + '2', shortdescription, longdescription, picture, price);

        const products = await productModel.find();
        expect(products.length).toBeGreaterThan(0);
        expect(products[0]).toHaveProperty("name");
        expect(products[0]).toHaveProperty("shortdescription");
        expect(products[0]).toHaveProperty("longdescription");
        expect(products[0]).toHaveProperty("picture");
        expect(products[0]).toHaveProperty("price");
    })
})
    /* test("Conseguir un producto por ID", async () => {
        const producto = await productModel.findOne({
            where: {
                id: id
            }
        })
        expect(producto).not.toBeUndefined();
        expect(producto).not.toBeNull();
        expect(producto.title).toEqual(title);
        expect(producto.description).toEqual(description);
        expect(producto.picture).toEqual(picture);
        expect(producto.price).toEqual(price);
        expect(producto.id_category).toEqual(id_category);

    })

    test("Editar un producto por ID", async () => {
        const product = await productModel.findOne({
            where: {
                id: id
            }
        })
        product.title="Panchineta"
        product.description="esto está editado"
        product.picture="imagen"
        product.price=12
        product.id_category=1
        await product.save();
        const newProduct = await productModel.findOne({
            where: {
                id: id
            }
        })
        expect(newProduct).not.toBeUndefined();
        expect(newProduct).not.toBeNull();
        expect(newProduct.title).toEqual("Panchineta");
        expect(newProduct.description).toEqual("esto está editado");
        expect(newProduct.picture).toEqual("imagen");
        expect(newProduct.price).toEqual(12);
        expect(newProduct.id_category).toEqual(1);

    })
    
    test("Borrar producto por iD", async() => {
        await productModel.destroy({
            where: {
                id: id
            }
        });
        const oldProduct = await productModel.findOne({
            where: {
                id: id
            }
        });
        expect(oldProduct).toBeNull()
    })  */
 