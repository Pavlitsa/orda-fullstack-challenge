const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  sumTotal: Number,
  time: Number,
  tipSum: Number,
  venueId: String,
  venueName: String
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
