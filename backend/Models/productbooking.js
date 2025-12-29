import mongoose,{ Schema } from "mongoose";

const productbookingSchema=new Schema({
    userid:{
        type:Schema.Types.ObjectId,
        ref:"Shop",
    },
    productname:{
        type:String,
        required:true,
    },
     category:{
        type:String,
        required:true,
     },
    price:{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },

})
const ProductbookingData=mongoose.model("Productbooking",productbookingSchema)
export default ProductbookingData