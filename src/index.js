import dotenv from "dotenv";
import express from "express";
import { getTodos } from "./db.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "It works now?" });
});

app.get("/todos", getTodos);

app.listen(port, () => console.log(`Running on port ${port}`));
