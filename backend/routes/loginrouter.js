import express from "express"
import { login } from "../controller/logincontroller.js"
const loginrouter=express.Router()
loginrouter.post("/",login)

export default loginrouter