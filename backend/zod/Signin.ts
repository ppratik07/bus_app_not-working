import zod from "zod";

export const signIn = zod.object({
    username : zod.string().email(),
    password : zod.string().min(8)
})

module.exports={
    signIn,
}