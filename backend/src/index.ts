import express from "express";
import { signIn } from "./zod/Signin";
import { register } from "./zod/Register";

const app = express();
const PORT = 3000;
app.use(express.json());

app.listen(()=>{
    console.log(`app listening on ${PORT}`);
})

app.post('/register',async(req,res)=>{
    const body = await req.body.json();
    const {success} = signIn.safeParse(body);
    if(!success){
        res.status(411).send({
            message : "Please send correct inputs"
        })
    } 
})
app.post('/signin',(req,res)=>{
    const body = req.body.json();
})