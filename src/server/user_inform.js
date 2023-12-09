const express = require('express');
const router = express.Router();

router.get('http://localhost:3000/login', (req, res) => {
  res.send({data: 'data'})
});
module.exports = router;