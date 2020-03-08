const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  sumTotal: Number,
  time: Number,
  tipSum: Number,
  venueId: String,
  venueName: Object
});

const Order = mongoose.model("Order", orderSchema, "orda-orders");

module.exports = Order;