import express from "express";
import cors from "cors";
import { createUser, deleteUser, getUsers, updateUser } from "./controllers/user.controller.js";
import { getProducts } from "./controllers/product.controller.js";
import { connectDB } from "./config/connectDB.js";

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

const PORT = 8000;

app.get('/get-users', getUsers)
app.post('/create-user', createUser)
app.get('/get-products', getProducts)
app.delete('/delete-user/:id', deleteUser)
app.put('/update-user/:id', updateUser)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
});