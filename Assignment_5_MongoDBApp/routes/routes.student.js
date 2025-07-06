/**
 * This file contains all the routing information for students
 */
const express = require("express");
const student_model = require("../models/model.student");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const students = await student_model.find();
    res.json(students);
  } catch (err) {
    console.log("Error in getting data : ", err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const student = await student_model.findById(req.params.id);
    res.json(student);
  } catch (err) {
    console.log("Error in getting data : ", err);
  }
});

router.post("/", async (req, res) => {
  const student = new student_model({
    name: req.body.name,
    age: req.body.age,
    course: req.body.course,
  });
  try {
    const s1 = await student.save();
    res.json(s1);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const student = await student_model.findById(req.params.id);

    if (!student) {
      return res.json("Student not found");
    }

    // Check the incoming request body, not the existing student
    if (req.body.name !== undefined) {
      student.name = req.body.name;
    }

    if (req.body.course !== undefined) {
      student.course = req.body.course;
    }

    if (req.body.age !== undefined) {
      student.age = req.body.age;
    }

    const s1 = await student.save();
    res.json(s1);
  } catch (err) {
    res.send("Error: " + err);
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const student = await student_model.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.json({ message: "Student not found" });
    }
    res.json({ message: "Student deleted successfully", student });
  } catch (err) {
    console.error("Error deleting student:", err);
    res.json({ message: "Internal server error" });
  }
});

module.exports = router;
