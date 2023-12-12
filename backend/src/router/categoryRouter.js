import { Router } from "express";

import productViewController from "../controllers/products/productViewController.js";

const router = Router();

router.get("/:category", async (req,res) => {
    const product = await productViewController.getByCategory(req,res)
    res.json(product)
 })


 export default router;