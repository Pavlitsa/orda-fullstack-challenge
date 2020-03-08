const express = require('express');
const router  = express.Router();
const Model = require("../models/Model");
// const mongoose = require("mongoose");

router.get("/orders", (req, res) => {
  // return all projects
  Model.find({})
    .then(orders => {
      res.json(orders);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
