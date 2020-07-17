const path = require('path')
const express = require('express')

const coolstuff = require('./routes/coolstuff')
const form = require('./routes/form')
const search = require('./routes/search')

const server = express()

// server.use('/')
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/coolstuff', coolstuff)
server.use('/api/v1/form', form)
server.use('/api/v1/search', search)

server.use('/api/v1/*', (req, res) => res.sendStatus(404))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
