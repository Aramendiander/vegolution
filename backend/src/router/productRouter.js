import { Router } from "express";

import productViewController from "../controllers/products/productViewController.js";
import adminController from "../controllers/admin/adminController.js";
import adminViewController from "../controllers/admin/adminViewController.js";

const router = Router();


 router.get("/:name", async (req,res) => {
    const product = await productViewController.getSingleProduct(req,res)
    res.json(product)
 })

 router.post("/create", async (req,res) => {
   const product = await adminViewController.createProduct(req,res)
   res.json(product)
})

router.put("/edit", async (req,res) => {
   const product = await adminViewController.editProduct(req,res)
   res.json(product)
})

router.delete("/delete", async (req,res) => {
   await adminViewController.removeProduct(req,res)
   res.status(200).json("Product successfully deleted")
})


 export default router;