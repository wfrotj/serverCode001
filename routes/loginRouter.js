/* eslint-disable linebreak-style */
import express from "express";
import loginController from "../controllers/loginController.js";

const loginRouter = express.Router();

loginRouter.post("/", loginController.login);
// loginRouter.post("/masterteacher", loginController.mtlogin);

export default loginRouter;
