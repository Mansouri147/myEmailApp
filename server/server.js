import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Requests from "../requests/requests";
import instance from "../Models/dbModel";

dotenv.config();
const myEmailDBPass = process.env.myEmailDBPass;
const databaseName = process.env.databaseName;

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const connection_url = `mongodb+srv://admin:${myEmailDBPass}@cluster0.qea80.mongodb.net/${databaseName}?retryWrites=true&w=majority`;
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.static("files"));

mongoose.connection.once("open", () => {
  console.log("DB Connected");
});

<Requests />;

app.listen(port, () => console.log("Server is running on Port: " + PORT));