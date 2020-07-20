import { ADD_CAMP } from '../actions/campsites'

export default function addCampsites (state = [], action) {
  switch (action.type) {
    case ADD_CAMP:
      return action.campsites

    default:
      return state
  }
}
