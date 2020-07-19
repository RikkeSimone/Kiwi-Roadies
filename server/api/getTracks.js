const consume = require('./requestor')

module.exports = function getTracks () {
  const keyHeader = {
    'X-API-Key': process.env.DOC_TOKEN
  }
  return consume('https://api.doc.govt.nz/v1/tracks', keyHeader)
}
