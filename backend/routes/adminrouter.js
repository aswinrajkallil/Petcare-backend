import express from "express"
import { alldoctor, allshop, deletedoctor, toggleShopStatus } from "../controller/admincontroller.js"
const adminrouter=express.Router()
adminrouter.get("/viewallShop",allshop)
adminrouter.get("/viewalldoctors",alldoctor)
adminrouter.delete("/delete/doctor/:id",deletedoctor)
adminrouter.put("/changestatus/:id",toggleShopStatus)



export default adminrouter