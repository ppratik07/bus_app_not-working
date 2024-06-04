import express from "express";
import { signIn } from "./zod/Signin";
import { register } from "./zod/Register";
import { PrismaClient, Prisma } from '@prisma/client'
const app = express();
const PORT = 3000;
app.use(express.json());

const prisma = new PrismaClient();


app.post('/register',async(req,res)=>{
    const {success} = signIn.safeParse(req.body);
    if(!success){
        res.status(411).json({
            message : "Please send correct inputs"
        })
    }
    //creating a new User
    const User = await prisma.user.create({
        data: {
          username : req.body.username,
          password: req.body.password,
          name: req.body.name,
        },
      });
})
app.post('/signin',(req,res)=>{
    const body = req.body.json();
})

app.listen(()=>{
    console.log(`app listening on ${PORT}`);
})