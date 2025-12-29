import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import registrationRouter from "./routes/registrationRoutes.js";
mongoose.connect("mongodb://127.0.0.1:27017/Petcare")
.then(()=>{
    console.log("mongodb connected succesfully");
})
.catch((e)=>{
    console.log(e);
})
const app=express()
app.use(express.json())
app.use(cors({orgin:'*'}))
app.listen(8000,()=>{console.log("server started on post 8000")})

app.use("/api/register",registrationRouter)