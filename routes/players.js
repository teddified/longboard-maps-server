var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    { name: 'Tom', score: [2, 5, 20], roundscore: 10 },
    { name: 'Tim', score: [-4, -7, -20], roundscore: 12 },
  ])
})

module.exports = router
