import express from "express";
import cors from "cors";
import { createUser, getUsers } from "./controllers/user.controller.js";
import { getProducts } from "./controllers/product.controller.js";
import { connectDB } from "./config/connectDB.js";

const app = express();
app.use(cors());
connectDB();

const PORT = 8000;

app.get('/get-users', getUsers)
app.post('/create-user', createUser)
app.get('/get-products', getProducts)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
});