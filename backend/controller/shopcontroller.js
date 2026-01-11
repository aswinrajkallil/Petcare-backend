import ProductData from "../Models/product.js";
import ShopData from "../Models/shop.js";

export const addproduct=async(req,res)=>{
    try{
// console.log(req.body,req.file.path);
const {id}=req.params
const {name,desc,price,qty,unit}=req.body
const filepath=req.file.path

const shop=await ShopData.findOne({commonkey:id})
// console.log(shop);
if(!shop){
            return res.status(400).json({
                message:"shop not found"
            })
        }


const newproduct=await ProductData.create({
shopid:shop._id,
productname:name,
description:desc,
price,
quantity:qty,
unit,
image:filepath

})
return res.status(200).json({
            message:"user regisytered successfully",
            newproduct
        })

    }catch(e){
console.log(e);
return res.status(500).json({
            message:"server error",
           e
        })
    }
}

export const getproduct=async(req,res)=>{
    const {id} = req.params
    try{

    const shop=await ShopData.findOne({commonkey:id})
    if(!shop){
            return res.status(400).json({
                message:"shop not found"
            })
        }
    const products = await ProductData.find({shopid:shop._id})
    return res.status(200).json({
            message:"user regisytered successfully",
            products
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

export const editproductdetails=async(req,res)=>{
    try{
        const {id}=req.params
        const pdetails=await ProductData.findById(id)
            return res.status(200).json({
            message:"user regisytered successfully",
            pdetails
        })

    }
    catch(e){
        console.log(e);
             return res.status(500).json({
            message:"server error",
           e
        })
        
    }

}

export const updatproduct=async(req,res)=>{
    try{
        const {id}=req.params
        if(!id){
            return res.status(400).json({
                message:"id not found"
            })
        }
        const {productname,description,price,quantity,unit}=req.body
        const update=await ProductData.findByIdAndUpdate(id,{
            productname,
            description,
            price,
            quantity,
            unit,
            image:req.file?.path,
            
        })
        return res.status(200).json({
            message:"Successful",
            update
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

export const deleteproduct=async(req,res)=>{
    try{
        const {id}=req.params
            const pdetails=await ProductData.findByIdAndDelete(id)
            return res.status(200).json({
            message:"Delete successfully",
            
        })        
        }

    
    catch(e){
        console.log(e);
             return res.status(500).json({
            message:"server error",
           e
        })
        
    }

}
