const request = require('superagent')

module.exports = function consume (endpoint, headers = {}, method = 'get', data = {}) {
  const payLoadMethod = method.toLowerCase() === 'get' ? 'query' : 'send'
  const reqHeaders = {
    Accept: 'application/json',
    ...headers
  }

  return request[method](endpoint)
    .set(reqHeaders)[payLoadMethod](data)
    .then(res => res.body)
    .catch(err => {
      throw err
    })
}
