import mongoose,{ Schema } from "mongoose";

const loginSchema=new Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{type:String},
    status:{
        type:Boolean,
        default:true,
    }
})
const LoginData=mongoose.model("Login",loginSchema)
export default LoginData