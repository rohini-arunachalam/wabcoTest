'use strict';
var express = require('express');
var router = express.Router();
var getDataServices = require('../services/getDataServices');

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
}); 


router.get('/last-value-machine', function (req, res) {
    var query = { cell_id: String };
    getDataServices.getQueryData(query, function (err, response) {
        if (!err) {
            res.send('respond with a resource' + response);
        }
    });
});

router.get('/last-value-cell', function (req, res) {
    var query = { cell_id: String, id: String }
    getDataServices.getQueryData(query, function (err, response) {
        if (!err) {
            res.send('respond with a resource' + response);
        }
    });
});


module.exports = router;
