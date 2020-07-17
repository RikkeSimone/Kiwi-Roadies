const express = require('express')

<<<<<<< HEAD
const router = express.Router()

||||||| 67b0e68
const dockey = 'eOPSTyEUYA1cnX8as3KLY5Dtmx8wbxqg8dQLNweL'

=======
>>>>>>> dev
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
