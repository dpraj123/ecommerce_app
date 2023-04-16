import express from "express";
import color from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/database.js";
//configure ENV
dotenv.config();

//database config
connectDB();

//--------
const app = express();
// middlewares
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  // res.send({ message: "Welcome to ecommerce_app BACKEND" });
  //-----also res Html element
  res.send("<h1>Welcome to ecommerce_app BACKEND</h1>");
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server Running on ${PORT}`.bgWhite.black);
});
