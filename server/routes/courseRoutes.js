import express from "express";
import {
  createCourse,
  getAllCourses,
} from "../controllers/courseController.js";

const router = express.Router();
// Get all course without lecture
router.route("/courses").get(getAllCourses);

//create new course only admin
router.route("/createcourse").post(createCourse);

//add lecture ,delete course  , get course detail
//deletelecture

export default router;
