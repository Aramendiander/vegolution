import { Router } from "express";
import productRouter from "./productRouter.js";
import authRouter from "./authRouter.js";
import cartRouter from "./cartRouter.js";
import categoryRouter from "./categoryRouter.js";
import adminRouter from "./adminRouter.js";
import { isAuthenticatedApi } from "../middlewares/authMiddleware.js";

const router = Router();

router.use("/",authRouter);

router.use("/cart", isAuthenticatedApi ,cartRouter);

router.use("/product",productRouter);

router.use("/category",categoryRouter);

router.use("/admin",adminRouter);

export default router;