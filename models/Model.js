const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Model = mongoose.model('EmptySchema', new Schema({}));

module.exports = Model;
