import express, { json } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
// import { v4 as uuid } from "uuid";

import { Connection } from "./Database/db.js";
import DefaultData from "./default.js";
import Routes from "./routes/routes.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;

// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;

Connection();
app.use(json());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", Routes);

app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);
DefaultData();
