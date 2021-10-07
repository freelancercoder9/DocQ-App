// ------------------------------------------------
// * Application: DocQ app
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

const mongoose = require("mongoose");
const orgSchema = new mongoose.Schema({
  organisation_name: { type: String, required: true },
  organisation_id: { type: String, required: true },
  mobile_no: { type: String, required: true },
  email: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  members_count: { type: Number, required: true },
});

module.exports = mongoose.model("OrganizationSchema", orgSchema);
