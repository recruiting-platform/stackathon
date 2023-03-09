const router = require("express").Router();
module.exports = router;

router.use("/users", require("./users"));
router.use("/coaches", require("./coachRoutes")); // routes for coaches feature
router.use("/student-athletes", require("./studentAthleteRoutes")); // routes for student-athletes feature

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
