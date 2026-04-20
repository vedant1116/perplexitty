import userModel from "../models/user.model.js"
import jwt from "jsonwebtoken";
import { sendEmail } from "../services/mail.service.js";

import dotenv from "dotenv";
dotenv.config()

export async function  register(req,res){
const {username,email,password} = req.body;

const isAlreadyExist = await userModel.findOne({
    $or:[{email},{username}]
})

if(isAlreadyExist){
    return res.status(400).json({
        message:"User with this email or username already exists",
        success:false,
        err:"User already exists"
    })
}

const user = await userModel.create({
    username,email,password
})
 
await sendEmail({
    to:email,
    subject:"Welcome to perplexity!",
     html: `
                <p>Hi ${username},</p>
                <p>Thank you for registering at <strong>Perplexity</strong>. We're excited to have you on board!</p>
                <p>Best regards,<br>The Perplexity Team</p>
        `
          
})

 res.status(201).json({     
    message:"User registered successfully",
    success:true,
    user
 })

}
