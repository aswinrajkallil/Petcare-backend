import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import loginrouter from "./routes/loginrouter.js";
import adminrouter from "./routes/adminrouter.js";
import registrationRouter from "./routes/registrationRoutes.js";
import shopRouter from "./routes/shoprouter.js";
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
app.use("/api/login",loginrouter)
app.use("/api/admin",adminrouter)
app.use("/api/shop", shopRouter)




app.use("/uploads",express.static("uploads"))
