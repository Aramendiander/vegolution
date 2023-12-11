import { Router } from "express";
import productRouter from "./productRouter.js";
import authRouter from "./authRouter.js";
import cartRouter from "./cartRouter.js";

const router = Router();

router.use("/",authRouter);

router.use("/cart",cartRouter);

router.use("/product",productRouter);

export default router;