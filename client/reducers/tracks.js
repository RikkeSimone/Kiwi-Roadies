import { ADD_TRACK } from '../actions/tracks'

export default function addTracks (state = [], action) {
  switch (action.type) {
    case ADD_TRACK:
      return action.tracks

    default:
      return state
  }
}