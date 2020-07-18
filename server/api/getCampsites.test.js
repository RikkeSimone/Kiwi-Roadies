import getCampsites from './getCampsites'

jest.mock('./requestor', () => {
  return (endpoint, headers = {}, method = 'get', payload) => {
    return Promise.resolve(
      [{
        'assetId': 100000811,
        'name': 'LITTLE HELLFIRE CAMPSITE',
        'status': 'OPEN',
        'region': null,
        'y': 4797019,
        'x': 1200491
      }]
    )
  }
})

test('getCampsites API returns expected object when called', () => {
  return getCampsites()
    .then(campsites => {
      expect(campsites[0].name).toBe('LITTLE HELLFIRE CAMPSITE')
    })
})
