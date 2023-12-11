const express = require('express');
const router = express.Router();

router.get('http://localhost:8088/', (req, res) => {
  res.send({data: 'data'})
});
module.exports = router;