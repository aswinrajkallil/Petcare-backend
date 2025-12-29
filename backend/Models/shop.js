import mongoose,{ Schema } from "mongoose";

const shopSchema=new Schema({
    
    shopname:{
        type:String,
        required:true,
    },
     owner:{
        type:String,
        required:true,
     },
    phone:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    commonkey:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Login"
    }

})
const ShopData=mongoose.model("Shop",shopSchema)
export default ShopData