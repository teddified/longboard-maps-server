var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  console.log('trips')
  res.json([{
    rating: {
      road: {
        easy: true,
        medium: false,
        hard: false
      },
      crowd: {
        easy: true,
        medium: false,
        hard: false
      },
      difficulty: {
        easy: true,
        medium: false,
        hard: false
      },
      gradient: {
        easy: true,
        medium: false,
        hard: false
      },
    },
    distance: '1 km',
    tripName: 'Hochallee',
    totalRating: 1
  }])
})

// router.post('/new', function (req, res, next) {
//   console.log(req.body)
//   res.send({
//     status: 'SUCCESS'
//   });
// })

module.exports = router