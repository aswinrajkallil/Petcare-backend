import DoctorData from "../Models/doctor.js"
import ShopData from "../Models/shop.js"

export const allshop=async(req,res)=>{
    try{
        const shops=await ShopData.find().sort({createdAt:-1})
        // console.log(shops);
          return res.status(200).json({
            message:"shop fetched successfully",
            shops
        })
        
    }catch(e){
         console.log(e)
        return res.status(500).json({
            message:"server error",
           e
        })
    }
}


export const alldoctor=async(req,res)=>{
    try{
        const doctor=await DoctorData.find().sort({createdAt:-1})
        // console.log(shops);
          return res.status(200).json({
            message:"doctors fetched successfully",
            doctor
        }
    )
    }catch(e){
        console.log(e)
        return res.status(500).json({
            message:"server error",
           e
        })
    }
}