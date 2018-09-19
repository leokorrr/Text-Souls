var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/inventory', (req, res)=>{
    res.render('inventory');
});

module.exports = router;