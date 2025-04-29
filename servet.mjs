import express,{ json } from "express"
import "dotenv/config"

console.log(process.env.MONGODB_URI);

const server=express()
const PORT=process.env.PORT||4001
server.use(json())

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})  
