import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
    origin:['https://localhost:3000','https://myapp.com'],
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}));
app.get('/api/test',(req,res)=>{
    res.send("API is working successfully");
})
mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("Connected to MongoDB"))
    .catch((err)=>console.log(err))
app.listen(3000);
