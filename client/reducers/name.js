import { ADD_NAME, ADD_TRIP } from '../actions'

export default function addingName (state = null, action) {
  switch (action.type) {
    case ADD_NAME:
      return action.name
    case ADD_TRIP:
      return action.name

    default:
      return state
  }
}
