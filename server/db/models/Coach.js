const Sequelize = require("sequelize");
const db = require("../db");

const Coach = db.define("coach", {
  coach_id: {
    type: DataTypes.INTEGER,
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
  school_email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone_number: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sport: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  recruiting_status: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = Coach;
