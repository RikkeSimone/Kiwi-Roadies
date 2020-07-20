const express = require('express')
const getCampsites = require('../api/getCampsites')
const getTracks = require('../api/getTracks')
const getHuts = require('../api/getHuts')
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

router.get('/tracks', (req, res) => {
  getTracks()
    .then(tracks => {
      res.status(200).json(tracks)
    })
    .catch(err => {
      res.status(500).send('API error: ' + err.message)
    })
})

router.get('/huts', (req, res) => {
  getHuts()
    .then(huts => {
      res.status(200).json(huts)
    })
    .catch(err => {
      res.status(500).send('API error: ' + err.message)
    })
})

module.exports = router
