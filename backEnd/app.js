const express = require('express')
const port = 3000
var cors=require('cors')
const bodyParser = require("body-parser");
const app = express()
app.use(bodyParser.json());
app.use(express.urlencoded());
app.use(cors())
var cors = require('cors')
app.use(express.json())
const users_routes = require('./Routes/users')
app.use('/', users_routes)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })