"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signIn = zod_1.default.object({
    username: zod_1.default.string().email(),
    password: zod_1.default.string().min(8)
});
module.exports = {
    signIn: exports.signIn,
};
