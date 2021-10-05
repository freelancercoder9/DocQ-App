// ------------------------------------------------
// * Application: DocQ app
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

const mongoose = require("mongoose");
const docsSchema = new mongoose.Schema({
  email: { type: String, required: true },
  document_name: { type: Number, required: true },
  image_url: { type: String, required: true },
  uploaded_date: { type: Date, required: true },
  approved_date: { type: Date },
  approved_by: { type: String },
});

module.exports = mongoose.model("DocsSchema", docsSchema);
