import dotenv from "dotenv"
dotenv.config()
import app from "./src/app.js"
import connectToDb from "./src/config/database.js"
import { testAi } from "./src/services/ai.service.js"

app.listen(3000,()=>{
    console.log("server started running on port 3000")
})

connectToDb()

testAi()