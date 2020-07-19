import getTracks from './getTracks'

jest.mock('./requestor', () => {
  return (endpoint, headers = {}, method = 'get', payload) => {
    return Promise.resolve(
      [{
        assetId: '1e72f18c-a04b-448b-95c5-2ce387948372',
        name: 'Te Iringa Track',
        region: [
          'Central North Island'
        ],
        y: 5678978.864,
        x: 1878578.7107
      }]
    )
  }
})

test('getTracks API returns expected object when called', () => {
  return getTracks()
    .then(tracks => {
      expect(tracks[0].name).toBe('Te Iringa Track')
    })
})
