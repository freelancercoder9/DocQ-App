// ------------------------------------------------
// * Application: DocQ app
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
  organisation_id: { type: Number, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  mobile_no: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    required: true,
    default: "staff",
    enum: ["admin", "staff"],
  },
  status: {
    type: String,
    required: true,
    default: "pending",
    enum: ["pending", "approved", "rejected"],
  },
  created_timestamp: { type: Date },
  updated_timestamp: { type: Date },
});

module.exports = mongoose.model("Users", usersSchema);
