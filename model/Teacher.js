import mongoose, { plugin } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const teacherSchema = new mongoose.Schema({
  username: String,
  passwordHash: String,
  firstName: String,
  lastName: String,
  middleInitial: String,
  age: Number,
  employeeNumber: String,
  depEdEmail: String,
  gender: String,
  gradeLevel: String,
  education: {
    highestDegree: String,
    school: String,
    major: String,
  },
});
teacherSchema.plugin(uniqueValidator);
const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;
