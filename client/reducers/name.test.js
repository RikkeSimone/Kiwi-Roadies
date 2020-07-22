import reducer from './name'

import * as nameAdding from '../actions/index'

describe('Adding Name reducer', () => {
  it('returns the name of the person entered', () => {
    expect(
      reducer([], {
        // needs fixing
        type: nameAdding.ADD_NAME
      })
    ).toEqual(undefined)
  })
  it('should return undefined when user has entered their trip details', () => {
    expect(
      reducer([], {
        type: nameAdding.ADD_TRIP
      })
    ).toEqual(undefined)
  })
})
