import express from "express"
import { getMe, login, register, verifyEmail } from "../controllers/auth.controller.js"
import { loginValidator, registerValidator } from "../validation/auth.validator.js"
import { authUser } from "../middlewares/auth.middleware.js"
const authRouter=express.Router();



authRouter.post("/register",...registerValidator, register)
authRouter.post("/login",...loginValidator,login)
authRouter.get("/get-me",authUser,getMe)
authRouter.get("/verify-email",verifyEmail)



export default authRouter;
