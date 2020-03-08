const express = require('express');
const router  = express.Router();
const Order = require("../models/Order");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index'); //here it renders the hbs file
});

router.get("/orders", (req, res) => {
  // return all orders
  Order.find({ venueId: "83841FA0-9595-11E8-B568-0800200C9A66" })
    .then(orders => {
      console.log(orders)

      res.json(orders);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});


module.exports = router;
