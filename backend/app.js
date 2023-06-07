import houses from "./routes/houses.js";
import mongoDB from "./db.js";
import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
const app = express();

app.use(cors());

dotenv.config();
mongoDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.use(express.json());

app.use("/api/houses", houses);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
