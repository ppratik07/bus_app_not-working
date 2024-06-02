import express from "express";
import { signIn } from "../zod/Signin";
import { register } from "../zod/Register";

const app = express();
const PORT = 3000;
app.use(express.json());

app.listen(()=>{
    console.log(`app listening on ${PORT}`);
})

app.post('/register',(req,res)=>{
    const body = req.body.json();
})
app.post('/signin',(req,res)=>{
    const body = req.body.json();
})