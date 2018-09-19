var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/stats', (req, res)=>{
    res.render('stats');
});

module.exports = router;