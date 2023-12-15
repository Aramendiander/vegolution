import { Router } from "express";
import authController from "../controllers/auth/authController.js";

const router = Router();

router.post("/register", (req,res) => {
    authController.register(req,res)
})

router.post("/login", (req,res) => {
    authController.login(req,res)
})

router.post("/forgot-password", (req,res) => {
    authController.forgotPassword(req,res)
})

export default router;