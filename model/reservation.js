const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  emplacement: { type: Number },
  email: { type: String },
  date_deb: { type: Date, default: Date.now() },
  date_fin: { type: Date, default: Date.now(7) },
  prix: { type: String },
  },
  { collection : 'reservation'});

module.exports = mongoose.model("reservation", reservationSchema);