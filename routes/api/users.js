const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => res.json({ mgs: 'Users Works' }));

module.exports = router;