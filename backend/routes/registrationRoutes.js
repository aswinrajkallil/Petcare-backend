import express from "express"
import { regShop } from "../controller/registrationController.js"

const registrationRouter=express.Router()

registrationRouter.post("/shop",regShop)
export default registrationRouter