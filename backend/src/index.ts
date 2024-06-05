import express from "express";
import { signIn } from "./zod/Signin";
import { register } from "./zod/Register";
import { PrismaClient, Prisma } from "@prisma/client";
const app = express();
const PORT = 3000;
const jwt = require("jsonwebtoken");
app.use(express.json());

const prisma = new PrismaClient();

app.post("/register", async (req, res) => {
  // const {username,password,name} = req.body.json();
  // const {success} = register.safeParse(body);
  // if(!success){
  //     res.status(411).json({
  //         message : "Please send correct inputs"
  //     })
  // }
  //creating a new User
//   const parsedBody = register.parse(req.body);
//   const { username, password, name } = parsedBody;

//   const user = await prisma.user.create({
//     data: {
//       username,
//       password,
//       name,
//     },
//   });

//   //creating jwt
//   const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET);
//   return res.json({
//     message: "User created successfully",
//     jwt: token,
//   });
const users = [];
const parsedBody = register.parse(req.body);
const { username, password, name } = parsedBody;

const newUser = {
    id: users.length + 1,
    username,
    password,
    name
  };
  users.push(newUser);
  return res.json({
    message: "User created successfully",
  });
});
app.post("/signin", (req, res) => {
  const body = req.body.json();
});

app.listen(() => {
  console.log(`app listening on ${PORT}`);
});
