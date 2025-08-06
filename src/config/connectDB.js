import mongoose from "mongoose"

const MONGO_DB_URI = 'mongodb://127.0.0.1:27017/test1'

export async function connectDB() {
    try {
        await mongoose.connect(MONGO_DB_URI)
        console.log("MongoDB Connected")
    } catch (error) {
        console.log("Error while connecting Database", error.message)
    }
}
