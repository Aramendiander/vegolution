import { Router } from "express";
import productRouter from "./productRouter.js";
import authRouter from "./authRouter.js";

const router = Router();

router.use("/",authRouter);

router.use("/product",productRouter);

export default router;