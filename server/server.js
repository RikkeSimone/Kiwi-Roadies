const path = require('path')
const express = require('express')

const server = express()

// reference code - to be deleted at EOD
// const foods = require('./routes/foods')
// const categories = require('./routes/categories')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use('/api/v1/')

// reference code to be deleted by EOD
// server.use('/api/v1/categories', categories)


server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
