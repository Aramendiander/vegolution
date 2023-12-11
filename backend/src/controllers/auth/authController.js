import userModel from "../../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const register = async (req, res) => {

    const {email,username,password,confirmPassword} = req.body;
    const role = 'user';
    const reset = null;
    const cart = [];
    try {
        if(password !== confirmPassword) {
            return res.status(400).json({message:"Passwords don't match"});
        }
        let oldMail = await userModel.findOne({email});
        if(oldMail) {
            return res.status(400).json({message:"Mail already exists"});
        }
        let hashedPassword = await bcrypt.hash(password,12);
        const result = await userModel.create({email:email,username:username,password:hashedPassword,reset:reset,role:role,cart:cart});
        const token = jwt.sign({email:result.email},process.env.JWT_SECRET,{expiresIn:"24h"});
        res.status(200).json({email,token:token});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something went wrong"});
    }
}

const login = async (req, res) => {
    const {email,password} = req.body;
    try {
        let oldUser = await userModel.findOne({email});
        if(!oldUser) {
            return res.status(404).json({message:"User doesn't exist"});
        }
        let isPasswordCorrect = await bcrypt.compare(password,oldUser.password);
        if(!isPasswordCorrect) {
            return res.status(400).json({message:"Invalid credentials"});
        }
        const token = jwt.sign({email:oldUser.email,id:oldUser._id},process.env.JWT_SECRET,{expiresIn:"24h"});
        res.status(200).json({email,token:token});
    }
    catch (error) {
    }
}

export default{
    register,
    login
}