import { Router } from "express";

import productViewController from "../controllers/products/productViewController.js";

const router = Router();

router.get("/:name", async (req,res) => {
    const product = await productViewController.getSingleProduct(req,res)
    console.log(product)
    res.json(product)
 })


 export default router;