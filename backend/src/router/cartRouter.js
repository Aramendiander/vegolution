import express from "express";
import cartViewController from "../controllers/cart/cartViewController.js";

const router = express.Router();

router.post("/", cartViewController.getCart);
router.post("/add-to-cart", cartViewController.addToCart);
router.delete("/delete-from-cart", cartViewController.deleteFromCart);

export default router;