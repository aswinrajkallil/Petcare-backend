import express from "express"
import { alldoctor, allshop } from "../controller/admincontroller.js"
const adminrouter=express.Router()
adminrouter.get("/viewallShop",allshop)
adminrouter.get("/viewalldoctors",alldoctor)



export default adminrouter