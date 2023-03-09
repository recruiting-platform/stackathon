const Sequelize = require("sequelize");
const db = require("../db");

const Payment = db.define("payment", {
  payment_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  payment_amount: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  payment_date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  payment_status: {
    type: Sequelize.ENUM("pending", "completed", "failed"),
    defaultValue: "pending",
  },
  payment_method: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  plan_type: {
    type: Sequelize.ENUM("basic", "premium", "pro"),
    allowNull: false,
  },
  plan_duration: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Payment;
