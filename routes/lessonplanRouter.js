import express from "express";

const lessonplanRouter = express.Router();

lessonplanRouter.post("/", lessonplanContoller);

export default lessonplanRouter;
