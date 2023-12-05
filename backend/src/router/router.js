import { Router } from "express";
import productRouter from "./productRouter.js";

const router = Router();

/* router.use("/",authRouter); */

router.use("/product",productRouter);

export default router;