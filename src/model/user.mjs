import mongoose, { model } from "mongoose";

const userSchema=new mongoose.Schema({
    name:String,
    username:String,
    password:String,
    email:String
});

const User = model("User", userSchema);
export default User;