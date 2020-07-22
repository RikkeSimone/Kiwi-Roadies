import * as actions from './campsites'

describe('actions', () => {
  it('should create an action add campsites', () => {
    const expectedAction = {
      type: actions.ADD_CAMP
    }
    expect(actions.addCampsites()).toEqual(expectedAction)
  })

  it('should return campsites when called', () => {
    const campsites = [{ assetId: 'Little Hellfire', name: 'Little Hellfire', status: 'OPEN', region: null, y: 2357273, x: 305732057, longLat: [12481958935, -125702157] }]
    const expectedAction = {
      type: actions.ADD_CAMP,
      campsites
    }
    expect(actions.addCampsites(campsites)).toEqual(expectedAction)
  })
})
