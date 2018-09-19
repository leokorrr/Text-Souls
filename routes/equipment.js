var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/equipment', (req, res)=>{
    res.render('equipment');
});

module.exports = router;