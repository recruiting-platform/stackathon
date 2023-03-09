const express = require("express");
const router = express.Router();
const StudentAthlete = require("../models/studentAthlete");

// GET /student-athletes - get all student-athletes
router.get("/", async (req, res, next) => {
  try {
    const studentAthletes = await StudentAthlete.findAll();
    res.json(studentAthletes);
  } catch (error) {
    next(error);
  }
});

// GET /student-athletes/:id - get a student-athlete by ID
router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const studentAthlete = await StudentAthlete.findByPk(id);
    if (studentAthlete) {
      res.json(studentAthlete);
    } else {
      res
        .status(404)
        .json({ message: `Student-athlete with ID ${id} not found` });
    }
  } catch (error) {
    next(error);
  }
});

// POST /student-athletes - create a new student-athlete
router.post("/", async (req, res, next) => {
  const { first_name, last_name, email, sport, recruiting_status } = req.body;
  try {
    const studentAthlete = await StudentAthlete.create({
      first_name,
      last_name,
      email,
      sport,
      recruiting_status,
    });
    res.status(201).json(studentAthlete);
  } catch (error) {
    next(error);
  }
});

// PUT /student-athletes/:id - update a student-athlete by ID
router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const { first_name, last_name, email, sport, recruiting_status } = req.body;
  try {
    const studentAthlete = await StudentAthlete.findByPk(id);
    if (studentAthlete) {
      await studentAthlete.update({
        first_name,
        last_name,
        email,
        sport,
        recruiting_status,
      });
      res.json(studentAthlete);
    } else {
      res
        .status(404)
        .json({ message: `Student-athlete with ID ${id} not found` });
    }
  } catch (error) {
    next(error);
  }
});

// DELETE /student-athletes/:id - delete a student-athlete by ID
router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const studentAthlete = await StudentAthlete.findByPk(id);
    if (studentAthlete) {
      await studentAthlete.destroy();
      res.json({ message: `Student-athlete with ID ${id} deleted` });
    } else {
      res
        .status(404)
        .json({ message: `Student-athlete with ID ${id} not found` });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
