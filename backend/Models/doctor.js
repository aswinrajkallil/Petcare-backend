import mongoose,{ Schema } from "mongoose";

const doctorSchema=new Schema({
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
     age:{
        type:Number,
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

})
const DoctorData=mongoose.model("Doctor",doctorSchema)
export default DoctorData