import express from "express";
import cartViewController from "../controllers/cart/cartViewController.js";
import { isAuthenticatedApi, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", isAuthenticatedApi, cartViewController.getCart);
router.post("/add-to-cart", isAuthenticatedApi, cartViewController.addToCart);
router.delete("/delete-from-cart", isAuthenticatedApi, cartViewController.deleteFromCart);
router.post("/purchase", isAuthenticatedApi, cartViewController.purchase);
router.get("/history", isAuthenticatedApi, cartViewController.history);

export default router;