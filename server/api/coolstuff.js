import consume from './requestor'
const request = require('superagent')

export function getCampsite () {
  return consume('/campsites')
    .then(res => {
      return res.body
    })
}

request.get('https://api.doc.govt.nz/v2/campsites')
  .set('X-API-Key', `${process.env.DOC_TOKEN}`)
  .set('accept', 'application/json')
