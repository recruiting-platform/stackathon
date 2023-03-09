const Sequelize = require("sequelize");
const db = require("../db");

const StudentAthlete = db.define("studentAthlete", {
  student_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone_number: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  high_school: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  grad_year: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  sport: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  notification_status: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  view_counter: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  eligibility_status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  intended_major: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  GPA: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  SAT: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  ACT: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  images: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: true,
  },
  video_link: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  athletic_achievements: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  other_interests: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  IHSA_NCAA_or_BOTH: {
    type: Sequelize.ENUM("IHSA", "NCAA", "BOTH"),
    allowNull: false,
  },
});

module.exports = StudentAthlete;
