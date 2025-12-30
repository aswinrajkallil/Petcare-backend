import LoginData from "../Models/login.js"
import bcrypt from "bcryptjs"
import userData from "../Models/user.js"
import ShopData from "../Models/shop.js"
import DoctorData from "../Models/doctor.js"

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

export const regDoctor=async(req,res)=>{
    const {name,email,Phone,qualification,experience,license,clinicName,clinicAddress,password,image}=req.body
    // console.log(req.body,"bodyyyyyyyyyyyyy", req.file.path,"filee pathhh");
    
     try{
        const exist=await LoginData.findOne({
            username:email
        })
        if(exist){
            return res.status(400).json({
                message:"user already exist",exist
            })
        }
        const filepath = req.file?.path || req.file.path
        const hashedpassword=await bcrypt.hash(password,10)
        const login=await LoginData.create({
            username:email,
            password:hashedpassword,
            role:"doctor"
        })
        const user=await DoctorData.create({
            name:name,
            phone:Phone,
            email,
            qualification,
            experience,
            licenseno:license,
            clinicname:clinicName,
            clinicaddress:clinicAddress,
            image:filepath,

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