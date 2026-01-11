import express from "express"
import { addproduct, deleteproduct, editproductdetails, getproduct, updatproduct } from "../controller/shopcontroller.js"
import { upload } from "../middleware/multter.js"

const shopRouter=express.Router()
shopRouter.post("/addproduct/:id",upload.single("image"),addproduct)
shopRouter.get("/manageproducts/:id",getproduct)
shopRouter.get("/editpdetails/:id",editproductdetails)
shopRouter.put("/updateproduct/:id",upload.single("image"),updatproduct)
shopRouter.delete("/deleteproduct/:id",deleteproduct)
export default shopRouter