require('dotenv').config()

const express = require('express')
    , app = express()
    , path = require('path')

const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '*')))

const cb = () => console.log(
  `${new Date().toLocaleTimeString('en-GB')}: Server initialised on PORT [${PORT}]...`
)

const server = app.listen(PORT, cb)
