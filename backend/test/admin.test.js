import adminController from "../src/controllers/admin/adminController.js";
import productController from "../src/controllers/products/productController.js";
import connection from "../src/config/mongodb.js";



describe("Tests de modelo de producto",() =>{
    let id = null;

    test("Crear un producto nuevo",async ()=>{
        const name = "producttest";
        const shortdescription = "short test";
        const longdescription = 'long test long test long test';
        const picture = "test picture";
        const price = 999;
        const category = ['test'];
        try {
            const product = await adminController.createProduct(name, shortdescription, longdescription, picture, price, category);
            id = product._id;
            expect(product).toHaveProperty("name");
            expect(product.name).toBe(name);
            expect(product).toHaveProperty("shortdescription");
            expect(product.shortdescription).toBe(shortdescription);
            expect(product).toHaveProperty("longdescription");
            expect(product.longdescription).toBe(longdescription);
            expect(product).toHaveProperty("picture");
            expect(product.picture).toBe(picture);
            expect(product).toHaveProperty("price");
            expect(product.price).toBe(price);
            expect(product).toHaveProperty("category");
        }
        catch(e){
            console.log(e)
        }
    }) 


    test("editar un producto",async ()=>{
        const newname = "new name";
        const newshortdescription = "new short description";
        const newlongdescription = 'new long description';
        const newpicture = "new picture";
        const newprice = 888;
        const newcategory = ['new test'];
        try {
            const product = await adminController.editProduct(id, newname, newshortdescription, newlongdescription, newpicture, newprice, newcategory);
            expect(product).toHaveProperty("name");
            expect(product.name).toBe(newname);
            expect(product).toHaveProperty("shortdescription");
            expect(product.shortdescription).toBe(newshortdescription);
            expect(product).toHaveProperty("longdescription");
            expect(product.longdescription).toBe(newlongdescription);
            expect(product).toHaveProperty("picture");
            expect(product.picture).toBe(newpicture);
            expect(product).toHaveProperty("price");
            expect(product.price).toBe(newprice);
            expect(product).toHaveProperty("category");
        }
        catch(e){
            console.log(e)
        }
    }) 

    test("eliminar un producto",async ()=>{
        const product = await adminController.removeProduct(id);
        const deletedProduct = await productController.getProductById(id);
        expect(deletedProduct).toBe(null);
    })

})
