export const ADD_TRACK = 'ADD_TRACK'

export function addTracks (tracks) {
  return {
    type: 'ADD_TRACK',
    tracks: tracks
  }
}
