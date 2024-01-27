import express from "express";
import cors from "cors";
import config from "./utils/config.js";
import mongoose from "mongoose";
import teacherRouter from "./routes/teacherRouter.js";
import loginRouter from "./routes/loginRouter.js";

const app = express();

const connectToDatabase = async () => {
  await mongoose.connect(config.MONGODB, console.log("Connected to database"));
};
connectToDatabase();

app.use(express.json());
app.use(cors());
app.use(express.static("dist"));
app.use("/api/teachers", teacherRouter);
app.use("/api/teachers/login", loginRouter);
export default app;
