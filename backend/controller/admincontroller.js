import DoctorData from "../Models/doctor.js"
import LoginData from "../Models/login.js"
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


export const deletedoctor=async(req,res)=>{
    try{
        const {id}=req.params
        // console.log(id)
        const doctor=await DoctorData.findByIdAndDelete(id)
        return res.status(200).json({
            message:"deleted successfully"
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

export const toggleShopStatus =async(req,res)=>{
    const {id}=req.params
        const {status}=req.body
        console.log(id,status)
    try{
        

        const toggleStatus =await LoginData.findByIdAndUpdate(id,{status})
            return res.status(200).json({
            message:"Staus Updated successfully",
            toggleStatus
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