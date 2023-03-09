const express = require("express");
const router = express.Router();
const Coach = require("../models/coach");

// GET /coaches - get all coaches
router.get("/", async (req, res, next) => {
  try {
    const coaches = await Coach.findAll();
    res.json(coaches);
  } catch (error) {
    next(error);
  }
});

// GET /coaches/:id - get a coach by ID
router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const coach = await Coach.findByPk(id);
    if (coach) {
      res.json(coach);
    } else {
      res.status(404).json({ message: `Coach with ID ${id} not found` });
    }
  } catch (error) {
    next(error);
  }
});

// POST /coaches - create a new coach
router.post("/", async (req, res, next) => {
  const {
    first_name,
    last_name,
    school_email,
    phone_number,
    sport,
    recruiting_status,
  } = req.body;
  try {
    const coach = await Coach.create({
      first_name,
      last_name,
      school_email,
      phone_number,
      sport,
      recruiting_status,
    });
    res.status(201).json(coach);
  } catch (error) {
    next(error);
  }
});

// PUT /coaches/:id - update a coach by ID
router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const {
    first_name,
    last_name,
    school_email,
    phone_number,
    sport,
    recruiting_status,
  } = req.body;
  try {
    const coach = await Coach.findByPk(id);
    if (coach) {
      await coach.update({
        first_name,
        last_name,
        school_email,
        phone_number,
        sport,
        recruiting_status,
      });
      res.json(coach);
    } else {
      res.status(404).json({ message: `Coach with ID ${id} not found` });
    }
  } catch (error) {
    next(error);
  }
});

// DELETE /coaches/:id - delete a coach by ID
router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const coach = await Coach.findByPk(id);
    if (coach) {
      await coach.destroy();
      res.json({ message: `Coach with ID ${id} deleted` });
    } else {
      res.status(404).json({ message: `Coach with ID ${id} not found` });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
