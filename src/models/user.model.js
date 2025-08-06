import { model, Schema } from "mongoose";

const userSchema = Schema(
    {
        username: String,
        password: String,
        mobile: Number
    }
)

export const user = model('user', userSchema)