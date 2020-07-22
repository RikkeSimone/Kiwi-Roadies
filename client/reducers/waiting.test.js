import reducer from './waiting'

import * as waitingActions from '../actions/index'

describe('Waiting reducer', () => {
  it('Waiting becomes true when a name is added', () => {
    expect(
      reducer(false, {
        // needs fixing
        type: waitingActions.ADD_NAME
      })
    ).toEqual(true)
  })
  it('Waiting becomes true when a user has added a trip', () => {
    expect(
      reducer(false, {
        type: waitingActions.ADD_TRIP
      })
    ).toEqual(true)
  })
  it('Waiting is false when wait is turned off', () => {
    expect(
      reducer(true, {
        type: waitingActions.TURN_OFF_WAIT
      })
    ).toEqual(false)
  })
})
