import express from "express"
import { register } from "../controllers/auth.controller.js"
import { registerValidator } from "../validation/auth.validator.js"
const authRouter=express.Router();


/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 * @body { username, email, password }
 */
authRouter.post("/register", ...registerValidator, register)



export default authRouter;