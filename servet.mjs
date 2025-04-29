import express,{ json } from "express"
import "dotenv/config"
import connectdb from "./src/model/user.mjs";

console.log(process.env.MONGODB_URI);

const server=express()
const PORT=process.env.PORT||4001
server.use(json())



connectdb.then(()=>{
    console.log("Connected to MongoDB")
    server.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    })  
})
.catch((err)=>{
    console.log("Error connecting to MongoDB",err)
}
)
