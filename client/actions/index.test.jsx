import * as actions from './index'

describe('Action Testing', () => {
  it('addName should create an action that triggers waiting', () => {
    const expectedAction = {
      name: undefined,
      type: actions.ADD_NAME,
      waiting: true
    }
    expect(actions.addName()).toEqual(expectedAction)
  })

  it('turnOffWait should return an action that turns wait to false', () => {
    const expectedAction = {
      type: actions.TURN_OFF_WAIT,
      waiting: false
    }
    expect(actions.turnOffWait()).toEqual(expectedAction)
  })
  it('addTripRequest should turn waiting to true, tripStatus to true, and name to null', () => {
    const expectedAction = {
      type: actions.ADD_TRIP,
      roadie: undefined,
      waiting: true,
      name: null,
      tripstatus: true
    }
    expect(actions.addTripRequest()).toEqual(expectedAction)
  })
})
