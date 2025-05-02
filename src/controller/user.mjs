import User from "../model/user.mjs"

export const getUser=async (req,res) => {
    const user= await User.find();
    res.json(user)
}

export const createUser=async (req,res) => {
    const user= new User(req.body);
    await user.save();
    res.status(201).json(user)
}