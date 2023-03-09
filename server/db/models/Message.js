const Sequelize = require("sequelize");
const db = require("../db");

const Message = db.define("message", {
  message_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  sender_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  recipient_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  message_content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  timestamp: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  status: {
    type: Sequelize.ENUM("read", "unread", "deleted"),
    defaultValue: "unread",
  },
});

module.exports = Message;
