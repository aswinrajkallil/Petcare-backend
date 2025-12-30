import LoginData from "../Models/login.js"
import bcrypt from "bcryptjs"

export const login=async(req,res)=>{
    // console.log(req.body)
    try{
        const {username,password}=req.body
        const user=await LoginData.findOne({username})
        if(!user){
            return res.status(400).json({
                message:"username is incorrect"
            })
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({
                message:"Password is incorrect"
            })
        }
        return res.status(200).json({
            message:"login successful",
            username:user.username,
            role:user.role,
            verfied:user.status,
            loginId:user._id
        })
    }
    catch(e){
        console.log(e);
        
        return res.status(500).json({
            message:"sserver error"
        })
    }
}