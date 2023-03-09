const Sequelize = require("sequelize");
const db = require("../db");

const School = db.define("school", {
  school_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  school_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ihsa_or_ncaa: {
    type: Sequelize.ENUM("IHSA", "NCAA"),
    allowNull: false,
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  championships_and_awards: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  recommended_gpa: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  recommended_sat: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  recommended_act: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
});

module.exports = School;
