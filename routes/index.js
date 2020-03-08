const express = require('express');
const router  = express.Router();
const Order = require("../models/Order");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index'); //here it renders the hbs file
});

router.get("/orders", (req, res) => {
  // return all orders
  // console.log("this is the body", req.body)
  Order.find({})
    .then(orders => {
      res.json(orders);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
