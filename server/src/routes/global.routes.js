const express = require('express');
const router = express.Router();
const dbService = require('../services/db.service');

router.get('/', (req, res) => {
    res.json({'message': 'ok'});
  })

router.get('/unepage', function(req, res) {
    res.send('<h1>Une page</h1>');
});

router.get('/testDatabase', function(req, res) {
    dbService.testDatabase(req, res);
});


module.exports = router;