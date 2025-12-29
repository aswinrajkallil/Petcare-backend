import mongoose,{ Schema } from "mongoose";

const userSchema=new Schema({
    username:{
        type:String,
        required:true,
    },
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
const userData=mongoose.model("User",userSchema)
export default userData