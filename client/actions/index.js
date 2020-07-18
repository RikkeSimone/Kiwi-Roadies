export const ADD_NAME = 'ADD_NAME'
export const ADD_TRIP = 'ADD_TRIP'

export const addName = (name) => {
  return {
    type: 'ADD_NAME',
    name: name
  }
}

export const addTripRequest = (roadie) => {
  return {
    type: 'ADD_TRIP',
    roadie: roadie
  }
}
