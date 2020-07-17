const express = require('express')
const getCampsites = require('../api/getCampsites')
const router = express.Router()

// /api/v1/coolstuff
router.get('/campsites', (req, res) => {
  getCampsites()
    .then(campsites => {
      res.status(200).json(campsites)
    })
    .catch(err => {
      res.status(500).send('API error: ' + err.message)
    })
})

module.exports = router
