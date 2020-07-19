import { ADD_TRIP } from '../actions/index'

export default function addTripRequest (state = [], action) {
  switch (action.type) {
    case ADD_TRIP:
      return action.roadie

    default:
      return state
  }
}
