import mongoose,{ Schema } from "mongoose";

const sellerSchema=new Schema({
   
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
     gender:{
        type:Number,
        required:true,
     },
    email:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    
    
})
const sellerData=mongoose.model("Seller",sellerSchema)
export default SellerData