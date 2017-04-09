var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const currentDateTime = (new Date()).getFullYear();
    res.render('index', {
        title: 'Nodepop Rest API',
        time: 'Fecha Actual' + currentDateTime,
    });
});

module.exports = router;
