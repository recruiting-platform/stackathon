//this is the access point for all things database related!

const db = require("./db");

// Import your models
const Coach = require("./models/coach");
const Message = require("./models/message");
const Payment = require("./models/payment");
const School = require("./models/school");
const StudentAthlete = require("./models/studentAthlete");

// Define associations

// messaging associations
// allow for querying all the messages sent & received by a particular student athlete
StudentAthlete.hasMany(Message, { foreignKey: "sender_id" });
StudentAthlete.hasMany(Message, { foreignKey: "recipient_id" });
// allow for querying all the messages sent & received by a particular coach
Coach.hasMany(Message, { foreignKey: "sender_id" });
Coach.hasMany(Message, { foreignKey: "recipient_id" });

// coach to school assocaition
Coach.belongsTo(School, { foreignKey: "school_id" });

// payment assocation
StudentAthlete.hasMany(Payment, { foreignKey: "user_id" });

module.exports = {
  db,
  models: {
    User,
    Coach,
    Payment,
    School,
    StudentAthlete,
  },
};
