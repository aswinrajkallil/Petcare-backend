import mongoose,{ Schema } from "mongoose";

const doctorSchema=new Schema({

    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
     email:{
        type:String,
        required:true,
     },
    qualification:{
        type:String,
        required:true,
    },
    experience:{
        type:Number,
        required:true,
    },
    licenseno:{
        type:String,
        required:true,
    },
    clinicname:{
        type:String,
        required:true,
    },
    clinicaddress:{
        type:String,
        required:true,
    },
    image:{
        type:String,
    },
    commonkey:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Login"
    }

})
const DoctorData=mongoose.model("Doctor",doctorSchema)
export default DoctorData