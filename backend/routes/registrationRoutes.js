import express from "express"
import { regDoctor, regShop } from "../controller/registrationController.js"
import { upload } from "../middleware/multter.js"

const registrationRouter=express.Router()

registrationRouter.post("/shop",regShop)
registrationRouter.post("/doctor",upload.single("image"),regDoctor)
export default registrationRouter

