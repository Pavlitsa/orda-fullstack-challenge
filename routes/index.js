const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index'); //here it renders the hbs file
});

module.exports = router;
