import { Router } from "express";
import { authUser } from "../middlewares/auth.middleware.js";
import {sendMessages, getChats, getMessages ,deleteChat} from "../controllers/chat.controller.js";

const chatRouter = Router();



chatRouter.post("/message", authUser, sendMessages);

chatRouter.get("/", authUser, getChats)

chatRouter.get("/:chatId/messages", authUser, getMessages)

chatRouter.delete("/delete/:chatId", authUser, deleteChat)

export default chatRouter