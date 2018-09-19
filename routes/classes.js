var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/classes', (req, res)=>{
    res.render('classes');
});

module.exports = router;