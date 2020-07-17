const express = require('express')

const router = express.Router()

// /api/v1/coolstuff
router.get('/campsites', (req, res) => {
  // request.get('https://api.doc.govt.nz/v2/campsites')
  //   .set('X-API-Key', `${process.env.DOC_TOKEN}`)
  //   .set('accept', 'application/json')
    .then(response => {
      res.status(200).json(response.body)
    })
    .catch(err => {
      res.status(500).send('API error: ' + err.message)
    })
})

module.exports = router
