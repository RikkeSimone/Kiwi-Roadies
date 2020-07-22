import { ADD_HUT } from '../actions/huts'

export default function addHuts (state = [], action) {
  switch (action.type) {
    case ADD_HUT:
      return action.huts

    default:
      return state
  }
}
