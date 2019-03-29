var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var cors = require('cors')

var app = express()

app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))
app.use(cookieParser())

app.use('/trips', require('./routes/trips'))

module.exports = app