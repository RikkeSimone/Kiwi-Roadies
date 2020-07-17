import { ADD_NAME } from '../actions'

export default function addingName (state = [], action) {
  switch (action.type) {
    case ADD_NAME:
      return action.name

    default:
      return state
  }
}
