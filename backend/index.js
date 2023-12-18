import express from "express";
import mongodb from "./src/config/mongodb.js";
import dotenv from "dotenv";
import session from "express-session";
import productViewController from "./src/controllers/products/productViewController.js"
import router from "./src/router/router.js";
import cors from "cors";

dotenv.config();
const app = express();


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
    cookie: {
        secure:false,
        maxAge: 1000 * 60 * 20
    }
}))


app.use(cors({
    origin:"http://localhost:5173",
    credentials: true,
}))

const productos = async () => {
    const products = await productViewController.getLastProducts();
    return products;
}


app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", async (req,res)=>{
    const products = await productos()
    res.json(products)
});

app.use("/",router);

app.listen(3000,()=>{
    console.log("servidor en marcha en el puerto 3006");
});
