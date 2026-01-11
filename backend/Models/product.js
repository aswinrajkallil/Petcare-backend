import mongoose,{ Schema } from "mongoose";

const productSchema=new Schema({
    shopid:{
        type:Schema.Types.ObjectId,
        ref:"Shop",
    },
    productname:{
        type:String,
        required:true,
    },
     description:{
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
    unit:{
        type:String,
        required:true,
    },
    image:{
        type:String
    }

},
)
const ProductData=mongoose.model("Product",productSchema)
export default ProductData