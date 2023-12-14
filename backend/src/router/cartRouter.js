import express from "express";
import cartViewController from "../controllers/cart/cartViewController.js";
import { isAuthenticatedApi, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", cartViewController.getCart);
router.post("/add-to-cart", cartViewController.addToCart);
router.delete("/delete-from-cart", cartViewController.deleteFromCart);
router.post("/purchase", cartViewController.purchase);
router.get("/history", cartViewController.history);

export default router;