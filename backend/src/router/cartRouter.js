import express from "express";
import cartViewController from "../controllers/cart/cartViewController.js";

const router = express.Router();

router.post("/add-to-cart", cartViewController.addToCart);
router.delete("/delete-from-cart/:userId/:productId", cartViewController.deleteFromCart);

export default router;