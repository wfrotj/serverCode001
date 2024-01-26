import Teacher from "../model/Teacher.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find({});
    res.status(200).json(teachers);
  } catch (error) {
    console.log(error);
  }
};

const createTeacher = async (req, res) => {
  try {
    const {
      username,
      firstName,
      lastName,
      middleInitial,
      age,
      employeeNumber,
      depEdEmail,
      password,
    } = req.body;

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const teacher = new Teacher({
      username,
      firstName,
      lastName,
      middleInitial,
      age,
      employeeNumber,
      depEdEmail,
      passwordHash,
    });

    if (
      !firstName ||
      !lastName ||
      !middleInitial ||
      !age ||
      !employeeNumber ||
      !depEdEmail ||
      !password
    ) {
      return res.status(400).json({ error: "Content is missing" });
    }

    const teacherExists = await Teacher.findOne({
      firstName,
      lastName,
      employeeNumber,
      depEdEmail,
    });
    if (teacherExists) {
      return res
        .status(400)
        .json({ error: "username or name is already used." });
    }

    const savedTeacher = await teacher.save();
    res.status(200).json(savedTeacher);
  } catch (error) {
    console.log(error);
  }
};

export default {
  createTeacher,
  getAllTeachers,
};
