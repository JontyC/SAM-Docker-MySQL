const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const controllers = require('../controllers');

router.route('/')
    .get(controllers.status);


router.route('/database')
    .get(controllers.query);

module.exports = router;
