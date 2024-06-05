"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Register_1 = require("./zod/Register");
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const PORT = 3000;
const jwt = require("jsonwebtoken");
app.use(express_1.default.json());
const prisma = new client_1.PrismaClient();
app.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    const parsedBody = Register_1.register.parse(req.body);
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
}));
app.post("/signin", (req, res) => {
    const body = req.body.json();
});
app.listen(() => {
    console.log(`app listening on ${PORT}`);
});
