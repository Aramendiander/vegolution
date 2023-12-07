import express from "express";
import cartController from "../controllers/cartController";

const router = express.Router();

router.post("/add-to-cart", cartController.addToCart);
router.delete("/delete-from-cart/:userId/:productId", cartController.deleteFromCart);

export default router;