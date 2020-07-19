export const ADD_CAMP = 'ADD_CAMP'

export function addCampsites (campsites) {
  return {
    type: 'ADD_CAMP',
    campsites: campsites
  }
}
