import LoginData from "../Models/login.js"
import bcrypt from "bcryptjs"
import userData from "../Models/user.js"
import ShopData from "../Models/shop.js"

export const regShop=async(req,res)=>{
    // console.log(req.body)
    const {name,ownerName,email,Phone,location,password}=req.body
    try{
        const exist=await LoginData.findOne({
            username:email
        })
        if(exist){
            return res.status(400).json({
                message:"user already exist",exist
            })
        }
        const hashedpassword=await bcrypt.hash(password,10)
        const login=await LoginData.create({
            username:email,
            password:hashedpassword,
            role:"shop"
        })
        const user=await ShopData.create({
            shopname:name,
            owner:ownerName,
            phone:Phone,
            city:location,
            email,
            commonkey:login._id
        })
        return res.status(200).json({
            message:"user regisytered successfully",
            user
        })

    }
    catch(e){
        console.log(e)
        return res.status(500).json({
            message:"server error",
           e
        })
    }
}