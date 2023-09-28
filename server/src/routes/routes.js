const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({'message': 'ok'});
  })

router.get('/unepage', function(req, res) {
    res.send('<h1>Une page</h1>');
});


module.exports = router;