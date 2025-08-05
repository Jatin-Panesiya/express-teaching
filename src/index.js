import express from "express"
import cors from "cors"
import { getUsers } from "./controllers/user.controller.js";
import { getProducts } from "./controllers/product.controller.js";

const app = express();
app.use(cors());

const PORT = 8000;

app.get('/get-users', getUsers)
app.get('/get-products', getProducts)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
});