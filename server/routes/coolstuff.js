const express = require('express')
const { request } = require('../server')
const router = express.Router()

// /api/v1/coolstuff
router.get('/campsites', (req, res) => {
  console.log(request)
  request.get('https://api.doc.govt.nz/v2/campsites', 'accept: application/json', 'x-api-key: eOPSTyEUYA1cnX8as3KLY5Dtmx8wbxqg8dQLNweL')
    .then(response => {
      res.status(200).json(response.body)
    })
    .catch(err => {
      res.status(500).send('API error: ' + err.message)
    })
})

module.exports = router

// api.doc.govt.nz/v2
// gets you v2 campsites

// request.get('https://api.doc.govt.nz/v2' + '?q=' + 'eOPSTyEUYA1cnX8as3KLY5Dtmx8wbxqg8dQLNweL')

// "https://api.doc.govt.nz/v2/campsites" -H "accept: application/json" -H "x-api-key: eOPSTyEUYA1cnX8as3KLY5Dtmx8wbxqg8dQLNweL"
