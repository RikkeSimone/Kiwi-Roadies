import getTracks from './getTracks'
import getHuts from './getHuts'

jest.mock('./requestor', () => {
  return (endpoint, headers = {}, method = 'get', payload) => {
    return Promise.resolve(
      [{
        assetId: 100000034,
        name: 'Bull Creek Hut',
        status: 'OPEN',
        region: 'Canterbury',
        y: 5250537,
        x: 1515762
      }]
    )
  }
})

test('getHuts API returns expected object when called', () => {
  return getHuts()
    .then(huts => {
      expect(huts[0].name).toBe('Bull Creek Hut')
    })
})
