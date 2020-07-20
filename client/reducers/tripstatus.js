import { ADD_TRIP } from '../actions/index'

export default function addTripRequest (state = false, action) {
  switch (action.type) {
    case ADD_TRIP:
      return action.tripstatus

    default:
      return state
  }
}
