const consume = require('./requestor')

module.exports = function getCampsites () {
  const keyHeader = {
    'X-API-Key': process.env.DOC_TOKEN
  }
  return consume('https://api.doc.govt.nz/v2/campsites', keyHeader)
}
