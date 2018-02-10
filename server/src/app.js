console.log('hello there')

//import the node modules by setting them as constant values
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

//build up the express server, very basic
const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

