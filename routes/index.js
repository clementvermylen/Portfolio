const express = require('express');
const router = express.Router();
const Project = require('../models/project');

router.get('/', (req, res) => {
    res.render('layout')
})

module.exports = router;