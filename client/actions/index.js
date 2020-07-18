export const ADD_NAME = 'ADD_NAME'
export const RECEIVED_INFO = 'RECEIVED_INFO'
export const ADD_TRIP = 'ADD_TRIP'

export const addName = (name) => {
  return {
    type: 'ADD_NAME',
    name: name,
    waiting: true
  }
}

export const turnOffWait = () => {
  return {
    type: 'RECEIVED_INFO',
    waiting: false
  }
}

export const addTripRequest = (roadie) => {
  return {
    type: 'ADD_TRIP',
    roadie: roadie
  }
}
